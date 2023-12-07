import React from 'react'
import Img from './Img'
import Flex from './Flex'
import {AiFillHeart} from "react-icons/ai"
import {IoIosGitCompare} from "react-icons/io"
import {BsFillCartFill} from "react-icons/bs"
import { Link } from 'react-router-dom'


const Product = ({
    className,
    showBadge,
    showCategory,
    badgeTitle,
    productImg,
    productName,
    price,
    color,
    link
}) => {
  
  return (
    <Link to={`/products/${link}`}className={`${className} font-dm relative group overflow-hidden block` }>
        {(
            showBadge &&
            <div className='bg-black absolute top-5 left-6 py-2 px-8
 text-white text-sm font-bold z-10'>{badgeTitle}</div>
        )}
        <div className='relative'>
        <Img src={productImg} imgClassName={"w-[370px] h-[370px]"}/>
        <div className='w-full bg-white absolute scale-0 group-hover:scale-100 bottom-[0px]
         left-0 p-[30px] transition-all ' >
         <Flex className={"items-center justify-end  gap-x-4 mb-5"}>
            <h5 className='text-base text-[#767676] hover:font-bold translation-all
            hover:text-black'>Add to Wish List</h5>
            <AiFillHeart/>
         </Flex>
         <Flex className={"items-center justify-end gap-x-4 mb-5"}>
            <h5 className='text-base text-[#767676] hover:font-bold translation-all
            hover:text-black'>Compare</h5>
            <IoIosGitCompare/>
         </Flex>
         <Flex className={"items-center justify-end  gap-x-4 "}>
            <h5 className='text-base text-[#767676] hover:font-bold translation-all
            hover:text-black'>Add to Cart</h5>
            <BsFillCartFill/>
         </Flex>
        </div>
        </div>

        
        <Flex className={"justify-between items-center mt-[18px]"}>
            <h3 className='text-xl font-bold'>{productName}</h3>
            <h6 className='text-base text-[#767676]'>{price}</h6>
            
        </Flex>
        {
        showCategory &&
        
        <h6 className=''> {color} </h6>
        }
      
      
    </Link>
  )
}

export default Product