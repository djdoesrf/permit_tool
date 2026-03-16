# Colorado ERCES/BDA Permit Guide (Modular)

Open **index.html**.

Structure:
- css/style.css
- js/guide.js (guide rendering/search)
- js/wizard.js (permit package wizard)
- data/*.js (one file per district)
- data/_registry.js + data/_assemble.js build window.DATA used by the app

Note: This is designed to work when opened directly from disk (file://). If your browser blocks some behaviors,
run a simple local server (e.g. `python -m http.server`) and open http://localhost:8000/.
