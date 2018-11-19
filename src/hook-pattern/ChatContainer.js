import React from 'react';
import { useState, useEffect } from 'react';

const HookChatContainer = () => {
  const [nameField, setNameField] = useState('Name');
  const [messageField, setMessageField] = useState('Message');
  const [chat, setChat] = useState([]);

  const renderMessage = () => {
    const message =
      <p key={chat.length + 1}>
        <strong>{nameField}: </strong>
        {messageField}
      </p>

      setChat([...chat, message]);
  };

  useEffect(() => {
      document.title = messageField;

      return function goodBye() {
          console.log('Unmounting HOOK CHAT');
      };
  });

  useEffect(() => {
      console.log('CHAT variable has changed!');
  }, [chat]);

  return (
    <div className="chat-container">
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Nickname"
          defaultValue = { nameField }
          onChange={event => {
            setNameField(event.target.value);
          }}
        />
        <input
          type="text"
          name="message"
          placeholder="Type something witty"
          defaultValue = { messageField }
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
