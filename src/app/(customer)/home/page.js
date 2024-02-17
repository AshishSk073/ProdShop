import ProductCard from "@/components/ProductCard/ProductCard";

async function getProducts() {
    const res = await fetch('http://localhost:3001/products', {
        next: {
            revalidate: 120
        }
    })
    return res.json()
}

async function Page() {
    const products = await getProducts();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center md:justify-start">
            {products.map((product, index) => (
                <div key={product.id + index} className="flex justify-center items-center">
                    <ProductCard key={product.id} product={product} />
                </div>
            ))}
        </div>
    );
}

export default Page;
