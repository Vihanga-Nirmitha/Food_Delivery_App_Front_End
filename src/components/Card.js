import React from 'react'

export default function 
() {
  return (
    <div>
          <div className="card mt-3" style={{"width": "18rem" , "maxHeight":"360px"}}>
                    <img className="card-img-top" src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">this is some important text</p>
                      <div className="container w-100"></div>
                        <select className="m-2 h-100 bg-success rounded">
                          {Array.from(Array(6),(e,i)=>{
                            return(
                              <option key={i+1} value={i+1}>{i+1}</option>
                            )
                          })}
                        </select>
                      <select className="m-2 h-100 bg-success rounded">
                        <option value="Half">Half</option>
                        <option value="Full">Full</option>
                        </select>  

                        <div className='d-inline h-100 fs-5'>
                          Total Price
                        </div>
                    </div>
              </div>
    </div>
  )
}
