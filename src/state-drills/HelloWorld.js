import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };

    worldButtonClick = () => {
      this.setState({who: "world"});
    }

    friendButtonClick = () => {
        this.setState({who: "friend"});
    }

    reactButtonClick = () => {
        this.setState({who: "React"});
    }
    
    render(){
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.worldButtonClick}>World</button>
                <button onClick={this.friendButtonClick}>Friend</button>
                <button onClick={this.reactButtonClick}>React</button>
            </div>
        )
    }
  }


export default HelloWorld