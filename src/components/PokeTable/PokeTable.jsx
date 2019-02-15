import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import styled from 'styled-components';

import PokeTableEntry from '../PokeTableEntry/PokeTableEntry.jsx';
import * as pokeTableActions from './PokeTableDuck'

const TableWrapper = styled.div`  
    padding: 30px;    
`

class PokeTable extends Component {
    componentDidMount(){
        this.props.actions.loadCards()
    }
    
    render() {
        let entries = this.props.cards.map(card => <PokeTableEntry key={card.id} id={card.id} fields={{
            img: card.imageUrl,
            name: card.name,
            hp: card.hp,            
            stype: card.supertype,
            rarity: card.rarity,
            series: card.series
        }}/>)
        return (
            <TableWrapper>
                <button onClick={this.props.actions.loadCards} class="ui right labeled icon button">
                    <i class="sync icon"></i>
                    Reload
                </button>
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>HP</th>
                        <th>Type</th>
                        <th>Rarity</th>
                        <th>Series</th>
                    </tr>
                </thead>
                <tbody>
                    {entries}
                </tbody>
                </table>
            </TableWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.cards.loading,
        error: state.cards.error,
        cards: state.cards.body
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pokeTableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeTable);
