window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
window.DISTRICT_REGISTRY.push({
  "id": "brighton",
  "district": "City of Brighton (Fire Rescue / Community Development)",
  "confidence": "medium",
  "selectionReason": "Growing Adams/Weld corridor municipality; publishes Fire Rescue and Community Development resources. ERRCS specifics require confirmation with Fire Prevention.",
  "codeBasis": [
    {"label": "City of Brighton – Fire Rescue", "url": "https://www.brightonco.gov/272/Fire-Rescue"},
    {"label": "City of Brighton – Community Development", "url": "https://www.brightonco.gov/97/Community-Development"},
    {"label": "Brighton Municipal Code (Municode)", "url": "https://library.municode.com/co/brighton/codes/code_of_ordinances"}
  ],
  "naming": {
    "published": false,
    "template": "BRIGHTON_ERRCS_<PROJECT>_<ADDRESS>_<DOC-TYPE>_<YYYY-MM-DD>",
    "descriptorExamples": ["PLANS","CALCS","CUTSHEETS","TESTPLAN","RESPONSE"],
    "notes": [
      "No published ERRCS naming convention identified; confirm portal upload expectations.",
      "Confirm whether Brighton Fire Rescue has an ERRCS/radio amplification handout with thresholds/testing."
    ]
  },
  "groups": [
    {
      "title": "Intake & Portal",
      "items": [
        {
          "text": "Submit via Brighton Community Development and coordinate Fire Rescue review for ERRCS scope.",
          "required": true,
          "portal": true,
          "verify": true,
          "note": "Confirm whether Fire Prevention requires a separate intake or pre-approval step.",
          "links": [0,1]
        }
      ]
    }
  ]
});
