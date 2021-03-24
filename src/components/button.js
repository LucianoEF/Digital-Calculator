import React, {Component} from 'react';

export class Button extends Component {

    handleClick(){
        const {disabled,onClick} = this.props;

        if ((onClick)&&(!disabled)) //Se existe um onClick
        this.props.onClick(); //Execute o onClick
    }

    render(){
        const cssButtonClass = this.props.disabled ? "button disabled" : "button";
        return(
        <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
            {this.props.display}
        </div>
        )
    }
}

