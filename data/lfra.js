window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "lfra",
  "district": "Loveland Fire Rescue Authority (LFRA)",
  "confidence": "high",
  "selectionReason": "LFRA publishes an explicit ERCES submittal requirements list and a retransmission authorization workflow.",
  "codeBasis": [
    {
      "label": "LFRA Permits, Applications & Fees (ERCES submittal requirements)",
      "url": "https://lfra.org/198/Permits-Applications-Fees"
    },
    {
      "label": "LFRA Permit Application (select Radio Amplification System)",
      "url": "https://lfra.org/FormCenter/Community-Safety-6/Permit-Application-55"
    },
    {
      "label": "LFRA Contractor Licensing",
      "url": "https://lfra.org/192/Contractor-Licensing"
    },
    {
      "label": "LFRA 2024 IFC & NFPA Standards",
      "url": "https://lfra.org/190/2024-IFC-NFPA-Standards"
    },
    {
      "label": "LFRA Retransmission Authorization Form (PDF)",
      "url": "https://lfra.org/DocumentCenter/View/810"
    }
  ],
  "naming": {
    "published": false,
    "template": "Project_Address_LFRA_ERCES_[DocType]_Rev##_YYYYMMDD.pdf",
    "descriptorExamples": [
      "PLANS",
      "CUTSHEETS",
      "LINKBUDGET",
      "RB-AGREEMENT",
      "RESPONSE"
    ],
    "notes": [
      "LFRA form notes upload size limit; coordinate alternative submission if needed."
    ]
  },
  "groups": [
    {
      "title": "Minimum Submittals (as published by LFRA)",
      "items": [
        {
          "text": "Valid LFRA contractor license + completed permit application (Radio Amplification System).",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "",
          "links": [
            0,
            1,
            2
          ]
        },
        {
          "text": "Digital shop drawings (min 1/8\" scale), cut sheets, completed rebroadcast agreement, and link budget.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Explicit list on LFRA permits page.",
          "links": [
            0,
            4
          ]
        }
      ]
    },
    {
      "title": "Activation / Rebroadcast Coordination",
      "items": [
        {
          "text": "Coordinate rebroadcast authorization and first activation with LFRA/Loveland PD; register Class B BDA with FCC if required.",
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
          "text": "No LFRA filename standard published; keep document classes separated (plans/calcs/cutsheets/agreement).",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "LFRA upload limits may force alternate delivery methods.",
          "links": [
            0,
            1
          ]
        }
      ]
    }
  ]
});
