window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "parker",
  "district": "Town of Parker (Building Division / Fire Code AHJ by Service Area)",
  "confidence": "medium",
  "selectionReason": "Douglas County municipality with high construction volume; publishes Building Division resources. Fire-code (including IFC 510) enforcement may be by the serving fire protection district for the address.",
  "codeBasis": [
    {"label": "Town of Parker – Building Division", "url": "https://www.parkeronline.org/217/Building-Division"},
    {"label": "Parker Municipal Code (Municode)", "url": "https://library.municode.com/co/parker/codes/municipal_code"}
  ],
  "naming": {
    "published": false,
    "template": "PARKER_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm serving fire district (often SMFR or other) and apply their ERRCS policy/testing thresholds."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit via Town of Parker Building Division; identify serving fire protection district and coordinate ERRCS review/testing with that AHJ.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "This build does not include a Parker-hosted ERRCS handout; treat fire district requirements as controlling for testing/monitoring details.",
          "links": [0]
        }
      ]
    }
  ]
});
