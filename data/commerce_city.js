window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "commerce_city",
  "district": "City of Commerce City (Fire & Rescue / Community Development)",
  "confidence": "medium",
  "selectionReason": "Major Adams County municipality with extensive industrial/commercial development; publishes Fire & Rescue and Building Safety intake pages. ERRCS specifics still may require confirmation with Fire Prevention.",
  "codeBasis": [
    {"label": "Commerce City – Fire & Rescue", "url": "https://www.c3gov.com/government/departments/fire-rescue"},
    {"label": "Commerce City – Building Safety", "url": "https://www.c3gov.com/government/departments/community-development/building-safety"},
    {"label": "Commerce City Municipal Code (Municode)", "url": "https://library.municode.com/co/commerce_city/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "COMMERCE_CITY_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm whether Fire & Rescue requires a separate radio amplification permit or pre-approval step."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit permit intake via Commerce City Community Development; coordinate fire code review with Commerce City Fire & Rescue for ERRCS scope.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Confirm the specific portal workflow for Fire Prevention / ERRC review.",
          "links": [0,1]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide ERRCS drawings, narrative, equipment cutsheets, and monitoring/backup power details consistent with adopted IFC 510.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Commerce City-specific thresholds/grid/testing were not identified in a city-hosted policy in this build; confirm with Fire Prevention.",
          "links": [2]
        }
      ]
    }
  ]
});
