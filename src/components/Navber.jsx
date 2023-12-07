import React, { useEffect, useState } from 'react';
import Container from './layouts/Container';
import Img from './layouts/Img';
import Flex from './layouts/Flex';
import List from './layouts/List';
import ListItem from './layouts/ListItem';
import Logo from '../assets/logo.jpg'
import {FaBars} from "react-icons/fa"


const Navber = () => {
  const [showMenu,setShowmenu]= useState(false)
  const handleMenushow =()=>{
    setShowmenu(!showMenu)
  }
  useEffect(()=>{
    const resize =()=>{
      if(window.innerWidth < 640){
        setShowmenu(false);
    }
    else{
setShowmenu(true)
    }
  }
    window.addEventListener("resize",resize)
resize();

    },[]);
  
  return (
   <nav className='py-8 px-3'>
    <Container>
        <Flex className={"items-center"}>
        <Img src={Logo} className={"sm:w-1/12 w-full"}/>
        <div className='w-11/12'>
          <FaBars className="sm:hidden ml-auto cursor-pointer" onClick={handleMenushow} />
           {
            showMenu &&(
              <List className="sm:flex font-dm font-normal text-sm gap-x-10 justify-center
              sm:text-navColor absolute w-full left-0  
              sm:relative sm:bg-transparent bg-[#262626] text-categoryLink sm:left-0 top-16 sm:top-0 z-10">
              <ListItem listName={"Home"}linkClassName={
         "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navcolor "
       }
       link={"/"}
       />
              <ListItem listName={"Shop"}linkClassName={
         "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navcolor "
       }
       link={"/shop"}
       />
              <ListItem listName={"About"}linkClassName={
         "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navcolor "
       }/>
              <ListItem listName={"Contacts"}linkClassName={
         "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navcolor "
       }/>
              <ListItem listName={"Journal"}linkClassName={
         "py-4 block px-5 hover:px-[30px] hover:text-white transition-all  sm:p-0 sm:hover:p-0 sm:hover:text-navcolor"
       }/>
             </List>
            )
           }

        </div>
        </Flex>
    
    </Container>
   </nav>
  );
};

export default Navber;