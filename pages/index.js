
import Link from 'next/link';
import { useContext } from 'react';
import CasualtyContext from '../context/CasualtyContext';

export default function HomePage() {
  const { casualties } = useContext(CasualtyContext);

  return (
    <div>
      <h1>MarkörApp Samverkansövning</h1>
      <ul>
        {casualties.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong> – {c.injuries}
            {c.triage ? ` (Triagerad: ${c.triage})` : ' (Ej triagerad)'}
            – Tillstånd: {c.condition === 'dead' ? 'Avliden' : (c.condition === 'critical' ? 'Kritisk' : 'Stabil')}
            {' '}<Link href={`/casualty/${c.id}`}>[Öppna]</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/summary"><button>Se Sammanfattning</button></Link>
      </p>
    </div>
  );
}
