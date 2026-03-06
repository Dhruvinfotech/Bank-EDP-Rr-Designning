import React from 'react';
import useBirthdayAlert from '../../hooks/useBirthdayAlert';
import BirthdayCard from './Birthday_Card'; // Ensure underscore matches your filename

function BirthdayWidget() {
  const birthdays = useBirthdayAlert(); 

  // If the list is empty, show nothing
  if (!birthdays || birthdays.length === 0) return null; 

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ color: '#1E3A5F', marginBottom: '10px' }}>🎂 Today's Birthdays</h3>
      {birthdays.map(person => (
        <BirthdayCard 
          key={person.id} 
          name={person.name} 
          color={person.color} 
        />
      ))}
    </div>
  );
}

export default BirthdayWidget;