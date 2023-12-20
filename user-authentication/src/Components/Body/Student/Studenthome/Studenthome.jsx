import React from 'react'
import './Studenthome.css'
import aboutimg from '../Studenthome/feature-1.jpg';
import actiimg from '../Studenthome/ground.avif';
// import potraitgirl from '../Studenthome/potrait-girl.avif';
import { Link } from 'react-router-dom';

const Studenthome = () => {
  return (
    <div>
           <div className='std-home-email-icons'>
                <div className="std-home-email">
                     Email: issascpmna@gmail.com
                </div>
                <div className="std-home-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </div>
           </div>
            <nav class="navbar navbar-expand-lg bg-light std-home-navbar">
                <div class="container-fluid">
                    <div className='std-home-head'>
                        <a class="navbar-brand std-home-head" href="#">ISS Arts and Science College</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    </div>
                    <div class="navbar-nav" id='st-home-pages'>
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link active" aria-current="page" href="#about-main-div">About Us</a>
                        <a class="nav-link active" aria-current="page" href="#cource">Cource</a>
                        <a class="nav-link active" aria-current="page" href="#activity">Activities</a>
                    </div>
                </div>
            </nav>  


            {/* MAIN IMAGES */}


            <div className="std-home-image"> 
                <h1>ISS Arts & Science College</h1>
                <p>We don’t just prepare you for exams, We prepare for life..</p>
                <div className='std-home-buttons'>
                    <button>Our Academics</button>
                    <Link className='std-home-sighn-btn' to="/student"><button id='std-home-sighn-btn'>Sign in</button></Link>
                </div>
            </div>

        {/* ABOUT US */}

       <div id="about-main-div">
       <div className="std-home-aboutus">
            <div className="std-home-about-img">
                <img src={aboutimg} alt="" />
            </div>
            <div className="std-home-about-head">
                <h1>About Us</h1>
            </div>
            <div className="std-home-about-lorem">
                <div className="lorem-one">
                ISS Arts and Science College is a self- <br /> financing institution approved by the <br /> Govt. of Kerala and affiliated to the <br /> University of Calicut. The campus is <br /> located within Perinthalmanna <br /> Municipality at Ponniakurssi, 2km away <br /> from Perinthalmanna town. The campus <br /> is located in vast area, fortressed by <br /> mountains. The sylvan surroundings, <br /> serene atmosphere and the salubrious
                </div>
                <div className="lorem-two">
                climate are the most conductive for the <br /> physical and mental growth and well- <br />being of the students. The College is <br /> envisaged as a center of excellence in <br /> higher education in order to provide <br /> quality education with special thrust on <br /> moral and social values to mold a new <br /> generation of socially committed youth <br /> ready to work for materializing the <br /> dreams of a ‘knowledge society’
                </div>
            </div>
        </div>
        <div className="std-home-about-icons">
                    <div className="icon-manage">
                            <i class="fa fa-users" aria-hidden="true"></i> <br />
                            <h1>Management & <br /> Governance</h1>
                    </div>
                    <div className="icon-vision">
                            <i class="fa fa-eye" aria-hidden="true"></i> <br />
                            <h1>Our Vision and <br /> Mission</h1>
                    </div>
                    <div className="icon-princi">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i> <br />
                            <h1>Principal's <br /> Message</h1>
                    </div>
        </div>
       </div>

            {/* PROGRAMES */}

            <div id='cource' className="std-home-programes">
                <div className="std-home-pgrm-head">
                    <h1>Programmes Offered</h1>
                    <p>Institution offers Post Graduate and Under Graduate programmes in various subjects</p>
                </div>
                <div className="std-home-program-btn">
                    <div className="prgm-row-one">
                        <button>BCA</button>
                        <button>BBA</button>
                        <button>B.COM</button>
                    </div>
                    <div className="prgm-row-two">
                        <button className='btn-english'>BA.ENGLISH</button>
                        <button className='btn-malayalam'>BA.MALAYALAM</button>
                        <button className='btn-physics'>BA.PHYSICS</button>
                    </div>
                </div>
            </div>


            {/* ACTIVITIES */}


            <div id='activity' className="std-home-acti">
                    <div className="std-home-acti-image"><img src={actiimg} alt="" /></div>
                    <div className="std-home-contents">

                        <h1>Our Co-curricular <br /> Activities</h1>

                        <h2><i class="fa fa-stop-circle-o" aria-hidden="true"></i> Sports & Games</h2>
                        <p>Better coaching is provided for the students under the guidance of <br /> well-qualified physical education instructor</p>

                        <h2><i class="fa fa-stop-circle-o" aria-hidden="true"></i> National Service Scheme</h2>
                        <p>The NSS aims to inculcate social welfare of students, and to provide <br /> service to society without bias.</p>

                        <h2><i class="fa fa-stop-circle-o" aria-hidden="true"></i> Clubs & Cells</h2>
                        <p>The college functions with different types of clubs and cells for all <br />-round developement and safety of the students.</p>

                    </div>
            </div>


            {/* FOOTER */}

            
                    <footer class="footer-distributed">

                                <div class="footer-left">

                                    <h3>ISS<span>COLLEGE</span></h3>

                                    <p class="footer-links">
                                        <a href="#" class="link-1">Home</a>
                                        
                                        <a href="#">Blog</a>
                                    
                                        <a href="#">Pricing</a>
                                    
                                        <a href="#">About</a>
                                        
                                        <a href="#">Faq</a>
                                        
                                        <a href="#">Contact</a>
                                    </p>

                                    <p class="footer-company-name">ISS COLLEGE © 2015</p>
                                </div>

                                <div class="footer-center">

                                    <div>
                                        <i class="fa fa-map-marker"></i>
                                        <p><span>Perinthalmanna</span> Malappuram, Kerala</p>
                                    </div>

                                    <div>
                                        <i class="fa fa-phone"></i>
                                        <p>04933-297481</p>
                                    </div>

                                    <div>
                                        <i class="fa fa-envelope"></i>
                                        <p><a href="mailto:support@company.com">issascpmna@gmail.com</a></p>
                                    </div>

                                </div>

                                <div class="footer-right">

                                    <p class="footer-company-about">
                                        <span>About the college</span>
                                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                                    </p>

                                    <div class="footer-icons">

                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-github"></i></a>

                                    </div>

                                </div>

                            </footer>


                        </div>
  )
}

export default Studenthome


