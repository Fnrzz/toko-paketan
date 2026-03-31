export const getTransactions = async (userId) => {
  const result = await fetch(
    `http://localhost:3001/transactions?userId:eq=${userId}&_embed=product`,
  );
  const transactions = await result.json();

  if (transactions.length === 0) {
    return { success: false, error: "Transactions not found" };
  }

  return { success: true, transactions: transactions };
};
