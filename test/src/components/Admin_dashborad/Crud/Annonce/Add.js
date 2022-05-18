import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createannonce from '../../../../Service/Annoce/AnnonceService'

const AddAnnonce = () => {
  const navigate = useNavigate()
  const [AddAnnonce, setAnnonce] = useState({
    title: "",
    descreption: "",
    price: "",
    images: "",
    repas:""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleTitle = (e) => {
    setAnnonce({ ...AddAnnonce, title: e.target.value });
  };
  const handleDescreption = (e) => {
    setAnnonce({ ...AddAnnonce, descreption: e.target.value });
  };
  const handlePrice = (e) => {
    setAnnonce({ ...AddAnnonce, price: e.target.value });
  };
  const handleImages = (e) => {
    console.log("e .target.files", e.target.files);
    setAnnonce({ ...AddAnnonce, images: e.target.files });
  };
  const handleRepas = (e) => {
    setAnnonce({ ...AddAnnonce, repas: e.target.value });
  };
  console.log(AddAnnonce);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (AddAnnonce) {
      createannonce(AddAnnonce).then((response) => {
        // window.location = "/Dashboard";
        navigate("/Dashboard")
       
      });
    }
    setSubmitted(true);
  };

  return (
    <>
      {/* <NavBar title='Admin Dashboard' dashboard={false} /> */}
      <div className="auth-wrapper">
    
        
        <form method="POST" onSubmit={handleSubmit}>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-unlock auth-icon"></i>
                </div>
                <h3 className="mb-4">Add Annonce</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder=" Annonce name"
                    value={AddAnnonce.title}
                     onChange={handleTitle}/>
                </div>
                <div className="input-group mb-4">
                    <input type="text" className="form-control" placeholder="Annonce descreption"
                    value={AddAnnonce.descreption}
                     onChange={handleDescreption}/>
                </div>
                <div className="input-group mb-4">
                    <input type="number" className="form-control" placeholder="Annonce Price"
                    value={AddAnnonce.price}
                     onChange={handlePrice}/>
                </div>
                <div className="input-group mb-4">
                    <input type="file" className="form-control" placeholder="Annonce Image"
                    value={AddAnnonce.images}
                     onChange={handleImages}/>
                </div>
                <div className="input-group mb-4">
                <select
              className="form-control"
              aria-label="Email"
              aria-describedby="email-addon"
              name="type"
              // id="star"
              value={AddAnnonce.repas}
              onChange={handleRepas}
              placeholder="Type"
            >
              <option selected disabled>
                Choose a Type
              </option>
              <option value="principal">principal</option>
              <option value="entrer">entrer</option>
              <option value="dessert">dessert</option>
            </select>
                </div>
               
                <button className="btn btn-primary shadow-2 mb-4" type="submit">Add Repas</button>
                
                
            </div>
        </div>
        </form>
        
    </div>


    </>
    
  );
};
export default AddAnnonce;
