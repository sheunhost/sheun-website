fetch("http://localhost:3000/api/seo-audit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ storeUrl: "https://example.com", niche: "test" })
}).then(res => res.json()).then(console.log).catch(console.error);
