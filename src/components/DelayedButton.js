// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
    clickHandler = (event) => {
        event.persist();
        setTimeout(()=> {
            this.props.onDelayedClick(event)},this.props.delay);
    }

    render() {
        return (
            <button onClick={this.clickHandler}>Click me to delay timer!</button> 
        );
    }
}

export default DelayedButton;