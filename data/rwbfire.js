window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "rwbfire",
  "district": "Red, White & Blue Fire Protection District (Summit County, CO)",
  "confidence": "medium",
  "selectionReason": "Added new Colorado mountain AHJ with published life-safety standards/policies, including an ERRCS/Radio Amplification policy section and a public permit intake path.",
  "codeBasis": [
    { "label": "RWB Codes page (entry point for policies, permits, amendments)", "url": "https://www.rwbfire.org/codes" },
    { "label": "Life Safety Standards Guide (entry point)", "url": "https://www.rwbfire.org/life-safety-standards-guide" },
    { "label": "Life Safety Policy Section 9: Emergency Responder Radio Coverage Systems (PDF)", "url": "https://www.rwbfire.org/files/dd5e1b4f6/Life%2BSafety%2BPolicy%2BSection%2B9.pdf" },
    { "label": "Life Safety Policy Section 1: Plan Review Submittals (PDF)", "url": "https://www.rwbfire.org/files/3aae7efe2/Life%2BSafety%2BPolicy%2BSection%2B1.pdf" },
    { "label": "Resolution 2019-06: 2018 IFC adoption & amendments (PDF)", "url": "https://www.rwbfire.org/files/e59061555/2018%2BIFC%2BAdoption%2BFINAL.pdf" },
    { "label": "Application for Construction / Life Safety / Systems and Special Permits (online)", "url": "https://www.rwbfire.org/application-for-construction-life-safety-systems-and-special-permits" }
  ],
  "naming": {
    "published": false,
    "template": "RWB_<PROJECT>_<ADDRESS>_<YYYYMMDD>_<DESCRIPTOR>.pdf",
    "descriptorExamples": ["PLANS", "CALCS", "CUTSHEETS", "TESTPLAN", "RESPONSE"],
    "notes": [
      "No explicit upload/naming convention found in the published sources above; verify preferred naming with RWB plan review staff.",
      "Use a stable internal naming pattern across resubmittals until AHJ confirms their preference."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit the Construction / Life Safety / Systems and Special Permits application and upload plans (PDF).",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "RWB provides an online form with plan upload fields.",
          "links": [5]
        },
        {
          "text": "Confirm whether the project qualifies for exemption via testing, or requires an Emergency Responder Radio Coverage System per current adopted code.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Section 9 references exemption through testing per current IFC; confirm local triggers and what documentation they accept for exemption.",
          "links": [2, 4]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide plan review submittal package in PDF including plans, calculations, and specification sheets; include a quick-reference equipment list.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Section 1 describes general plan review submittal expectations.",
          "links": [3]
        }
      ]
    },
    {
      "title": "RF / Testing Criteria",
      "items": [
        {
          "text": "System must be able to receive and transmit signals to the State of Colorado 800 MHz DTR system.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "Explicit requirement in Section 9.",
          "links": [2]
        },
        {
          "text": "Submit acceptance test plan + results (grid method, critical areas) demonstrating code-compliant coverage; confirm thresholds/grid rules with AHJ.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Section 9 references testing per IFC but does not publish numeric thresholds/sampling rules in this short section; confirm required dBm thresholds, grid size, % pass, and DAQ requirements.",
          "links": [2, 4]
        }
      ]
    },
    {
      "title": "Monitoring & Power",
      "items": [
        {
          "text": "Confirm monitoring/annunciation expectations for ERRCS equipment (supervisory, trouble, power fail) and where it must report.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Not explicitly published in Section 9; verify whether they follow IFC/NFPA defaults or have local requirements in another policy section.",
          "links": [0, 1]
        },
        {
          "text": "Confirm standby power (battery/UPS) duration and enclosure/fire-rating requirements for active components and backbones.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Section 9 does not publish standby power durations/enclosure ratings; verify per adopted code and any local amendments.",
          "links": [4]
        }
      ]
    },
    {
      "title": "Closeout / Inspection",
      "items": [
        {
          "text": "Arrange annual inspection/testing of the emergency responder radio coverage system and retain documentation.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "Annual inspection/testing requirement is explicitly stated in Section 9.",
          "links": [2]
        }
      ]
    }
  ]
});
