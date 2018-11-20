import React from 'react';
import { useState, useEffect } from 'react';

const HookChatContainer = () => {

    //This start tbe state and set the function to change it
  const [nameField, setNameField] = useState('Name');
  const [messageField, setMessageField] = useState('Message');
  const [chat, setChat] = useState([]);

  //Bit of a custom hook
  const useMessageEffect = () => {
    const message =
      <p key={chat.length + 1}>
        <strong>{nameField}: </strong>
        {messageField}
      </p>

      setChat([...chat, message]);
  };

  //This updates at Start, at End, and after every update
  useEffect(() => {
      document.title = messageField;
      // TODO
      return () => {
        console.log('Unmounting HOOKS CHAT!');
      };
  });

  //This will only trigger when CHAT is created or changed
    useEffect(() => {
        console.log('CHAT variable has changed!');
    }, [chat]);

  //Rendering
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
        <button onClick={useMessageEffect}>Send Message!</button>
      </div>
      <div className="chat-messages">{chat}</div>
    </div>
  );
};

export default HookChatContainer;
