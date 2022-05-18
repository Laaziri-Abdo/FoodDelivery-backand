
import React from "react";
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "../src/css/app.css"
// import "../src/css/themify-icons.css"
import Home from "./components/Home";
import Authentication from "./components/Authentication/Authentiction";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Dashboard from "./components/Admin_dashborad/Dashboard"
import AddRepas from "./components/Admin_dashborad/Crud/Repas/Add";
import AddAnnonce from "./components/Admin_dashborad/Crud/Annonce/Add";
import UpdateAnnonce from "./components/Admin_dashborad/Crud/Annonce/Update"
import UpdateRepas from "./components/Admin_dashborad/Crud/Repas/Update"
import AddUser from "./components/Admin_dashborad/Crud/User/Add"

{/* <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"></link> */}


function App() {

  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role);
  
  return (
      <React.Fragment>
        <div >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="auth"
              element={!authenticated ?   <Authentication /> : <Navigate to="/" />}
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              path="Dashboard"
              element={
                authenticated  ? <Dashboard /> : <Navigate to="/" />
              }
            />

            <Route
              path="AddRepas"
              element= {<AddRepas/>}/> 


            <Route
              path="AddAnnonce"
              element= {<AddAnnonce/>}/>  
              
            <Route 
              path="UpdateAnnonce/:annonceId"
              element= {<UpdateAnnonce/>} />

            <Route 
              path="UpdateRepas/:repasId"
              element= {<UpdateRepas/>} />

            <Route 
              path="AddUser"
              element= {<AddUser/>} />         
      
          </Routes>
        </Router>
        </div>
      </React.Fragment>
  );
}

export default App;
