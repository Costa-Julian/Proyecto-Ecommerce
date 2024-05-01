import React from 'react'

const CategoryList = () => {
  return (
    <div className="col-lg-3  " style={{  padding:0,margin:0 }}>
                        <div className="shop__sidebar" style={{  padding:0,margin:0 }}>
                            
                            <div className="shop__sidebar__accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-heading">
                                            <a >Categories</a>
                                        </div>
                                        <div id="collapseOne" className="collapse show" >
                                            <div className="card-body">
                                                <div className="shop__sidebar__categories">
                                                    <ul className="nice-scroll">
                                                        <li><a href="#">Men (20)</a></li>
                                                        <li><a href="#">Women (20)</a></li>
                                                        <li><a href="#">Bags (20)</a></li>
                                                        <li><a href="#">Clothing (20)</a></li>
                                                        <li><a href="#">Shoes (20)</a></li>
                                                        <li><a href="#">Accessories (20)</a></li>
                                                        <li><a href="#">Kids (20)</a></li>
                                                        <li><a href="#">Kids (20)</a></li>
                                                        <li><a href="#">Kids (20)</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default CategoryList