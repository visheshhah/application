import ProductCard from "../components/ProductCard";

interface Product{
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
}


function displayProducts(products: Product[],category: string ){
    let filtered = products.filter(p => p.category === category);
    return(
        <>
            <ul>
                {filtered.map(p => 
                    <li>
                        <ProductCard id={p.id} name={p.name} quantity={p.quantity} category={p.category} price={p.price}/>
                    </li>
                )}
            </ul>
        </>
    )
}