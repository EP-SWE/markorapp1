
import { useContext } from 'react';
import CasualtyContext from '../context/CasualtyContext';
import Link from 'next/link';

export default function SummaryPage() {
  const { casualties } = useContext(CasualtyContext);

  return (
    <div>
      <h1>Sammanfattning</h1>
      <ul>
        {casualties.map(c => (
          <li key={c.id}>
            <p><strong>{c.name}</strong> ({c.age} år) – {c.injuries}</p>
            <p>Triage: {c.triage ? c.triage : 'Ej triagerad'}</p>
            <p>Åtgärder: {c.actions.length > 0 ? c.actions.join(', ') : 'Inga'}</p>
            <p>Utfall: {c.status === 0 ? 'Avliden' : 'Överlevde'}</p>
          </li>
        ))}
      </ul>
      <p><Link href="/">← Till start</Link></p>
    </div>
  );
}
