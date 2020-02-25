import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    static defaultProps = {
        bulletInChamber: 8
    };

    componentDidMount() {
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    updateMessage(props) {
        if(this.state.spinningTheChamber){
            return "spinning the chamber and pulling the trigger! ...";
        }
        else if(this.state.chamber === this.props.bulletInChamber){
            return "BANG!!!!";
        }
        else{
            return "you're safe!!";
        }       
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        let timeOut = setTimeout(() => {
            this.setState({chamber: Math.ceil(Math.random() * 8)})
            this.setState({spinningTheChamber:false});
        }, 2000)
    }

    render(){
        return(
            <div>
                <p>{this.updateMessage()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
  }

export default RouletteGun