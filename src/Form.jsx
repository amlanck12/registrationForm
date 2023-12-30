import React from 'react'







export default function Form(props) {

    return (



        <div className='App center'>


            {/* .....header file .....*/}

            <div className="amlan">
                {/* blank div */}
            </div>
            <div className="container pb-5 container-back">
                <div className="row">
                    {/* <img className="companyLogo" src="src\assets\1664765744849.jpg" alt="company_logo" /> */}
                    <div className="py-2 companyLogo">
                        <img src="src\assets\img1.png" className="rounded" alt="..." />
                    </div>
                    <div className="container px-5">
                        <h4>General Info</h4>
                        <p>Resume / Portfolio</p>
                    </div>
                    <div className="container">
                        <div className="container drag-area py-2 pt-3" name="fileUpload" onChange={props.onChangeHandler}>
                            <h3>Drag & Drop to Upload File</h3>
                            <h4>or</h4>
                            <div className="mb-3">
                                <input className="form-control my-1" type="file" id="formFile"/>
                                <input className="form-control my-1" type="file" id="formFile"/>
                                <input className="form-control my-1" type="file" id="formFile"/>
                            </div>
                        </div>
                    </div>

                    <div className="container py-3">
                        <form className="row g-3">
                            <div className="col-md-1">
                                <label htmlFor="inputState" className="form-label"></label>
                                <select id="inputState" onChange={props.onChangeHandler} name="prefix" className="form-select">
                                    <option>Select</option>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input onChange={props.onChangeHandler} name="firstname" type="text" className="form-control" id="inputPassword4" placeholder="First Name" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input onChange={props.onChangeHandler} name="middlename" type="text" className="form-control" id="inputPassword4" placeholder="Middle Name" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input onChange={props.onChangeHandler} type="text" className="form-control" name="lastname" id="inputPassword4" placeholder="Last Name" />
                            </div>

                            {/* <div class="form-check">
                                <input onChange={props.onChangeHandler} name="language" class="form-check-input" type="checkbox" value="html" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        html
                                    </label>
                            </div>
                            <div class="form-check">
                                <input onChange={props.onChangeHandler} name="language" class="form-check-input" type="checkbox" value="css" id="flexCheckChecked"/>
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Css
                                    </label>
                            </div>
                            <div class="form-check">
                                <input onChange={props.onChangeHandler} name="language" class="form-check-input" type="checkbox" value="javascript" id="flexCheckChecked"/>
                                    <label class="form-check-label" for="flexCheckChecked">
                                        javascript
                                    </label>
                            </div> */}


                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="date" onChange={props.onChangeHandler} className="form-control" id="inputAddress" name="date" placeholder="Date Of Birth" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" onChange={props.onChangeHandler} name="gender" className="form-select">
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" onChange={props.onChangeHandler} name="bloodgroup" className="form-select">
                                    <option>Blood Group</option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>A-</option>
                                </select>
                            </div>


                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Nationality</option>
                                    <option>Indian</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="email" className="form-control" id="inputAddress" placeholder="Personal Email" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>ISD code</option>
                                    <option>+91</option>
                                    <option>Other</option>
                                </select>
                            </div>



                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Ex: 9876543210" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Source</option>
                                    <option>91</option>
                                    <option>11</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Source Category</option>
                                    <option>91</option>
                                    <option>11</option>
                                </select>
                            </div>


                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Preffered Location</option>
                                    <option>Asansol</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Current CTC" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Experienced CTC" />
                            </div>


                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Notice Period</option>
                                    <option>In Months</option>
                                    <option>In Days</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Ex: 15 Days / 3 Months" />
                            </div>



                            <div className="container pb-0 py-5">
                                <h4>*Skills</h4>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <textarea type="text" className="form-control" id="inputAddress" placeholder="Remarks" />
                            </div>




                            <div className="container pb-0 py-5">
                                <h4>*Personal Information</h4>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Pan No." />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Aadhar No." />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Passport No." />
                            </div>


                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="date" className="form-control" id="inputAddress" placeholder="Emergency Contact No" />
                            </div>



                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="number" className="form-control" id="inputAddress" placeholder="Emergency Contact No" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="name" className="form-control" id="inputAddress" placeholder="Emergency Contact Name" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Relation</option>
                                    <option>Mother</option>
                                    <option>Father</option>
                                </select>
                            </div>



                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <textarea type="text" className="form-control" id="inputAddress" placeholder="Current Address" />
                            </div>




                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Current Country</option>
                                    <option>India</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Current State</option>
                                    <option>West Bengal</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Current City</option>
                                    <option>Asansol</option>
                                    <option>Other</option>
                                </select>
                            </div>



                            <div className="col-4">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="number" className="form-control" id="inputAddress" placeholder="Permanent Pin" />
                            </div>

                            <div className="container pb-0 py-4 mx-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Permanent address is same as current address
                                    </label>
                                </div>
                            </div>


                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <textarea type="text" className="form-control" id="inputAddress" placeholder="Permanent Address" />
                            </div>






                            <div className="col-4">
                                <label htmlFor="inputState" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Permanent Country</option>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputState" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Permanent State</option>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>

                            <div className="col-4">
                                <label htmlFor="inputState" className="form-label"></label>
                                <select id="inputState" className="form-select">
                                    <option>Permanent City</option>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>



                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label"></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Permanent Address" />
                            </div>


                            <div className="container pb-0 py-5">
                                <h4>*Work Experience</h4>
                            </div>
                            <div className="container px-5 my-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I am a fresher
                                    </label>
                                </div>
                            </div>


                            <div className="container pb-0 py-3">
                                <div className="col-4">
                                    <button type="file" className="btn btn-secondary mx-4">Add Experience</button>
                                </div>
                            </div>



                            <div className="container py-3">
                                <h4>*Add Education</h4>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <button type="file" className="btn btn-secondary mx-4">Add Education</button>
                                    </div>
                                </div>
                            </div>




                            <div className="container pb-0 py-5">
                                <h4>*Social Profile</h4>
                            </div>

                            <div className="col-md-12 ">
                                <label htmlFor="inputPassword4" className="form-label mx-2">Linkedin</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label mx-2">Github</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label mx-2">Dribble</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword4" className="form-label mx-2">Behance</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
