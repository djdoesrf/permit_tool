// Runtime augmentation: add a dedicated report-submission section to each district.
// Distinguishes permit/plan submittal from recurring ITM / annual / grid-report delivery.

window.REPORT_SUBMISSION_OVERRIDES = window.REPORT_SUBMISSION_OVERRIDES || {
  adams_county: {
    required: true,
    portal: false,
    verify: true,
    note: "AHJ/report route still needs confirmation. Current ops note says unincorporated Adams County-related survey reports may go to planreviews@acfpd.org, but verify whether the actual serving fire district—not county building—controls annual/report delivery.",
    linkLabel: "Operational note – verify Adams County / serving FPD report route",
    linkUrl: "mailto:planreviews@acfpd.org"
  },
  arvada: {
    required: true,
    portal: true,
    verify: false,
    note: "ITM / annual fire protection reports route through The Compliance Engine per Arvada Fire published direction. Keep permit/plan submittals separate in Arvada's permit workflow / ETrakit as applicable.",
    linkLabel: "Arvada – official ITM reporting via The Compliance Engine",
    linkUrl: "https://www.arvadafireco.gov/"
  },
  aurora: {
    required: true,
    portal: false,
    verify: false,
    note: "Distinguish permit work from recurring reports. Team-confirmed practice: annual grid / survey-style reports can be emailed to inspections@auroragov.org. Aurora also publishes separate electronic ITM-report rules, so verify category if the deliverable is a broader fire-protection ITM report rather than an ERRCS annual/grid report.",
    linkLabel: "Aurora – annual/grid reports confirmed to inspections@auroragov.org",
    linkUrl: "mailto:inspections@auroragov.org"
  },
  boulder: {
    required: true,
    portal: false,
    verify: true,
    note: "No reliable published annual/report-delivery route captured yet. Current ops note only says to coordinate BDA inspections through the radio shop. Verify whether annual reports are emailed, portal-filed, or handled only through inspection coordination.",
    linkLabel: "Boulder – verify annual/report route",
    linkUrl: "https://bouldercolorado.gov/services/fire-rescue"
  },
  brighton: {
    required: true,
    portal: false,
    verify: true,
    note: "Current ops note: submit RF surveys to planreviews@brightonfire.org. Permit packages still go through the Brighton contractor portal. Verify whether annual ERRCS reports use the same email or a different process.",
    linkLabel: "Brighton – contractor portal / ops survey email",
    linkUrl: "https://brightonfire.org/contractor-portal-login/"
  },
  castle_rock: {
    required: true,
    portal: true,
    verify: false,
    note: "ITM / compliance reports go through The Compliance Engine per Castle Rock's published direction. Keep project surveys / plan-review coordination separate: ops notes still use fdplans@crgov.com for survey/report communication and permit intake.",
    linkLabel: "Castle Rock – official compliance reports via The Compliance Engine",
    linkUrl: "https://www.crgov.com/"
  },
  colorado_springs: {
    required: true,
    portal: true,
    verify: false,
    note: "ITM / annual reports go through The Compliance Engine. Colorado Springs Fire states it no longer accepts direct ITM submissions. Keep permit-plan routing and coordinator/inspection contacts separate from annual reporting.",
    linkLabel: "Colorado Springs – official ITM reports via The Compliance Engine",
    linkUrl: "https://coloradosprings.gov/fire-department/page/fire-inspection-reporting"
  },
  denver: {
    required: true,
    portal: false,
    verify: false,
    note: "Do not treat Denver like an annual-upload AHJ by default. For ERCES, Denver code language centers on maintaining maintenance/test records on premises and making them available to the fire code official upon request. Team ops note also says annual reports are not routinely provided to DFD.",
    linkLabel: "Denver – ERCES records maintained on premises / available upon request",
    linkUrl: "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Fire_Code.pdf"
  },
  erfpd: {
    required: true,
    portal: true,
    verify: true,
    note: "Ops note indicates Evergreen Fire uses Compliance Engine for annuals, while permit packages are emailed to the fire department. Publish this only as provisional until an official contractor-facing source is linked.",
    linkLabel: "Evergreen Fire – provisional annual route / verify official source",
    linkUrl: "https://evergreenfirerescue.com/"
  },
  golden: {
    required: true,
    portal: true,
    verify: true,
    note: "Ops note says annual/inspection reporting is through IROL Online Reporting, while RF surveys go to fireinspections@cityofgolden.net and permits use the city portal. Keep as provisional until the official contractor-facing reporting page is linked in the registry.",
    linkLabel: "Golden – provisional IROL reporting / verify official source",
    linkUrl: "mailto:fireinspections@cityofgolden.net"
  },
  greeley: {
    required: true,
    portal: true,
    verify: false,
    note: "Update this district away from email-only language for reports. Greeley publicly states third-party fire inspection reports are uploaded through IROL (Inspection Reports Online). Keep email contacts only for scheduling/questions unless the AHJ specifically asks for direct survey delivery.",
    linkLabel: "Greeley – official third-party reports via IROL",
    linkUrl: "https://greeleygov.com/services/fire/inspections"
  },
  lfra: {
    required: true,
    portal: true,
    verify: false,
    note: "LFRA requires contractors to digitally submit system ITM reports via Brycer / The Compliance Engine. Keep plan submittals and jurisdiction overlays (such as Johnstown) separate from annual report delivery.",
    linkLabel: "LFRA – official ITM reports via Brycer / The Compliance Engine",
    linkUrl: "https://www.lovgov.org/services/fire-rescue/fire-prevention-bureau/inspection-reporting-and-compliance-engine"
  },
  littleton: {
    required: true,
    portal: false,
    verify: true,
    note: "Annual/report route is still not confirmed from an official source. Verify whether Littleton wants email, portal upload, or another method before closing the card.",
    linkLabel: "Littleton – verify annual/report route",
    linkUrl: "https://www.littletongov.org/"
  },
  longmont: {
    required: true,
    portal: true,
    verify: false,
    note: "Longmont publicly references electronic reporting through IROL for contractor system test reports. Do not treat Longmont as a Compliance Engine annual-report AHJ unless the city later publishes a change.",
    linkLabel: "Longmont – official electronic reporting through IROL",
    linkUrl: "https://www.longmontcolorado.gov/departments/departments-e-m/fire-services/fire-code-resources"
  },
  nmfrd: {
    required: true,
    portal: true,
    verify: true,
    note: "North Metro appears to use The Compliance Engine for third-party ITM tracking, but the strongest current source is board-minutes / ops guidance rather than a dedicated contractor reporting page. Publish as medium-confidence and keep initial RF survey routing separate (fireprevention@northmetrofire.org in ops notes).",
    linkLabel: "North Metro – uses The Compliance Engine / confirm contractor-facing page",
    linkUrl: "https://www.northmetrofire.org/"
  },
  parker: {
    required: true,
    portal: false,
    verify: true,
    note: "Ops note splits Parker by submission type: BDA surveys via Parker ETrakit, annual inspections to reports@smfr.org. Keep this provisional until an official Parker/SMFR page is linked.",
    linkLabel: "Parker / SMFR – provisional split workflow / verify official source",
    linkUrl: "mailto:reports@smfr.org"
  },
  pfa: {
    required: true,
    portal: true,
    verify: false,
    note: "Poudre Fire Authority directs contractors to submit testing documents directly to The Compliance Engine. Keep RF surveys / plan-review emails (such as plans@poudre-fire.org) separate from recurring report delivery.",
    linkLabel: "Poudre Fire Authority – official testing docs via The Compliance Engine",
    linkUrl: "https://www.poudre-fire.org/your-authority/fire-prevention/inspection-reports"
  },
  pueblo: {
    required: true,
    portal: true,
    verify: false,
    note: "Pueblo published that test reports are submitted electronically via The Compliance Engine. Keep ops survey-email routing (firecode@pueblo.us) separate from recurring annual/ITM report delivery unless the AHJ tells you otherwise for a specific correction report.",
    linkLabel: "Pueblo – official test reports via The Compliance Engine",
    linkUrl: "https://www.pueblo.us/2431/Fire-Inspection-Reporting"
  },
  smfr: {
    required: true,
    portal: false,
    verify: true,
    note: "Current ops note distinguishes report types: passing surveys may be entered into Accela, failed surveys follow permit-package workflow, and annual reports are emailed to reports@southmetro.org. Keep this split visible and verify against current official SMFR guidance before treating it as fully published.",
    linkLabel: "South Metro – annual reports to reports@southmetro.org (ops guidance)",
    linkUrl: "mailto:reports@southmetro.org"
  },
  south_adams_county: {
    required: true,
    portal: false,
    verify: true,
    note: "Report route still needs verification. Current ops note says survey reports may be sent to planreviews@acfpd.org; confirm whether annual reports use the same destination or a separate workflow.",
    linkLabel: "South Adams County – verify annual/report route",
    linkUrl: "mailto:planreviews@acfpd.org"
  },
  thornton: {
    required: true,
    portal: true,
    verify: false,
    note: "Thornton requires service providers to submit inspection/test/service reports via The Compliance Engine. Keep initial RF surveys / permit-related uploads separate in the City Link portal.",
    linkLabel: "Thornton – official reports via The Compliance Engine",
    linkUrl: "https://www.thorntonco.gov/public-safety/fire-department/Documents/General-Requirements.pdf"
  },
  westminster: {
    required: true,
    portal: true,
    verify: false,
    note: "Westminster separates permit work from recurring reporting: permit submittals use eTRAKiT, while third-party inspection/test/maintenance reports go into the department's reporting portal (Brycer / Compliance Engine workflow per the city's published direction).",
    linkLabel: "Westminster – official third-party reports through department portal",
    linkUrl: "https://www.westminsterco.gov/"
  },
  wmfr: {
    required: true,
    portal: true,
    verify: false,
    note: "West Metro's published direction requires inspection/test/service reports through The Compliance Engine. Keep grid / RF survey submissions separate: ops notes still use inspections@westmetrofire.org for those deliverables.",
    linkLabel: "West Metro – official reports via The Compliance Engine",
    linkUrl: "https://www.westmetrofire.org/861/Compliance-Engine"
  },
  wsfr: {
    required: true,
    portal: true,
    verify: false,
    note: "This registry ID currently maps to Westminster / Westy content. Treat recurring annual reports as Compliance Engine / Brycer workflow, while permit submittals stay in eTRAKiT. RF surveys may still need district-specific permit-request handling.",
    linkLabel: "Westminster / WSFR entry – annual reports via Compliance Engine",
    linkUrl: "https://www.westminsterco.gov/"
  },
  vail: {
    required: true,
    portal: false,
    verify: true,
    note: "Annual/report-delivery route not yet confirmed from a primary source. Verify with Vail Fire / AHJ before marking complete.",
    linkLabel: "Vail – verify annual/report route",
    linkUrl: "https://www.vailgov.com/government/departments/fire-emergency-services"
  },
  arapahoe_county: {
    required: true,
    portal: false,
    verify: true,
    note: "Annual/report route not yet confirmed. For county projects, first verify the serving fire authority and whether the county entry should hold permit only while recurring reporting follows the local fire district/AHJ.",
    linkLabel: "Arapahoe County – verify serving fire authority / report route",
    linkUrl: "https://www.arapahoeco.gov/"
  }
};

window.applyReportSubmissionChecklistItem = function applyReportSubmissionChecklistItem(district) {
  if (!district || !Array.isArray(district.groups)) return;

  const title = "ITM / Annual Report Submission";
  let group = district.groups.find(g => g && g.title === title);
  if (!group) {
    group = { title, items: [] };
    district.groups.push(group);
  }
  group.items = Array.isArray(group.items) ? group.items : [];

  const already = group.items.some(it =>
    it && typeof it.text === "string" && /annual report|itm|report submission/i.test(it.text)
  );
  if (already) return;

  const override = window.REPORT_SUBMISSION_OVERRIDES[district.id] || null;
  const baseSourceIdx = Array.isArray(district.codeBasis) && district.codeBasis.length ? 0 : null;
  let overrideIdx = -1;

  if (override && Array.isArray(district.codeBasis) && override.linkLabel && override.linkUrl) {
    overrideIdx = district.codeBasis.findIndex(s => s && s.label === override.linkLabel);
    if (overrideIdx < 0) {
      district.codeBasis.push({ label: override.linkLabel, url: override.linkUrl });
      overrideIdx = district.codeBasis.length - 1;
    }
  }

  const links = [];
  if (baseSourceIdx !== null) links.push(baseSourceIdx);
  if (overrideIdx >= 0 && !links.includes(overrideIdx)) links.push(overrideIdx);

  group.items.push({
    text: "Confirm and use the correct annual / ITM / grid-report delivery route for this AHJ",
    required: override ? !!override.required : false,
    portal: override ? !!override.portal : false,
    verify: override ? !!override.verify : true,
    note: override?.note || "Do not assume the permit portal is also the annual-report route. Verify whether recurring reports go to email, The Compliance Engine, IROL, another municipal platform, or are retained on premises and produced on request.",
    links
  });
};
