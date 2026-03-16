window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "lakewood",
  "district": "Lakewood Fire Department (City of Lakewood)",
  "confidence": "low",
  "selectionReason": "Lakewood provides fire prevention and building permit pages; ERCES specifics are not clearly published—treat as verification-heavy.",
  "codeBasis": [
    {
      "label": "Lakewood Fire Prevention",
      "url": "https://www.lakewood.org/Government/Departments/Fire-Department/Fire-Prevention"
    },
    {
      "label": "Lakewood Building Permits",
      "url": "https://www.lakewood.org/Government/Departments/Community-Resources/Building-Division/Permits"
    },
    {
      "label": "Lakewood Municipal Code (Municode)",
      "url": "https://library.municode.com/co/lakewood/codes/code_of_ordinances"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_LAKEWOOD_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm adopted IFC edition and any local ERCES criteria with Fire Prevention."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Fire Prevention reviews special systems; routing may be standalone or via building permit.",
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
          "text": "Provide full ERCES design package; verify thresholds and acceptance test expectations with AHJ.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "",
          "links": [
            0
          ]
        }
      ]
    }
  ]
});
