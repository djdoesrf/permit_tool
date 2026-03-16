window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "golden",
  "district": "City of Golden (Fire Department / Community & Economic Development)",
  "confidence": "medium",
  "selectionReason": "Jefferson County municipality; publishes Fire Department and Building resources. ERRCS specifics likely follow adopted IFC 510; confirm with Fire Prevention.",
  "codeBasis": [
    {"label": "City of Golden – Fire Department", "url": "https://www.cityofgolden.net/government/departments-divisions/fire/"},
    {"label": "City of Golden – Building", "url": "https://www.cityofgolden.net/government/departments-divisions/community-economic-development/building/"},
    {"label": "Golden Municipal Code (Municode)", "url": "https://library.municode.com/co/golden/codes/municipal_code"}
  ],
  "naming": {
    "published": false,
    "template": "GOLDEN_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm whether Golden Fire requires a separate radio amplification permit or pre-approval step."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit through Golden Building (Community & Economic Development) and coordinate Fire Department review for ERRCS scope.",
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
