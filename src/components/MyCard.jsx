"use client";
import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";


export default function MyCard() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http//localhost:8000/api/products?skip=0&limit=5');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setProducts(jsonData.products);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
    }, []); 
    
    if (isLoading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error: {error.message}</div>;
    }

    return (
        <>
          {products.map(product => (
            <Card
                className="max-w-sm"
                imgAlt={product.productName}
                imgSrc={product.img}
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.productName}
                    </h5>
                </a>
                
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.unitPrice}</span>
                    <a
                        href="#"
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                       Read more
                    </a>
                </div>
            </Card>
          ))}
        </>
    )
}
