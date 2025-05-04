import React, { useState, useEffect } from 'react';

export const CountdownWidget = ({ initialDuration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    if (timeLeft <= 0) {
      onComplete?.();
      setRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft]);

  const start = () => {
    setTimeLeft(initialDuration);
    setRunning(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px', textAlign: 'center' }}>
      <h3>{timeLeft}s</h3>
      <button onClick={start} disabled={running}>Start</button>
    </div>
  );
};
export default CountdownWidget;
