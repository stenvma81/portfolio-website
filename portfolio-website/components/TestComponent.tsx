'use client'
import React, { useState } from 'react';

const TestComponent = () => {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('/api/message');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>{message}</p>
    </div>
  );
};

export default TestComponent;