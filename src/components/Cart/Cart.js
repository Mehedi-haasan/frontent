import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { v4 as uuidv4 } from "uuid";
import Card from '../Payment/Card';
import Heading from './Heading';
import CartProducts from './CartProducts';
import SelectionComponent from '../Input/SelectionComponent';
import { cartLength } from '../Redux/Actions';

const Cart = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([])
  const [cartData, setCartData] = useState()
  const [charge, setCharge] = useState(60);
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)


  const fetchCartData = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/product/add/to/cart`, {
      method: "GET",
      headers: {
        "authorization": token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json();
    setCartData(data.items);
    setTotal(data.price)

    let len = data.items.length;
    dispatch(cartLength({ len }))
    setLoading(true)
  }

  const getState = async () => {
    const response = await fetch(`http://localhost:8050/api/get/state`);
    const data = await response.json();
    setState(data.items)
  }

  useEffect(() => {
    fetchCartData();
    getState();
  }, [])


  const handleClick = (value) => {
    setCartData(data => {
      return data.map(item => {
        if (item.id === parseInt(value.id)) {
          return { ...item, qty: value.value };
        }
        return item;
      });
    });
  };

  const onSelect = (value) => {
    state.filter((item) => {
      if (item.id === parseInt(value)) {
        setCharge(item.charge)
      }
    })
    setShow(false)
  }


  return (
    <div className='bg-white py-2 md:py-4 lg:py-10'>
      {
        loading ? <div className='grid grid-cols-12 gap-3 w-full md:w-[94%] lg:w-[90%] mx-auto'>
          <div className='grid col-span-12 md:col-span-8 xl:col-span-9'>
            <div className='p-2'>
              <div className='hidden lg:block'><Heading /></div>

              {
                cartData.map(({ id, qty, product_product }) => {
                  return <CartProducts id={id} qty={qty} product_product={product_product} onClick={handleClick} />
                })
              }
              <div className="flex mt-5 justify-between items-center">
                <button className='ml-auto font-semibold border rounded-lg py-2 px-5 bg-[#EF4444] focus:ring-4 focus:ring-blue-300 font-medium text-white'>Update</button>
              </div>

            </div>
          </div>


          <div className='grid col-span-12 md:col-span-4 xl:col-span-3 rounded'>
            <div className='p-2'>
              <div className='bg-white border rounded p-3'>
                <h1 className='text-3xl py-5 '>Cart Totals</h1>
                <Card lebel={"Subtotal"} value={total} />
                <Card lebel={"Delivery Charge"} value={charge} />
                <div className="flex justify-between items-center">
                  <button onClick={() => { setShow(!show) }} className='ml-auto font-semibold text-red-500'>Change Address</button>
                </div>

                {
                  show ? <SelectionComponent options={state} label={"State"} onSelect={onSelect} /> : <span />
                }

                <Card lebel={"Total"} value={total + charge} />
                <NavLink to={`/payments/${0}/${0}`} className='border block mx-auto rounded text-center py-2 bg-red-500 hover:bg-black font-semibold text-white my-6'>Proceed to Checkout</NavLink>
              </div>
            </div>
          </div>
        </div> : <h1>Loading...</h1>
      }
    </div>
  )
}

export default Cart



