window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "boulder",
  "district": "Boulder Fire‑Rescue (City of Boulder)",
  "confidence": "low",
  "selectionReason": "Boulder pages reviewed did not yield a dedicated ERCES guide; include as verification gap placeholder.",
  "codeBasis": [
    {
      "label": "Boulder Fire-Rescue (department landing)",
      "url": "https://bouldercolorado.gov/government/departments/fire-rescue"
    },
    {
      "label": "City of Boulder Building Permits",
      "url": "https://bouldercolorado.gov/services/building-permits"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_BOULDER_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Verify permit type, thresholds, and acceptance process directly with Boulder Fire Prevention."
    ]
  },
  "groups": [
    {
      "title": "Verification Gap",
      "items": [
        {
          "text": "No dedicated Boulder ERCES/BDA permit guidance found; contact AHJ for thresholds, permit type, and submission routing.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Treat as verification-first.",
          "links": [
            0,
            1
          ]
        }
      ]
    }
  ]
});
