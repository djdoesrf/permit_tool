window.DISTRICT_REGISTRY = window.DISTRICT_REGISTRY || [];
(function () {
  const raw = Array.isArray(window.DISTRICT_REGISTRY) ? window.DISTRICT_REGISTRY : [];
  const seen = new Map();
  raw.forEach((entry, idx) => {
    if (!entry || typeof entry !== "object") return;
    const key = (entry.id && String(entry.id).trim()) || `__idx_${idx}`;
    seen.set(key, entry); // later definitions win
  });
  window.DATA = Array.from(seen.values());
})();
