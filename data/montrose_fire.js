window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "montrose_fire",
  "district": "Montrose Fire Protection District",
  "confidence": "medium",
  "selectionReason": "Added because Montrose Fire Protection District serves the City and surrounding areas of Montrose (Western Slope growth area) with commercial, healthcare, and multifamily occupancies where IFC 510 ERCES compliance may be triggered, and publishes Fire Prevention and code resources.",
  "codeBasis": [
    {"label": "Montrose Fire Protection District – Fire Prevention", "url": "https://www.montrosefire.org/fire-prevention"},
    {"label": "Montrose Fire Protection District – Permits & Inspections", "url": "https://www.montrosefire.org/permits"},
    {"label": "Montrose Fire Protection District – Codes & Standards", "url": "https://www.montrosefire.org/codes"},
    {"label": "City of Montrose Municipal Code – Fire Code (IFC adoption reference)", "url": "https://library.municode.com/co/montrose/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "MFPD_<PROJECT-ADDRESS>_<DESCRIPTOR>_<YYYYMMDD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","GRIDTEST"],
    "notes": [
      "No Montrose Fire Protection District-specific ERCES/ERRCS file naming convention was found in this run.",
      "Montrose Fire Protection District enforces an adopted edition of the IFC; ERCES requirements are governed under IFC Section 510 as adopted and amended.",
      "Use consistent filenames separating design submittals from acceptance and annual test documentation."
    ]
  },
  "groups": [
    {"title":"Intake & Portal","items":[
      {"text":"Submit ERCES / ERRCS / Radio Amplification (BDA/DAS) system plans through Montrose Fire Protection District Fire Prevention permit and plan review process.","required":true,"portal":true,"verify":false,"note":"Montrose Fire Prevention publishes permit and inspection information for fire protection systems within the district.","links":[0,1]},
      {"text":"Confirm ERCES applicability during plan review in accordance with adopted IFC Section 510.","required":true,"portal":true,"verify":false,"note":"Montrose Fire Protection District enforces adopted IFC within its jurisdiction; ERCES requirements are typically identified during building and fire plan review.","links":[2,3]}
    ]},
    {"title":"Technical Package","items":[
      {"text":"Provide a complete ERCES design package including floor plans with antenna layout, riser diagram, equipment specifications, battery calculations, and RF propagation calculations.","required":true,"portal":true,"verify":true,"note":"No standalone Montrose ERCES checklist or guideline was identified in this run; confirm required drawing set, battery duration, and calculation detail with Fire Prevention.","links":[0,2]},
      {"text":"Identify donor signal source, operating frequency bands, and demonstrate compatibility with the jurisdiction’s public safety radio system.","required":true,"portal":false,"verify":true,"note":"IFC 510 requires system compatibility; Montrose-specific public safety radio system documentation was not located in this run and should be confirmed with the AHJ.","links":[2]}
    ]},
    {"title":"RF / Testing Criteria","items":[
      {"text":"Provide in-building emergency responder radio coverage meeting IFC Section 510 performance criteria as adopted by Montrose Fire Protection District.","required":true,"portal":false,"verify":false,"note":"Montrose Fire Protection District enforces adopted IFC; Section 510 governs ERCES requirements including minimum signal strength and required coverage areas.","links":[2]},
      {"text":"Coordinate acceptance testing, grid layout, and signal strength thresholds with Montrose Fire Protection District prior to final inspection.","required":true,"portal":false,"verify":true,"note":"No separate Montrose ERCES testing bulletin was identified in this run; confirm exact grid methodology, dBm thresholds, and critical area coverage expectations with the AHJ.","links":[0,1,2]}
    ]},
    {"title":"Monitoring & Power","items":[
      {"text":"Provide required backup power and supervisory monitoring in accordance with IFC Section 510 and referenced NFPA standards as adopted by Montrose Fire Protection District.","required":true,"portal":false,"verify":true,"note":"No separate locally amended ERCES backup duration or annunciation matrix was located in this run; confirm required battery duration and fire alarm supervisory tie-in requirements during plan review.","links":[2]}
    ]},
    {"title":"Closeout / Inspection","items":[
      {"text":"Schedule final fire inspection after successful acceptance testing and provide grid/coverage documentation to Montrose Fire Protection District.","required":true,"portal":true,"verify":false,"note":"Montrose Fire Inspections oversees fire system inspections through its permit process.","links":[0,1]},
      {"text":"Perform annual inspection and testing of the ERCES system in accordance with IFC Section 510 and maintain records for fire district review.","required":true,"portal":false,"verify":false,"note":"Annual testing is required under IFC 510 as adopted by Montrose Fire Protection District.","links":[2]}
    ]}
  ]
});
