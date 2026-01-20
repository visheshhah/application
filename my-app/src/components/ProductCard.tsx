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
            <div className="bg-sky-500/100 m-4 p-5 rounded flex flex-col items-start">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
            </div>
        </>
    )
}