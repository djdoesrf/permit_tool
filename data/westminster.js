window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "westminster",
  "district": "City of Westminster (Fire Department / Community Development)",
  "confidence": "medium",
  "selectionReason": "Large Adams/Jefferson County municipality; publishes Fire Department and Community Development landing pages. ERRCS specifics likely follow adopted IFC 510 and any local amendments; confirm with Fire Prevention.",
  "codeBasis": [
    {"label": "Westminster Fire Department", "url": "https://www.cityofwestminster.us/PublicSafety/FireDepartment"},
    {"label": "Westminster Community Development", "url": "https://www.cityofwestminster.us/CommunityDevelopment"},
    {"label": "Westminster Municipal Code (Municode)", "url": "https://library.municode.com/co/westminster/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "WESTMINSTER_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm whether Westminster Fire requires a separate radio amplification permit or pre-approval step."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit through Westminster Community Development; coordinate Fire Department review for ERRCS scope.",
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
