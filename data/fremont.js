window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "fremont",
  "district": "Fremont County (context / district verification required)",
  "confidence": "low",
  "selectionReason": "County-level context only; you must identify the applicable fire protection district for ERCES requirements and submission workflow.",
  "codeBasis": [
    {
      "label": "Fremont County – Building Applications & Submittal Information",
      "url": "https://fremontcountyco.gov/building/applications-and-submittal-information"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_FREMONT_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Identify the applicable fire district/AHJ; county page does not publish ERCES-specific permitting steps."
    ]
  },
  "groups": [
    {
      "title": "Context Only (Verification-heavy)",
      "items": [
        {
          "text": "County materials reference ERCES conceptually; no specific district permit workflow identified—verify with local fire district/AHJ.",
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
