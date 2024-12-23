import React from 'react';
import MessageHeader from '../ChatPage/MainPanel/MessageHeader';
import ProgressBar from 'react-bootstrap/ProgressBar';

import getVariant from './getVariant';

const TrashState = () => {
  const floors = [
    { floor: '1층', now: 10 },
    { floor: '2층', now: 30 },
    { floor: '3층', now: 50 },
    { floor: '4층', now: 80 },
  ];

  return (
    <div style={{ padding: '2rem 2rem 0 2rem' }}>
      <MessageHeader />
      <div
        style={{
          width: '100%',
          height: '567px',
          border: '.2rem solid #ececec',
          borderRadius: '4px',
          padding: '2rem',
          marginBottom: '1rem',
          overflowY: 'auto',
        }}
      >
        {floors.map(({ floor, now }) => {
          const { variant, striped } = getVariant(now);
          return (
            <div key={floor} style={{ margin: '30px' }}>
              <h1 style={{ marginBottom: '20px' }}>{floor}</h1>
              <ProgressBar striped={striped} variant={variant} animated now={now} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrashState;
