window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "nmfrd",
  "district": "North Metro Fire Rescue District (NMFRD)",
  "confidence": "high",
  "selectionReason": "North Metro publishes an explicit Radio Amplification Systems submittal content checklist (PE stamp, signal strengths, NEMA, standby, monitoring).",
  "codeBasis": [
    {
      "label": "NMFRD Radio Amplification Systems (explicit submittal content list)",
      "url": "https://www.northmetrofire.org/533/Radio-Amplification-Systems"
    },
    {
      "label": "NMFRD Permits & Inspections",
      "url": "https://www.northmetrofire.org/199/Permits-Inspections"
    },
    {
      "label": "NMFRD Application for Plan Review (online)",
      "url": "https://www.northmetrofire.org/FormCenter/Permits-Inspections-4/Application-for-Plan-Review-43"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_NMFRD_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS"
    ],
    "notes": [
      "No published filename rule located; ask reviewer if they have a preferred naming pattern."
    ]
  },
  "groups": [
    {
      "title": "Explicit NMFRD Requirements (Radio Amplification)",
      "items": [
        {
          "text": "PE stamp/seal (CO-licensed), signed/dated; submit all docs in PDF.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Explicit on NMFRD radio amplification page.",
          "links": [
            0
          ]
        },
        {
          "text": "Scaled floor plans showing system layout + measured and expected signal strengths.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            0
          ]
        },
        {
          "text": "NEMA cabinet type, standby power method, fire alarm monitoring method, and manufacturer data sheets.",
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
      "title": "Plan Review Workflow",
      "items": [
        {
          "text": "Submit via NMFRD Application for Plan Review and attach complete package.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "NMFRD does not accept paper plans.",
          "links": [
            1,
            2
          ]
        },
        {
          "text": "Verify adopted code edition and any district-specific acceptance templates (not fully published).",
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
