import { Icon } from "@iconify/react";
import { useState } from "react";
import Card from "../Payment/Card";


const CartProducts = ({ id, qty, product_product, onClick }) => {

  const [count, setCount] = useState({
    id: id,
    value: qty,
  })


  const handleIncrement = () => {
    let value = { id: id, value: count.value + 1 }
    setCount(value)
    onClick(value)
  }

  const handleDecrement = () => {
    if (count.value > 1) {
      let value = { id: id, value: count.value - 1 };
      setCount(value)
      onClick(value)
    }
    else {
      let value = { id: id, value: 1 }
      setCount(value)
      onClick(value)
    }
  }


  const handleDelete = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/product/add/to/cart/${id}`, {
      method: 'DELETE',
      headers: {
        "authorization": token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json()
    console.log(data)
  }




  return (
    <div>
      <div className="hidden lg:block">
        <div className='grid grid-cols-12 w-full mx-auto bg-white py-2 border-b'>
          <div className='grid col-span-5 '>
            <div className="flex">
              <Icon onClick={handleDelete} icon="radix-icons:cross-2" className="my-auto cursor-pointer" />
              <img src={product_product.image_url} alt='image2' className='w-16 h-16 ml-4' />
              <div>
                <h1 className="ml-2  pr-2 text-md font-semibold">{product_product.name}</h1>
                {product_product.attributes.map(({ name, value }) => (
                  <h1 className="font-semibold ml-2 text-[11px]">{name} : <span className="text-[10px]">{value}</span></h1>
                ))}
              </div>
            </div>

          </div>

          <div className='grid col-span-7 py-1'>
            <div className='grid grid-cols-9 font-semibold'>
              <div className='grid col-span-3 text-sm'> <h1 className="text-center my-auto">{product_product.price} Tk</h1></div>
              <div className='grid col-span-3 text-sm'>
                <div className="m-auto">
                  <div className="flex">
                    <button onClick={handleDecrement} className='border p-2 hover:bg-red-500'>-</button>
                    <button className='border p-2'>{count.value}</button>
                    <button onClick={handleIncrement} className='border p-2 hover:bg-red-500'>+</button>
                  </div>
                </div>

              </div>
              <div className='grid col-span-3 text-sm'><h1 className='text-center my-auto'>{count.value * product_product.price} Tk</h1></div>
            </div>

          </div>

        </div>
      </div>

      {/* <div className='flex w-full lg:hidden mx-auto bg-white py-2 border-b'>
        <div className="my-auto w-20 h-20">
          <img src={image} alt='image2' className='h-full w-full my-auto' />
        </div>

        <div className='w-full ml-3'>
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold">{name}</h1>
            <Icon onClick={handleDelete} icon="radix-icons:cross-2" className="my-auto ml-auto  font-semibold text-red-500  cursor-pointer" />
          </div>
          <div>
            {attributes.map(({ name, value }) => (
              <h1 className="font-semibold text-[10px]">{name} : <span className="text-[9px]">{value}</span></h1>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold">Quantity</h1>
            <div className="ml-auto">
              <div className="flex">
                <button onClick={handleDecrement} className='border px-1 rounded-l hover:bg-red-500'>-</button>
                <button className='border px-1'>{count.value}</button>
                <button onClick={handleIncrement} className='border px-1 rounded-r hover:bg-red-500'>+</button>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-1 items-center">
            <h1 className="text-sm font-semibold">Total</h1>
            <h1 className="text-sm ">{550} Tk</h1>
          </div>
        </div>

      </div> */}
    </div>

  )
}

export default CartProducts


