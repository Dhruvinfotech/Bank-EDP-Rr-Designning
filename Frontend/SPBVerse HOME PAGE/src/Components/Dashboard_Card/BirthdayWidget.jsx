import React from 'react';
import useBirthdayAlert from '../../hooks/useBirthdayAlert';
import BirthdayCard from './Birthday_Card';

function BirthdayWidget() {
  const birthdays = useBirthdayAlert();

  if (birthdays.length === 0) return null;

  return (
    <div style={{
      background:   '#fff',
      borderRadius: '16px',
      padding:      '20px',
      boxShadow:    '0 4px 20px rgba(0,0,0,0.08)',
      margin:       '16px 0'
    }}>
      <div style={{
        display:      'flex',
        alignItems:   'center',
        gap:          '8px',
        marginBottom: '16px',
        fontSize:     '17px',
        fontWeight:   'bold',
        color:        '#1E3A5F'
      }}>
        🎂 Today's Birthdays
        <span style={{
          background:     '#FF6B6B',
          color:          '#fff',
          borderRadius:   '50%',
          width:          '24px',
          height:         '24px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       '12px'
        }}>
          {birthdays.length}
        </span>
      </div>

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