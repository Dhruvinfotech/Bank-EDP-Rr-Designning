import React from 'react';

function BirthdayCard({ name, color }) {
  return (
    <div style={{
      border:         `3px solid ${color}`,
      borderRadius:   '12px',
      padding:        '14px 20px',
      margin:         '8px 0',
      background:     `${color}22`,
      boxShadow:      `0 0 16px ${color}88`,
      display:        'flex',
      alignItems:     'center',
      gap:            '12px',
      transition:     'all 0.3s ease'
    }}>
      <div style={{
        width:          '44px',
        height:         '44px',
        borderRadius:   '50%',
        background:     color,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        color:          '#fff',
        fontWeight:     'bold',
        fontSize:       '18px'
      }}>
        {name.charAt(0).toUpperCase()}
      </div>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '15px' }}>
          🎂 {name}
        </div>
        <div style={{ fontSize: '12px', color: '#666' }}>
          Birthday Today!
        </div>
      </div>
    </div>
  );
}

export default BirthdayCard;