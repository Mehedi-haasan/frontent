import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Icon } from "@iconify/react";

interface HeaderProps {
    onChange: (value: any) => void;
}

const SmallSize: React.FC<HeaderProps> = ({ onChange }) => {

    const [category, setCategory] = useState(false)
    const [contuct, setContact] = useState(false)

    const [data, setData] = useState([])


    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/category/by/productValue`);
        const data = await response.json();
        setData(data.items)
    }
    // useEffect(() => {
    //     fetchData();
    // }, [])



    return (


        <ul className="w-full ml-1">
            <li className="pt-2 pb-1 border-b">
                <Link href="/" onClick={() => { onChange(false) }} className="py-1 w-[100px] px-1 rounded">Home</Link>
            </li>

            <li className="py-1 border-b">
                <div className=''>
                    <div className="flex justify-between w-full"><Link href="/" className={`rounded px-1 py-1 `}>Categories</Link><Icon onClick={() => { setCategory(!category) }} icon="ep:arrow-down" width="18px" className={`transition-transform mt-2 cursor-pointer right-0 duration-300 ${category ? "rotate-180" : "rotate-0"}`} /></div>
                    <div className={`text-sm text-black p-1.5 bg-white text-black rounded ${category ? "block" : "hidden"}`}>
                        {data.map((item) => {
                            return <Link onClick={() => { onChange(false) }} href={`/category/`} className="flex py-1  rounded-lg">hello</Link>
                        })}
                    </div>
                </div>
            </li>

            <li className="py-1 border-b w-full">
                <div>
                    <div className="flex justify-between w-full">
                        <Link href="/Contact" onClick={() => { onChange(false) }} className={`rounded px-1 py-1`}>Support</Link>
                        <Icon onClick={() => { setContact(!contuct) }} icon="ep:arrow-down" width="18px" className={`transition-transform mt-2 cursor-pointer ml-1 duration-300 ${contuct ? "rotate-180" : "rotate-0"}`} />
                    </div>


                    <div className={`bg-white text-black p-2 rounded ${contuct ? "block" : "hidden"}`}>
                        <Link href="/watch" className="flex py-1 text-sm rounded-lg">Help Center</Link>
                        <Link href="/livechat" className="flex py-1 text-sm rounded-lg">Chat With Us</Link>
                    </div>
                </div>
            </li>
            <li className="py-1 flex border-b">
                <Link href="/login" onClick={() => { onChange(false) }} className='py-1 w-[100px] text-sm px-1 rounded'>LOGIN/REGISTER</Link>
                {/* {
                        auth ? <Link to='/profile' className='ml-4 py-1 text-sm w-[100px] px-1 rounded'>My Account</Link> : <Link to="/login" className='ml-4 py-1 w-[100px] text-sm px-1 rounded'>LOGIN/REGISTER</Link>
                    } */}
            </li>
        </ul>


    )
}

export default SmallSize
