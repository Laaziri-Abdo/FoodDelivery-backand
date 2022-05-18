// import React from 'react';
// import Sidebare from './sidebare';
// import Navbar from './navbar';
// // import "../../assets/css/style.css"
// import Card from './Cards/Card'; 
// import ListRepas from './Panels/repas/list'
// import ListAnnonce from './Panels/annonce/list'
// import ListUser from './Panels/livreur/list'

// const Dashboard = () => {

//   return (
//     <>
//     <Navbar />
//    {/* <ListAnnonce/> */}
//     {/* <ListRepas/> */}
//      {/* <Sidebare/>  */}
//      <ListUser/>
//     </>
    
     

    
//   );
// }

// export default Dashboard;


import React, { useState } from "react";
import Cards from "./Cards/Cards";
import Delete from "./Crud/Delete";
import Panel from "./Panels/panel";
import NavBar from "./navbar";

function Dashboard() {
  const [visible_popup, setPopupVisibility] = useState(false);
  const [panel, setPanel] = useState("Annonce");
  const [deleteObject , setDeleteObject] = useState([]);

  const handleDeleteObject = async (type, id) => {
    await setDeleteObject([type,id])
    handlePopupVisibility()
  }

  const handlePanel = (panel) => {
    setPanel(panel);
  };

  const handlePopupVisibility = () => {
    setPopupVisibility(!visible_popup);
  };

  return (
    <>
      <NavBar title='Admin Dashboard' dashboard={false} />
      <div className="admin_dash">
        <Cards setPanel={handlePanel} />
        <Panel title={panel} handleDeleteObject={handleDeleteObject} />
        <Delete
          type={deleteObject[0]}
          id={deleteObject[1]}
          visible={visible_popup}
          handlePopupVisibility={handlePopupVisibility}
        />
      </div>
    </>
  );
}

export default Dashboard;

