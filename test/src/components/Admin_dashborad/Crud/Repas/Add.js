import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createrepas from '../../../../Service/RepasService/RepasService'
// import NavBar from "../../../Shared_Elements/NavBar";

const AddRepas = () => {
  const navigate = useNavigate()
  // creation state initialisation
  const [AddRepas, setRepas] = useState({
    title: "",
    descreption: "",
    price: "",
    images: "",
    type: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleTitle = (e) => {
    setRepas({ ...AddRepas, title: e.target.value });
  };
  const handleDescreption = (e) => {
    setRepas({ ...AddRepas, descreption: e.target.value });
  };
  const handlePrice = (e) => {
    setRepas({ ...AddRepas, price: e.target.value });
  };
  const handleImages = (e) => {
    console.log("e .target.files", e.target.files);
    setRepas({ ...AddRepas, images: e.target.files });
  };
  const handleType = (e) => {
    setRepas({ ...AddRepas, type: e.target.value });
  };
  console.log(AddRepas);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (AddRepas) {
      createrepas(AddRepas).then((response) => {
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
    
        
        <form method="POST" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-unlock auth-icon"></i>
                </div>
                <h3 className="mb-4">Add Repas</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Email"
                    value={AddRepas.title}
                     onChange={handleTitle}/>
                </div>
                <div className="input-group mb-4">
                    <input type="text" className="form-control" placeholder="password"
                    value={AddRepas.descreption}
                     onChange={handleDescreption}/>
                </div>
                <div className="input-group mb-4">
                    <input type="number" className="form-control" placeholder="password"
                    value={AddRepas.price}
                     onChange={handlePrice}/>
                </div>
                <div className="input-group mb-4">
                    <input type="file" className="form-control" placeholder="password"
                    value={AddRepas.images}
                     onChange={handleImages}/>
                </div>
                <div className="input-group mb-4">
                <select
              className="form-control"
              aria-label="Email"
              aria-describedby="email-addon"
              name="type"
              // id="star"
              value={AddRepas.type}
              onChange={handleType}
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
export default AddRepas;
