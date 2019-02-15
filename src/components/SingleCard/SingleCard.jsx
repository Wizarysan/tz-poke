import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
    .Fire { color: #d10f0f; }
    .Water { color: #0564b0; }
    .Lightning { color: #ac9b00; }
    .Psychic { color: #5619ac; }
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
        let {name, hp, imageUrl, attacks, number, rarity, 
            resistances, series, set, subtype, 
            supertype, types, weaknesses} = this.props.card;
        attacks ? attacks = <p><b>Attacks:</b> {attacks.map(attack=><span key={attack.name}>{attack.name+'  '}</span>)}</p> : null;
        resistances ? resistances = <p><b>Resistances:</b> {resistances.map(res=><span className={res.type} key={res.type}>{res.type+': '+res.value+' '}</span>)}</p> : null;
        weaknesses ? weaknesses = <p><b>Weaknesses:</b> {weaknesses.map(wk=><span className={wk.type} key={wk.type}>{wk.type+': '+wk.value+' '}</span>)}</p> : null;
        types ? types = <p><b>Types:</b> {types.map(ty=><span key={ty}>{ty+' '}</span>)}</p> : null;
        return (
            <Card>
                <div className="ui grid">
                    <div className="four wide column">
                    <Link to="/">
                        <button class="ui right labeled icon primary button">
                            <i class="left arrow icon"></i>
                            Back
                        </button>
                    </Link>
                        <h1>{name}</h1>
                        <img className="card__image" src={imageUrl} />
                    </div>
                    <div className="six wide column">
                        <div className="card__details">
                            <p><b>HP:</b> {hp}</p>
                            {attacks}                            
                            {resistances}
                            {weaknesses}
                            {types}
                            <p><b>Subtype:</b> {subtype}</p>
                            <p><b>Supertype:</b> {supertype}</p>
                            <p><b>Rarity:</b> {rarity}</p>
                            <p><b>Number:</b> {number}</p> 
                            <p><b>Series:</b> {series}</p>
                            <p><b>Set:</b> {set}</p>
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