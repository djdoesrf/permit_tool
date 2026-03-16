window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "denver",
  "district": "Denver Fire Department / City & County of Denver",
  "confidence": "high",
  "selectionReason": "Anchor AHJ for Colorado ERCES permitting; Denver publishes adopted code resources and ERCES amendments.",
  "codeBasis": [
    {
      "label": "Denver Building & Fire Codes page (current code cycle info)",
      "url": "https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Building-Codes-Policies-and-Guides"
    },
    {
      "label": "2025 Denver Fire Code PDF (includes IFC 510 amendments)",
      "url": "https://denvergov.org/files/assets/public/v/1/community-planning-and-development/documents/ds/building-codes/2025_Denver_Fire_Code.pdf"
    },
    {
      "label": "DFD RES/BDA Radio System Policy 510-1 (legacy but still referenced)",
      "url": "https://www.denvergov.org/files/assets/public/v/1/fire-department/documents/denver-fire-code/dfd-res-bda-radio-sys-policy-510-1-rev.-12-16.pdf"
    },
    {
      "label": "Denver Fire – Plan Review / Construction / Systems / Testing / Occupancy (permit routing)",
      "url": "https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Fire-Department/Permits-Licensing/Plan-Review-Construction-Systems-Testing-Occupancy"
    }
  ],
  "naming": {
    "published": true,
    "template": "S#-DATE-ADDRESS-EXPLANATION-DESCRIPTOR.pdf (confirm current rule)",
    "descriptorExamples": [
      "DWGS",
      "DOCS",
      "APPS"
    ],
    "notes": [
      "Verify the current naming rule in Denver portal guidance; keep filenames stable across resubmittals."
    ]
  },
  "groups": [
    {
      "title": "Intake & Code Basis",
      "items": [
        {
          "text": "Confirm Denver code cycle and cite 2025 Denver Fire Code / adopted I-Codes in narrative.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "Use this as your compliance anchor.",
          "links": [
            0,
            1
          ]
        },
        {
          "text": "Confirm ERCES/ERRCS scope and permit routing (construction vs operational/testing permits).",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Routing varies depending on project stage; confirm with reviewer.",
          "links": [
            3,
            1
          ]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "ERCES plans/shop drawings (antenna layout, riser/single-line, pathways, equipment locations).",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            1
          ]
        },
        {
          "text": "RF design package (survey basis, link budget, isolation/oscillation prevention).",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            1
          ]
        },
        {
          "text": "Monitoring/annunciation + FACP interface details explicitly shown.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Common reviewer friction point if implied only.",
          "links": [
            1
          ]
        },
        {
          "text": "Battery/UPS standby calculations + protected power detail.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "",
          "links": [
            1
          ]
        },
        {
          "text": "Acceptance test/grid plan (including critical areas) aligned to Denver thresholds.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Verify current thresholds with DFD/plan reviewer.",
          "links": [
            1,
            2
          ]
        }
      ]
    },
    {
      "title": "Naming & Upload",
      "items": [
        {
          "text": "Use Denver e-submittal and file/naming conventions if specified in portal/reviewer notes.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Denver guidance moves; confirm current naming rules at submission time.",
          "links": [
            3
          ]
        }
      ]
    }
  ]
});
