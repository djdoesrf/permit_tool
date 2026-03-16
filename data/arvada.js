window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "arvada",
  "district": "Arvada Fire Protection District",
  "confidence": "high",
  "selectionReason": "Arvada publishes a Radio Amplification page and routes submissions through the city's permitting portal.",
  "codeBasis": [
    {
      "label": "Arvada Radio Amplification",
      "url": "https://www.arvadaco.gov/416/Radio-Amplification"
    },
    {
      "label": "Arvada Permits Portal (eTRAKiT)",
      "url": "https://arvadapermits.org"
    },
    {
      "label": "Arvada Fire – 2018 IFC Adoption & Amendments (includes IFC 510 local language)",
      "url": "https://www.arvadafireco.gov/DocumentCenter/View/218/2018-IFC-Adoption-and-Amendments-PDF"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_AFPD_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm portal upload grouping and any sheet naming preferences."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Radio Amplification permit required; submit via Arvada permitting portal.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "",
          "links": [
            0,
            1
          ]
        },
        {
          "text": "Provide proof of coverage/testing per Arvada process (upload prior to occupancy/CO where applicable).",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
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
          "text": "Provide plans + RF design + standby power + monitoring + cutsheets + acceptance test plan per Arvada’s Radio Amplification checklist.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "Arvada publishes a required submittal list; verify any project-specific additions with the Radio Systems Administrator.",
          "links": [
            0
          ]
        }
      ]
    },
    {
      "title": "RF / Testing Criteria",
      "items": [
        {
          "text": "Confirm any locally amended minimum signal strength criteria (e.g., -95 dBm) and coordinate system parameters with the AHJ prior to installation where required.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Local amendment language is contained in the adoption/amendments document; confirm the current enforceable criteria with the AHJ for your project.",
          "links": [
            2
          ]
        }
      ]
    }
  ]
});
