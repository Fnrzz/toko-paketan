import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/formatCurrency";
import { formatDate } from "@/lib/formatDate";
import { getTransactions } from "@/services/transactions/getTransactions";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useEffect, useState } from "react";

const Transactions = () => {
  const user = useAuthStore((state) => state.user);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      const response = await getTransactions(user.id);
      if (response.success) {
        console.log(response.transactions);
        setTransactions(response.transactions);
      }
      if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };
    fetchTransactions();
  }, [user]);
  return (
    <main className="min-h-screen flex flex-col py-20 px-4 md:px-10 gap-5">
      <h1 className="text-2xl font-bold">Halaman Riwayat Transaksi</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <div className="flex flex-col gap-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-4">No</TableHead>
                <TableHead className="text-center">ID Transaksi</TableHead>
                <TableHead className="text-center">Produk</TableHead>
                <TableHead className="text-center">Harga</TableHead>
                <TableHead className="text-right">Tanggal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center">
                    {transaction.id}
                  </TableCell>
                  <TableCell className="text-center">
                    {transaction.product.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {formatCurrency(transaction.product.price)}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatDate(transaction.date)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </main>
  );
};

export default Transactions;
