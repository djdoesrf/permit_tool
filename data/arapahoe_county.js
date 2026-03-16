window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "arapahoe_county",
  "district": "Arapahoe County Building Division / Fire Code Enforcement",
  "confidence": "high",
  "selectionReason": "Updated to strengthen reliance on official Arapahoe County Building Division and adopted code resources clarifying IFC enforcement authority and ERCES applicability under Section 510 in unincorporated areas.",
  "codeBasis": [
    {"label": "Arapahoe County – Building Division", "url": "https://www.arapahoegov.com/138/Building-Division"},
    {"label": "Arapahoe County – Building Codes & Amendments", "url": "https://www.arapahoegov.com/159/Building-Codes"},
    {"label": "Arapahoe County Code – Fire Code Adoption (IFC)", "url": "https://library.municode.com/co/arapahoe_county/codes/code_of_ordinances"},
    {"label": "Arapahoe County – Planning & Development", "url": "https://www.arapahoegov.com/101/Planning"}
  ],
  "naming": {
    "published": false,
    "template": "ARAPAHOE_<PROJECT-ADDRESS>_<DESCRIPTOR>_<YYYYMMDD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","GRIDTEST"],
    "notes": [
      "No Arapahoe County-specific ERCES/ERRCS file naming convention was found in this run.",
      "Arapahoe County adopts and enforces the IFC in unincorporated areas; ERCES governed under IFC Section 510 as adopted and amended.",
      "Use consistent naming to distinguish design submittals from annual and acceptance test documentation."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit ERCES / ERRCS / Radio Amplification (BDA/DAS) system plans as part of the Arapahoe County building permit and fire code review process for unincorporated areas.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Arapahoe County Building Division administers building permits and adopted code enforcement in unincorporated areas.",
          "links": [0,1]
        },
        {
          "text": "Confirm ERCES applicability during plan review in accordance with adopted IFC Section 510.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Arapahoe County adopts the IFC via county code; ERCES requirements are typically identified during building and fire code review.",
          "links": [1,2]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide a complete ERCES design package including floor plans with antenna layout, riser diagram, equipment specifications, battery calculations, and RF propagation calculations.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "No standalone Arapahoe County ERCES checklist was identified in this run; confirm required drawing set and calculation detail with the Building Division.",
          "links": [0,1]
        },
        {
          "text": "Identify donor signal source and demonstrate compatibility with the applicable public safety radio system serving the project area.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "IFC 510 requires system compatibility; confirm which radio authority serves the unincorporated project location and any additional requirements.",
          "links": [2]
        }
      ]
    },
    {
      "title": "RF / Testing Criteria",
      "items": [
        {
          "text": "Provide in-building emergency responder radio coverage meeting IFC Section 510 performance criteria as adopted by Arapahoe County.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "Arapahoe County enforces adopted IFC; Section 510 governs ERCES requirements including minimum signal strength and required coverage areas.",
          "links": [2]
        },
        {
          "text": "Coordinate acceptance testing, grid layout, and signal strength thresholds with the Authority Having Jurisdiction prior to final inspection.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "No separate county-published ERCES testing bulletin was identified in this run; confirm exact grid methodology, dBm thresholds, and critical area coverage expectations during plan review.",
          "links": [0,2]
        }
      ]
    },
    {
      "title": "Monitoring & Power",
      "items": [
        {
          "text": "Provide required backup power and supervisory monitoring in accordance with IFC Section 510 and referenced NFPA standards as adopted by Arapahoe County.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "No separate locally amended ERCES backup duration bulletin was located in this run; confirm required battery duration and monitoring interface requirements during plan review.",
          "links": [1,2]
        }
      ]
    },
    {
      "title": "Closeout / Inspection",
      "items": [
        {
          "text": "Schedule final inspection after successful acceptance testing and provide grid/coverage documentation to Arapahoe County for approval.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Final inspection is coordinated through the Arapahoe County Building Division for projects in unincorporated areas.",
          "links": [0]
        },
        {
          "text": "Perform annual inspection and testing of the ERCES system in accordance with IFC Section 510 and maintain records for county review.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "Annual testing is required under IFC 510 as adopted by Arapahoe County.",
          "links": [2]
        }
      ]
    }
  ]
});
