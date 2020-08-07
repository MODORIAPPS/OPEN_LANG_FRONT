import React from 'react';
import '../styles/ThemeButton.scss';

/*
    # PROPS
    text:text
*/

class ThemeButton extends React.Component{

    render(){
        return <div className="ThemeButton">
            <p className="ThemeButton-text">{this.props.text}</p>
        </div>
    }
}

export default ThemeButton;