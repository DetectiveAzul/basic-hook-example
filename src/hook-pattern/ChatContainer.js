import React from 'react';
import { useState } from 'react';

const HookChatContainer = () => {
  const [nameField, setNameField] = useState('');
  const [messageField, setMessageField] = useState('');
  const [chat, setChat] = useState([]);

  const renderMessage = () => {
    const message =
      <p key={chat.length + 1}>
        <strong>{nameField}: </strong>
        {messageField}
      </p>

      setChat([...chat, message]);
  };

  return (
    <div className="chat-container">
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Nickname"
          onChange={event => {
            setNameField(event.target.value);
          }}
        />
        <input
          type="text"
          name="message"
          placeholder="Type something witty"
          onChange={event => {
            setMessageField(event.target.value);
          }}
        />
        <button onClick={renderMessage}>Send Message!</button>
      </div>
      <div className="chat-messages">{chat}</div>
    </div>
  );
};

export default HookChatContainer;
