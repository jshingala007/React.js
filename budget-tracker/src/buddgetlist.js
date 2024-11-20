import React from "react";
import BudgetListItem from "./BudgetListItem";

function BudgetList({ expenses, deleteExpense }) {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <BudgetListItem
            key={index}
            expense={expense}
            onDelete={() => deleteExpense(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default BudgetList;
