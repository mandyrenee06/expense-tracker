function ExpenseList({
  expenses,
  deleteExpense,
  setEditingExpense,
}) {

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">
        Recent Expenses
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">
          No expenses yet.
        </p>
      ) : (
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <div>
                <h3 className="font-semibold">
                  {expense.expenseName}
                </h3>

                <p className="text-sm text-gray-500">
                  {expense.category} • {expense.date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                 <p className="font-bold text-blue-600">
                   Ksh {expense.amount}
                 </p>

                 <button
                   onClick={() => setEditingExpense(expense)}
                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                 >
                   Edit
                 </button>

                 <button
                   onClick={() => deleteExpense(expense.id)}
                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                 >
                   Delete
                 </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;