window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "greeley",
  "district": "City of Greeley (Fire Department / Community Development)",
  "confidence": "high",
  "selectionReason": "Major Weld County municipality; official sources now support a clear split between permit/building workflows and third-party reporting via IROL.",
  "codeBasis": [
    {"label": "City of Greeley – Fire", "url": "https://greeleygov.com/services/fire"},
    {"label": "City of Greeley – Building", "url": "https://greeleygov.com/services/building"},
    {"label": "Greeley Code of Ordinances (Municode)", "url": "https://library.municode.com/co/greeley/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "GREELEY_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm Greeley Fire Department thresholds/grid/testing and any local amendments."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit through Greeley Building/Community Development and coordinate Fire Department review for ERRCS scope.",
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
