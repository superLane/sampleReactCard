import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    calculatePercentage=  ({completed, onTarget}) =>{
        return ((completed/onTarget) * 100).toFixed();
    }

    render(props) { 
        return ( 
        <div className="card-container">
            <h4 className="card-title">{this.props.cardTitle}</h4> 
            <p className="loader card-p"><span>{this.calculatePercentage(this.props)} + &percnt</span></p>
            
            <div className="card-completed"> <span className="card-status">{this.props.cardStatus}</span><span className="card-total-count">{this.props.completed}</span></div>
            <div className="card-completed"> <span className="card-status">{this.props.cardStatus2}</span><span className="card-total-count">{this.props.onTarget}</span></div>
        </div>)

    }
}
 
export default Card;