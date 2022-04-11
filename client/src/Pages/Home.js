import React from "react";
import { useNavigate } from "react-router-dom"
import Map from './Map';

function Home() {
    let navigate = useNavigate();
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-warning">Pump Plunder</h1>
                            
                            <p className="lead text-center fs-4 mb-5 text-warning">Don't Get Robbed at the Pump</p>
                            <div className="buttons d-flex justify-content-center">
                <button onClick={() => {navigate('/login')}} className="btn btn-warning me-4 round-pill px-4 py-2">
          <i className="fa fa-sign-in me-2"></i>Login</button>
          <button onClick={() => {navigate('/register')}} className="btn btn-warning me-4 round-pill px-4 py-2">
      <i className="fa fa-user-plus me-2"></i>Register</button>
                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sectionone">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                        <div className="lead text-center fs-4 mb-5 text-warning"></div>
                            <Map />
                            <p className="lead text-center fs-4 mb-5 text-warning font-weight-bold">Find Affordable Black Gold</p>
                            <div className="buttons d-flex justify-content-center">
                            <button className="btn btn-light me-4 round-pill px-4 py-2 font-weight-bold">Review a Gas Station</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Home;