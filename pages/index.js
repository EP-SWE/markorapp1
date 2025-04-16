import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      {!started ? (
        <>
          <h1>✅ MarkörApp Samverkansövning</h1>
          <p>Tryck på knappen för att starta övningen</p>
          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              marginTop: "1rem",
              background: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Starta övning
          </button>
        </>
      ) : (
        <>
          <h2>🚑 Övningen är igång</h2>
          <p>Här kommer markörval och funktioner läggas till.</p>
        </>
      )}
    </main>
  );
}
