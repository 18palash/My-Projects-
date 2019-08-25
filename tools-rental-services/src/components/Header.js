import React from 'react';
import {Link} from 'react-router-dom';
import banner1 from './PowerTools2.jpg';
import banner2 from './PowerTools1.png';
const Header = () => {
    return(
        <div>
            <div className="main-body-header">
                {/* Header navigation  */}   
                <div className="main-body-header-nevagation">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/">Tool Rental Services</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="About">About</Link></li>
                                <li><Link to="Contact">Contact US</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="SignUp"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="LogIn"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul>
                        </div>
                    </nav>                    
                </div>
                {/* Header navigation Ends here */}
            
                {/* Header image slides  */} 
                <div className="main-body-header-image">
                    {/* header Image Slide using Bootstrap Carousel */}
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>                                    
                        </ol>
                                            
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={banner1} alt="Banner" />
                            </div>
                                                    
                            <div className="item">
                                <img src={banner2} alt="Banner" />
                            </div>                              
                        </div>
                                            
                        {/* Left and right controls */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>   
                </div>
                {/* Header image slides  */}
            </div>
            {/* Header body ends here  */}
        </div> 
    )

} 

export default Header;