window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "colorado_springs",
  "district": "Colorado Springs Fire Department (CSFD)",
  "confidence": "high",
  "selectionReason": "CSFD publishes a comprehensive ERCES guidance document and uses Accela for fire permits.",
  "codeBasis": [
    {
      "label": "CSFD ERCES Guidance PDF",
      "url": "https://coloradosprings.gov/system/files/2023-07/2021_ifc_erces_2023_final.pdf"
    },
    {
      "label": "CSFD Fire Protection Systems page (portal context)",
      "url": "https://coloradosprings.gov/fire-department/page/fire-protection-systems"
    },
    {
      "label": "CSFD Accela ACA portal (Fire module)",
      "url": "https://aca-prod.accela.com/COSPRINGS/Cap/CapHome.aspx?TabName=Home&module=Fire"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_CSFD_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm Accela attachment grouping; keep revisions stable."
    ]
  },
  "groups": [
    {
      "title": "CSFD ERCES Guidance",
      "items": [
        {
          "text": "Follow CSFD ERCES guide: submittal package, design criteria, and acceptance testing requirements.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            0
          ]
        },
        {
          "text": "Submit through Accela ACA Fire module (select appropriate permit type).",
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
          "text": "Engineered plans + RF design + standby power + monitoring + cut sheets + acceptance test plan per CSFD guide.",
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
