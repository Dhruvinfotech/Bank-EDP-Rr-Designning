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

function BirthdayWidget() {
  // Comment this out for a second
  // const birthdays = useBirthdayAlert(); 
  const birthdays = [{ id: 1, name: "Test User", color: "#FF6B6B" }]; 

  return (
    <div>
      {birthdays.map(person => (
        <BirthdayCard key={person.id} name={person.name} color={person.color} />
      ))}
    </div>
  );
}
const [birthdays, setBirthdays] = useState([
  { id: 1, name: "Dhruv", color: "#FF6B6B" },
  { id: 2, name: "Special Member", color: "#4D96FF" }
]);
export default useBirthdayAlert;