import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataRange from './DataRange';
import SelectFilter from './Select';

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <SelectFilter/>
                <DataRange/>
            </div>
        )
    }
}

export default Filters;
