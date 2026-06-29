import React, { useEffect } from 'react'

function Product() {
       useEffect(()=>{
        (async ()=>{
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          console.log(data)
        })()
       },[])
  return (

    <>



    </>
  )
}

export default Product