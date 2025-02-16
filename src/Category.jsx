import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
    let { slug } = useParams()
    let [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${slug}`)
            .then(a => a.json())
            .then(b => setProduct(b.products))
    }, [slug])
    return (
        <>
            <div className="container">
                <div className="row g-4">
                    {product.map((a) => (
                        <div className="col-lg-3">
                            <div className="shadow p-2">
                            <Link to={`/details/${a.id}`}>
                                    <img src={a.thumbnail} />
                                    <div className='text-center'>
                                        <h5>{a.title}</h5>
                                        <p>Rs.4,799</p>
                                        <button>Buy Now</button>
                                        <button>Add to Cart</button>
                                    </div>

                            </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}
export default Category
