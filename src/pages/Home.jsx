import ExpenseList from "../components/ExpenseList";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ExpenseForm from "../components/ExpenseForm";

function Home() {
    const [expenses, setExpenses] = useState(() => {
      const savedExpenses = localStorage.getItem("expenses");

      return savedExpenses ? JSON.parse(savedExpenses) : [];
    });
    const [editingExpense, setEditingExpense] = useState(null);
    

    const addExpense = (newExpense) => {
       setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id) => {
       setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    const updateExpense = (updatedExpense) => {
      setExpenses(
        expenses.map((expense) =>
          expense.id === updatedExpense.id
            ? updatedExpense
            : expense
        )
      );

      setEditingExpense(null);
    };

    useEffect(() => {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <SummaryCard
            title="Total Expenses"
            value="Ksh 0"
          />

          <SummaryCard
            title="Transactions"
            value="0"
          />

          <SummaryCard
            title="This Month"
            value="Ksh 0"
          />
          <ExpenseForm
            addExpense={addExpense}
            updateExpense={updateExpense}
            editingExpense={editingExpense}
          />

          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
            setEditingExpense={setEditingExpense}
          />
        </div>
      </div>
    </>
  );
}

export default Home;