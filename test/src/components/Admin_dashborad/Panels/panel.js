import React from "react";
import ListAnnonce from "./annonce/list";
import ListRpas from "./repas/list";
import ListLivreur from "./livreur/list";
import ListClient from "./client/list"

const Panel = ({ title ,handleDeleteObject }) => {
  return (
    <div>
      <div className="container-fluid py-5 ">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4 mx-auto">
            <div class="card">
              {title === "Annonce" && <ListAnnonce title ={title} handleDeleteObject={handleDeleteObject} />}
              {title === "Repas" && <ListRpas title ={title} handleDeleteObject={handleDeleteObject} />}
              {title === "Livreur" && <ListLivreur title ={title} handleDeleteObject={handleDeleteObject} />}
              {title === "Client" && <ListClient title ={title} handleDeleteObject={handleDeleteObject} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;