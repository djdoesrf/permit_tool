window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "pueblo",
  "district": "City of Pueblo (Fire Department / Building Safety & Inspection)",
  "confidence": "medium",
  "selectionReason": "Major southern Colorado municipality; publishes Fire Department and Building Safety resources. ERRCS specifics require confirmation with Fire Prevention.",
  "codeBasis": [
    {"label": "City of Pueblo – Fire Department", "url": "https://www.pueblo.us/163/Fire-Department"},
    {"label": "City of Pueblo – Building Safety & Inspection", "url": "https://www.pueblo.us/162/Building-Safety-Inspection"},
    {"label": "Pueblo Municipal Code (Municode)", "url": "https://library.municode.com/co/pueblo/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "PUEBLO_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm Pueblo Fire Department’s adopted testing thresholds/grid and any local amendments."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit via Pueblo Building Safety & Inspection and coordinate Fire Department review for ERRCS scope.",
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
