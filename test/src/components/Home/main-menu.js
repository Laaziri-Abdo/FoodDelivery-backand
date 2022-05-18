import React, {useEffect, useState} from 'react';
import { getAnnonce } from '../../Service/Annoce/AnnonceService';

const MainMenu = () => {
  const [ annonce, setAnnonce ] = useState([])

  useEffect(() =>{
    (async () => {
      await getAnnonce().then(res =>{
        setAnnonce(res.data)
      })
    })()
  },[])
  return (
    <div>
    <section class="has-img-bg">
    <div class="container">
        <h6 class="section-subtitle text-center">Great Food</h6>
        <h3 class="section-title mb-6 text-center">Main Menu</h3>
        <div class="card bg-light">
            <div class="card-body px-4 pb-4 text-center">                   
                <div class="row text-left">
                  {annonce.map((items,
                  index) => {
                    return(
                      <div class="col-md-6 my-4">
                        <a href="#" class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                            <div class="d-flex">
                                <div class="flex-grow-1">
                                    {items.title}
                                    <p class="mt-2 mb-0">{items.descreption}</p>
                                </div>
                                <h6 class="float-right text-primary">{items.price}DH</h6>
                            </div>
                        </a>
                    </div>
                    )
                  }
                  )}
                    
                </div>
                <a href="#book-table" class="btn btn-primary mt-4">Order Now</a>
            </div>
        </div>                  
    </div>
</section>
    </div>
  );
}

export default MainMenu;
