import React from 'react'
import {deleteRepas} from '../../../Service/RepasService/RepasService';
import deleteAnnonce from '../../../Service/Annoce/AnnonceService';
import {deleteUser} from '../../../Service/UserService/userservice'


function Delete({type,id, visible , handlePopupVisibility}) {

    const handleDelete = () => {
        switch (type) {
            case "Repas":
                deleteRepas(id);
                break;
            case "Annonce":
                deleteAnnonce(id);
                break;                            
              case "User":
                 deleteUser(id);   
                break;   
            default:    
                break;
        }
    }

    return (
        <div className='popup' style={{display: visible ? 'grid' : 'none'}} >
            <div className="popup_delete p-3">
                <h5 className='font-weight-bolder'>Delete {type}</h5>
                <p className="mb-1 pt-2 text-bold">Are you sure you want to delete this {type}</p>
                <div className='row mt-4'>
                    <button 
                        type="button" 
                        className="confirm_button px-2 py-1 mx-2" 
                        onClick={async () =>{
                                    await handleDelete();
                                    handlePopupVisibility();
                                }} 
                        style={{backgroundColor: "rgb(201, 15, 15)"}}
                    >
                        Delete {type}
                    </button>

                    <button type="button" className="cancel_button" onClick={handlePopupVisibility}>cancel</button>
                </div>
             </div>
        </div>
    )
}

export default Delete