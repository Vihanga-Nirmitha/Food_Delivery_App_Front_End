import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'


export default function
  () {
    const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "GET",
      header: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodCat(response[1]);
    setFoodItem(response[0]);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>

                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x500?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x500?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x500?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
      </div>
      <div className='container'>
        {
          foodCat !== 0
            ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                <div key={data.id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div><hr />
                  {
                    foodCat !== 0
                      ? foodItem.filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase()))) 
                      .map(filterItem => {
                        return (

                          <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                            <Card foodName = {filterItem.name}
                            option = {filterItem.options[0]}
                            imgSrc = {filterItem.img}
                            >

                            </Card>
                          </div>


                        );
                      })
                      : <div>No Such Data Found </div>
                  }
                </div>

              );
            })
            : <div></div>
        }
        
      </div>
      <div><Footer /></div>

    </div>
  )
}
