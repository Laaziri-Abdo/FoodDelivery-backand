import axios from "axios";
const ANNONCE_URL = "http://localhost:8000/api/annonce";


//Get All Annonces
export async function getAnnonce() {
  return await axios.get(`${ANNONCE_URL}`);
}

//Add Annonce
export default function createannonce(annonce) {
  const formData = new FormData();
  formData.append('title', annonce.title)
  formData.append('description', annonce.description)
  formData.append('price', annonce.price)
  formData.append('type', annonce.type)
  formData.append('Image', annonce.Image)
  console.log(formData)
  console.log('annonce',annonce)
  return axios.post(`${ANNONCE_URL}`,annonce);
}

//Get Annonce By Id
export async function getannoncebyid(annonceId) {
  const res = await axios.get(`${ANNONCE_URL}/${annonceId}`);
  return res;
}


//Update Annonce
export async function updateannonce(annonceId, values) {
  await axios.put(`${ANNONCE_URL}/${annonceId}`, {
      
          ...values
        
  });
}

//Delete Annonce
export async function deleteannonce(annonceId) {
  await axios.delete(`${ANNONCE_URL}`, {
      data :{
        annonceId
      }
  });
}

