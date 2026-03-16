window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "smfr",
  "district": "South Metro Fire Rescue (SMFR)",
  "confidence": "medium",
  "selectionReason": "High-volume metro AHJ using Accela for plan review; fee schedule references radio amplification.",
  "codeBasis": [
    {
      "label": "SMFR Development & Construction (portal hub)",
      "url": "https://www.southmetro.org/726/Development-Construction"
    },
    {
      "label": "SMFR Accela Tutorial Guides (submittal help)",
      "url": "https://www.southmetro.org/585/Accela-Tutorial-Guides"
    },
    {
      "label": "SMFR Fee schedule / resolution list (radio amplification appears in fee schedule docs)",
      "url": "https://www.southmetro.org/DocumentCenter"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_SMFR_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN",
      "RESPONSE"
    ],
    "notes": [
      "No clearly published ERCES file naming standard located; confirm with reviewer."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit through SMFR Development & Construction / Accela portal; confirm jurisdiction overlay.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Some municipalities overlay building permitting; confirm who is lead.",
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
          "text": "Plans/shop drawings + riser/single-line + antenna layout.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": []
        },
        {
          "text": "RF design (link budget, isolation, donor strategy) + acceptance test plan.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Verify thresholds/grid spacing with plan reviewer.",
          "links": []
        },
        {
          "text": "Monitoring/annunciation + standby power calcs.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Confirm runtime basis accepted by SMFR.",
          "links": []
        }
      ]
    },
    {
      "title": "Naming & Upload",
      "items": [
        {
          "text": "No public SMFR ERCES-specific naming convention found; use internal standard and preserve names on resubmittals.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Ask assigned reviewer for preference.",
          "links": [
            0,
            1
          ]
        }
      ]
    }
  ]
});
