import React, {Component} from 'react';

class ChatContainer extends Component {
    constructor() {
        super();
        this.state = {
            nameField: "Name",
            messageField: "Message",
            chat: []
        }

        this.nameKeyUp = this.nameKeyUp.bind(this);
        this.messageKeyUp = this.messageKeyUp.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    //This triggers at START
    componentDidMount() {
        document.title = this.state.messageField;
    }

    //Trigger after every update (but different effects)
    componentDidUpdate(prevProps, prevState) {
        //This changes after every update (keyUp events)
        document.title = this.state.messageField;

        //This will happen only after changing the CHAT state variable
        if (prevState.chat.length !== this.state.chat.length) {
            console.log('CHAT variable has changed!');
          }
    }

    //When unmounting the component
    componentWillUnmount() {
        console.log('Unmounting CLASSIC CHAT!');
    }


    //EVENTS Changing states
    nameKeyUp(event) {
        this.setState({
            nameField: event.target.value
        });
    }

    messageKeyUp(event) {
        this.setState({
            messageField: event.target.value
        });
    }

    addMessage(event) {
        const chatMessage = 
            <p key={this.state.chat.length + 1}>
                <strong>{this.state.nameField}: </strong>
                { this.state.messageField }
            </p>

        this.setState({
            chat: [...this.state.chat, chatMessage]
        });
    };


    //Rendering
    render() {
        return(
            <div className="chat-container">
                <div className="form">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nickname" 
                        defaultValue={this.state.nameField}
                        onChange={this.nameKeyUp}          
                    />
                    <input 
                        type="text" 
                        name="message" 
                        placeholder="Type something witty" 
                        defaultValue={this.state.messageField}
                        onChange={this.messageKeyUp}
                    />
                    <button onClick={this.addMessage}>Send Message!</button>
                </div>
                <div className="chat-messages">
                    {this.state.chat}
                </div>
            </div>
        )
    }
}

export default ChatContainer;