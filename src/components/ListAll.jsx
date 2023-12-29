"use client"



import React from 'react';
import Card from "./ui/Card";
import Button from "./ui/Button";
import ImageButton from "./ui/ImageButton";
import Image from 'next/image'

import noon1 from '../assets/images/noon1.png';
import amazon1 from '../assets/images/amazon1.jpg';
import whatsapp from '../assets/images/whatsapp.png';
import ags from '../assets/images/ags.jpg';

const mockProducts = [
  {
    id: 1,
    img: ags,
    status: '10% Newyear Offer',
    brand: 'LUMINOUS',
    title: 'Luminous GPTTEX 240 AH',
    icon: 'icon-park-outline:like',
    price: '36.33 AED',
  },
  {
    id: 2,
    img: ags,
    status: '10% Newyear Offer',
    brand: 'LUMINOUS',
    title: 'Luminous GPTTEX 240 AH',
    icon: 'icon-park-outline:like',
    price: '36.33 AED',
  },
  {
    id: 3,
    img: ags,
    status: '10% Newyear Offer',
    brand: 'LUMINOUS',
    title: 'Luminous GPTTEX 240 AH',
    icon: 'icon-park-outline:like',
    price: '36.33 AED',
  },
];

const ListAll = () => {
  const handleClick = () => {
    return alert('Card Click !');
  };

  return (
    <div className="   justify-between">
      {mockProducts.map((product) => (
        <Card
          key={product.id}

          img={<Image src={product.img} />}
          status={product.status}
          brand={product.brand}
          title={product.title}
          icon={product.icon}
          price={product.price}
          btn={
            <Button
              onClick={handleClick}
              className='btn mt-32'
            >
              Buy now
            </Button>
          }
          additional='Also available on:'
        >
          <div className="space-x-4 mt-4">
            <ImageButton
              imageSrc={noon1}
              altText="Button Image"
              onClick={handleClick}
              className="w-10 h-10"
            />
            <ImageButton
              imageSrc={amazon1}
              altText="Button Image"
              onClick={handleClick}
              className="w-10 h-10"
            />
            <ImageButton
              imageSrc={whatsapp}
              altText="Button Image"
              onClick={handleClick}
              className="w-10 h-10"
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ListAll;
