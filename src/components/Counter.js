import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
    static propTypes = {
        counters: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counters}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

    handleIncrement = () => {
        const {increment}= this.props;
        increment()
    }
}

export default connect((state) => ({
    counters: state.count
}), {increment})(Counter)

