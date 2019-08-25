import React from 'react';
import './Home.css';
import flex1 from './flex.jpg';

const Home = () => {
   return(
      <div>      
         <div className="main-body-container">
         <div className="jumbo-container">
            <div className="jumbotron jumbotron-fluid">
               <div className="container">
                  <h1 className="display-4">Welcome to Tool Rental Services !!</h1>
                  <p className="lead">You yourself are capable enough to take care of things and all 
                  you need are just the right tools.</p>
               </div>
            </div>
         </div>
            <div className="container">
               <div className="row1">
                  <div className="col-sm-8">
                     <h3 className="blurb-header">Scalable Code</h3>
                     <div className="blurb-info">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                     </div>
                  </div>
                  <div className="col-sm-4">                                   
                     <img className="icon" src={flex1} alt="fleximage" />
                  </div>
               </div>

               <div className="row1">
                  <div className="col-sm-4">
                     <img className="icon" src={flex1} alt="fleximage" />    
                  </div>
                  <div className="col-sm-8">
                     <h3 className="blurb-header">Scalable Code</h3>
                     <div className="blurb-info">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                        </div>
                  </div>
               </div>

               <div className="row1">
                  <div className="col-sm-8">
                     <h3 className="blurb-header">Scalable Code</h3>
                     <div className="blurb-info">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                     </div>
                  </div>
                  <div className="col-sm-4">
                     <img className="icon" src={flex1} alt="fleximage" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;
