import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './contextReducer';

export default function Card(props) {
  let dispatchCart =  useDispatchCart();
  let options = props.option;
  let data = useCart();
  let priceOptions = Object.keys(options);
  const priceref = useRef();
  const [qty, setqty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddtoCart = async () => {
    const action = {
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: props.finalPrice,
      qty: qty,
      size: size
    };

    await dispatchCart(action);
    console.log(data);
  }
  let finalPrice = qty*parseInt(options[size])
  useEffect(()=>{
    setSize(priceref.current.value)
  },[])
  return (
    <div>
      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img className="card-img-top" style={{ height: "120px", objectFit: "fill" }} src={props.foodItem.img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">this is some important text</p>
          <div className="container w-100"></div>
          <select className="m-2 h-100 bg-success rounded" onChange={(e) => setqty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded" ref={priceref} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) => {
              return <option key={data} value={data}>{data}</option>
            })}
          </select>

          <div className='d-inline h-100 fs-5'>
            Rs:{finalPrice}/-
          </div>
          <hr></hr>
          <button className={'btn btn-success justify-center ms-2 flex-grow'} onClick={handleAddtoCart}>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
