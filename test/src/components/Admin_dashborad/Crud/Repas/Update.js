import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getrepasbyid, updaterepas} from "../../../../Service/RepasService/RepasService"

const UpdateRepas = () => {
 
  const navigate = useNavigate();
  const {repasId} = useParams();
  const [values, setValues] = useState({
    title: "",
    descreption: "",
    price: "",
    image:"",
    type: ""
  });
  const [repas , setRepas] = useState({});



  useEffect( () => {
    (async () => {
      await getrepasbyid(repasId).then((repas) => {
        setRepas(repas)
        setValues({...values, title: repas.data.title, descreption: repas.data.descreption, price: repas.data.price, image: repas.data.image, type: repas.data.type })
        
      });
    })();
  }, []);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleDescreption = (e) => {
    setValues({ ...values, descreption: e.target.value });
  };

  const handlePrice = (e) => {
    setValues({ ...values, price: e.target.value });
  };

  const handleImages = (e) => {
    setValues({ ...values, image: e.target.value });
  };

  const handleType = (e) => {
    setValues({ ...values, type: e.target.value });
  };

  const handleErrors = (errors) => {
    setErrors({ ...errors });
  };

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map(key => {
      if (values[key] !== '') {
        res[key] = values[key];
      }
    })
    return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updaterepas(repasId, getUpdatedValues(values))
    console.log(values);
   navigate('/Dashboard')
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
                <h3 className="mb-4">Update Repas</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder=" Annonce name"
                    value={values.title}
                     onChange={handleTitle}/>
                </div>
                <div className="input-group mb-4">
                    <input type="text" className="form-control" placeholder="Annonce descreption"
                    value={values.descreption}
                     onChange={handleDescreption}/>
                </div>
                <div className="input-group mb-4">
                    <input type="number" className="form-control" placeholder="Annonce Price"
                    value={values.price}
                     onChange={handlePrice}/>
                </div>
                <div className="input-group mb-4">
                    <input type="file" className="form-control" placeholder="Annonce Image"
                    value={values.image}
                    onChange={handleImages}
                    />
                </div>
                <div className="input-group mb-4">
                <select
              className="form-control"
              aria-label="Email"
              aria-describedby="email-addon"
              name="type"
              // id="star"
              value={values.type}
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
export default UpdateRepas;
