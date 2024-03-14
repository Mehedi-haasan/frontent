import { NavLink } from 'react-router-dom';

const CarouselCart = ({ id, heading,price,image,category}) => {
     return (
          <div className='w-[220px] my-1.5 mx-1 p-1 lg:p-2 rounded-md shadow bg-white '>
               <div>{price && <button className='px-2 absolute rounded-full mb-1 bg-red-500 text-white'>{5}%</button>}</div>
               <div className='overflow-hidden '>
                    <img src={image} alt='image4' className='w-full h-40 md:h-48 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer' />
               </div>
               <h1 className='font-semibold py-1 text-sm lg:text-md'>{heading}</h1>

               <h2 className='text-sm lg:text-md py-1 hover:text-red-500 font-semibold flex'>Price:<span className="text-red-500 text-sm lg:text-md pl-1">{price} $</span></h2>
               <div>
                    <NavLink to={`/product/details/${id}`} className='border font-semibold px-2 py-1 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</NavLink>
               </div>


          </div>
     );
};
export default CarouselCart;