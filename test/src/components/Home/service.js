import React,{useEffect, useState} from 'react';
import { getRpas } from '../../Service/RepasService/RepasService';


const Service = () => {
  const [repas, setRepas] = useState([]);

    useEffect(() =>{
      (async () => {
        await getRpas().then(res =>{
          setRepas(res.data)
        })
      })()
    },[])
  return (
    <div>
        <section  id="service" className="pattern-style-4 has-overlay">
    <div className="container raise-2">
        <h6 className="section-subtitle text-center">Featured Food</h6>
        <h3 className="section-title mb-6 pb-3 text-center">Special Dishes</h3>
     
        <div className="row" >
             {repas.map((items,
    index) =>{
      return(
            <div className="col-md-6 mb-4" key={index}>
                <a href="javascrip:void(0)" className="custom-list">
                    <div className="img-holder">
                        <img src={require("../assest/imgs/dish-1.jpg")} />
                    </div>
                    <div className="info">
                        <div className="head clearfix">
                            <h5 className="title float-left">{items.title}</h5>
                            <p className="float-right text-primary">{items.price}DH</p>
                        </div>
                        <div className="body">
                            <p>{items.descreption}</p>
                        </div>
                    </div>
                </a>
            </div>
             )}
             )} 
        </div> 
                        
    </div>
</section>
     
   

    </div>
  );
}

export default Service;
