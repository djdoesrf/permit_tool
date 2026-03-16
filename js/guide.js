const DATA = window.DATA || [];

// Standard runtime augment(s) applied to all districts in the UI.
if (typeof window.applyReportSubmissionChecklistItem === "function") {
  for (const d of DATA) window.applyReportSubmissionChecklistItem(d);
}



// ---- Rendering / state ----
const stateKey = "erces-bda-permit-guide-checks-v1";
const uiKey = "erces-bda-permit-guide-ui-v1";
let checks = JSON.parse(localStorage.getItem(stateKey) || "{}");
let uiPrefs = JSON.parse(localStorage.getItem(uiKey) || '{"hideVerify":false}');

const districtContainer = document.getElementById("districtContainer");
const searchInput = document.getElementById("search");
const kpiDistricts = document.getElementById("kpiDistricts");
const kpiItems = document.getElementById("kpiItems");
const kpiDone = document.getElementById("kpiDone");
const toggleVerificationBtn = document.getElementById("toggleVerification");

function saveChecks(){ localStorage.setItem(stateKey, JSON.stringify(checks)); }
function saveUi(){ localStorage.setItem(uiKey, JSON.stringify(uiPrefs)); }

function itemId(did, gid, iid){ return `${did}__${gid}__${iid}`; }

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function render(){
  const q = (searchInput.value || "").trim().toLowerCase();
  const hideVerify = !!uiPrefs.hideVerify;
  toggleVerificationBtn.textContent = hideVerify ? "Show Verify Flags" : "Hide Verify Flags";

  let totalItems = 0;
  let doneItems = 0;
  let visibleDistricts = 0;

  districtContainer.innerHTML = "";

  DATA.forEach((d, di) => {
    const districtTextBlob = [
      d.district,
      d.selectionReason,
      ...d.codeBasis.map(x=>x.label),
      d.naming.template,
      ...d.naming.notes,
      ...d.groups.flatMap(g=>[g.title, ...g.items.flatMap(i=>[i.text, i.note||""])])
    ].join(" ").toLowerCase();

    if (q && !districtTextBlob.includes(q)) return;

    visibleDistricts++;
    const districtEl = document.createElement("section");
    districtEl.className = "district";
    const confidenceClass = d.confidence === "high" ? "ok" : (d.confidence === "medium" ? "warn" : "bad");

    let groupsHtml = "";
    d.groups.forEach((g, gi) => {
      let itemsHtml = "";
      g.items.forEach((it, ii) => {
        totalItems++;
        const cid = itemId(d.id, gi, ii);
        const checked = !!checks[cid];
        if (checked) doneItems++;

        const linkHtml = (it.links || []).map(idx => {
          const src = d.codeBasis[idx];
          return src ? `<a href="${src.url}" target="_blank" rel="noopener">${escapeHtml(src.label)}</a>` : "";
        }).filter(Boolean).join(" • ");

        itemsHtml += `
          <label class="item ${hideVerify && it.verify ? "verify-hidden" : ""}" data-search="${escapeHtml((it.text+' '+(it.note||'')).toLowerCase())}">
            <input type="checkbox" ${checked ? "checked" : ""} data-cid="${cid}" />
            <div>
              <div class="title">${escapeHtml(it.text)}</div>
              ${it.note ? `<div class="mini">${escapeHtml(it.note)}</div>` : ""}
              ${linkHtml ? `<div class="mini" style="margin-top:6px;">Source(s): ${linkHtml}</div>` : ""}
            </div>
            <div class="tags">
              ${it.required ? `<span class="tag req">Required</span>` : `<span class="tag">Recommended</span>`}
              ${it.portal ? `<span class="tag portal">Portal</span>` : ``}
              ${it.verify ? `<span class="tag verify">Verify</span>` : ``}
            </div>
          </label>
        `;
      });

      groupsHtml += `
        <details ${gi === 0 ? "open" : ""}>
          <summary>
            <span>${escapeHtml(g.title)}</span>
            <span class="small">${g.items.length} item(s)</span>
          </summary>
          <div class="body">
            <div class="checklist">${itemsHtml}</div>
          </div>
        </details>
      `;
    });

    const sourceListHtml = d.codeBasis.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a></li>`).join("");

    const namingNotesHtml = d.naming.notes.map(n => `<li>${escapeHtml(n)}</li>`).join("");
    const descriptorHtml = d.naming.descriptorExamples.map(x => `<span class="tag">${escapeHtml(x)}</span>`).join("");

    districtEl.innerHTML = `
      <div class="split">
        <div>
          <h2>${escapeHtml(d.district)}</h2>
          <p class="desc">${escapeHtml(d.selectionReason)}</p>
          <div class="meta">
            <span class="pill ${confidenceClass}">Confidence: ${escapeHtml(d.confidence)}</span>
            <span class="pill">${d.groups.length} checklist groups</span>
          </div>
        </div>
        <div class="card" style="padding:10px;background:#0c1429;">
          <div class="small" style="margin-bottom:6px;">Naming / upload convention</div>
          <div class="mono" style="font-size:12px;word-break:break-word;">${escapeHtml(d.naming.template)}</div>
          <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;">${descriptorHtml}</div>
        </div>
      </div>

      <details open>
        <summary><span>Published source links</span><span class="small">${d.codeBasis.length} links</span></summary>
        <div class="body">
          <ul class="source-list">${sourceListHtml}</ul>
        </div>
      </details>

      <details>
        <summary><span>Naming notes</span><span class="small">${d.naming.published ? "Published" : "Provisional"}</span></summary>
        <div class="body">
          <div class="naming">
            <div><strong>Template:</strong> <span class="mono">${escapeHtml(d.naming.template)}</span></div>
            <div style="margin-top:8px"><strong>Notes:</strong></div>
            <ul style="margin:6px 0 0;padding-left:18px;">${namingNotesHtml}</ul>
          </div>
        </div>
      </details>

      ${groupsHtml}
    `;
    districtContainer.appendChild(districtEl);
  });

  // Hide verify items if toggled
  document.querySelectorAll(".verify-hidden").forEach(el => {
    if (uiPrefs.hideVerify) el.classList.add("hidden");
    else el.classList.remove("hidden");
  });

  kpiDistricts.textContent = String(visibleDistricts);
  kpiItems.textContent = String(totalItems);
  kpiDone.textContent = String(doneItems);

  // Wire checkboxes
  districtContainer.querySelectorAll('input[type="checkbox"][data-cid]').forEach(cb => {
    cb.addEventListener("change", () => {
      checks[cb.dataset.cid] = cb.checked;
      if (!cb.checked) delete checks[cb.dataset.cid];
      saveChecks();
      // light refresh of counts only
      let total = 0, done = 0;
      DATA.forEach((d,gi)=> d.groups.forEach((g, gj)=> g.items.forEach((it, ii) => {
        total++;
        if (checks[itemId(d.id, gj, ii)]) done++;
      })));
      kpiItems.textContent = String(total);
      kpiDone.textContent = String(done);
    });
  });
}

searchInput.addEventListener("input", render);

document.getElementById("expandAll").addEventListener("click", () => {
  document.querySelectorAll("#districtContainer details").forEach(d => d.open = true);
});

document.getElementById("collapseAll").addEventListener("click", () => {
  document.querySelectorAll("#districtContainer details").forEach((d, idx) => d.open = idx < 2 ? false : false);
});

toggleVerificationBtn.addEventListener("click", () => {
  uiPrefs.hideVerify = !uiPrefs.hideVerify;
  saveUi();
  render();
});

document.getElementById("resetChecks").addEventListener("click", () => {
  if (!confirm("Clear all saved checkbox progress for this guide?")) return;
  checks = {};
  saveChecks();
  render();
});

render();
