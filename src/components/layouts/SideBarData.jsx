import React, { useState } from 'react'
import{BsPlus} from "react-icons/bs"
import{HiMiniMinusSmall} from "react-icons/hi2"
import Flex from './Flex'


const SideBarData = ({title,showDataDrop,color,children}) => {
    const [showSubDataDrop,setShowSubDrop]=useState(true)
  return (
    <>
 <section>
 {
    showDataDrop ?(
    <div onClick={()=>setShowSubDrop(!showSubDataDrop)}>
<Flex className={"items-center justify-between"}>
<h4>{title}</h4>
{
        showSubDataDrop ?
        <BsPlus/> :
        <HiMiniMinusSmall/>
       }
       </Flex>
        </div>
        ) :(
          <div>
{color ?(
<Flex className={"items-center"}>

<span style={{background:color}}className='mr-2 w-3 h-3 rounded-full'></span><h4>{title}</h4>
</Flex> 

   
     ) :(
      <h4>{title}</h4>

      
      )}
    
    </div>

)}
{showSubDataDrop && children}
 </section>

    </>

  )
}

export default SideBarData