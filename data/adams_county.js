window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "adams_county",
  "district": "Adams County (Unincorporated) – Building Safety",
  "confidence": "medium",
  "selectionReason": "Denver-metro county AHJ for unincorporated areas; Building Safety and code resources are published but ERRCS specifics may be enforced by the serving fire protection district.",
  "codeBasis": [
    {"label": "Adams County – Building Safety", "url": "https://adcogov.org/building-safety"},
    {"label": "Adams County Code of Ordinances (Municode)", "url": "https://library.municode.com/co/adams_county/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "ADAMSCO_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "County-level naming rules not found for ERRCS; confirm upload expectations in the County portal.",
      "Confirm which fire protection district is the fire-code AHJ for the address; they may have additional ERRCS requirements."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Confirm jurisdiction is unincorporated Adams County; submit via Adams County Building Safety and coordinate with the serving fire protection district for IFC 510/ERRCS review.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Many metro parcels fall under incorporated cities; confirm jurisdiction first.",
          "links": [0]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide ERRCS design drawings + narrative + equipment cutsheets and any required calculations.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Confirm County vs. fire district requirements for stamps, calculations, and plan set formatting.",
          "links": [0,1]
        }
      ]
    },
    {
      "title": "RF / Testing Criteria",
      "items": [
        {
          "text": "Include acceptance test plan and final coverage testing documentation per adopted IFC 510 and the serving fire district’s policy.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Adams County-level published thresholds/grid not identified here; confirm with the serving fire district.",
          "links": [1]
        }
      ]
    }
  ]
});
