import { useEffect, useState } from 'react';

function useBirthdayAlert() {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000/api/birthday/stream');

    eventSource.addEventListener('birthday', (e) => {
      const data = JSON.parse(e.data);
      setBirthdays(data);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  return birthdays;
}
export default useBirthdayAlert;