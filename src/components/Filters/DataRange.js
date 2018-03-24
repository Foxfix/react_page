import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';


class DataRange extends Component {
    state = {
        from: null,
        to: null
    };

    handleDataClick = (day) => {
        this.setState(DateUtils.addDayToRange(day, this.state))
    };

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="data-range">
                <DayPicker
                ref="daypicker"
                selectedDays={ day => DateUtils.isDayInRange(day, {from , to})}
                onDayClick={this.handleDataClick}/>
                {selectedRange}
            </div>
        )
    }
}

export default DataRange;
