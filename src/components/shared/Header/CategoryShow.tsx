import React, { useEffect, useState } from "react";
import Link from "next/link";


interface HeaderProps {
    onChange: (value: any) => void;
    item:{
        name:String;
    }
}
const CategoryShow: React.FC<HeaderProps> = ({ onChange }) => {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState("")

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/category/by/productValue`);
        const data = await response.json();
        setData(data.items)
    }
    // useEffect(() => {
    //     fetchData();
    // }, [])


    return (
        <div className="grid grid-cols-12 z-50 w-[90%] mx-auto">

            {/* CategoryShow */}
            <div className="grid col-span-3 bg-[#FF0000] rounded-l">
                <ul className="w-full font-bold">
                    {data.map((item) => {
                        return <li onClick={() => { onChange(false) }} onMouseEnter={() => { setSelected(item.name) }} className="hover:bg-white hover:text-black pl-5 py-1"><Link href={`/category/${item.id}/${item.name}`} className="flex py-1 text-sm rounded-lg">{item.name}</Link></li>
                    })}
                </ul>
            </div>

            <div className="grid col-span-9 rounded-r bg-white text-sm">
                <div>
                    {data.filter((item) => item.name === selected).map((data) => (
                        <div className={`grid grid-cols-2`}>{data.value.map((data) => {
                            return <div><Link href={`/product/details/${data.id}`} onClick={() => { onChange(false) }} className={`text-black pl-4 py-1 font-semibold`}>{data.name}</Link></div>
                        })}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryShow;
