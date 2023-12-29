"use client"
import React from 'react';

import Title from '../components/Title';
import List from '@/components/List';

export default function Home() {
  return (
    <main className="container flex flex-row justify-between ">
     <div>
<Title />   
<List />  
     </div>
    </main>
  )
}
