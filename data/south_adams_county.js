window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "south_adams_county",
  "district": "South Adams County Fire Department",
  "confidence": "medium",
  "selectionReason": "Added because South Adams County Fire Department (Adams County industrial/commercial corridor including Commerce City area) serves significant warehouse, industrial, and multifamily development where IFC 510 ERCES compliance is frequently triggered and publishes Fire Prevention and permitting resources.",
  "codeBasis": [
    {"label": "South Adams County Fire Department – Fire Prevention", "url": "https://www.sacfd.org/fire-prevention"},
    {"label": "South Adams County Fire Department – Permits & Inspections", "url": "https://www.sacfd.org/permits"},
    {"label": "South Adams County Fire Department – Codes & Standards", "url": "https://www.sacfd.org/codes-standards"},
    {"label": "Commerce City Municipal Code – Fire Code (IFC adoption reference)", "url": "https://library.municode.com/co/commerce_city/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "SACFD_<PROJECT-ADDRESS>_<DESCRIPTOR>_<YYYYMMDD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","GRIDTEST"],
    "notes": [
      "No South Adams County Fire Department-specific ERCES/ERRCS file naming convention was found in this run.",
      "South Adams County Fire Department enforces an adopted edition of the IFC; ERCES requirements are governed under IFC Section 510 as adopted and amended.",
      "Use consistent filenames separating design submittals from acceptance and annual test documentation."
    ]
  },
  "groups": [
    {"title":"Intake & Portal","items":[
      {"text":"Submit ERCES / ERRCS / Radio Amplification (BDA/DAS) system plans through South Adams County Fire Department Fire Prevention permit and plan review process.","required":true,"portal":true,"verify":false,"note":"SACFD Fire Prevention publishes permit and inspection information for fire protection systems within the district.","links":[0,1]},
      {"text":"Confirm ERCES applicability during plan review in accordance with adopted IFC Section 510.","required":true,"portal":true,"verify":false,"note":"SACFD enforces adopted IFC within its jurisdiction; ERCES requirements are typically identified during building and fire plan review.","links":[2,3]}
    ]},
    {"title":"Technical Package","items":[
      {"text":"Provide a complete ERCES design package including floor plans with antenna layout, riser diagram, equipment specifications, battery calculations, and RF propagation calculations.","required":true,"portal":true,"verify":true,"note":"No standalone SACFD ERCES checklist or guideline was identified in this run; confirm required drawing set, battery duration, and calculation detail with Fire Prevention.","links":[0,2]},
      {"text":"Identify donor signal source, operating frequency bands, and demonstrate compatibility with the jurisdiction’s public safety radio system.","required":true,"portal":false,"verify":true,"note":"IFC 510 requires system compatibility; SACFD-specific public safety radio system documentation was not located in this run and should be confirmed with the AHJ.","links":[2]}
    ]},
    {"title":"RF / Testing Criteria","items":[
      {"text":"Provide in-building emergency responder radio coverage meeting IFC Section 510 performance criteria as adopted by South Adams County Fire Department.","required":true,"portal":false,"verify":false,"note":"SACFD enforces adopted IFC; Section 510 governs ERCES requirements including minimum signal strength and required coverage areas.","links":[2]},
      {"text":"Coordinate acceptance testing, grid layout, and signal strength thresholds with South Adams County Fire Department prior to final inspection.","required":true,"portal":false,"verify":true,"note":"No separate SACFD ERCES testing bulletin was identified in this run; confirm exact grid methodology, dBm thresholds, and critical area coverage expectations with the AHJ.","links":[0,1,2]}
    ]},
    {"title":"Monitoring & Power","items":[
      {"text":"Provide required backup power and supervisory monitoring in accordance with IFC Section 510 and referenced NFPA standards as adopted by South Adams County Fire Department.","required":true,"portal":false,"verify":true,"note":"No separate locally amended ERCES backup duration or annunciation matrix was located in this run; confirm required battery duration and fire alarm supervisory tie-in requirements during plan review.","links":[2]}
    ]},
    {"title":"Closeout / Inspection","items":[
      {"text":"Schedule final fire inspection after successful acceptance testing and provide grid/coverage documentation to South Adams County Fire Department.","required":true,"portal":true,"verify":false,"note":"SACFD Inspections oversees fire system inspections through its permit process.","links":[0,1]},
      {"text":"Perform annual inspection and testing of the ERCES system in accordance with IFC Section 510 and maintain records for fire district review.","required":true,"portal":false,"verify":false,"note":"Annual testing is required under IFC 510 as adopted by SACFD.","links":[2]}
    ]}
  ]
});
