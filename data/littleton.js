window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "littleton",
  "district": "Littleton Fire Rescue (City of Littleton)",
  "confidence": "low",
  "selectionReason": "Littleton has Fire Prevention and Building permits portals, but no dedicated ERCES criteria packet identified publicly.",
  "codeBasis": [
    {
      "label": "Littleton Fire Prevention",
      "url": "https://www.littletongov.org/city-services/fire-rescue/fire-prevention"
    },
    {
      "label": "Littleton Building Division Permits",
      "url": "https://www.littletongov.org/city-services/building-division/permits"
    },
    {
      "label": "Littleton Municipal Code (Municode)",
      "url": "https://library.municode.com/co/littleton/codes/code_of_ordinances"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_LITTLETON_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Ask AHJ for any ERCES-specific criteria packet or acceptance test template."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Fire Prevention Bureau review; permit routing via building division portal (verify whether standalone fire permit applies).",
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
          "text": "Provide plans, RF design, standby power, monitoring, cut sheets, acceptance test plan; confirm thresholds with AHJ.",
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
