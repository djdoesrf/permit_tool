window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "castle_rock",
  "district": "Castle Rock Fire and Rescue / Castle Rock Fire Protection District (Douglas County)",
  "confidence": "high",
  "selectionReason": "UPDATED: Replaced/strengthened Castle Rock ERCES/BDA requirements with an official CRFD 'BDA and DAS Installation' guide including explicit coverage targets, frequency ranges, shut-off labeling/location, and Douglas County DTRS licensee-consent workflow.",
  "codeBasis": [
    {"label": "CRFD – BDA and DAS Installation (official guide)", "url": "https://www.crgov.com/3772/BDA-and-DAS-Installation"},
    {"label": "Douglas County DTRS – Draft Letter of Approval Template (CRFD DocumentCenter PDF)", "url": "https://www.crgov.com/DocumentCenter/View/48364"},
    {"label": "CRFD – Permits and Inspections (adopted codes + application routing)", "url": "https://www.crgov.com/1691/Permits-and-Inspections"},
    {"label": "Town of Castle Rock Municipal Code – CRFD-adopted amendments to IFC (Municode)", "url": "https://library.municode.com/co/castle_rock/codes/municipal_code?nodeId=TIT15BUCOPUIM_ARTIIBUCO_CH15.18INFICO"}
  ],
  "naming": {
    "published": false,
    "template": "BDA-DAS – <BUILDING_NAME> – <ADDRESS> – <DOC_TYPE> – <REV/DATE>",
    "descriptorExamples": ["PLANS", "CALCS", "CUTSHEETS", "TESTPLAN", "RESPONSE"],
    "notes": [
      "CRFD publishes process and technical requirements but does not publish a strict file naming convention in the linked guidance.",
      "Include the Douglas County/DTRS signoff letter and label it clearly as 'Licensee Consent / DTRS Approval'."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit BDA/DAS design plans and specifications to Douglas County first (DTRS/Radio Systems Administrator) for review, then obtain a signed letter of acknowledgment for licensee consent/signoff.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "CRFD requires Douglas County signoff as the point of contact for licenses in Douglas County for rebroadcast consent workflow.",
          "links": [0, 1]
        },
        {
          "text": "Email the completed CRFD construction permit application and all required documents (including the signed Douglas County acknowledgment letter) to CRFD for final review and permitting.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "CRFD directs applicants to email completed applications and documents; confirm whether your project also requires Town building permit routing in parallel.",
          "links": [2, 0]
        }
      ]
    },
    {
      "title": "Technical Package",
      "items": [
        {
          "text": "Provide complete system design plans/specifications showing equipment locations, antenna layout, and the emergency shut-off location (at booster or remote at the FACP).",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "CRFD requires an emergency shut-off switch and a remote shut-off at the Fire Alarm Control Panel (FACP) when the booster is not near the FACP.",
          "links": [0]
        },
        {
          "text": "Ensure all BDA equipment is FCC certified, with FCC ID and required compliance labels shown in submittals/cut sheets.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "CRFD explicitly requires FCC-certified BDA equipment and visible FCC ID/labels.",
          "links": [0]
        }
      ]
    },
    {
      "title": "RF / Testing Criteria",
      "items": [
        {
          "text": "Design and test for required coverage: 90% in all building areas and 99% in critical areas (fire command centers, elevator lobbies, stairways, refuge areas, fire equipment rooms, high-hazard areas, basements, underground parking).",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "CRFD publishes both the general coverage target and the higher critical-area coverage target, along with examples of critical areas.",
          "links": [0]
        },
        {
          "text": "Include the required frequency ranges in the system design: 764-776, 773-797, 803-806, 806-824, and 851-870 MHz.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "CRFD lists specific frequency ranges that must be included.",
          "links": [0]
        },
        {
          "text": "Plan for field testing by the contractor using appropriate signal strength meters and schedule CRFD to witness the testing.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "CRFD states the system must be field-tested and that CRFD must witness testing for compliance.",
          "links": [0]
        }
      ]
    },
    {
      "title": "Monitoring & Power",
      "items": [
        {
          "text": "Confirm monitoring/alarm interface requirements (e.g., supervisory trouble reporting to the fire alarm system/monitoring) and backup power duration per the adopted IFC and applicable NFPA standards used by CRFD.",
          "required": true,
          "portal": false,
          "verify": true,
          "note": "CRFD references adopted 2018 IFC and current NFPA standards; the BDA/DAS guide does not specify standby power duration or exact monitoring points—confirm during plan review and align with the adopted code set/amendments.",
          "links": [0, 2, 3]
        }
      ]
    },
    {
      "title": "Closeout / Inspection",
      "items": [
        {
          "text": "Include the Douglas County/DTRS licensee consent acknowledgement letter in the closeout package and keep it available for inspection signoff.",
          "required": true,
          "portal": true,
          "verify": false,
          "note": "Douglas County signoff is explicitly part of the approval workflow for rebroadcast consent under FCC 90.219 per CRFD guidance/template.",
          "links": [1, 0]
        },
        {
          "text": "Label the emergency shut-off control exactly as required: \"EMERGENCY RADIO AMPLIFICATION SYSTEM SHUT-OFF\" and verify it is accessible (booster or at FACP as applicable) prior to final inspection.",
          "required": true,
          "portal": false,
          "verify": false,
          "note": "CRFD specifies both the labeling language and the accessibility/location expectation for the shut-off control.",
          "links": [0]
        }
      ]
    }
  ]
});
