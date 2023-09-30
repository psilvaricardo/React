import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021"); // Destructuring assignment

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    const expenseYear = new Date(expense.date).getFullYear().toString();
    return expenseYear === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* the ExpenseFilter is a "controled component" because the value, the real logic is not handled there, but in a parent component.*/}
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* This is already rendering the ExpenseItem in a dynamic way using the below dynamic expression */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
