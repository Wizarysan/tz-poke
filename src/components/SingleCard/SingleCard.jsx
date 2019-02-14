import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import styled from 'styled-components';

import * as singleCardActions from './SingleCardDuck'

const Card = styled.div`  
    padding: 30px;
    .card__image {
        max-width: 100%;
    }
    .card__details {
        padding-top: 30px;
    }
`

class SingleCard extends Component {
    constructor(props){
        super(props)
        this.id = this.props.match.params.id;
    }

    componentDidMount(){
        if(this.id !== this.props.card.id) this.props.actions.loadSingleCard(this.id)        
    }

    render() {
        let {name, hp, imageUrl, attacks, number, rarity, resistances, series, set, subtype, supertype, types, weaknesses} = this.props.card;
        attacks ? attacks = attacks.map(attack=><span key={attack.name}>{attack.name+'  '}</span>) : null;
        resistances ? resistances = resistances.map(res=><span key={res.type}>{res.type+': '+res.value+' '}</span>) : null;
        weaknesses ? weaknesses = weaknesses.map(wk=><span key={wk.type}>{wk.type+': '+wk.value+' '}</span>) : null;
        return (
            <Card>
                <div className="ui grid">
                    <div className="four wide column">
                        <h1>{name}</h1>
                        <img className="card__image" src={imageUrl} />
                    </div>
                    <div className="six wide column">
                        <div className="card__details">
                            <p>HP: {hp}</p>
                            <p>Attacks: {attacks}</p>
                            <p>Number: {number}</p>
                            <p>Rarity: {rarity}</p>
                            <p>Resistances: {resistances}</p>
                            <p>Series: {series}</p>
                            <p>Set: {set}</p>
                        </div>
                    </div> 
                </div>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.currentCard.loading,
        error: state.currentCard.error,
        card: state.currentCard.body
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(singleCardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);