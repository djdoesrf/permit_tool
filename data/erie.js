window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "erie",
  "district": "Town of Erie (Fire Department / Building Division)",
  "confidence": "medium",
  "selectionReason": "Rapid-growth Boulder/Weld municipality; publishes Fire Department and Building Division resources. ERRCS specifics require confirmation with Fire Prevention.",
  "codeBasis": [
    {"label": "Town of Erie – Fire Department", "url": "https://www.erieco.gov/178/Fire-Department"},
    {"label": "Town of Erie – Building Division", "url": "https://www.erieco.gov/165/Building-Division"},
    {"label": "Erie Municipal Code (Municode)", "url": "https://library.municode.com/co/erie/codes/municipal_code"}
  ],
  "naming": {
    "published": false,
    "template": "ERIE_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm Erie Fire Department’s adopted testing thresholds/grid and any local amendments."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit via Erie Building Division and coordinate Fire Department review for ERRCS scope.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Confirm specific intake workflow for Fire Prevention / ERRC review.",
          "links": [0,1]
        }
      ]
    }
  ]
});
