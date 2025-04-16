
import '../styles/globals.css';
import CasualtyContext from '../context/CasualtyContext';
import initialCasualties from '../data/casualties';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [casualties, setCasualties] = useState(initialCasualties);

  useEffect(() => {
    const interval = setInterval(() => {
      setCasualties(prevCasualties =>
        prevCasualties.map(c => {
          if (!c.stable && c.status > 0) {
            let newStatus = c.status;
            newStatus -= (c.condition === 'critical' ? 5 : 2);
            if (newStatus < 0) newStatus = 0;
            let newCondition = c.condition;
            if (newStatus === 0) {
              newCondition = 'dead';
            } else if (newStatus < 50) {
              newCondition = 'critical';
            } else {
              newCondition = 'stable';
            }
            return { ...c, status: newStatus, condition: newCondition };
          }
          return c;
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CasualtyContext.Provider value={{ casualties, setCasualties }}>
      <Component {...pageProps} />
    </CasualtyContext.Provider>
  );
}

export default MyApp;
