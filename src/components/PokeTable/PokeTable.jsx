import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as pokeTableActions from './PokeTableDuck'

class PokeTable extends Component {

    componentDidMount(){
        this.props.actions.loadCards()
    }
    
    render() {
        return (
            <React.Fragment>
                here be table
            </React.Fragment>
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
