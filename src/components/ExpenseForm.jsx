import { useState, useEffect } from "react";

function ExpenseForm({
  addExpense,
  editingExpense,
  updateExpense,
}) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  useEffect(() => {
  if (editingExpense) {
    setExpenseName(editingExpense.expenseName);
    setAmount(editingExpense.amount);
    setCategory(editingExpense.category);
    setDate(editingExpense.date);
  }
}, [editingExpense]);

const handleSubmit = (e) => {
  e.preventDefault();

  const newExpense = {
    id: editingExpense ? editingExpense.id : Date.now(),
    expenseName,
    amount,
    category,
    date,
  };

  if (editingExpense) {
    updateExpense(newExpense);
  } else {
    addExpense(newExpense);
  }

  setExpenseName("");
  setAmount("");
  setCategory("Food");
  setDate("");
};

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">
        Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">
            Expense Name
          </label>

          <input
            type="text"
            placeholder="e.g. Lunch"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Amount (Ksh)
          </label>

          <input
            type="number"
            placeholder="0"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>School</option>
            <option>Bills</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;