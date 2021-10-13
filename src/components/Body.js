import React, { useState } from 'react'


function Body() {

  
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    const onClickDetail1 = () => {
        setIsOpen1(!isOpen1)
    }
    
    const onClickDetail2 = () => {
        setIsOpen2(!isOpen2)
    }
   
    const onClickDetail3 = () => {
        setIsOpen3(!isOpen3)
    }



    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)

    const onMouseover1 = () => {
        setIsActive1(!isActive1)
    }

    const onMouseover2 = () => {
        setIsActive2(!isActive2)
    }

    const onMouseover3 = () => {
        setIsActive3(!isActive3)
    }
   


    /* submit button*/

    const submit = () => {
        alert("Submited!");
    }

    return (

        <div>
            <div ></div>
            <div id="tours" className="myText">
                <h3 className="display-5 p-3 text-primary">Our Tours</h3>
                <p> text to build on the card title and make up the bulk.</p>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="container px-5">
                <div className="row">
                    <div className="col">
                        <div id="card1" className={`${isActive1 ? 'card myCardActive myText text-white bg-primary' : 'card myCard myText text-white'}`}>
                            <img src='/pics/pic1.jpg' className="card-img-top myCardimg p-1" alt="..." onMouseOver={onMouseover1} />
                            <div>
                                <h5 className="card-title mt-2">Tour1</h5>
                                <p className="card-text px-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a id="detail1" className="btn btn-warning mt-2" onClick={onClickDetail1}>details</a>
                                <div>
                                    <p id="p1" className={`py-3 px-3  ${isOpen1 ? 'd-block' : 'd-none'}`}>Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div id="card2" className={`${isActive2 ? 'card myCardActive myText text-white bg-primary' : 'card myCard myText text-white'}`} >
                            <img src='/pics/pic6.jpg' className="card-img-top myCardimg p-1" alt="..." onMouseOver={onMouseover2}/>
                            <div >
                                <h5 className="card-title mt-2">Tour2</h5>
                                <p className="card-text px-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a id="detail2" className="btn btn-warning mt-2" onClick={onClickDetail2}>details</a>
                                <div>
                                    <p id="p2" className={`py-3 px-3 ${isOpen2 ? 'd-block' : 'd-none'}`}>Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div id="card3" className={`${isActive3 ? 'card myCardActive myText text-white bg-primary' : 'card myCard myText text-white'}`}>
                            <img src='/pics/pic7.jpg' className="card-img-top myCardimg p-1" alt="..." onMouseOver={onMouseover3}/>
                            <div>
                                <h5 className="card-title mt-2">Tour3</h5>
                                <p className="card-text px-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a id="detail3" className="btn btn-warning mt-2" onClick={onClickDetail3}>details</a>
                                <br />
                                <div>
                                    <p id="p3" className={`py-3 px-3  ${isOpen3 ? 'd-block' : 'd-none'}`} >Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div id="offers" className="container py-5">
                <div className="myText">
                    <h3 className="display-5 mt-5 text-primary">Special Offers</h3>

                </div>
                <div className="row justify-content-start py-2 px-3">
                    <div className="col-4">
                        <img src='/pics/pic8.png' className="card-img-top mt-5 h-75" alt="..." />
                    </div>
                    <div className="col-8 text-center myText text-white bg-dark px-5  mt-5">
                        <h5 className="Titel text-warning p-3">Deals & Discounts</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example of the card's content.</p>

                        <div className="container-sm text-center p-1  m-1 ">
                            <div className="row">
                                <div className="col ">
                                    <h6>Group</h6>

                                    <ul className="myList">
                                        <li>.............</li>
                                        <li>..............$</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Individual</h6>
                                    <ul className="myList">
                                        <li>..............</li>
                                        <li>..............$</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>Private</h6>
                                    <ul className="myList">
                                        <li>..............</li>
                                        <li>..............$</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end py-1 px-3">
                    <div className="col-4">
                        <img src='/pics/pic2.jpg' className="card-img-top  myCardimg" alt="..." />
                    </div>
                    <div className="col-4">
                        <img src='/pics/pic10.png' className="card-img-top  myCardimg" alt="..." />
                    </div>
                    <div className="col-4">
                        <img src='/pics/pic9.jpg' className="card-img-top  myCardimg" alt="..." />
                    </div>
                </div>
            </div>



            <div id="contact" className="container bg-dark text-white w-75 px-5">
                <div className="container p-5 m-5 ">
                    <h2 className="display-5 text-center p-2 text-warning">Contact Us</h2>
                    <div className="row">
                        <div className="col py-4  mt-5">
                            <h5>Contact us</h5>
                            <br />
                            <ul className="myList">
                                <li>95 (61) 346613895</li>
                                <br />
                                <li> holiday@gmail.com</li>
                                <br />
                                <li><i className="bi bi-facebook px-2"></i><i className="bi bi-instagram px-2"></i> <i className="bi bi-twitter"></i></li>
                            </ul>
                        </div>
                        <div className="col py-5 m-4">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="name" className="form-control" id="name" />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div cclassNamelass="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label px-1" for="exampleCheck1">Check me out</label>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-warning" onClick={submit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div id="about" className="m-5 myText text-dark border-dark">
                <div className="container p-5">
                    <h2 className="display-5 text-center p-2 text-dark">About us</h2>
                    <div className="row align-items-center px-5 m-1">

                        <div className="col">
                            <img src='/pics/pic6.jpg' className="card-img-top  myCardimg" alt="..." />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title  p-3">We Are</h5>
                                <p className="card-text">Le Lorem Ipsum est simplement dans la composition et impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                            </div>
                            
                        </div>
                        <div className="col">
                            <img src='/pics/pic7.jpg' className="card-img-top  myCardimg" alt="..." />
                        </div>
                    </div>
                    <div className="row align-items-center m-1 px-5">

                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title  p-3">Our vision</h5>
                                <p className="card-text">Le Lorem Ipsum est simplement la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src='/pics/pic3.jpg' className="card-img-top  myCardimg" alt="..." />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title p-3 ">Our Approch</h5>
                                <p className="card-text">Le Lorem Ipsum texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" py-4">
                    <h3 className="display-6">Travel the world</h3>
                    
                    <p className="card-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                </div>

            </div>


        </div>
    );
}

export default Body;