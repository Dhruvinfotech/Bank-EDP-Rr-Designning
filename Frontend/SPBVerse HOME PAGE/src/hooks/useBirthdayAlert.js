import { useEffect, useState } from 'react';

function useBirthdayAlert() {
  // We initialize with your "Unique Concept" data so it shows up on GitHub
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: "Dhruv", color: "#FF6B6B" },
    { id: 2, name: "Special Member", color: "#4D96FF" },
    { id: 3, name: "Bank Staff", color: "#2ECC71" }
  ]);

  useEffect(() => {
    // This will only work locally. On GitHub Pages, it will simply fail 
    // silently while the mock data above remains visible.
    const eventSource = new EventSource('http://localhost:5000/api/birthday/stream');

    const handleBirthday = (e) => {
      try {
        const data = JSON.parse(e.data);
        setBirthdays(data);
      } catch (err) {
        console.log("Stream error: Using mock data instead.");
      }
    };

    eventSource.addEventListener('birthday', handleBirthday);

    return () => {
      eventSource.close();
    };
  }, []);

  return birthdays;
}

export default useBirthdayAlert;