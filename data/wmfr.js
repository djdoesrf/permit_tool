window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "wmfr",
  "district": "West Metro Fire Rescue (WMFR)",
  "confidence": "medium",
  "selectionReason": "Metro AHJ with published plan review process, adopted codes table, fees, and ERCES/BDA technical bulletins.",
  "codeBasis": [
    {
      "label": "WMFR Plan Review Submittal Process",
      "url": "https://www.westmetrofire.org/plan-review-submittal-process"
    },
    {
      "label": "WMFR Adopted Fire Codes",
      "url": "https://www.westmetrofire.org/adopted-fire-codes-for-west-metro-fire-rescue"
    },
    {
      "label": "WMFR Fees",
      "url": "https://www.westmetrofire.org/fees"
    },
    {
      "label": "WMFR Technical Bulletins (includes BDA/Existing building bulletins)",
      "url": "https://www.westmetrofire.org/technical-bulletins"
    },
    {
      "label": "WMFR Schedule a Construction Inspection (BDA grid report email path)",
      "url": "https://www.westmetrofire.org/schedule-a-construction-inspection"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_WMFR_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "CALCS",
      "CUTSHEETS",
      "GRIDREPORT"
    ],
    "notes": [
      "Confirm whether WMFR wants one combined PDF or separated packages."
    ]
  },
  "groups": [
    {
      "title": "Intake & Code Basis",
      "items": [
        {
          "text": "Confirm specific jurisdiction within WMFR and adopted code edition for that jurisdiction.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "WMFR lists jurisdiction-by-jurisdiction adopted code table.",
          "links": [
            1
          ]
        },
        {
          "text": "Submit via WMFR plan review submittal process / contractor portal.",
          "required": true,
          "portal": true,
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
          "text": "Plans/shop drawings + RF design + link budget + cutsheets.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            0
          ]
        },
        {
          "text": "Include BDA protection/enclosure requirements if applicable (check technical bulletins).",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Bulletins are key for reviewer expectations.",
          "links": [
            3
          ]
        },
        {
          "text": "Inspection closeout: send BDA grid reports to inspections@westmetrofire.org if required.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            4
          ]
        }
      ]
    },
    {
      "title": "Naming & Upload",
      "items": [
        {
          "text": "No public WMFR ERCES naming standard found; use internal naming and confirm with reviewer.",
          "required": true,
          "portal": true,
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
