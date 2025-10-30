function showMessage() {
  alert("Ajax Dauerstramm – bereit für die nächste Saison!");
}
// Events automatisch einfügen
const events = [
  {
    title: "Erstes Freundschaftsspiel",
    date: "15. November 2025",
    desc: "Ajax Dauerstramm vs. FC Lattenschuss – Anpfiff 14:00 Uhr auf dem Sportplatz Würenlos."
  },
  {
    title: "Weihnachts-Grill & Glühwein-Fest",
    date: "21. Dezember 2025",
    desc: "Gemütlicher Saisonabschluss mit Glühwein, Musik und guten Gesprächen."
  },
  {
    title: "Trainingslager Davos",
    date: "10.–12. Januar 2026",
    desc: "Drei Tage Training, Spass und Teamspirit in den Bündner Bergen."
  }
];

function loadEvents() {
  const container = document.getElementById("eventsList");
  if (!container) return;

  container.innerHTML = events.map(ev => `
    <div class="event-card">
      <h3>${ev.title}</h3>
      <div class="event-date">${ev.date}</div>
      <div class="event-desc">${ev.desc}</div>
    </div>
  `).join("");
}

loadEvents();

// Zusatz: kleines Easter Egg 😄
function showMessage() {
  alert("Ajax Dauerstramm – Leidenschaft, Weiss und Rot im Blut!");
}
