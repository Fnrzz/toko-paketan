export const getTransactions = async (userId) => {
  console.log(userId);
  const result = await fetch(
    `http://localhost:3001/transactions?userId:eq=${userId}`,
  );
  const transactions = await result.json();

  console.log(transactions);

  if (transactions.length === 0) {
    return { success: false, error: "Transactions not found" };
  }

  return { success: true, transactions: transactions };
};
