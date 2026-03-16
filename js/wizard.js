/* ---- Permit Builder Wizard (v4 naming) ---- */
(() => {
  const PB_STATE_KEY = "permit-builder-wizard-v4";
  const STAGES = [
    { id:"full", label:"Full package (all groups)", filter: g => true },
    { id:"intake", label:"Intake / Routing / Code basis", filter: g => /intake|routing|code basis|workflow|verification gap|context/i.test(g.title) },
    { id:"design", label:"Design / Technical package", filter: g => /technical|minim|explicit|guidance/i.test(g.title) },
    { id:"upload", label:"Naming & Upload", filter: g => /naming|upload/i.test(g.title) },
    { id:"closeout", label:"Closeout / Inspection / Activation", filter: g =>
        /inspection|activation|closeout/i.test(g.title) ||
        (g.items||[]).some(it => /(acceptance|grid|inspection|activation|closeout)/i.test(it.text||""))
    },
    { id:"resubmittal", label:"Resubmittal (adds response letter)", filter: g => true, addResponse: true },
  ];

  if (typeof window.DATA === "undefined" || !Array.isArray(window.DATA)) {
    console.warn("Permit Builder: DATA not found.");
    return;
  }

  const $ = (id) => document.getElementById(id);

  const pb = {
    districtId: window.DATA[0]?.id || "",
    stageId: "full",
    meta: {
      company: "",
      date: "",
      project: "",
      permitId: "",
      site: "",
      preparedBy: "",
      coverNotes: "",
      nameMode: "internal",
      rev: "",
      pkg: "",
      dateStamp: "",
      internalTpl: "{project}_{districtId}_{stageId}_{dateYYYYMMDD}{revPart}{pkgPart}.pdf",
      districtTpl: "",
      districtTplAuto: true
    },
    options: {
      dividers: true,
      pageNums: true,
      overview: true,
      placeholders: true,
    },
    items: {},
  };

  function uid(){ return Math.random().toString(16).slice(2) + Date.now().toString(16); }
  function esc(s){
    return String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function fmtBytes(b){
    if (b < 1024) return b + " B";
    const kb = b/1024; if (kb < 1024) return kb.toFixed(1)+" KB";
    const mb = kb/1024; if (mb < 1024) return mb.toFixed(1)+" MB";
    return (mb/1024).toFixed(1)+" GB";
  }

  function sanitizeFilename(name){
    let s = String(name || "").trim();
    if (!s) s = "permit_package.pdf";
    s = s.replace(/[\\\/:*?"<>|]+/g, "_");
    s = s.replace(/\s+/g, "_");
    s = s.replace(/_+/g, "_");
    s = s.replace(/^_+|_+$/g, "");
    if (!s) s = "permit_package";
    if (!s.toLowerCase().endsWith(".pdf")) s += ".pdf";
    return s;
  }

  function yyyymmddFromDate(dateStr){
    if (!dateStr) return "";
    if (/^\d{8}$/.test(dateStr)) return dateStr;
    const m = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) return `${m[1]}${m[2]}${m[3]}`;
    return dateStr.replace(/[^\d]/g,"").slice(0,8);
  }

  function applyTemplate(tpl, tokens){
    const raw = String(tpl || "");
    return raw.replace(/\{(\w+)\}/g, (_, k) => (tokens[k] ?? ""));
  }

  function getDistrict(id){
    const d = window.DATA.find(d => d.id === id) || window.DATA[0];
    if (typeof window.applyReportUploadChecklistItem === "function") {
      window.applyReportUploadChecklistItem(d);
    }
    return d;
  }
  function itemKey(did, gi, ii){ return `${did}__${gi}__${ii}`; }
  function synKey(did, name){ return `${did}__syn__${name}`; }

  function ensureDefaultsForDistrict(d) {
    d.groups.forEach((g, gi) => {
      (g.items || []).forEach((it, ii) => {
        const k = itemKey(d.id, gi, ii);
        if (!pb.items[k]) {
          pb.items[k] = { include: !!it.required, placeholder: !!it.required, notes: "", attachments: [] };
        }
      });
    });
    const respK = synKey(d.id, "response_letter");
    if (!pb.items[respK]) pb.items[respK] = { include:true, placeholder:true, notes:"", attachments:[] };

    if (pb.meta.districtTplAuto) {
      const seed = (d?.naming?.packageTemplate || d?.naming?.template || "{districtId}_{project}_{stageId}_{dateYYYYMMDD}{revPart}{pkgPart}.pdf");
      pb.meta.districtTpl = seed;
    }
  }

  function getActiveGroups(d) {
    const stage = STAGES.find(s => s.id === pb.stageId) || STAGES[0];
    let groups = (d.groups || []).filter(g => stage.filter(g));
    if (!groups.length) groups = d.groups || [];

    if (stage.addResponse) {
      groups = [{
        __synthetic: true,
        title: "Resubmittal Response Letter",
        items: [{
          __syn: "response_letter",
          text: "Response letter addressing plan review comments (what changed, where, and why).",
          required: true,
          portal: false,
          verify: false,
          note: "Attach your response letter PDF. If you don't have it yet, export placeholders.",
          links: []
        }]
      }, ...groups];
    }
    return groups;
  }

  async function countPages(file){
    const mime = file.type;
    if (mime === "application/pdf") {
      const buf = await file.arrayBuffer();
      const pdf = await PDFLib.PDFDocument.load(buf);
      return pdf.getPageCount();
    }
    if (mime === "image/png" || mime === "image/jpeg") return 1;
    return 0;
  }

  function savePb(){
    const serializable = {
      districtId: pb.districtId,
      stageId: pb.stageId,
      meta: pb.meta,
      options: pb.options,
      items: Object.fromEntries(Object.entries(pb.items).map(([k,v]) => [k, {
        include: !!v.include,
        placeholder: !!v.placeholder,
        notes: v.notes || "",
        attachments: (v.attachments||[]).map(a => ({ aid:a.aid, name:a.name, mime:a.mime, pages:a.pages, size:a.size }))
      }]))
    };
    localStorage.setItem(PB_STATE_KEY, JSON.stringify(serializable));
  }

  function loadPb(){
    try{
      const raw = localStorage.getItem(PB_STATE_KEY);
      if (!raw) return;
      const obj = JSON.parse(raw);
      if (!obj) return;
      pb.districtId = obj.districtId || pb.districtId;
      pb.stageId = obj.stageId || pb.stageId;
      pb.meta = Object.assign(pb.meta, obj.meta || {});
      pb.options = Object.assign(pb.options, obj.options || {});
      pb.items = pb.items || {};
      const loadedItems = obj.items || {};
      Object.keys(loadedItems).forEach(k => {
        pb.items[k] = pb.items[k] || { include:false, placeholder:false, notes:"", attachments:[] };
        pb.items[k].include = !!loadedItems[k].include;
        pb.items[k].placeholder = !!loadedItems[k].placeholder;
        pb.items[k].notes = loadedItems[k].notes || "";
        pb.items[k].attachments = [];
      });
    } catch(e) {
      console.warn("PB load failed", e);
    }
  }

  function tokenMap(d){
    const stage = STAGES.find(s => s.id === pb.stageId) || { id: pb.stageId, label: pb.stageId };
    const dateStr = (pb.meta.dateStamp || "").trim() ? pb.meta.dateStamp.trim() : pb.meta.date;
    const dateYYYYMMDD = yyyymmddFromDate(dateStr) || yyyymmddFromDate(new Date().toISOString().slice(0,10));
    const rev = (pb.meta.rev || "").trim();
    const pkg = (pb.meta.pkg || "").trim();
    return {
      company: (pb.meta.company || "").trim(),
      project: (pb.meta.project || "").trim(),
      permitId: (pb.meta.permitId || "").trim(),
      site: (pb.meta.site || "").trim(),
      district: (d?.district || "").trim(),
      districtId: (d?.id || "").trim(),
      stageId: stage.id,
      stageLabel: stage.label,
      date: (dateStr || "").trim(),
      dateYYYYMMDD,
      rev,
      pkg,
      revPart: rev ? ("_rev-" + rev.replace(/\s+/g,"")) : "",
      pkgPart: pkg ? ("_" + pkg.replace(/\s+/g,"")) : "",
    };
  }

  function buildFilename(){
    const d = getDistrict(pb.districtId);
    const tokens = tokenMap(d);
    const tpl = (pb.meta.nameMode === "district") ? (pb.meta.districtTpl || "") : (pb.meta.internalTpl || "");
    const filled = applyTemplate(tpl, tokens);
    return sanitizeFilename(filled || "permit_package.pdf");
  }

  function updateFilenamePreview(){
    const name = buildFilename();
    const el = $("pbFileNamePreview");
    if (el) el.textContent = name;
  }

  function setMetaFromInputs(){
    pb.meta.company = $("pbCompany").value;
    pb.meta.date = $("pbDate").value;
    pb.meta.project = $("pbProject").value;
    pb.meta.permitId = $("pbPermitId").value;
    pb.meta.site = $("pbSite").value;
    pb.meta.preparedBy = $("pbPreparedBy").value;
    pb.meta.coverNotes = $("pbCoverNotes").value;

    pb.options.dividers = $("pbOptDividers").checked;
    pb.options.pageNums = $("pbOptPageNums").checked;
    pb.options.overview = $("pbOptOverview").checked;
    pb.options.placeholders = $("pbOptPlaceholders").checked;

    pb.meta.nameMode = $("pbNameMode").value;
    pb.meta.rev = $("pbRev").value;
    pb.meta.pkg = $("pbPkg").value;
    pb.meta.dateStamp = $("pbDateStamp").value;
    pb.meta.internalTpl = $("pbInternalTpl").value;
    pb.meta.districtTpl = $("pbDistrictTpl").value;

    savePb();
    updateFilenamePreview();
  }

  function renderDistrictPickers(){
    const districtSel = $("pbDistrictSelect");
    districtSel.innerHTML = window.DATA.map(d => `<option value="${esc(d.id)}">${esc(d.district)}</option>`).join("");
    districtSel.value = pb.districtId;

    const stageSel = $("pbStageSelect");
    stageSel.innerHTML = STAGES.map(s => `<option value="${esc(s.id)}">${esc(s.label)}</option>`).join("");
    stageSel.value = pb.stageId;

    districtSel.addEventListener("change", () => {
      pb.districtId = districtSel.value;
      const d = getDistrict(pb.districtId);
      ensureDefaultsForDistrict(d);
      savePb();
      updateWizardHeader();
      renderWizard();
    });

    stageSel.addEventListener("change", () => {
      pb.stageId = stageSel.value;
      savePb();
      updateWizardHeader();
      renderWizard();
    });
  }

  function updateWizardHeader(){
    const d = getDistrict(pb.districtId);
    $("pbAhjPill").textContent = `AHJ: ${d?.district || "—"}`;
    const stage = STAGES.find(s => s.id === pb.stageId);
    $("pbStagePill").textContent = `Stage: ${stage?.label || pb.stageId}`;
  }

  function renderWizard(){
    const d = getDistrict(pb.districtId);
    ensureDefaultsForDistrict(d);

    $("pbCompany").value = pb.meta.company || "";
    $("pbDate").value = pb.meta.date || "";
    $("pbProject").value = pb.meta.project || "";
    $("pbPermitId").value = pb.meta.permitId || "";
    $("pbSite").value = pb.meta.site || "";
    $("pbPreparedBy").value = pb.meta.preparedBy || "";
    $("pbCoverNotes").value = pb.meta.coverNotes || "";

    $("pbOptDividers").checked = !!pb.options.dividers;
    $("pbOptPageNums").checked = !!pb.options.pageNums;
    $("pbOptOverview").checked = !!pb.options.overview;
    $("pbOptPlaceholders").checked = !!pb.options.placeholders;

    $("pbNameMode").value = pb.meta.nameMode || "internal";
    $("pbRev").value = pb.meta.rev || "";
    $("pbPkg").value = pb.meta.pkg || "";
    $("pbDateStamp").value = pb.meta.dateStamp || "";
    $("pbInternalTpl").value = pb.meta.internalTpl || "{project}_{districtId}_{stageId}_{dateYYYYMMDD}{revPart}{pkgPart}.pdf";
    $("pbDistrictTpl").value = pb.meta.districtTpl || (d?.naming?.packageTemplate || d?.naming?.template || "{districtId}_{project}_{stageId}_{dateYYYYMMDD}{revPart}{pkgPart}.pdf");

    const groupsHost = $("pbGroups");
    groupsHost.innerHTML = "";

    const groups = getActiveGroups(d);

    groups.forEach((g, gi) => {
      const det = document.createElement("details");
      det.open = gi === 0;
      det.innerHTML = `
        <summary style="cursor:pointer;list-style:none;padding:10px 12px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:#0c1429;font-weight:650;display:flex;justify-content:space-between;align-items:center">
          <span>${esc(g.title)}</span>
          <span class="small">${(g.items||[]).length} item(s)</span>
        </summary>
        <div style="padding:8px 6px 0"></div>
      `;
      const body = det.querySelector("div");

      (g.items || []).forEach((it, ii) => {
        const key = g.__synthetic ? synKey(d.id, it.__syn) : itemKey(d.id, (g.__synthetic ? "syn" : d.groups.findIndex(x => x.title === g.title)), ii);
        const st = pb.items[key] || (pb.items[key] = { include: !!it.required, placeholder: !!it.required, notes:"", attachments:[] });

        const srcLinks = (it.links || []).map(idx => {
          const src = d.codeBasis?.[idx];
          return src ? `<a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.label)}</a>` : "";
        }).filter(Boolean).join(" • ");

        const itemEl = document.createElement("div");
        itemEl.className = "pbItem";
        itemEl.innerHTML = `
          <div class="pbItemTop">
            <div class="actions">
              <input type="checkbox" ${st.include ? "checked" : ""} data-pb="include" data-key="${esc(key)}" title="Include this item in the export"/>
            </div>
            <div>
              <div class="title">${esc(it.text)}</div>
              ${it.note ? `<div class="mini">${esc(it.note)}</div>` : ``}
              ${srcLinks ? `<div class="mini" style="margin-top:6px">Source(s): ${srcLinks}</div>` : ``}
            </div>
            <div class="actions">
              <span class="tag ${it.required ? "req" : ""}">${it.required ? "Required" : "Recommended"}</span>
              ${it.verify ? `<span class="tag verify">Verify</span>` : ``}
              ${it.portal ? `<span class="tag portal">Portal</span>` : ``}
            </div>
          </div>

          <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div>
              <label>Notes (optional)</label>
              <input type="text" value="${esc(st.notes||"")}" data-pb="notes" data-key="${esc(key)}" placeholder="Internal notes / reviewer notes"/>
            </div>
            <div>
              <label>Attach PDF/Image(s)</label>
              <input type="file" data-pb="file" data-key="${esc(key)}" multiple accept="application/pdf,image/png,image/jpeg"/>
            </div>
          </div>

          <div class="mini" style="margin-top:8px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <label class="pill"><input type="checkbox" ${st.placeholder ? "checked" : ""} data-pb="placeholder" data-key="${esc(key)}" style="margin-right:8px"/>Placeholder if missing</label>
            <span class="small">Attachments: <b data-pb="acount" data-key="${esc(key)}">${(st.attachments||[]).length}</b></span>
          </div>

          <div class="pbAttach" data-pb="alist" data-key="${esc(key)}"></div>
        `;
        body.appendChild(itemEl);
        renderAttachmentList(key);
      });

      groupsHost.appendChild(det);
    });

    wireWizardInputs();
    renderPreview();
    updateFilenamePreview();
  }

  function wireWizardInputs(){
    const metaIds = ["pbCompany","pbDate","pbProject","pbPermitId","pbSite","pbPreparedBy","pbCoverNotes",
                     "pbOptDividers","pbOptPageNums","pbOptOverview","pbOptPlaceholders",
                     "pbNameMode","pbRev","pbPkg","pbDateStamp","pbInternalTpl","pbDistrictTpl"];
    metaIds.forEach(id => {
      const el = $(id);
      el.addEventListener("input", () => {
        if (id === "pbDistrictTpl") pb.meta.districtTplAuto = false;
        setMetaFromInputs();
      });
      el.addEventListener("change", () => {
        if (id === "pbDistrictTpl") pb.meta.districtTplAuto = false;
        setMetaFromInputs();
      });
    });

    document.querySelectorAll('[data-pb="include"]').forEach(cb => {
      cb.addEventListener("change", () => {
        const k = cb.dataset.key;
        pb.items[k].include = cb.checked;
        savePb();
        renderPreview();
      });
    });

    document.querySelectorAll('[data-pb="placeholder"]').forEach(cb => {
      cb.addEventListener("change", () => {
        const k = cb.dataset.key;
        pb.items[k].placeholder = cb.checked;
        savePb();
        renderPreview();
      });
    });

    document.querySelectorAll('[data-pb="notes"]').forEach(inp => {
      inp.addEventListener("input", () => {
        const k = inp.dataset.key;
        pb.items[k].notes = inp.value;
        savePb();
      });
    });

    document.querySelectorAll('[data-pb="file"]').forEach(inp => {
      inp.addEventListener("change", async () => {
        const k = inp.dataset.key;
        const files = Array.from(inp.files || []);
        inp.value = "";
        if (!files.length) return;

        $("pbStatus").textContent = "Reading files…";
        for (const f of files) {
          if (!["application/pdf","image/png","image/jpeg"].includes(f.type)) continue;
          const aid = uid();
          const att = { aid, file: f, name: f.name, mime: f.type, pages: null, size: f.size };
          pb.items[k].attachments.push(att);
          renderAttachmentList(k);
          try { att.pages = await countPages(f); } catch(e){ att.pages = 0; }
          renderAttachmentList(k);
        }
        savePb();
        renderPreview();
        $("pbStatus").textContent = "Ready.";
      });
    });
  }

  function renderAttachmentList(key){
    const host = document.querySelector(`[data-pb="alist"][data-key="${CSS.escape(key)}"]`);
    if (!host) return;
    const st = pb.items[key];
    host.innerHTML = "";

    const countEl = document.querySelector(`[data-pb="acount"][data-key="${CSS.escape(key)}"]`);
    if (countEl) countEl.textContent = String((st.attachments||[]).length);

    if (!st.attachments.length) {
      host.innerHTML = `<div class="mini">No attachments yet.</div>`;
      return;
    }

    st.attachments.forEach(att => {
      const badge = att.pages === null ? `<span class="pill warn">counting…</span>` :
                    att.pages === 0 ? `<span class="pill bad">unreadable</span>` :
                    `<span class="pill ok">${att.pages} page${att.pages===1?"":"s"}</span>`;
      const row = document.createElement("div");
      row.className = "pbFile";
      row.dataset.aid = att.aid;
      row.innerHTML = `
        <div class="drag" title="Drag to reorder">⋮⋮</div>
        <div>
          <div><b>${esc(att.name)}</b></div>
          <div class="meta">${esc(att.mime)} • ${fmtBytes(att.size)} • ${badge}</div>
        </div>
        <div class="actions">
          <button data-pb="rmfile" data-key="${esc(key)}" data-aid="${esc(att.aid)}">Remove</button>
        </div>
      `;
      host.appendChild(row);
    });

    Sortable.create(host, {
      handle: ".drag",
      animation: 120,
      onEnd: () => {
        const ids = Array.from(host.querySelectorAll(".pbFile")).map(el => el.dataset.aid);
        st.attachments = ids.map(id => st.attachments.find(a => a.aid === id)).filter(Boolean);
        savePb();
        renderPreview();
      }
    });

    host.querySelectorAll('[data-pb="rmfile"]').forEach(btn => {
      btn.addEventListener("click", () => {
        const k = btn.dataset.key;
        const aid = btn.dataset.aid;
        pb.items[k].attachments = pb.items[k].attachments.filter(a => a.aid !== aid);
        savePb();
        renderAttachmentList(k);
        renderPreview();
      });
    });
  }

  function collectPlan(){
    const d = getDistrict(pb.districtId);
    const groups = getActiveGroups(d);
    const plan = [];
    for (const g of groups) {
      const groupObj = { title: g.title, items: [] };
      (g.items || []).forEach((it, ii) => {
        const key = g.__synthetic ? synKey(d.id, it.__syn) : itemKey(d.id, (g.__synthetic ? "syn" : d.groups.findIndex(x => x.title === g.title)), ii);
        const st = pb.items[key] || { include: !!it.required, placeholder: !!it.required, notes:"", attachments:[] };
        if (!st.include) return;
        groupObj.items.push({
          label: it.text,
          required: !!it.required,
          placeholder: !!st.placeholder,
          notes: st.notes || "",
          attachments: (st.attachments || [])
        });
      });
      if (groupObj.items.length) plan.push(groupObj);
    }
    return { district: d, plan };
  }

  function estimateTocPages(entriesCount){
    const linesPerPage = 42;
    const headerLines = 3;
    return Math.max(1, Math.ceil((headerLines + entriesCount)/linesPerPage));
  }

  function renderPreview(){
    const { plan } = collectPlan();
    let includedItems = 0, attachments = 0, missingRequired = 0, approxPages = 0;
    const preview = [];

    for (const g of plan) {
      preview.push({ type:"group", text:g.title });
      if (pb.options.dividers) approxPages += 1;
      for (const it of g.items) {
        includedItems++;
        const attPages = (it.attachments || []).reduce((a,x) => a + (x.pages || 0), 0);
        const hasAtt = (it.attachments || []).length > 0;
        attachments += (it.attachments||[]).length;

        if (!hasAtt) {
          const willPlaceholder = pb.options.placeholders && it.placeholder;
          if (it.required) missingRequired += 1;
          if (willPlaceholder) approxPages += 1;
          preview.push({ type:"item", text: it.label, ok: hasAtt, required: it.required, placeholder: willPlaceholder });
        } else {
          approxPages += attPages;
          preview.push({ type:"item", text: it.label, ok: true, required: it.required, placeholder: false });
        }
      }
    }

    const front = 1 + (pb.options.overview ? 1 : 0);
    const tocEntries = plan.reduce((a,g)=> a + 1 + g.items.length, 0);
    const tocPages = estimateTocPages(tocEntries);
    approxPages += front + tocPages;

    $("pbCounts").innerHTML = `
      <div>Included items: <b>${includedItems}</b></div>
      <div>Attachments: <b>${attachments}</b></div>
      <div class="${missingRequired ? "pbWarn":"pbOk"}">Missing required (no attachment yet): <b>${missingRequired}</b></div>
      <div>Approx pages (includes TOC/placeholders): <b>~${approxPages}</b></div>
    `;

    const host = $("pbPreviewList");
    host.innerHTML = `<ul></ul>`;
    const ul = host.querySelector("ul");
    preview.forEach(p => {
      const li = document.createElement("li");
      if (p.type === "group") {
        li.innerHTML = `<b>${esc(p.text)}</b>`;
      } else {
        const status = p.ok ? `<span class="pbOk">✓</span>` : (p.placeholder ? `<span class="pbWarn">□</span>` : `<span class="pbBad">✕</span>`);
        const req = p.required ? `<span class="tag req" style="margin-left:8px">Required</span>` : "";
        const ph = (!p.ok && p.placeholder) ? `<span class="tag verify" style="margin-left:6px">Placeholder</span>` : "";
        li.innerHTML = `${status} ${esc(p.text)} ${req} ${ph}`;
      }
      ul.appendChild(li);
    });

    updateFilenamePreview();
    savePb();
  }

  async function exportPdf(){
    const { district, plan } = collectPlan();
    if (!plan.length) {
      $("pbStatus").textContent = "Nothing included. Check some items or switch stage.";
      return;
    }
    $("pbStatus").textContent = "Building PDF…";

    for (const g of plan) {
      for (const it of g.items) {
        for (const a of (it.attachments||[])) {
          if (a.pages === null && a.file) {
            try { a.pages = await countPages(a.file); } catch(e){ a.pages = 0; }
          }
        }
      }
    }

    const { PDFDocument, StandardFonts, rgb } = PDFLib;

    const toc = [];
    const coverPages = 1;
    const overviewPages = pb.options.overview ? 1 : 0;

    for (const g of plan) {
      toc.push({ title: g.title, indent:false, page:0 });
      for (const it of g.items) toc.push({ title: it.label, indent:true, page:0 });
    }
    const tocPages = estimateTocPages(toc.length);

    let cur = coverPages + overviewPages + tocPages + 1;
    for (const g of plan) {
      const groupEntry = toc.find(e => e.title === g.title && !e.indent);
      if (groupEntry) groupEntry.page = cur;
      if (pb.options.dividers) cur += 1;

      for (const it of g.items) {
        const itemEntry = toc.find(e => e.title === it.label && e.indent);
        if (itemEntry) itemEntry.page = cur;

        const hasAtt = (it.attachments||[]).length > 0;
        if (hasAtt) cur += (it.attachments||[]).reduce((a,x)=> a + (x.pages||0), 0);
        else if (pb.options.placeholders && it.placeholder) cur += 1;
      }
    }

    const doc = await PDFDocument.create();
    const fonts = { reg: await doc.embedFont(StandardFonts.Helvetica), bold: await doc.embedFont(StandardFonts.HelveticaBold) };

    function addCover(){
      const page = doc.addPage([612,792]);
      const { width, height } = page.getSize();
      page.drawRectangle({ x:0,y:0,width,height,color: rgb(0.05,0.07,0.11) });

      const company = pb.meta.company || "Company Name";
      const title = pb.meta.project || "Project / Site";
      const ahj = district.district || "";
      const stage = (STAGES.find(s=>s.id===pb.stageId)?.label) || pb.stageId;

      page.drawText(company, { x:54, y: height-90, size: 22, font: fonts.bold, color: rgb(0.92,0.95,1) });
      page.drawText("ERCES / BDA Permit Submittal Package", { x:54, y: height-120, size: 14, font: fonts.reg, color: rgb(0.75,0.82,0.95) });

      page.drawText(title, { x:54, y: height-170, size: 18, font: fonts.bold, color: rgb(0.90,0.93,1) });
      if (pb.meta.site) page.drawText(pb.meta.site, { x:54, y: height-192, size: 12, font: fonts.reg, color: rgb(0.75,0.82,0.95) });

      let y = height-250;
      const pairs = [
        ["AHJ:", ahj],
        ["Stage:", stage],
        ["Permit ID:", pb.meta.permitId || ""],
        ["Prepared By:", pb.meta.preparedBy || ""],
        ["Date:", pb.meta.date || ""],
      ].filter(p => p[1]);

      for (const [k,v] of pairs){
        page.drawText(k, { x:54, y, size: 11, font: fonts.bold, color: rgb(0.72,0.78,0.92) });
        page.drawText(v, { x:180, y, size: 11, font: fonts.reg, color: rgb(0.92,0.95,1) });
        y -= 18;
      }

      if (pb.meta.coverNotes) {
        page.drawText("Notes:", { x:54, y: 92, size: 11, font: fonts.bold, color: rgb(0.72,0.78,0.92) });
        page.drawText(pb.meta.coverNotes.slice(0,180), { x:54, y: 74, size: 9, font: fonts.reg, color: rgb(0.88,0.91,0.98) });
      }
    }

    function addOverview(){
      const page = doc.addPage([612,792]);
      page.drawText("Overview", { x:54, y:742, size:18, font: fonts.bold, color: rgb(0.12,0.18,0.30) });
      page.drawLine({ start:{x:54,y:732}, end:{x:558,y:732}, thickness:1, color: rgb(0.80,0.84,0.92) });
      const lines = [
        `AHJ: ${district.district || ""}`,
        `Stage: ${(STAGES.find(s=>s.id===pb.stageId)?.label) || pb.stageId}`,
        pb.meta.project ? `Project: ${pb.meta.project}` : "",
        pb.meta.site ? `Site: ${pb.meta.site}` : "",
        "",
        "Source links (as compiled in this guide):"
      ].filter(Boolean);
      let y = 700;
      lines.forEach(line => { page.drawText(line, { x:54, y, size:11, font: fonts.reg, color: rgb(0.15,0.2,0.3) }); y -= 16; });
      (district.codeBasis || []).slice(0,8).forEach(l => { page.drawText(`• ${l.label}`.slice(0,110), { x:54, y, size:10, font: fonts.reg, color: rgb(0.15,0.2,0.3) }); y -= 14; });
    }

    function addTOC(){
      const pages = [];
      for (let i=0;i<tocPages;i++) pages.push(doc.addPage([612,792]));
      const linesPerPage = 42;

      function fitText(font, size, text, maxWidth){
        const ell = "...";
        if (font.widthOfTextAtSize(text, size) <= maxWidth) return text;
        if (font.widthOfTextAtSize(ell, size) > maxWidth) return "";
        let lo = 0, hi = text.length;
        while (lo < hi) {
          const mid = Math.ceil((lo + hi) / 2);
          const cand = text.slice(0, mid) + ell;
          if (font.widthOfTextAtSize(cand, size) <= maxWidth) lo = mid;
          else hi = mid - 1;
        }
        return text.slice(0, lo) + ell;
      }

      function dotLeader(font, size, left, right, maxWidth){
        const rightW = font.widthOfTextAtSize(right, size);
        const allowedLeftW = maxWidth - rightW - 12;
        const safeLeft = fitText(font, size, left, Math.max(0, allowedLeftW));
        const leftW = font.widthOfTextAtSize(safeLeft, size);
        const spaceForDots = maxWidth - leftW - rightW - 12;
        const dotW = font.widthOfTextAtSize(".", size);
        const dots = ".".repeat(Math.max(0, Math.floor(spaceForDots / dotW)));
        return { safeLeft, leftW, dots };
      }

      for (let p=0;p<pages.length;p++){
        const page = pages[p];
        page.drawText("Table of Contents", { x:54, y:742, size:18, font: fonts.bold, color: rgb(0.12,0.18,0.30) });
        page.drawLine({ start:{x:54,y:732}, end:{x:558,y:732}, thickness:1, color: rgb(0.80,0.84,0.92) });

        let y = 708;
        const start = p * linesPerPage;
        const end = start + linesPerPage;

        for (let i=start;i<end && i<toc.length;i++){
          const e = toc[i];
          const leftRaw = e.indent ? "    " + e.title : e.title;
          const pageNum = String(e.page || "");
          const dl = dotLeader(fonts.reg, 11, leftRaw, pageNum, 504);

          page.drawText(dl.safeLeft, { x:54, y, size:11, font: fonts.reg, color: rgb(0.15,0.2,0.3) });

          if (dl.dots) {
            page.drawText(dl.dots, { x:54 + dl.leftW + 6, y, size:11, font: fonts.reg, color: rgb(0.55,0.6,0.72) });
          }

          page.drawText(pageNum, { x:558 - fonts.reg.widthOfTextAtSize(pageNum, 11), y, size:11, font: fonts.reg, color: rgb(0.15,0.2,0.3) });

          y -= 14;
        }
      }
    }

    function addDivider(title){
      const page = doc.addPage([612,792]);
      const { width, height } = page.getSize();
      page.drawRectangle({ x:0,y:0,width,height,color: rgb(0.05,0.07,0.11) });
      const size = 24;
      const w = fonts.bold.widthOfTextAtSize(title, size);
      page.drawText(title, { x:(width-w)/2, y: height/2 + 10, size, font: fonts.bold, color: rgb(0.90,0.93,1) });
      page.drawText("Section Divider", { x:(width-fonts.reg.widthOfTextAtSize("Section Divider", 12))/2, y: height/2 - 18, size:12, font: fonts.reg, color: rgb(0.72,0.78,0.92) });
    }

    function addPlaceholder(groupTitle, itemTitle, notes){
      const page = doc.addPage([612,792]);
      page.drawText("PLACEHOLDER", { x:54, y:742, size:18, font: fonts.bold, color: rgb(0.70,0.12,0.12) });
      page.drawLine({ start:{x:54,y:732}, end:{x:558,y:732}, thickness:1, color: rgb(0.88,0.70,0.70) });
      let y = 700;
      const lines = [
        `Section: ${groupTitle}`,
        `Item: ${itemTitle}`,
        "",
        "No document was attached for this item at export time.",
        "Attach the required PDF/image and re-export.",
        notes ? "" : null,
        notes ? `Notes: ${notes}` : null
      ].filter(Boolean);
      lines.forEach(line => { page.drawText(line.slice(0,120), { x:54, y, size:11, font: fonts.reg, color: rgb(0.15,0.2,0.3) }); y -= 16; });
    }

    async function appendPdf(file){
      const bytes = await file.arrayBuffer();
      const src = await PDFDocument.load(bytes);
      const copied = await doc.copyPages(src, src.getPageIndices());
      copied.forEach(p => doc.addPage(p));
    }
    async function appendImage(file){
      const page = doc.addPage([612,792]);
      const bytes = await file.arrayBuffer();
      const img = file.type === "image/png" ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
      const margin = 36;
      const { width, height } = page.getSize();
      const maxW = width - margin*2;
      const maxH = height - margin*2;
      const s = Math.min(maxW/img.width, maxH/img.height);
      const w = img.width*s, h = img.height*s;
      page.drawImage(img, { x:(width-w)/2, y:(height-h)/2, width:w, height:h });
    }

    function addPageNumbers(){
      const total = doc.getPageCount();
      for (let i=0;i<total;i++){
        const page = doc.getPage(i);
        const { width } = page.getSize();
        const label = `Page ${i+1} of ${total}`;
        page.drawText(label, { x: width - 54 - fonts.reg.widthOfTextAtSize(label, 9), y: 28, size: 9, font: fonts.reg, color: rgb(0.65,0.7,0.82) });
      }
    }

    addCover();
    if (pb.options.overview) addOverview();
    addTOC();

    for (const g of plan) {
      if (pb.options.dividers) addDivider(g.title);
      for (const it of g.items) {
        const hasAtt = (it.attachments||[]).length > 0;
        if (!hasAtt) {
          if (pb.options.placeholders && it.placeholder) addPlaceholder(g.title, it.label, it.notes);
          continue;
        }
        for (const a of it.attachments) {
          if (!a.file) continue;
          if (a.mime === "application/pdf") await appendPdf(a.file);
          else await appendImage(a.file);
        }
      }
    }

    if (pb.options.pageNums) addPageNumbers();

    const bytes = await doc.save();
    const filename = buildFilename();
    const blob = new Blob([bytes], { type:"application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 1500);
    $("pbStatus").textContent = `Exported: ${filename}`;
  }

  function exportStructure(){
    setMetaFromInputs();
    const d = getDistrict(pb.districtId);
    const structure = {
      v: 1,
      districtId: pb.districtId,
      stageId: pb.stageId,
      meta: pb.meta,
      options: pb.options,
      items: Object.fromEntries(Object.entries(pb.items).map(([k,v]) => [k, {
        include: !!v.include,
        placeholder: !!v.placeholder,
        notes: v.notes || "",
        attachments: (v.attachments||[]).map(a => ({ name:a.name, mime:a.mime, pages:a.pages, size:a.size }))
      }]))
    };
    const blob = new Blob([JSON.stringify(structure, null, 2)], { type:"application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${d.id}_${pb.stageId}_structure.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 1500);
    $("pbStatus").textContent = "Exported structure JSON. (Re-attach files after import.)";
  }

  async function importStructure(file){
    try{
      const text = await file.text();
      const obj = JSON.parse(text);
      if (!obj || obj.v !== 1) throw new Error("Unsupported structure version.");
      pb.districtId = obj.districtId || pb.districtId;
      pb.stageId = obj.stageId || pb.stageId;
      pb.meta = Object.assign(pb.meta, obj.meta || {});
      pb.options = Object.assign(pb.options, obj.options || {});
      const d = getDistrict(pb.districtId);
      ensureDefaultsForDistrict(d);

      const items = obj.items || {};
      Object.keys(items).forEach(k => {
        pb.items[k] = pb.items[k] || { include:false, placeholder:false, notes:"", attachments:[] };
        pb.items[k].include = !!items[k].include;
        pb.items[k].placeholder = !!items[k].placeholder;
        pb.items[k].notes = items[k].notes || "";
        pb.items[k].attachments = [];
      });

      $("pbDistrictSelect").value = pb.districtId;
      $("pbStageSelect").value = pb.stageId;
      updateWizardHeader();
      renderWizard();
      $("pbStatus").textContent = "Structure imported. Now re-attach PDFs/images for each item.";
      savePb();
    } catch(e) {
      $("pbStatus").textContent = `Import failed: ${e.message}`;
    }
  }

  function updateWizardHeader(){
    const d = getDistrict(pb.districtId);
    $("pbAhjPill").textContent = `AHJ: ${d?.district || "—"}`;
    const stage = STAGES.find(s => s.id === pb.stageId);
    $("pbStagePill").textContent = `Stage: ${stage?.label || pb.stageId}`;
  }

  function renderWizard(){
    const d = getDistrict(pb.districtId);
    ensureDefaultsForDistrict(d);

    $("pbCompany").value = pb.meta.company || "";
    $("pbDate").value = pb.meta.date || "";
    $("pbProject").value = pb.meta.project || "";
    $("pbPermitId").value = pb.meta.permitId || "";
    $("pbSite").value = pb.meta.site || "";
    $("pbPreparedBy").value = pb.meta.preparedBy || "";
    $("pbCoverNotes").value = pb.meta.coverNotes || "";

    $("pbOptDividers").checked = !!pb.options.dividers;
    $("pbOptPageNums").checked = !!pb.options.pageNums;
    $("pbOptOverview").checked = !!pb.options.overview;
    $("pbOptPlaceholders").checked = !!pb.options.placeholders;

    $("pbNameMode").value = pb.meta.nameMode || "internal";
    $("pbRev").value = pb.meta.rev || "";
    $("pbPkg").value = pb.meta.pkg || "";
    $("pbDateStamp").value = pb.meta.dateStamp || "";
    $("pbInternalTpl").value = pb.meta.internalTpl || "{project}_{districtId}_{stageId}_{dateYYYYMMDD}{revPart}{pkgPart}.pdf";
    $("pbDistrictTpl").value = pb.meta.districtTpl || (d?.naming?.packageTemplate || d?.naming?.template || "{districtId}_{project}_{stageId}_{dateYYYYMMDD}{revPart}{pkgPart}.pdf");

    const groupsHost = $("pbGroups");
    groupsHost.innerHTML = "";

    const groups = getActiveGroups(d);
    groups.forEach((g, gi) => {
      const det = document.createElement("details");
      det.open = gi === 0;
      det.innerHTML = `
        <summary style="cursor:pointer;list-style:none;padding:10px 12px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:#0c1429;font-weight:650;display:flex;justify-content:space-between;align-items:center">
          <span>${esc(g.title)}</span>
          <span class="small">${(g.items||[]).length} item(s)</span>
        </summary>
        <div style="padding:8px 6px 0"></div>
      `;
      const body = det.querySelector("div");

      (g.items || []).forEach((it, ii) => {
        const key = g.__synthetic ? synKey(d.id, it.__syn) : itemKey(d.id, (g.__synthetic ? "syn" : d.groups.findIndex(x => x.title === g.title)), ii);
        const st = pb.items[key] || (pb.items[key] = { include: !!it.required, placeholder: !!it.required, notes:"", attachments:[] });

        const srcLinks = (it.links || []).map(idx => {
          const src = d.codeBasis?.[idx];
          return src ? `<a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.label)}</a>` : "";
        }).filter(Boolean).join(" • ");

        const itemEl = document.createElement("div");
        itemEl.className = "pbItem";
        itemEl.innerHTML = `
          <div class="pbItemTop">
            <div class="actions">
              <input type="checkbox" ${st.include ? "checked" : ""} data-pb="include" data-key="${esc(key)}" title="Include this item in the export"/>
            </div>
            <div>
              <div class="title">${esc(it.text)}</div>
              ${it.note ? `<div class="mini">${esc(it.note)}</div>` : ``}
              ${srcLinks ? `<div class="mini" style="margin-top:6px">Source(s): ${srcLinks}</div>` : ``}
            </div>
            <div class="actions">
              <span class="tag ${it.required ? "req" : ""}">${it.required ? "Required" : "Recommended"}</span>
              ${it.verify ? `<span class="tag verify">Verify</span>` : ``}
              ${it.portal ? `<span class="tag portal">Portal</span>` : ``}
            </div>
          </div>

          <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div>
              <label>Notes (optional)</label>
              <input type="text" value="${esc(st.notes||"")}" data-pb="notes" data-key="${esc(key)}" placeholder="Internal notes / reviewer notes"/>
            </div>
            <div>
              <label>Attach PDF/Image(s)</label>
              <input type="file" data-pb="file" data-key="${esc(key)}" multiple accept="application/pdf,image/png,image/jpeg"/>
            </div>
          </div>

          <div class="mini" style="margin-top:8px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <label class="pill"><input type="checkbox" ${st.placeholder ? "checked" : ""} data-pb="placeholder" data-key="${esc(key)}" style="margin-right:8px"/>Placeholder if missing</label>
            <span class="small">Attachments: <b data-pb="acount" data-key="${esc(key)}">${(st.attachments||[]).length}</b></span>
          </div>

          <div class="pbAttach" data-pb="alist" data-key="${esc(key)}"></div>
        `;
        body.appendChild(itemEl);
        renderAttachmentList(key);
      });

      groupsHost.appendChild(det);
    });

    wireWizardInputs();
    renderPreview();
    updateFilenamePreview();
  }

  function renderDistrictPickers(){
    const districtSel = $("pbDistrictSelect");
    districtSel.innerHTML = window.DATA.map(d => `<option value="${esc(d.id)}">${esc(d.district)}</option>`).join("");
    districtSel.value = pb.districtId;

    const stageSel = $("pbStageSelect");
    stageSel.innerHTML = STAGES.map(s => `<option value="${esc(s.id)}">${esc(s.label)}</option>`).join("");
    stageSel.value = pb.stageId;

    districtSel.addEventListener("change", () => {
      pb.districtId = districtSel.value;
      const d = getDistrict(pb.districtId);
      ensureDefaultsForDistrict(d);
      savePb();
      updateWizardHeader();
      renderWizard();
    });

    stageSel.addEventListener("change", () => {
      pb.stageId = stageSel.value;
      savePb();
      updateWizardHeader();
      renderWizard();
    });
  }

  function wireWizardInputs(){
    const metaIds = ["pbCompany","pbDate","pbProject","pbPermitId","pbSite","pbPreparedBy","pbCoverNotes",
                     "pbOptDividers","pbOptPageNums","pbOptOverview","pbOptPlaceholders",
                     "pbNameMode","pbRev","pbPkg","pbDateStamp","pbInternalTpl","pbDistrictTpl"];
    metaIds.forEach(id => {
      const el = $(id);
      el.addEventListener("input", () => {
        if (id === "pbDistrictTpl") pb.meta.districtTplAuto = false;
        setMetaFromInputs();
      });
      el.addEventListener("change", () => {
        if (id === "pbDistrictTpl") pb.meta.districtTplAuto = false;
        setMetaFromInputs();
      });
    });

    document.querySelectorAll('[data-pb="include"]').forEach(cb => {
      cb.addEventListener("change", () => {
        const k = cb.dataset.key;
        pb.items[k].include = cb.checked;
        savePb();
        renderPreview();
      });
    });

    document.querySelectorAll('[data-pb="placeholder"]').forEach(cb => {
      cb.addEventListener("change", () => {
        const k = cb.dataset.key;
        pb.items[k].placeholder = cb.checked;
        savePb();
        renderPreview();
      });
    });

    document.querySelectorAll('[data-pb="notes"]').forEach(inp => {
      inp.addEventListener("input", () => {
        const k = inp.dataset.key;
        pb.items[k].notes = inp.value;
        savePb();
      });
    });

    document.querySelectorAll('[data-pb="file"]').forEach(inp => {
      inp.addEventListener("change", async () => {
        const k = inp.dataset.key;
        const files = Array.from(inp.files || []);
        inp.value = "";
        if (!files.length) return;

        $("pbStatus").textContent = "Reading files…";
        for (const f of files) {
          if (!["application/pdf","image/png","image/jpeg"].includes(f.type)) continue;
          const aid = uid();
          const att = { aid, file: f, name: f.name, mime: f.type, pages: null, size: f.size };
          pb.items[k].attachments.push(att);
          renderAttachmentList(k);
          try { att.pages = await countPages(f); } catch(e){ att.pages = 0; }
          renderAttachmentList(k);
        }
        savePb();
        renderPreview();
        $("pbStatus").textContent = "Ready.";
      });
    });
  }

  function openDialog(){
    const dlg = $("pbDialog");
    if (!dlg.open) dlg.showModal();
    updateWizardHeader();
    renderWizard();
  }
  function closeDialog(){
    const dlg = $("pbDialog");
    if (dlg.open) dlg.close();
  }

  loadPb();
  renderDistrictPickers();
  updateWizardHeader();

  $("pbOpenBtn").addEventListener("click", openDialog);
  $("pbCloseBtn").addEventListener("click", closeDialog);
  $("pbExportPdf").addEventListener("click", exportPdf);
  $("pbExportJson").addEventListener("click", exportStructure);

  $("pbImportJson").addEventListener("change", async (e) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    await importStructure(f);
  });

  updateFilenamePreview();
})();
