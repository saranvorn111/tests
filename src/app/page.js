"use client"
import CardComponent from '@/components/CardComponent'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [product, setProduct] = useState({
    id:1,
    name:"Product 1",
    price:100,
    quantity:1,
    image:"http://",
    description:" this is the description",
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-be p-24'>
        <CardComponent
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
        />
        </main>
  )
}
