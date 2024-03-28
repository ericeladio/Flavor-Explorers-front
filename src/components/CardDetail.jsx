"use client";
import React from 'react'

export default function CardDetail() {
  return (
      <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="w-1/2 p-8">
            <img src="https://images.pexels.com/photos/2262832/pexels-photo-2262832.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagen" className="h-full w-full object-cover"/>
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-4">Chai</h1>
            <p className="text-lg">10 boxes x 20 bags</p>
            
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$18</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Buy now
                </a>
            </div>
          </div>
        </div>
      </>
  )
}