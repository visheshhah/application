import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

interface Product{
    id: string;
    name: string;
    stock: number;
    price: number;
    category: string;
}

export default function AddProductForm(){
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");


    const [form, setForm] = useState(
        {
            name: "",
            price: "",
            category: "",
            stock: ""
        }
    );

    const [error, setError] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("products");
        if(data){
            setProducts(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("products" , JSON.stringify(products));
    }, [products]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!form.name.trim()){
            setError("Name is required");
            return;
        }

        if(Number(form.price) <= 0){
            setError("Price must be greater than zero");
            return;
        }

        const newProduct: Product = {
            id: crypto.randomUUID(),
            name: form.name,
            price: Number(form.price),
            category: form.category,
            stock: Number(form.stock)
        };

        setProducts([...products, newProduct])

        setForm({
            name:"",
            price: "",
            category: "",
            stock: ""
        });

        setError("");
    }
    
    const filtered = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

    return (
        <div>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
            </select>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
                <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} />
            
                <button type="submit">Add Product</button>
            </form>

            <div>
                <ul>
                    {filtered.map(p => 
                        <li key={p.id}>
                          <ProductCard id={p.id} name={p.name} stock={p.stock} category={p.category} price={p.price}/>
                        </li>
                    )}
                </ul>

                
            </div>
        </div>
    )
}