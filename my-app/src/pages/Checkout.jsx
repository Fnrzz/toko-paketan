import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/formatCurrency";
import { getProductById } from "@/services/products/getProductById";
import { addTransaction } from "@/services/transactions/addTransaction";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const response = await getProductById(id);
      if (response.success) {
        setProduct(response.product);
      }
      if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleCheckout = async () => {
    const response = await addTransaction(id, user.id);
    if (response.success) {
      navigate("/", { replace: true });
    }
    if (response.error) {
      setError(response.error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col py-20 px-4 md:px-10 gap-5">
      <h1 className="text-2xl font-bold">Halaman Checkout</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading & !error && (
        <div className="flex flex-col gap-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-4">No</TableHead>
                <TableHead className="text-center">Produk</TableHead>
                <TableHead className="text-right">Harga</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell className="text-center font-medium">
                  {product.name}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(product.price)}
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(product.price)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <Button onClick={() => handleCheckout()} size="lg" className="w-full">
            Checkout
          </Button>
        </div>
      )}
    </main>
  );
};

export default Checkout;
