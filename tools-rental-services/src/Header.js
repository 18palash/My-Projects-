import React from 'react';
const Header = () => {
    return(
        <div>
            <div className="main-body-header">
                {/* Header navigation  */}   
                <div className="main-body-header-nevagation">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="indexTool.html">Tool Rental Services</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="indexTool.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact US</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="signup.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="login.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
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
                                <img src="images\PowerTools1.png" alt="" />
                            </div>
                                                    
                            <div className="item">
                                <img src="images\PowerTools2.jpg" alt="" />
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