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
const [birthdays, setBirthdays] = useState([
  { id: 1, name: "Dhruv", color: "#FF6B6B" }, // Red
  { id: 2, name: "Special Guest", color: "#4D96FF" }, // Blue
  { id: 3, name: "Bank Staff", color: "#2ECC71" } // Green
]);
export default useBirthdayAlert;