function Registrationform(){
    return(
        <div>
            <body>
                <div classNameName="row">
                    <div className="col-5 m-auto h-80 mb-5 mt-2 bg-secondary">
                        <fieldset className="border col-12">
                            <figcaption className="text-center fs-4 text-dark mt-3 mb-3">.Registration Form.</figcaption>
                        
                            <div className="col-10 form-floating  mb-3 ms-5">
                                <input type="text" className="form-control border-0 border-bottom " id="inputEmail4" placeholder="Name"></input>
                                <label for="floatingInput" className="text-muted">Name</label>
                            </div>
                            
                        
                            <div className="col-10 form-floating mb-3 ms-5">
                                <input type="email" className="form-control border-0 border-bottom" id="inputEmail4" placeholder="Email-Address"></input>
                                <label for="floatingInput" className="text-muted">Email-Address</label>
                            </div>

                            
                            <div className="col-10  form-floating mb-3 ms-5">
                                <input type="text" className="form-control border-0 border-bottom" id="inputEmail4" placeholder="country"></input>
                                <label for="floatingInput" className="text-muted">country</label>
                            </div>
                            
                            
                            <div className="col-10  form-floating mb-3 ms-5">
                                <input type="tel" className="form-control border-0 border-bottom" id="inputEmail4" placeholder="Phone"></input>
                                <label for="floatingInput" className="text-muted">Phone</label>
                            </div>

                            
                            <div className="col-10  form-floating mb-4 ms-5">
                                <input type="password" className="form-control border-0 border-bottom" id="inputEmail4" placeholder="password"></input>
                                <label for="floatingInput" className="text-muted">password</label>
                            </div>

                            <div className="col-10 mb-3 ms-5">
                                <div className="form-check ">
                                    <input className="form-check-input form-control" type="checkbox" id="gridCheck"></input>
                                    <label className="form-check-label text-dark" for="gridCheck">
                                        I accept terms and conditions
                                    </label>
                                </div>
                            </div>
                    
                            <div className="col-8 mb-4 ms-5 row d-flex justify-content-center mb-5">
                                <button type="submit" className="btn btn-outline-light ms-5 ">Create Account</button>
                            </div>

                        </fieldset>
                    </div>
                </div>
            </body>
        </div>
    )
}
export default Registrationform