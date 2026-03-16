window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "aurora",
  "district": "City of Aurora (Building Division / Fire Code Enforcement)",
  "confidence": "medium",
  "selectionReason": "NEW: Major Colorado metro-area AHJ (Arapahoe/Adams/Douglas) with published guidance requiring ERRC evaluation on commercial projects and a defined permit trigger when coverage fails.",
  "codeBasis": [
    {"label": "Aurora Site Plan Note – Emergency Responder Radio Coverage (ERRC) (2016)", "url": "https://www.auroragov.org/UserFiles/Servers/Server_1881137/File/Business%20Services/Development%20Center/Development%20Process/Site%20Plan%20Note-Emergency%20Responder%20Radio%20Coverage-2016.pdf"},
    {"label": "City of Aurora – Commercial Plan Review Plan Submittal Checklist (Revised 11/2015)", "url": "https://cdnsm5-hosted.civiclive.com/UserFiles/Servers/Server_1881137/File/Business%20Services/Development%20Center/Permits/Building%20and%20Life%20Safety%20Permits/Forms%20and%20Applications/002396.pdf"},
    {"label": "City of Aurora – Building Division Permits (contact + apply online)", "url": "https://www.auroragov.org/business_services/building_division/permits"},
    {"label": "City of Aurora – Fee Schedule (includes Emergency Responder Radio Coverage installer contractor license)", "url": "https://www.auroragov.org/UserFiles/Servers/Server_1881137/File/Business%20Services/Development%20Center/Fees/Fee%20Schedule%203.pdf"}
  ],
  "naming": {
    "published": false,
    "template": "ERRC/ERRCS – <PROJECT_ADDRESS or PERMIT#> – <DOC_TYPE> – <REV/DATE>",
    "descriptorExamples": ["PLANS", "CALCS", "CUTSHEETS", "TESTPLAN", "RESPONSE"],
    "notes": [
      "Aurora publishes evaluation/permit trigger guidance, but does not publish a formal file-naming convention in the sources linked here.",
      "Confirm preferred naming and upload slots inside Aurora’s online permitting workflow (Aurora4Biz / city portal) during intake."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Include the ERRC evaluation note in project documents and plan for the required third-party RF assessment at final frame and final electrical inspections.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Aurora requires a qualified independent 3rd party to assess radio frequency levels near the end of construction (final frame/final electrical).",
          "links": [0, 1]
        },
        {
          "text": "If the building fails the preliminary radio surveillance, submit for an ERRC system permit (plans required) before installing any ERRC/ERRCS equipment.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Aurora’s published note states a failed surveillance requires a licensed contractor to submit plans and obtain a building permit for ERRC installation prior to installation.",
          "links": [0]
        },
        {
          "text": "Confirm the correct Aurora submission route (apply online / permit center contacts) and include the project contact information Aurora requires for routing and notifications.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Aurora provides an apply-online link and permit center contact information; align submittal with the current portal workflow used for your permit type.",
          "links": [2]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide stamped/sealed ERRC system shop drawings and supporting documentation when an ERRC system permit is triggered (failed radio surveillance).",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Aurora’s commercial plan review checklist confirms ERRC systems are separately permitted; the city does not publish detailed ERRC plan content requirements in the sources above—confirm required drawings/calcs/cutsheets with Aurora plan review.",
          "links": [1]
        },
        {
          "text": "Use a contractor properly credentialed for Aurora’s Emergency Responder Radio Coverage work (licensing may be required).",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Aurora fee schedule lists an 'Emergency Responder Radio Coverage' contractor license category—confirm whether your installer must hold this license for permitting/inspection signoff.",
          "links": [3]
        }
      ]
    },
    {
      "title": "RF / Testing Criteria",
      "items": [
        {
          "text": "Perform the required third-party in-building RF assessment at the required inspection stage and deliver pass/fail results to the GC and Aurora Building Division.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Aurora’s site note requires the 3rd party to provide test results to both the GC and the Aurora Building Division.",
          "links": [0]
        },
        {
          "text": "If installing an ERRC system, confirm Aurora’s acceptance testing method, coverage targets, frequency band(s), and reporting format (test grid / DAQ / signal thresholds).",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Aurora’s published site note and commercial plan review checklist establish the trigger/process but do not state specific coverage percentages, DAQ targets, or frequency requirements—verify with Aurora plan review / fire code official.",
          "links": [0, 1]
        }
      ]
    },
    {
      "title": "Monitoring & Power",
      "items": [
        {
          "text": "If an ERRC system is installed, confirm whether Aurora requires fire alarm system interface, monitoring (supervisory/alarm signals), and backup power duration for the ERRC equipment.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Aurora does not publish monitoring/power requirements in the sources above; confirm IFC/NFPA expectations and any local amendments during plan review.",
          "links": [1]
        }
      ]
    },
    {
      "title": "Closeout / Inspection",
      "items": [
        {
          "text": "Coordinate final inspection approvals: ERRC evaluation at final frame/final electrical; if ERRC system installed, schedule acceptance testing/inspection per Aurora requirements before final signoff/CO.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "Aurora explicitly ties evaluation to late-stage inspections; acceptance testing steps for installed ERRC are not detailed in the cited documents—confirm closeout workflow with Aurora.",
          "links": [0, 1]
        },
        {
          "text": "Plan for reassessment if significant building modifications occur after Certificate of Occupancy (CO).",
          "required": false,
          "portal": false,
          "verify": false,
          "note": "Aurora’s site note states future interior/exterior modifications after original CO require reassessment for adequate radio frequency coverage.",
          "links": [0]
        }
      ]
    }
  ]
});
