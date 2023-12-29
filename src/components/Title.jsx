"use client"

import React from 'react'
import Link from 'next/link';

const Title = () => {
  return (
  
    <div className='title '> 
      <p className= 'bateris'>Batteries</p>
      <Link href="allproduct">
      <p className="viewall">View All Batteries</p>
    </Link>
    </div>
  
  )
}

export default Title
