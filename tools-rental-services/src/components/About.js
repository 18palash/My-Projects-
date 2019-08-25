import React from 'react';
import './About-Contact.css';
const About = () => {
   return(
       <div>
           {/* Main body dynamic Conetnts  */}
            <div className="main-body-container">
                <div className="about-section">
                <h2>About us:</h2>
                <p>&nbsp;</p>
                <p> <strong>Welcome to Tools Rental Services!</strong><br />
                    Are you also fed up of calling up the home support for various 
                    little things at home? <br /> 
                    Be it electricians, plumbers, technicians, etc. 
                    You yourself are capable enough to take care of these things and all 
                    you need are just the tools. <br /> We offer you the option to rent these 
                    tools on affordable prices, so that you don't have to keep your tools 
                    inventory. <br /> Whatever tool you need wherever you need, you can grab those 
                    at exclusively affordable prices. <br /> So what are you waiting for leverage
                    our service to be at peace with your little works at home.
                </p>
                </div> 
            </div>
        {/* Main body dynamic Conetnts Ends here */}
        </div>
   )
}

export default About;