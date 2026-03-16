window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "centennial",
  "district": "City of Centennial (Building Division / Fire Services by Contract)",
  "confidence": "medium",
  "selectionReason": "Major Arapahoe County municipality; publishes Building Division and public safety information. Fire-code enforcement (including IFC 510) is by the serving contracted fire protection district (e.g., SMFR, Cunningham) for the address.",
  "codeBasis": [
    {"label": "Centennial – Building", "url": "https://www.centennialco.gov/Government/Departments/Community-Development/Building"},
    {"label": "Centennial – Public Safety", "url": "https://www.centennialco.gov/Government/City-Services/Public-Safety"},
    {"label": "Centennial Municipal Code (Municode)", "url": "https://library.municode.com/co/centennial/codes/municipal_code"}
  ],
  "naming": {
    "published": false,
    "template": "CENTENNIAL_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Determine the serving fire district for the address and apply their ERRCS policy/testing thresholds."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit via Centennial Building Division; identify serving fire protection district and coordinate ERRCS review/testing with that AHJ.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Centennial uses contracted fire districts; the district’s ERRCS requirements typically control testing/monitoring specifics.",
          "links": [0,1]
        }
      ]
    }
  ]
});
