import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/formatCurrency";
import { useAuthStore } from "@/store/useAuthStore";
import { Link } from "react-router-dom";
import LoginModal from "../auth/LoginModal";

const ModalProduct = ({ productData: product }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className=" w-full mt-auto">
          Detail
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{formatCurrency(product.price)}</DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col items-center py-4 gap-4">
          <img src={product.image} alt={product.name} className="w-32" />
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
        {isAuthenticated ? (
          <Link to={`/checkout/${product.id}`} className="w-full flex">
            <Button size="lg" className="w-full">
              Checkout
            </Button>
          </Link>
        ) : (
          <LoginModal textButton="Login to checkout" />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalProduct;
