import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1>✅ MarkörApp Samverkansövning</h1>
      <p>Välj skadeprofil för att starta övningen.</p>
      <Link href="/scenarios">
        <button style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          marginTop: "1rem",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Välj Skadebild
        </button>
      </Link>
    </main>
  );
}
