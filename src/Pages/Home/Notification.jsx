import React, { useState } from 'react';

const Notification = ({ message }) => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    showNotification && (
      <div className="notification">
        <p>{message}</p>
      </div>
    )
  );
};

export default Notification;
