import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getannoncebyid, updateannonce} from "../../../../Service/Annoce/AnnonceService"

const UpdateAnnonce = () => {
 
  const navigate = useNavigate();
  const {annonceId} = useParams();
  const [values, setValues] = useState({
    title: "",
    descreption: "",
    price: "",
    repas: ""
  });
  const [annonce , setAnnonce] = useState({});



  useEffect( () => {
    (async () => {
      await getannoncebyid(annonceId).then((annonce) => {
        setAnnonce(annonce)
        setValues({...values, title: annonce.data.title, descreption: annonce.data.descreption, price: annonce.data.price, repas: annonce.data.repas })
        
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

  const handleRepas = (e) => {
    setValues({ ...values, repas: e.target.value });
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
    getUpdatedValues(values)
    await updateannonce(annonceId, getUpdatedValues(values))
    console.log(values);
    navigate("/Dashboard")
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
                <h3 className="mb-4">Update Annonce</h3>
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
                    />
                </div>
                <div className="input-group mb-4">
                <select
              className="form-control"
              aria-label="Email"
              aria-describedby="email-addon"
              name="type"
              // id="star"
              value={values.repas}
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
export default UpdateAnnonce;
