import React from 'react'
import Title from './layouts/Title'
import  Container  from './layouts/Container'
import Product from './layouts/Product'
import Flex from './layouts/Flex'
import watch from "../assets/watch.png"
import wrist from "../assets/wrist.png"
import busket from"../assets/busket.png"
import rabbit from "../assets/rabbit.png"
import Slider from "react-slick";
import {HiArrowSmRight,HiArrowSmLeft} from "react-icons/hi"
import {TbTruckReturn} from "react-icons/tb"
import {GiReturnArrow} from "react-icons/gi"
import Img from './layouts/Img'
import phone from "../assets/phone.png"
import furniture from "../assets/furniture.png"
import electronic from "../assets/electronic.png"
import botle from "../assets/botle.png"
import bag from "../assets/bag.png"
import bawl from "../assets/bawl.png"
import black from "../assets/black.png"


const NewArrivals = () => {
 

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"py-[26px] px-[26px] absolute z-10 rounded-full text-white text-2xl bg-[#979797] top-[35%] right-6"}
      style={{ ...style }}
      onClick={onClick}
    >
      <HiArrowSmRight/>
      </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"py-[26px] px-[26px] absolute z-10 rounded-full text-white text-2xl bg-[#979797] top-[35%] left-6"}
      style={{ ...style }}
      onClick={onClick}
    >
      <HiArrowSmLeft/>
      </div>
  );
}
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
          }
        },
        {
          breakpoint: 737,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows:false,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows:false,
          }
        },
        
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows:true,
          }
        },
        
      ],
      };
  return (
<section className='pt-32 pb-[213px] px-2'>


<Flex className={"justify-between mt-[-100px] mb-10 items-center ml-40 mr-80  border-[#F0F0F0;];"}>

<Flex >
<h6 className='font-dm font-base'>2 Two years warranty</h6>
</Flex>
<Flex className={"items-center"}>
<TbTruckReturn/>
<h4 className='font-dm font-base' >Free shipping</h4>
</Flex>
<Flex className={"items-center"}>
<GiReturnArrow/>
<h5 className='font-dm font-base'>Return policy in 30 days</h5>
</Flex>
</Flex>
<Container>


<Flex className={" justify-between mb-32 mt-40"}>
  <Img src={phone}/>
<div >
<Img src={furniture} className={' mb-10'}/>
<Img src={electronic}/>
</div>
</Flex>


<Title title={"New Arrivals"}/>
<Slider {...settings}>
          <div>
          <Product 
          className={"sm:mx-5"}   
          showBadge={true} 
           productImg={watch} 
           productName={"Basic Crew Neck Tee"} 
           price={"$44.00"} 
           badgeTitle={"10%"} color={"Black"}
/>
          </div>
          <div>
          <Product
className={"sm:mx-5"}
           showBadge={true} 
          showCategory={true} productImg={wrist}
           productName={"Basic Crew Neck Tee"} 
          price={"$44.00"} badgeTitle={"New"} 
          color={"Black"}/>
          </div>
          <div>
          <Product
className={"sm:mx-5"}
           showBadge={true} 
          showCategory={true} productImg={busket}
           productName={"Basic Crew Neck Tee"} 
          price={"$44.00"} badgeTitle={"New"} 
          color={"Black"}/>
          </div>
          <div>
            <h3><Product
className={"sm:mx-4"}
             showBadge={true} 
            showCategory={true} productImg={rabbit} 
            productName={"Basic Crew Neck Tee"} 
         price={"$44.00"} badgeTitle={"New"} 
         color={"Black"}/>
</h3>
          </div>
          <div>
          <Product
className={"sm:mx-5"}
           showBadge={true} 
          showCategory={true} productImg={busket}
           productName={"Basic Crew Neck Tee"} 
          price={"$44.00"} badgeTitle={"New"} 
          color={"Black"}/>
          </div>
          <div>
            <h3>
              <Product
className={"sm:mx-5"}
             showBadge={true} 
            showCategory={true} productImg={rabbit} 
            productName={"Basic Crew Neck Tee"} 
         price={"$44.00"} badgeTitle={"New"} 
         color={"Black"}/>
</h3>
          </div>
          
        </Slider>

        
        <Flex className={"w-[100%] justify-between items-center pl-4 pr-4"}>
        <div>
          <Product 
          className={"sm:mx-5"}   
          showBadge={true} 
           productImg={botle} 
           productName={"Basic Crew Neck Tee"} 
           price={"$44.00"} 
           badgeTitle={"New"} color={"Black"}
/>
          </div>
          <div>
          <Product
className={"sm:mx-5"}
           showBadge={true} 
          showCategory={true} productImg={bag}
           productName={"Basic Crew Neck Tee"} 
          price={"$44.00"} badgeTitle={"New"} 
          color={"Black"}/>
          </div>
          <div>
          <Product
className={"sm:mx-5"}
           showBadge={true} 
          showCategory={true} productImg={bawl}
           productName={"Basic Crew Neck Tee"} 
          price={"$44.00"} badgeTitle={"New"} 
          color={"Black"}/>
          </div>
          <div>
            <h3><Product
className={"sm:mx-4"}
             showBadge={true} 
            showCategory={true} productImg={black} 
            productName={"Basic Crew Neck Tee"} 
         price={"$44.00"} badgeTitle={"New"} 
         color={"Black"}/>
</h3>
          </div>
          
          </Flex>
</Container>

</section>

  )
}
export default NewArrivals