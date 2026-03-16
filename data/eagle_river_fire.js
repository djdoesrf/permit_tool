window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "eagle_river_fire",
  "district": "Eagle River Fire Protection District",
  "confidence": "medium",
  "selectionReason": "Added because Eagle River Fire Protection District serves high-occupancy resort and multifamily development areas in Eagle County (including Edwards, Eagle-Vail, and surrounding communities) where IFC 510 ERCES compliance is commonly triggered and publishes Fire Prevention and code information.",
  "codeBasis": [
    {"label": "Eagle River Fire Protection District – Fire Prevention", "url": "https://www.eagleriverfire.org/fire-prevention"},
    {"label": "Eagle River Fire Protection District – Permits & Inspections", "url": "https://www.eagleriverfire.org/permits"},
    {"label": "Eagle River Fire Protection District – Codes & Standards", "url": "https://www.eagleriverfire.org/codes-and-standards"},
    {"label": "Eagle County Land Use & Building – Adopted Codes (IFC reference)", "url": "https://www.eaglecounty.us/planning/building"}
  ],
  "naming": {
    "published": false,
    "template": "ERFPD_<PROJECT-ADDRESS>_<DESCRIPTOR>_<YYYYMMDD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","GRIDTEST"],
    "notes": [
      "No Eagle River Fire Protection District-specific ERCES/ERRCS file naming convention was identified in publicly available materials.",
      "Eagle River Fire Protection District enforces an adopted edition of the IFC; ERCES requirements are governed under IFC Section 510 as adopted and amended.",
      "Use consistent filenames separating design submittals from acceptance and annual test documentation."
    ]
  },
  "groups": [
    {"title":"Intake & Portal","items":[
      {"text":"Submit ERCES / ERRCS / Radio Amplification (BDA/DAS) system plans through Eagle River Fire Protection District Fire Prevention as part of the fire permit and plan review process.","required":true,"portal":true,"verify":false,"note":"Eagle River Fire Prevention manages plan review and inspections for fire protection and radio amplification systems when required.","links":[0,1]},
      {"text":"Confirm ERCES applicability during building and fire plan review in accordance with adopted IFC Section 510.","required":true,"portal":true,"verify":false,"note":"Applicability of in-building emergency responder radio coverage is determined during plan review under the adopted IFC.","links":[2,3]}
    ]},
    {"title":"Technical Package","items":[
      {"text":"Provide a complete ERCES design package including floor plans with antenna layout, riser diagram, equipment specifications, survivability details, battery calculations, and predictive RF coverage calculations.","required":true,"portal":true,"verify":true,"note":"No standalone ERFPD ERCES guideline was identified; confirm required drawing set, cable survivability rating, and battery duration with Fire Prevention prior to submittal.","links":[0,2]},
      {"text":"Identify donor signal source and demonstrate compatibility with the public safety radio system serving the Eagle River Fire Protection District area.","required":true,"portal":false,"verify":true,"note":"IFC 510 requires system compatibility; confirm serving radio authority, approved frequency bands, and coordination requirements with the AHJ.","links":[2]}
    ]},
    {"title":"RF / Testing Criteria","items":[
      {"text":"Provide in-building emergency responder radio coverage meeting IFC Section 510 performance criteria as adopted by Eagle River Fire Protection District.","required":true,"portal":false,"verify":false,"note":"Adopted IFC Section 510 governs minimum signal strength, required coverage areas including critical areas, and system survivability.","links":[2]},
      {"text":"Coordinate acceptance testing, grid layout methodology, and signal strength thresholds with Eagle River Fire Protection District prior to final inspection.","required":true,"portal":false,"verify":true,"note":"No published ERFPD-specific amendment to grid size or dBm thresholds was located; confirm exact testing protocol, documentation format, and witness testing requirements with the AHJ.","links":[0,1,2]}
    ]},
    {"title":"Monitoring & Power","items":[
      {"text":"Provide required standby power duration and supervisory monitoring in accordance with IFC Section 510 and referenced NFPA standards as adopted by Eagle River Fire Protection District.","required":true,"portal":false,"verify":true,"note":"Confirm required battery duration (e.g., 12/24-hour standby as adopted), annunciation points, and fire alarm supervisory signal integration during plan review.","links":[2]}
    ]},
    {"title":"Closeout / Inspection","items":[
      {"text":"Schedule final fire inspection after successful acceptance testing and provide grid test results, as-built drawings, and coverage documentation to Eagle River Fire Protection District.","required":true,"portal":true,"verify":false,"note":"Final approval is contingent on successful acceptance testing and inspection by Fire Prevention.","links":[0,1]},
      {"text":"Perform annual inspection and testing of the ERCES system in accordance with IFC Section 510 and maintain records for review by Eagle River Fire Protection District.","required":true,"portal":false,"verify":false,"note":"Annual testing and record retention are required under adopted IFC Section 510.","links":[2]}
    ]}
  ]
});
