import React from 'react'
import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './Details'
import Category from './Category'
import { Cat } from './Data'

function Header() {
  return (
    <>
     <header className="shadow">
  <section className="top pt-1">
    <div className="container justify-content-between d-flex">
      <ul className="d-flex list-unstyled gap-4">
        <li><i className="bi bi-headphones" />
          Hotline: 01-5970455</li>
        <li>|</li>
        <li><i className="bi bi-envelope" />
          Email: support@sybazzar.com
          <i className="bi bi-facebook" />
          <i className="bi bi-instagram" />
          <i className="bi bi-youtube" />
          <i className="bi bi-tiktok" />
          <i className="bi bi-whatsapp" />
        </li>
      </ul>
      <ul className="d-flex list-unstyled gap-4">
        <li>FAQ</li>
        <li>|</li>
        <li>Blog</li>
        <li>|</li>
        <li>Career</li>
        <li>|</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </section>
  <section className="nav pt-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <Link to={'/'}>
          <img className="logo pb-2" src="https://cdn.sybazzar.com/public/files/729FF4C08FF63B2-logo.png" alt /></Link>
        </div>
        <div className="col-lg-6 mx-auto">
          <form className="d-flex">
            <i className="bi bi-search text-secondary" style={{position: 'relative', top: 7, left: 29}} />
            <input className="form-control search ps-5" type="text" name="search" placeholder="Search For Products, Brands and More" />
          </form>
        </div>
        <div className="col-lg-4">
          <ul className="d-flex list-unstyled gap-4">
            <li><i className="bi bi-person-circle" />Login</li>
            <li><i className="bi bi-cart3" />Cart</li>
            <li><i className="bi bi-shop-window" />Become a Seller</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section>
        <div className="container mx-auto shadow mt-2">
          <ul className="d-flex justify-content-center text-center list-unstyled gap-4">
            {Cat.map((a) => (
              <li><Link to={`category/${a.slug}`}>
                <div><img className="im" src={a.image} alt /></div>
                <p>{a.cat}</p>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
</header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id/" element={<Details />} />
        <Route path='/category/:slug'  element={<Category/>}/>
      </Routes>
    </>
  )
}

export default Header
