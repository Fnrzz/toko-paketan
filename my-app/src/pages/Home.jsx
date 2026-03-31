import CardProducts from "@/components/features/products/CardProducts";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col py-20 gap-10">
      <div className="w-full flex flex-col md:flex-row px-4 md:px-10 gap-5 items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Toko Paketan</h1>
          <p className="text-md text-muted-foreground">
            Temukan paket data terbaik dan termurah di Indonesia
          </p>
        </div>
      </div>
      <CardProducts />
    </main>
  );
};

export default Home;
