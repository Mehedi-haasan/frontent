import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import CarouselCart from './CarouselCard';





const Carousel = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/product/templete`)
        const data = await response.json();
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='bg-[#313CBF] rounded'>
            <div className='flex'>
                {data.map(({ id, category_id, heading, image_url, name, price, standerd_price }) => {
                    return <CarouselCart id={id} category_id={category_id} heading={heading} image={image_url} name={name} price={price} standerd_price={standerd_price} />
                })}
            </div>

        </div>
    )
}

export default Carousel
