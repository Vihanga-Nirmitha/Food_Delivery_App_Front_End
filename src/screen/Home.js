import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'

export default function 
() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Carousal/></div>
        <div className='m-3'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div><Footer/></div>

    </div>
  )
}
