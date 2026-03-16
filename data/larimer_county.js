window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "larimer_county",
  "district": "Larimer County (Unincorporated) – Building Department",
  "confidence": "medium",
  "selectionReason": "Front Range county AHJ for unincorporated areas; Building Department resources are published, and ERRCS enforcement may be coordinated with serving fire protection districts.",
  "codeBasis": [
    {"label": "Larimer County – Building Department", "url": "https://www.larimer.gov/building"},
    {"label": "Larimer County – Permits", "url": "https://www.larimer.gov/building/permits"},
    {"label": "Larimer County Code of Ordinances (Municode)", "url": "https://library.municode.com/co/larimer_county/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "LARIMERCO_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "County-level naming rules not found for ERRCS; confirm upload expectations in the County portal.",
      "Confirm the serving fire protection district; they may require a separate radio amplification permit or policy compliance."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Confirm jurisdiction is unincorporated Larimer County; submit via Building Department and coordinate with the serving fire protection district for IFC 510/ERRCS review.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "If the address is in Fort Collins/Loveland/etc., use the municipal AHJ instead.",
          "links": [0,1]
        }
      ]
    }
  ]
});
