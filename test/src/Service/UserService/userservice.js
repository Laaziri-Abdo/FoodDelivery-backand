import axios from "axios";

const USER_URL = "http://localhost:8000/api/users";


//Get All Users
export default async function getUser() {
  return await axios.get(`${USER_URL}`)
}

//Add User
export  function createuser(user) {
  const formData = new FormData();
  formData.append('username', user.username)
  formData.append('fullname', user.fullname)
  formData.append('email', user.email)
  formData.append('phone', user.phone)
  formData.append('adress', user.adress)
  formData.append('password', user.password)
  formData.append('repeat_password', user.repeat_password)


  console.log(formData)
  console.log('user',{user})
  return axios.post(`${USER_URL}`,formData);
}

//Update User
export async function updateUser(userId, values) {
  await axios.put(`${USER_URL}/liverur/${userId}`, {
      data: {
          ...values
      }
  });
}

export async function deleteUser(userId) {
  await axios.delete(`${USER_URL}`, {
      data: {
          userId
      }
  });
}