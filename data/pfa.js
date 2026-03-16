window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "pfa",
  "district": "Poudre Fire Authority (PFA)",
  "confidence": "medium",
  "selectionReason": "PFA provides contractor plan review/permitting pages and references an ERCES submittal checklist within plan review workflow.",
  "codeBasis": [
    {
      "label": "PFA Contractors, Plan Reviews and Permits (ERCES submittal checklist referenced)",
      "url": "https://www.poudre-fire.org/online-services/contractors-plan-reviews-and-permits"
    },
    {
      "label": "PFA Development, Construction and Permitting",
      "url": "https://www.poudre-fire.org/programs-services/fire-prevention-and-community-risk-reduction/development-construction-and-permitting"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_PFA_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "RFREPORT",
      "CALCS",
      "CUTSHEETS",
      "TESTPLAN"
    ],
    "notes": [
      "Confirm any portal-specific naming rules; keep filenames stable on resubmittals."
    ]
  },
  "groups": [
    {
      "title": "Routing",
      "items": [
        {
          "text": "Use PFA plan review / contractor services workflow for ERCES/ERRC permits.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Portal specifics may vary; confirm with PFA plan review.",
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
          "text": "Include ERCES submittal checklist items: engineered design, RF coverage documentation, standby power, monitoring, cut sheets, acceptance testing plan.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "PFA checklist is embedded; confirm latest via portal/contact.",
          "links": [
            0
          ]
        }
      ]
    }
  ]
});
