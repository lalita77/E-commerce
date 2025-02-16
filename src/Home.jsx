import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Home() {

  let [cat, setCat] = useState([])
  let [beauty, setBeauty] = useState([])
  let [skin, setSkin] = useState([])
  let [tab, setTablets] = useState([])
  let [vehicle, setVehicle] = useState([])
  let [fragrances, setFragrances] = useState([])
  let [watches, setWatches] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/smartphones`)
      .then(a => a.json())
      .then(b => setCat(b.products))
    fetch('https://dummyjson.com/products/category/groceries')
      .then(res => res.json())
      .then(a => setBeauty(a.products));
    fetch('https://dummyjson.com/products/category/skin-care')
      .then(res => res.json())
      .then(c => setSkin(c.products));
    fetch('https://dummyjson.com/products/category/tablets')
      .then(res => res.json())
      .then(d => setTablets(d.products));
    fetch('https://dummyjson.com/products/category/vehicle')
      .then(res => res.json())
      .then(e => setVehicle(e.products));
    fetch('https://dummyjson.com/products/category/fragrances')
      .then(res => res.json())
      .then(f => setFragrances(f.products));
    fetch('https://dummyjson.com/products/category/womens-watches')
      .then(res => res.json())
      .then(g => setWatches(g.products));




  }, [])
  return (
    <>

      <section>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={6} aria-label="Slide 7" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/1831FA0E4E3214D-Cica_Mask_Rubi_Rana_webSlider_V01_t01.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/59C617D09212194-ElectroDeals_webSlider_V01_t001.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/59C617D09212194-ElectroDeals_webSlider_V01_t001.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/B6265BAAFC8BD30-Konka_webSlider_V01_t01_001.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/FE0B81FE608B2BE-WinterSlider_webSlider_V01_t01.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/59C617D09212194-ElectroDeals_webSlider_V01_t001.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.sybazzar.com/public/1600-270/files/93AE16A0A6662D8-Vitamin%20C_WebSlider_V01_T01_Moon%20ma'am.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container shadow mt-4">
          <div className="d-flex justify-content-between">
            <h5>Smart Phones</h5>
            <p>View All</p>
          </div>
          <div className="d-flex justify-content-between row ps-3 gap-4 mx-auto">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={7}
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {cat.map((a) => (
                <SwiperSlide>
                  <Link to={`/details/${a.id}`}>
                    <div className="col-lg-2  wi ho">
                      <div className="pt-2">
                        <img src={a.thumbnail} style={{ height: 150, width: 180, paddingLeft: 15, }} />
                      </div>
                      <div className="text-center">
                        <p>{a.title}</p>
                      </div>
                      <div className="text-center">
                        <h5>{a.price}</h5>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

              ))}
            </Swiper>
            {/* Mapping */}

          </div>
        </div>
      </section>
      <section>
        <div className="container shadow mt-4">
          <div className="d-flex justify-content-between">
            <h5>Groceries</h5>
            <p>View All</p>
          </div>
          <div className="row ps-3 gap-4 mx-auto">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={7}
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {beauty.map((b) => (
                <SwiperSlide>
                  <div className="col-lg-2  wi ho">
                    <Link to={`/details/${b.id}`}>
                      <div className="pt-2">
                        <img className="item" src={b.thumbnail} alt />
                      </div>
                      <div className="text-center">
                        <p>{b.title}</p>
                      </div>
                      <div className="text-center">
                        <h5>{b.price}</h5>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}

              ...
            </Swiper>

          </div>
        </div>
      </section>

      <section>
        <div className="container shadow my-4 py-4">
          <div className="d-flex justify-content-between">
            <h5>Gurkhas Sales</h5>
            <p>View All</p>
          </div>
          <div className="row ps-5 gap-5 mx-auto">
            {fragrances.map((c) => (
              <div className="col-lg-2 wi ho">
                <Link to={`/details/${c.id}`}>
                  <div className="pt-2">
                    <img className="item" src={c.thumbnail} alt style={{ width: 178 }} />
                  </div>
                  <div className="text-center">
                    <p>{c.title}</p>
                  </div>
                  <div className="text-center">
                    <h5>{c.price}</h5>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section>
        <div className="container d-flex justify-content-center my-4 brnd">
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/B9F811F5B04A096-wow-icon.webp" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/0142B34F04EF6E8-037a999370620fcaba63134f93270bee.jpg" alt /></div>
          <div className="px-4 py-2 border-end shadow "><img src="https://cdn.sybazzar.com/public/600-600/files/9B115E4D0EF9BA0-mato%20nepa.png" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/54F90C8A18BF722-baltra.jpg" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/E9508D482F369F3-realme-icon.webp" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/69603AAE7755270-Doro.jpg" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/CAABA04C70353C3-mivi-icon.webp" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/DC76F4F53CC221D-konka-icon.webp" alt /></div>
          <div className="px-4 py-2 border-end shadow"><img src="https://cdn.sybazzar.com/public/600-600/files/69603AAE7755270-Doro.jpg" alt /></div>
        </div>
      </section>

      <section className="container bg-white my-3">
        <div className="row">
          <div className="col-lg-4 shadow">
            <div className="d-flex justify-content-between">
              <h5> SkinCare &amp; Appliances</h5>
              <a className="text-decoration-none" href="#">
                <p className="fs-5">View All</p>
              </a>
            </div>
            <div className="my-3">
              <div className="row g-2">
                {skin.map((a) => (
                  <div className="col-lg-6">
                      <Link to={`/details/${a.id}`}>
                    <div className="p-2 shadow border">
                      <img src={a.thumbnail} alt style={{ width: 167, marginLeft: 10 }} />
                      <div className="text-center ">
                        <p className="mb-0">{a.title}</p>
                        <p style={{ color: 'limegreen' }}>{a.price}</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 shadow">
            <div className="d-flex justify-content-between">
              <h5> tablets &amp; Appliances</h5>
              <a className="text-decoration-none" href="#">
                <p className="fs-5">View All</p>
              </a>
            </div>
            <div className="my-3">
              <div className="row g-2">
                {tab.map((a) => (
                  <div className="col-lg-6">
                    <Link to={`/details/${a.id}`}>
                      <div className="p-2 shadow border">
                        <img src={a.thumbnail} alt style={{ width: 167, height: 200, marginLeft: 10 }} />
                        <div className="text-center ">
                          <p className="mb-0">{a.title}</p>
                          <p style={{ color: 'limegreen' }}>{a.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </div>
          <div className="col-lg-4 shadow">
            <div className="d-flex justify-content-between">
              <h5>Vehicle</h5>
              <a className="text-decoration-none" href="#">
                <p className="fs-5">View All</p>
              </a>
            </div>
            <div className="my-3">
              <div className="row g-2">
                {vehicle.slice(0, 4).map((a) => (
                  <div className="col-lg-6">
                     <Link to={`/details/${a.id}`}>
                    <div className="p-2 shadow border">
                      <img src={a.thumbnail} alt style={{ width: 167, height: 200, marginLeft: 10 }} />
                      <div className="text-center ">
                        <p className="mb-0">{a.title}</p>
                        <p style={{ color: 'limegreen' }}>{a.price}</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-4 py-3">
          <div className="row">
            <div className="col-lg-4 shadow">
              <div className="d-flex justify-content-between">
                <h5>Fragrances</h5>
                <a className="text-decoration-none" href="#">
                  <p className="fs-5">View All</p>
                </a>
              </div>
              <div className="my-3">
                <div className="row">
                  {fragrances.slice(0, 4).map((a) => (
                    <div className="col-lg-6">
                       <Link to={`/details/${a.id}`}>
                      <div className="p-2 shadow border">
                        <a className="text-decoration-none" href>
                          <img src={a.thumbnail} alt style={{ width: 178 }} />
                          <div className="text-center mt-2">
                            <p className="mb-0">{a.title}</p>
                            <p style={{ color: 'limegreen' }}>{a.price}</p>
                          </div>
                        </a>
                      </div>
                      </Link>
                    </div>
                  ))}


                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="shadow p-2">
                <img src="https://cdn.sybazzar.com/public/files/55B41DEC85F8D4F-ChharNepal_AdBanner_1260x900.jpg" alt style={{ width: 841 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container shadow mt-4 py-2">
          <div className="d-flex justify-content-between">
            <h5>Women Watches</h5>
            <p>View All</p>
          </div>
          <div className="d-flex justify-content-between row ps-3 gap-5 mx-auto">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {watches.map((a) => (
                <SwiperSlide>
                  <Link to={`/details/${a.id}`}>
                    <div className="col-lg-2  wi ho">
                      <div className="pt-2">
                        <img className="item" src={a.thumbnail} />
                      </div>
                      <div className="text-center">
                        <p>{a.title}</p>
                      </div>
                      <div className="text-center">
                        <h5>{a.price}</h5>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Mapping */}
          </div>
        </div>
      </section>
      <hr />

    </>
  )
}

export default Home
