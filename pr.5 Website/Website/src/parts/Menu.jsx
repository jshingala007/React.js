import React from 'react'
import '../parts/Assetes/css/Menu.css'

export default function Menu() {
  return (
    <div>
      

        {/* menu start  */}


        <section className='menu'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                      <div className="mini-menu" >
                          <ul>
                            <li style={{color:"#64b496"}}>Cake & Milk <br /><span>(65 item)</span></li>
                            <li>Fresh Meat <br /><span>(30 item)</span></li>
                            <li>Vegetables <br /><span>(25 item)</span></li>
                            <li>Apple & Mango <br /><span>(45 item)</span></li>
                            <li>Strawberry <br /><span>(68 item)</span></li>
                            <li style={{color:"#64b496"}}>View More</li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="menu-img" style={{width:"415px",height:"539px"}}>
                          <h4>50 <span style={{fontSize:"19px",marginTop:"35px"}}>% off</span></h4>
                          <div className='bottom'>
                            <h5>Cake</h5>
                            <button>Shop Now</button>
                          </div>
                      </div>
                    </div>
                    <div className="col-4">
                    <div className="menu-img2" style={{width:"415px",height:"539px"}}>
                          <h4>50 <span style={{fontSize:"19px",marginTop:"35px"}}>% off</span></h4>
                      </div>
                    </div>
                </div>
            </div>
        </section>


        {/* menu end  */}


    </div>
  )
}
