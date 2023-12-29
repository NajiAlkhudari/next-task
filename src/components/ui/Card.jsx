"use client"

import React from 'react';
import Icons from './Icon';
const Card = ({ className,status, imgbtn,brand,title, price , icon  ,additional, img ,btn , children}) => {
  return (
    
    <div className={`custom-box   ${className}`}>
      <div className='flex flex-row justify-between space-x-10'> 
         <div className='w-1/2'>
        {img}
        </div>
        <div className='w-1/2'>

             <div className='flex flex-row justify-between top-0'>
              <div className='status'>
                {status}
                </div>
                <div className='brand'>
                {brand}
                </div>  
             </div>
            <div className='flex flex-row justify-between pt-5'>
            <div className='custom-title' >{title}
            </div> 
            <div>      
                    {icon && <Icons className='text-gray-500 ' icon={icon} width="24" />} 
                    
</div>

            </div>
             
            <div className='price'>
        {price}
        
       </div>
       <div className='additional '> 
         {additional}
         </div>
       <div>
        {children}
       </div>

       <div>  {btn}</div>
    
    
       </div>
      
       
      
       </div>
  
      
      </div>
      
  );
};


export default Card;
