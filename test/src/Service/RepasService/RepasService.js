import axios from "axios";
const REPAS_URL = "http://localhost:8000/api/repas";

//Get All Repas
export async function getRpas() {
  return await axios.get(`${REPAS_URL}`);
}

// Delete Repas 
export async function deleteRepas(repasId) {
  await axios.delete(`${REPAS_URL}`, {
      data :{
        repasId
      }
  });
}

//Add Repas 
export default function createrepas(repas) {
  const formData = new FormData();
  formData.append('title', repas.title)
  formData.append('description', repas.description)
  formData.append('price', repas.price)
  formData.append('type', repas.type)
  formData.append('Image', repas.Image)
  console.log(formData)
  // console.log('repqs',repas)
  return axios.post(`${REPAS_URL}`,repas);
}


//Get Repas By Id
export  async function getrepasbyid(repasId) {
  const res = await axios.get(`${REPAS_URL}/${repasId}`);
  return res;
}


//Update Repas
export  async function updaterepas(repasId, values) {
  await axios.put(`${REPAS_URL}/${repasId}`, {
          ...values
  });
}

