window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "longmont",
  "district": "City of Longmont (Fire Services / Building Inspection)",
  "confidence": "medium",
  "selectionReason": "Major Boulder County municipality; publishes Fire Prevention and Building Inspection resources. ERRCS specifics require confirmation with Fire Prevention.",
  "codeBasis": [
    {"label": "Longmont Fire Services – Fire Prevention", "url": "https://www.longmontcolorado.gov/departments/departments-n-z/public-safety-department/fire-services/fire-prevention"},
    {"label": "Longmont Building Inspection", "url": "https://www.longmontcolorado.gov/departments/departments-e-m/planning-and-development-services/building-inspection"},
    {"label": "Longmont Municipal Code (Municode)", "url": "https://library.municode.com/co/longmont/codes/municipal_code"}
  ],
  "naming": {
    "published": false,
    "template": "LONGMONT_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm Longmont Fire Prevention testing thresholds/grid and any local amendments."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit through Building Inspection / Planning & Development Services and coordinate Fire Prevention review for ERRCS scope.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Confirm the specific intake workflow for Fire Prevention / ERRC review.",
          "links": [0,1]
        }
      ]
    }
  ]
});
