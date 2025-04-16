export default function Scenarios() {
  const scenarios = [
    "1. Skottskada ben",
    "2. Thoraxskada",
    "3. Splitterskada buk",
    "4. Brännskada överkropp",
    "5. Rök- och inhalationsskada",
    "6. Amputation arm",
    "7. Medvetslös utan synlig skada",
    "8. Buksmärta efter tryckvåg",
    "9. Fraktur femur",
    "10. Multitrauma"
  ];
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Välj en skadebild</h2>
      <ul>
        {scenarios.map((s, i) => (
          <li key={i} style={{ marginBottom: "1rem" }}>
            <button style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              background: "#555",
              color: "#fff",
              border: "none",
              borderRadius: "6px"
            }}>{s}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
