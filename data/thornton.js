window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "thornton",
  "district": "City of Thornton / Thornton Fire",
  "confidence": "high",
  "selectionReason": "Thornton publishes an Emergency Radio Coverage requirements document and routes permits through city fire permits process.",
  "codeBasis": [
    {
      "label": "Thornton Fire Permits & Inspections",
      "url": "https://www.thorntonco.gov/city-services/public-safety/fire-department/fire-permits-inspections"
    },
    {
      "label": "Thornton Emergency Radio Coverage General Requirements (PDF)",
      "url": "https://www.thorntonco.gov/media/file/emergency-radio-coverage-general-requirements"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_THORNTON_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm CityView attachment grouping and any naming rules."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Use Thornton Fire Permits & Inspections process (CityView/portal) for plan review and permits.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Portal details can change; confirm current submission pathway.",
          "links": [
            0
          ]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Follow Thornton ERCES general requirements: RF criteria, standby power, monitoring, acceptance testing documentation.",
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
