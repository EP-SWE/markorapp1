
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import CasualtyContext from '../../context/CasualtyContext';
import Link from 'next/link';

export default function CasualtyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { casualties, setCasualties } = useContext(CasualtyContext);
  if (!id) return <p>Laddar...</p>;
  const casualtyId = parseInt(id);
  const casualty = casualties.find(c => c.id === casualtyId);
  if (!casualty) return <p>Ingen skadad med ID {id}</p>;

  const [actionText, setActionText] = useState('');

  const handleTriageChange = (e) => {
    const newTriage = e.target.value;
    setCasualties(prev =>
      prev.map(c =>
        c.id === casualtyId ? { ...c, triage: newTriage !== '' ? newTriage : null } : c
      )
    );
  };

  const addAction = () => {
    if (!actionText) return;
    setCasualties(prev =>
      prev.map(c =>
        c.id === casualtyId ? { ...c, actions: [...c.actions, actionText] } : c
      )
    );
    setActionText('');
  };

  const stabilize = () => {
    if (casualty.status === 0) return;
    setCasualties(prev =>
      prev.map(c =>
        c.id === casualtyId ? { ...c, stable: true } : c
      )
    );
  };

  return (
    <div>
      <h2>Skadad #{casualty.id}: {casualty.name}, {casualty.age} år</h2>
      <p><strong>Skadebeskrivning:</strong> {casualty.injuries}</p>
      <p>
        <strong>Tillstånd:</strong> {casualty.condition === 'dead'
          ? 'Avliden'
          : casualty.condition === 'critical'
            ? `Kritisk (status ${casualty.status}%)`
            : `Stabil (status ${casualty.status}%)`}
      </p>
      <p>
        <strong>Triage:</strong>{" "}
        <select 
          value={casualty.triage || ''} 
          onChange={handleTriageChange} 
          disabled={casualty.status === 0}
        >
          <option value="">Ej triagerad</option>
          <option value="Röd">Röd – Omedelbar</option>
          <option value="Gul">Gul – Fördröjd</option>
          <option value="Grön">Grön – Mindre</option>
          <option value="Svart">Svart – Avliden</option>
        </select>
      </p>
      <p><strong>Åtgärder:</strong></p>
      <ul>
        {casualty.actions.map((action, idx) => (
          <li key={idx}>{action}</li>
        ))}
      </ul>
      {casualty.status > 0 && !casualty.stable && (
        <p><button onClick={stabilize}>Stabilisera patient</button></p>
      )}
      {casualty.stable && casualty.status > 0 && (
        <p><em>Patienten är stabiliserad.</em></p>
      )}
      {casualty.status === 0 && (
        <p><em>Patienten avled under övningen.</em></p>
      )}
      {casualty.status > 0 && (
        <p>
          <input
            type="text"
            value={actionText}
            onChange={(e) => setActionText(e.target.value)}
            placeholder="Beskriv åtgärd"
          />
          <button onClick={addAction}>Lägg till åtgärd</button>
        </p>
      )}
      <p>
        <Link href="/">← Tillbaka</Link>{" | "}
        <Link href="/summary">Till sammanfattning →</Link>
      </p>
    </div>
  );
}
