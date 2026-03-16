window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "vail",
  "district": "Vail Fire & Emergency Services (Town of Vail)",
  "confidence": "medium",
  "selectionReason": "Vail publishes a fire permits page referencing ERRC/BDA and a municipal code ordinance on radio coverage.",
  "codeBasis": [
    {
      "label": "Vail Fire Permits (includes Emergency Responder Radio Coverage/BDA)",
      "url": "https://www.vail.gov/government/departments/fire/fire-permits"
    },
    {
      "label": "Town of Vail Code – radio coverage ordinance (AmLegal)",
      "url": "https://codelibrary.amlegal.com/codes/vailco/latest/vail_co/0-0-0-7052"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_VFES_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "No dedicated portal found; verify how VFES wants files delivered."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Follow Vail Fire Permits guidance for ERRC/BDA and local ordinance; confirm submission workflow with Fire Prevention.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "",
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
          "text": "Provide plans, RF design, standby power, monitoring, cut sheets, acceptance test plan consistent with IFC 510/local ordinance.",
          "required": true,
          "portal": false,
          "verify": true,
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
