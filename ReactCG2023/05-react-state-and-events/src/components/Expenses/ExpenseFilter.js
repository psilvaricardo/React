import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    // adding communication with the parent
    const dropDownChangeHandler = (event) => {
        props.filterChangeHandler(event.target.value);
    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Year</label>
        <select onChange={dropDownChangeHandler} value={props.selected}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
