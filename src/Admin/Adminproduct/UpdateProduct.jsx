import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';
import { Mycart } from '../../MainRoter';
import { useParams } from 'react-router-dom';
import { items } from '../../components/productes/Products';



const UpdateProduct = () => {
    const {item,setItem}=useContext(Mycart)
    const {id}=useParams()
    const filteritem=item.find((item)=>item.id===parseInt(id))
    const [updatedval,setUpdatedVal]=useState({
        id:filteritem.id,
        title:filteritem.title,
        price:filteritem.price,
        qty:filteritem.qty,
        gender:filteritem.gender,
        image:filteritem.image,
        catogery:filteritem.catogery,
        details:filteritem.details


    })
    const click=()=>{
        const update=item.map((item)=>item.id===filteritem.id?{...updatedval,id:filteritem.id}:item)
        setItem(update)
    }
    console.log(items)


  return (
   
     
    <>
    <Container  >
    <div  className="row  my-5 mx-3 product-details d-flex align-items-center">
      <div className='bg-white col-lg-5 '>
      <Image fluid src={updatedval.image}  className=' p-5'  />
      
      </div>
      <div className='col-lg-7 col-sm-12 mt-5 ' style={{textAlign:'start'}}>
      <h5 className='mb-1 ms-3' >Title</h5>
        <input type="text" className='mb-4 ms-3' value={updatedval.title} onChange={(e)=>setUpdatedVal({...updatedval,title:e.target.value})}  style={{width:'80%'}}/>
        
        <h5 className='mb-1 ms-3' >Price</h5>
        <input type="number" className='mb-4 ms-3'  value={updatedval.price} onChange={(e)=>setUpdatedVal({...updatedval,price:e.target.value})} style={{width:'80%'}}/>
        <h5 className='mb-1 ms-3' >Quantity</h5>
        <input type="number" className='mb-4 ms-3' value={updatedval.qty} onChange={(e)=>setUpdatedVal({...updatedval,qty:e.target.value})} style={{width:'80%'}}/>
        <h5 className='mb-1 ms-3' >Gender</h5>
        <input type="text" className='mb-4 ms-3' value={updatedval.gender} onChange={(e)=>setUpdatedVal({...updatedval,gender:e.target.value})} style={{width:'80%'}}/>
        <h5 className='mb-1 ms-3' >Category</h5>
        <input type="text" className='mb-4 ms-3' value={updatedval.catogery} onChange={(e)=>setUpdatedVal({...updatedval,catogery:e.target.value})} style={{width:'80%'}}/>
        <h5 className='mb-1 ms-3' >Details</h5>
        <input type="text" className='mb-4 ms-3' value={updatedval.details} onChange={(e)=>setUpdatedVal({...updatedval,details:e.target.value})} style={{width:'80%'}}/>
        <h5 className='mb-1 ms-3' >Image</h5>
        <input type="text" className='mb-4 ms-3' value={updatedval.image} onChange={(e)=>setUpdatedVal({...updatedval,image:e.target.value})} style={{width:'80%'}}/>
        
        
      
      <br/>
      <Button variant="primary" className='ms-4  mb-4' onClick={click} >Update Product</Button>
      </div>
    </div>
  
  </Container>
  </>


  )
}

export default UpdateProduct
