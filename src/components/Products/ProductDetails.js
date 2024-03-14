import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';



const PracriceDetailsCard = () => {
  const params = useParams();
  const [data, setData] = useState([])
  const [attributes, setAttribute] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState()
  const [selectedAttribute, setSelectedAttribute] = useState()


  const fetchData = async () => {
    const response = await fetch(`http://localhost:8050/api/get/product/variant/${params.id}`)
    const data = await response.json();
    setData(data.items)
    setAttribute(data.attribute)
    setSelectedVariant(data.items[0])
    setSelectedAttribute(data.items[0].attributes)
    setLoading(true)
  }

  useEffect(() => {
    fetchData();
  }, [params.id])


  const matchItems = (data, newData) => {
    return data.filter(item => {
      return newData.every(datum => {
        return item.attributes.some(attribute => {
          return attribute.name === datum.name && attribute.value === datum.value;
        });
      });
    });
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setSelectedAttribute(prevData => {
      const newData = prevData.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }

        return item;
      });
      const matchedItems = matchItems(data, newData);
      setSelectedVariant(matchedItems[0])
      return newData;
    });
  }




  return (
    <div className='pt-6 lg:pt-20 bg-white'>
      {
        loading ? <div>
          <div className='grid grid-cols-12 mx-auto gap-2 lg:gap-4 w-full md:w-[80%] lg:w-[65%]'>
            <div className='grid col-span-12 md:col-span-6 w-full mx-auto p-3 rounded-lg '>
              <div className='overflow-hidden'>
                <img src={selectedVariant.image_url} alt='image2' className='w-full mx-auto p-1 h-72 lg:h-96 rounded-lg transition-all duration-1000' />
              </div>
            </div>


            <div className='grid col-span-12 md:col-span-6 mx-auto w-full p-2 rounded-lg'>
              <div>
                <div>
                  <h1 className='text-xl font-bold text-red-500'>{selectedVariant.name}</h1>
                  <div className="flex my-1">
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <Icon icon="iwwa:star-o" width="18px" className={`mr-1 mt-1 ${rate <= selectedVariant.id ? "text-[#FFA500]" : ""}`} />
                    ))}

                  </div>
                  <h2 className='text-md font-semibold flex'>Price: <span className='text-red-500 px-1'>{selectedVariant.price}</span> $</h2>

                  {/* Attribute */}
                  <div className='py-1'>
                    {
                      attributes.map((data) => (
                        <div className='my-2'>
                          <h1 className='font-bold py-[1px]'>{data.name}</h1>
                          <form className='flex'>
                            {data.value.map((val,index) => (
                              <div className='pr-2 flex'><input onChange={handleChange} value={val} name={data.name} type='radio' /><span className='pl-1 font-semibold'>{val}</span></div>
                            ))}
                          </form>
                        </div>
                      ))
                    }
                  </div>


                </div>
                <AddToCart id={selectedVariant.id} />
              </div>

            </div>
          </div>

          <div className='w-full md:w-[80%] lg:w-[65%] mx-auto  py-10'>
            <ProductDescription />
          </div>
        </div> : <h1>Loading...</h1>
      }
    </div>

  )
}

export default PracriceDetailsCard
