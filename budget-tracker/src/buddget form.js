import React, { useState } from "react";

function BudgetForm({ setBudget, addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (name && amount > 0) {
      addExpense({ name, amount: parseFloat(amount) });
      setName("");
      setAmount("");
    }
  };

  return (
    <div>
      <form>
        <h3>Set Total Budget</h3>
        <input
          type="number"
          placeholder="Total Budget"
          onChange={(e) => setBudget(parseFloat(e.target.value) || 0)}
        />
        <h3>Add an Expense</h3>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </form>
    </div>
  );
}

export default BudgetForm;
