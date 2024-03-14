import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';
import SmallSize from './SmallSize'
import CategoryShow from './CategoryShow'
import '../../../AmplifyConfigure'
import { Auth, Hub } from 'aws-amplify';


interface HeaderProps {
  onChange: (value: any) => void;
  item:{
    name:String;
}
}

const Header: React.FC<HeaderProps> = () => {
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState(true);

  const [contuct, setContuct] = useState(false)
  const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [select, setSelect] = useState("")
  const [accessories, setAccessories] = useState(false)
  const length = 2;


  async function AuthLissener() {
    Hub.listen("auth", () => {
      switch (data.payload.event) {
        case "singIn":
          return setAuth(true)
          break;

        case "singOut":
          return setAuth(false)
          break; break;
      }
    })
    try {
      await Auth.currentAuthenticatedUser()
      setAuth(true)
    } catch (error) {

    }
  }

  useEffect(() => {
    AuthLissener();
  }, [])
console.log(accessories);
  return (

    <div className="sticky top-0 z-50 shadow">

      <div className="sticky bg-white top-0 z-50">

        <div className="grid grid-cols-12 relative mx-auto sticky top-0 z-50 w-full lg:w-[96%] bg-white">

          {/* first div */}
          <div className="grid col-span-6 lg:col-span-2  lg:my-3 lg:ml-0">
            <Link href="/" className='font-bold text-3xl mt-1'><Icon width="42px" icon="lucide:home" /></Link>
          </div>




          {/* 2nd div */}
          <div className="grid col-span-4 hidden my-auto w-full mx-auto lg:block">
            <ul className="flex mx-auto  gap-2 xl:gap-4 text-sm lg:text-md font-bold mt-7">

              <li className="">
                <div className="flex relative"><Link onMouseEnter={() => { setAccessories(true) }} onMouseLeave={() => { setAccessories(false) }} href="/Contact" className={` pb-8`}>Accessories</Link><Icon onClick={() => { setAccessories(!accessories) }} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer ml-1 duration-300 ${accessories ? "rotate-180" : "rotate-0"}`} /></div>
              </li>

              <li>
                <div className="mx-auto"><Link href="/offer" onClick={(e) => { setSelect("Home") }} className={``}>Offer</Link></div>
              </li>


              <li>
                <div className="mx-auto">
                  <div className="flex"><Link onMouseEnter={() => { setContuct(true) }} onMouseLeave={() => { setContuct(false) }} href="/Contact" className={``}>Support</Link><Icon onClick={() => { setContuct(!contuct) }} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer ml-1 duration-300 ${contuct ? "rotate-180" : "rotate-0"}`} /></div>
                  <div onMouseEnter={() => { setContuct(true) }} onMouseLeave={() => { setContuct(false) }} className={`absolute shadow-xl bg-white text-black p-4 rounded ${contuct ? "block" : "hidden"}`}>
                    <ul>
                      <li><Link href="/help" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Help Center</Link></li>
                      <li><Link href="/liveChat" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Chat With Us</Link></li>
                      <li> <Link href="/renewSubscription" className="flex text-sm py-1 rounded-lg">Renew Subscription</Link></li>
                      <li> <Link href="/productrequest" onClick={() => { setOpen(!contuct) }} className="flex text-sm py-1 rounded-lg">Product Request</Link> </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="mx-auto"><Link href="/about" onClick={(e) => { setSelect("Profile") }} className={`${select === "Profile" && "border-b-2 border-red-500"}`}>About Us</Link></div>
              </li>
            </ul>

          </div>


          {/* 3rd div */}
          <div className="hidden lg:block w-full col-span-3 my-auto ">
            <div className="flex ml-[10%] w-[90%]">
              <input type="text" placeholder="Search for Products" onChange={() => { }} className="my-2 rounded border-2 p-1 w-full focus:outline-none" />
              <button className="my-2 rounded-r bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4" /></button>
            </div>
          </div>




          {/* 4th div */}
          <div className="grid col-span-6 lg:col-span-3 mr-3 my-auto float-right">
            <div className="">
              <Link href="/cart" className='font-bold text-md  float-right px-1 text-black'><span className=" mr-3 float-right text-right">({length})</span><Icon href="/" icon="bytesize:cart" width="25px" className="float-right px-1 my-auto" /></Link>
              {
                auth ? <Link href='/profile' className='font-bold mt-1 text-sm xl:text-md float-right mr-2 rounded'>My Account</Link> : <Link href="/login" onClick={() => { }} className='font-semibold mt-1 float-right text-sm lg:text-md mr-2 hidden lg:block rounded'>LOGIN/REGISTER</Link>
              }
            </div>
          </div>
        </div>


        {/* CategoryShow */}
        <div onMouseEnter={() => { setAccessories(true) }} onMouseLeave={() => { setAccessories(false) }} className={`absolute w-full shadow-xl text-white rounded ${accessories ? "block" : "hidden"}`}>
          {/* <CategoryShow onChange={(value) => { setAccessories(value) }} /> */}
        </div>


        {/* Small size with menu*/}
        <div className={`lg:flex absolute lg:static transition-all font-bold ease-in duration-700 top-[43px] text-white bg-[#06BACC] lg:hidden w-[55%] h-[100vh] py-3 pr-3 left-0 space-x-2 space-y-2 ${open ? "left-0" : "left-[-750px]"}`}>
          <SmallSize onChange={(value) => { setOpen(!open); console.log(value); }} />
        </div>



      </div>

      {/* <div className="bg-gray-300">
        <div className="flex mx-auto w-[90%] lg:hidden">
          <input type="text" placeholder="Search for Products" onChange={() => { }} className="my-2 rounded w-full py-1 px-2 focus:outline-none" />
          <button className="my-2 border bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4" /></button>
        </div>
      </div> */}


      <div className="grid grid-cols-12 bg-white shadow-xl fixed bottom-0 lg:hidden justify-center w-full">
        <div className="mx-auto col-span-3">
          <Icon onClick={() => { }} icon="bi:shop" width="25px" className="lg:hidden cursor-pointer mx-auto mt-1" />
          <p className="text-xs ">Shop</p>
        </div>
        <div className="mx-auto col-span-3">
          {
            auth ? <Icon onClick={() => { }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" /> : <Icon onClick={() => { setToggle(!toggle) }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" />
          }
          <p className="text-xs ">Account</p>
        </div>

        <div className="mx-auto col-span-3">

          <h1 className="flex text-center"><Icon onClick={() => { }} icon="bytesize:cart" width="28px" className="lg:hidden mx-auto cursor-pointer mt-1" />({length})</h1>
          <p className="text-xs ml-1">Cart</p>
        </div>

        <div className="mx-auto col-span-3">
          <Icon onClick={() => { setOpen(!open) }} icon="ep:menu" width="25px" className="lg:hidden cursor-pointer mx-auto mt-1" />
          <p className="text-xs ">Menu</p>
        </div>
      </div>










      {/* Small size login */}
      <div className={`static absolute bg-white transition-all font-bold ease-in duration-700 top-[43px] lg:top-[75px] z-50 shadow-xl float-right  w-[60%] lg:w-[400px] h-[100vh] py-3 pr-3 right-0 space-x-2 space-y-2 ${toggle ? "block" : "hidden"}`}>
        {/* {login ? <Login isLoggedIn={() => { setLogin(!login) }} />
          :

          // Registration
          <Registration isLoggedIn={() => { setLogin(!login) }} />
        } */}
        <h1>khfidsb vjdtrfubv sdgfcs</h1>
      </div>

    </div >

  );
};

export default Header;
