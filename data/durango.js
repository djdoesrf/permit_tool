window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "durango",
  "district": "Durango Fire & Rescue / Durango FPD",
  "confidence": "medium",
  "selectionReason": "Durango publishes fire protection system permit applications and fee schedule; radio coverage is handled within special systems context.",
  "codeBasis": [
    {
      "label": "Durango Fire Protection System Permit Applications",
      "url": "https://www.durangofire.org/fire-protection-system-permit-applications"
    },
    {
      "label": "Durango Existing Buildings / Special System Reviews",
      "url": "https://www.durangofire.org/existing-buildings"
    },
    {
      "label": "Durango Fees",
      "url": "https://www.durangofire.org/fees"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_DURANGO_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm exact permit type and any local thresholds with Fire Marshal Division."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "ERCES/BDA routed as Fire Protection System Permit; confirm category and fees.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "",
          "links": [
            0,
            2
          ]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide plans, RF design, cut sheets, standby power, monitoring, acceptance test plan.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            0,
            1
          ]
        }
      ]
    }
  ]
});
