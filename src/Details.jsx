import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

  const [visible, setVisible] = useState(false);

  // Toggle the visibility of the login window
  const toggleLoginWindow = () => {
    setVisible(!visible);
  };
  let { id } = useParams()
  let [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(a => a.json())
      .then(b => setData(b))
  }, [])

  return (
    <>
      <div className="container shadow p-4 my-4">
        <div className="row">
          <div className="col-lg-4">
            <img src={data.thumbnail} alt="" />
          </div>
          <div className="col-lg-6">
            <h4>{data.title}</h4>
            <p>$ {data.price}</p>
            <p>{data.description}</p>
            <div className='bbba'>
              <li onClick={toggleLoginWindow}>
                <button className='abbb'>Buy Now</button>
              </li>
              <button className='abbb bg-warning p'>Add to cart</button>
            </div>
          </div>

        </div>

      </div>
      <div className="buyf">
        {/* Product Buying Form  */}
        {visible && (
          <div className="login-window shadow rounded">
            <h2 className='text-center py-4 px-2'>Buying Form</h2>
            <div className='px-2'> 
              <form className='mx-5' action="">
               <span>First Name:</span> <input className='my-2 px-5' type="text" placeholder='First Name' /> <br />
               <span>Last Name:</span>  <input className='px-5' type="text" placeholder='Last Name' /> <br />
               <span>Address:</span>  <input className='mt-2 px-5 mx-3' type="text" placeholder='' /><br />
               <span>E-mail:</span>  <input className='mt-2 px-5 mx-4' type="text" placeholder='Eg:myname@gmail.com' /><br />
    
              </form>             
       
            </div>


          </div>
        )}
      </div>

    </>
  )
}

export default Details
