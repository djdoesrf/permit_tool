window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "wsfr",
  "district": "Windsor Severance Fire Rescue (WSFR)",
  "confidence": "high",
  "selectionReason": "WSFR publishes a Construction & Development Procedures guide that explicitly includes emergency responder radio coverage requirements.",
  "codeBasis": [
    {
      "label": "WSFR Plans & Permits",
      "url": "https://www.wsfr.us/plans-permits"
    },
    {
      "label": "WSFR Construction & Development Procedures Guide",
      "url": "https://www.wsfr.us/construction-development-procedures-guide"
    },
    {
      "label": "WSFR Plan Review Application & Fee Schedule",
      "url": "https://www.wsfr.us/plan-review-application-and-fee-schedule"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_WSFR_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "No dedicated ERCES portal found; use plan review application workflow."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Plan review handled by Community Risk Reduction; follow procedures guide section for Emergency Responder Radio Coverage.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Guide contains specifics; verify latest edition.",
          "links": [
            1
          ]
        },
        {
          "text": "Submit through WSFR plan review application process.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "",
          "links": [
            2
          ]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Include radio amplification system layout, RF coverage goals, cut sheets, standby power, acceptance test plan.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            1
          ]
        }
      ]
    }
  ]
});
