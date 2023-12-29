"use client"
import React from 'react';
import Image from 'next/image'

import Card from "./ui/Card";
import Button from "./ui/Button";
import noon1 from '../assets/images/noon1.png'
import amazon1 from '../assets/images/amazon1.jpg'
import whatsapp from '../assets/images/whatsapp.png'


import ags from '../assets/images/ags.jpg'
import ImageButton from "./ui/ImageButton";



const List = () => {
    const handleClick =()=>{
        return alert('Card Click !');
      }
    return (
   <div className=" list flex flex-row justify-between ">
       
       <Card className=' '
                    img={<Image src={ags} />}


status= ' 10% Newyear Offer'
brand='LUMINOUS'
   title= ' Luminous GPTTEX 240 AH'
    icon="icon-park-outline:like"
    price='36.33 AED'
   btn ={<Button 
      onclick={handleClick}
      className='btn mt-32'> Buy now </Button>}
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
            imageSrc={<Image src={amazon1} alt="Image Alt Text" width={50} height={50} />}
            altText="Button Image"
        onClick={handleClick}
        className="w-10 h-10"
      />
            <ImageButton
        imageSrc={whatsapp}
        altText="Button Image"
        onClick={handleClick}
        className="w-10 h-10"
      /></div>
     
   </Card>

   <Card className=' '
           img={<Image src={ags} />}

status= ' 10% Newyear Offer'
brand='LUMINOUS'
   title= ' Luminous GPTTEX 240 AH'
    icon="icon-park-outline:like"
    price='36.33 AED'
   btn ={<Button 
      onclick={handleClick}
      className='btn mt-32'> Buy now </Button>}
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
      /></div>
     
   </Card>
  
  </div>
    );
  };

  export default List;