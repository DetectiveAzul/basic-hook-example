import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
//ChatContainers
import ChatContainer from './basic-pattern/ChatContainer';
import HookChatContainer from './hook-pattern/ChatContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/classic">Classic Pattern</Link> |{" "}
          <Link to="/hooks">Hook Patern</Link> |{" "} 
        </nav>
        <Router>
          <ChatContainer path="/classic" />
          <HookChatContainer path="/hooks" />
        </Router>
      </div>
    );
  }
}

export default App;
