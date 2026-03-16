window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "erfpd",
  "district": "Eagle River Fire Protection District (ERFPD)",
  "confidence": "medium",
  "selectionReason": "ERFPD publishes a radio amplification application/info PDF but online submission workflow is not clearly portalized.",
  "codeBasis": [
    {
      "label": "ERFPD Radio Amplification Application and Info (PDF)",
      "url": "https://eagleriverfire.org/wp-content/uploads/2024/05/Radio-Amplification-Application-and-Info-2024.pdf"
    },
    {
      "label": "ERFPD Permits page (may be under update)",
      "url": "https://eagleriverfire.org/staging/6536/fire-alarms-sprinklers-event-contractors/"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_ERFPD_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Verify current submission method (email/in-person) with ERFPD Prevention."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Use ERFPD radio amplification application package; contact prevention for current submission method.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Site indicated permit forms can be under update.",
          "links": [
            0,
            1
          ]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide RF design/coverage maps, cut sheets, standby power, monitoring, acceptance test plan as outlined in ERFPD PDF.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            0
          ]
        }
      ]
    }
  ]
});
