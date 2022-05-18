import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createuser from '../../../../Service/UserService/userservice'


const AddUser = () => {
  const navigate = useNavigate()
  // creation state initialisation
  const [Adduser, setUser] = useState({
    username: "",
    fullname: "",
    email: "",
    phone:"",
    password: "",
    adress:"",
    role:"",
    repeate_password: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleUsername = (e) => {
    setUser({ ...Adduser, username: e.target.value });
  };
  const handleFullname = (e) => {
    setUser({ ...Adduser, fullname: e.target.value });
  };
  const handleEmail = (e) => {
    setUser({ ...Adduser, email: e.target.value });
  };
  const handlePhone= (e) => {
    setUser({ ...Adduser, phone: e.target.value });
  };
  const handleRole= (e) => {
    setUser({ ...Adduser, role: e.target.value });
  };
  const handleAdress= (e) => {
    setUser({ ...Adduser, adress: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...Adduser, password: e.target.value });
  };
  const handleRepreat_password = (e) => {
    setUser({ ...Adduser, repeate_password: e.target.value });
  };
  // console.log(Adduser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Adduser) {
      createuser({Adduser})
    }
    setSubmitted(true);
  };

  return (
    <>
    <div className="auth-wrapper">
    <div className="auth-content">
        
        {/* Calling to the methods */}
      
         
        
      
        <form onSubmit={(e)=>handleSubmit(e)} >
        
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon"></i>
                </div>
                <h3 className="mb-4">Sign up</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"
                    onChange={handleUsername}
                    value={Adduser.username}
                    />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Full Name"
                     onChange={handleFullname}
                    value={Adduser.fullname}/>
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email"
                     onChange={handleEmail}
                    value={Adduser.email}
                    />
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Phone"
                     onChange={handlePhone}
                    value={Adduser.phone}
                    />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Adress"
                     onChange={handleAdress}
                    value={Adduser.adress}
                    />
                </div>
                <div className="input-group mb-4">
                <select
              className="form-control"
              aria-label="Email"
              aria-describedby="email-addon"
              name="role"
              onChange={handleRole}
              placeholder="Role"
            >
              <option value="none" selected disabled hidden >
                Choose a Role
              </option>
              <option value="client">client</option>
              <option value="livreur">livreur</option>
              
            </select>
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="password"
                     onChange={handlePassword}
                    value={Adduser.password}/>
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="password"
                     onChange={handleRepreat_password}
                    value={Adduser.repeate_password}/>
                </div>
                
                <div className="form-group text-left">
                    
                </div>
                <button  className="btn btn-primary shadow-2 mb-4">  Create User </button>
                
            </div>
        </div>
        </form>
    </div>
</div>

    </>
    
  );
};
export default AddUser;