import React, { useEffect, useRef, useState } from 'react'
import Container from './layouts/Container';
import Flex from './layouts/Flex';
import {HiOutlineBars3BottomLeft, HiOutlineVideoCameraSlash} from "react-icons/hi2"
import {HiSearch} from "react-icons/hi"
import {BiSolidUser} from "react-icons/bi"
import {FaShoppingCart} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import {GoTriangleDown} from "react-icons/go"
import DropDown from './layouts/DropDown';
import  List  from './layouts/List';
import  ListItem  from './layouts/ListItem';
import  Img  from './layouts/Img';
import cart from "../assets/cart.png"


const NavHeader = () => {
  const [ showCategory,setShowCategory] = useState(false);
  const [ showCart,setShowCart] = useState(false);
  const [ showUser,setShowUser] = useState(false);
   const category=useRef();
   const cartRef=useRef();
   const user=useRef();

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
if(category.current.contains(e.target)){
setShowCategory(!showCategory);
}else{
  setShowCategory(false)
}

if(cartRef.current.contains(e.target)){
  setShowCart(!showCart);
  
  }
  else{
    setShowCart(false)
  }
if(user.current.contains(e.target)){
  setShowUser(!showUser);
 
  }
  else{
    setShowUser(false)
  }
      
    })

  },[showCategory, showCart, showUser]);
  return (
<section className='bg-[#F5F5F3] py-6 px-3'>
    <Container>
     <Flex className={"justify-between items-center "}>
      <DropDown className={"items-center gap-x-3  cs:w-[11%]  cursor-pointer relative"}
       ref2={category}>
      <Flex >
        <HiOutlineBars3BottomLeft className='text-[#262626] text-2xl'/>
        <h6 className='hidden md:block'>Shop by Category</h6>
        {
         showCategory &&
          <List 
        className={"w-[263px] bg-[#262626] absolute text-categoryLink  top-10 left-0"}>
       <ListItem 
       listName={"Accesories"} linkClassName={
        "py-4 block px-5 hover:px-[30px] hover:text-white transition-all  "
      }
       className={"border-b border-[#2D2D2D]"}
       />
       <ListItem 
       listName={"Furniture"} linkClassName={
        "py-4 block px-5 hover:px-[30px] hover:text-white transition-all  "
        }
        className={"border-b border-[#2D2D2D]"}
        />
       <ListItem 
       listName={"Electronics"} linkClassName={
        "py-4 block px-5 hover:px-[30px] hover:text-white transition-all  "
        }
        className={"border-b border-[#2D2D2D]"}
        />
       <ListItem 
       listName={"Clothes"} linkClassName={
        "py-4 block px-5 hover:px-[30px] hover:text-white transition-all  "
        }
        className={"border-b border-[#2D2D2D]"}
        />
       <ListItem 
       listName={"Bags"} linkClassName={
        "py-4 block px-5 hover:px-[30px] hover:text-white  transition-all  "
        }
        className={"border-bborder-[#2D2D2D]"}
        />
       <ListItem 
       listName={"Home appliances"} linkClassName={
        "py-4 block px-5 hover:px-[30px]  hover:text-white "
        }
        className={"border-b border-[#2D2D2D]"}
        />
        </List>
        }
        </Flex>

      </DropDown>
        
        <div className='cs:w-[40%] font-dm text-sm'>
            <input type="text" name="" id="" 
            className="sm:w-[500px] cs:[600px] md:w-[400px] py-4 px-5 placeholder:text-sm
            placeholder:text-[#C4C4C4]"placeholder="Search Products"/>
            <HiSearch className='inline-block sm:ml-[-50px] ml-[-30px] sm:text-2xl text-xl text-cursor-pointer'/>
        </div>
        <Flex className={"cs:w-[5%] text-xl justify-between items-center"}>
          <DropDown className={"relative"}ref2={user}>
          <Flex className={"items-center cursor-pointer"}>
            <BiSolidUser/>
            <GoTriangleDown/>
            
          {
 showUser &&
 <List 
 className={"w-[200px]  absolute text-categoryLink  top-10 right-0 capitalize text-center"}>
 <ListItem 
 listName={"My Account"} linkClassName={
 "py-4 inline-block text-white "
}
 className={" bg-[#262626]"}
/>
<ListItem 
listName={"Log Out"} linkClassName={
"py-4 inline-block px-5 "
}
className={"border border-[#F0F0F0] bg-white text-black"}
/>

 </List>
          }
        </Flex>
          </DropDown>
          <DropDown className={"relative"} ref2={cartRef}>
          <FaShoppingCart className={"cursor-pointer"}/>
          {
            showCart &&
            <div className='absolute w-[358px] bg-[#F5F5F3] right-0 top-10 '>
       
            <Flex className={"items-center justify-between p-5"}> 
              <Img src={cart} imgclassName={"w-full"} className={"w-20 h-20"}/>

             <div className='font-dm text-sm text-black font-bold w-[50%]'>
             <h2>Black Smart Watch</h2>
             <h3>$44.00</h3>
             </div>
          <ImCross className='text-sm'/>  

            </Flex>
            <div className='p-5 font-dm '>
           <h4 className='text-base font-normal '>
             Subtotal:<span className='font-bold'>$44.00</span>
             </h4>
             <div className='text-sm font-bold mt-5 capitalize'>
              <a href="" className='py-4 px-10 border border-[#2B2B2B]'>View Cart</a>
              <a href="" className='py-4 px-10 border border-[#262626]  bg-[#262626] text-white ml-5'>Checkout</a>
             </div>
            </div>
            </div>
          }
          </DropDown>
          
        </Flex>
        </Flex>
     

    </Container>
</section>
  )
}

export default NavHeader