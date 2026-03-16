window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "grand_junction",
  "district": "Grand Junction Fire Department / GJ Rural FPD",
  "confidence": "high",
  "selectionReason": "City of Grand Junction explicitly lists Emergency Responder Radio Coverage in Fire Protection System Report Submittals and provides a plan review portal.",
  "codeBasis": [
    {
      "label": "GJ Fire Protection System Report Submittals (includes emergency responder radio coverage)",
      "url": "https://www.gjcity.org/1550/Fire-Protection-System-Report-Submittals"
    },
    {
      "label": "GJ Plan Review Portal (MobileEyes)",
      "url": "https://www.gjcity.org/1085/Plan-Review-Portal"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_GJFD_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm MobileEyes portal attachment conventions."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Submit ERRC/ERRCS as Fire Protection System Report Submittal; upload via MobileEyes portal.",
          "required": true,
          "portal": true,
          "verify": false,
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
          "text": "Provide system design, RF coverage documentation, cut sheets, power/monitoring, acceptance test plan.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Some technical guidance PDFs can be dated; confirm latest with AHJ.",
          "links": [
            0
          ]
        }
      ]
    }
  ]
});
