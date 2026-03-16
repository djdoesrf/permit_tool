window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "jefferson_county",
  "district": "Jefferson County (Unincorporated) – Building Safety",
  "confidence": "medium",
  "selectionReason": "Major metro county AHJ for unincorporated areas; Building Safety guidance is published but ERRCS enforcement often involves the serving fire protection district.",
  "codeBasis": [
    {"label": "Jefferson County – Building Safety", "url": "https://www.jeffco.us/955/Building-Safety"},
    {"label": "Jefferson County Code of Ordinances (Municode)", "url": "https://library.municode.com/co/jefferson_county/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "JEFFCO_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "County-level naming rules not found for ERRCS; confirm upload expectations in the County portal.",
      "Confirm the serving fire protection district for the address; they may require a separate radio amplification permit."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Confirm jurisdiction is unincorporated Jefferson County; submit via Building Safety and coordinate with the serving fire protection district for IFC 510/ERRCS review.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "If project is in an incorporated city (Lakewood/Arvada/Golden/etc.), use that city’s AHJ instead.",
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
          "note": "Confirm whether the serving fire district requires a specific template or additional RF documentation.",
          "links": [0,1]
        }
      ]
    }
  ]
});
