interface Product{
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
}

export default function ProductCard({ id, name, quantity, price, category} : Product){
    return(
        <>
            <div>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Category: {category}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </>
    )
}