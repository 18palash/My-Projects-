import React from 'react';
const Footer = () => {
    return(
        <div>
            <div className="main-body-footer">
                {/* Footer */}
                <section id="footer">
                <div className="container">
                    <div className="row">                                   
                    <ul className="list-unstyled list-inline social text-center">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus" /></a></li>
                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope" /></a></li>
                    </ul>                 
                    </div>	
                    <div className="row">                                                          
                    <p className="h6">© All right Reversed &nbsp; <a className="text-green ml-2" href="#" target="_blank">Palash Khobragade</a></p>                                    
                    </div>	
                </div>
                </section>
                {/* Footer */}
            </div>
            {/* Main body footer Ends here  */}

        </div>
    )
}
export default Footer;