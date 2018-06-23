import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter , sortByDate, sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilter extends React.Component{
    state={
        calendarFocused:null
    };

    onDatesChange=({startDate,endDtae})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDtae));
    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    };

    render(){
       return (

            <div>
            <input type="text" defaultValue={this.props.filters.text} onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value));
            }}/>
            <select defaultValue={this.props.filters.sortBy} onChange={(e)=>{
                if(e.target.value==='date'){
                    this.props.dispatch(sortByDate());
                }else if(e.target.value==='amount'){
                    this.props.dispatch(sortByAmount());
                }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>false}
            />
            </div>
        
        );
    }
}



//setup value and onChange for select

const mapStateToprops=(state)=>{
    return{
        filters:state.filters

    };
}

export default connect(mapStateToprops)(ExpenseListFilter);