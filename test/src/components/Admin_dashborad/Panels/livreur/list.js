import Item from './items';
import Header  from '../Header';
import { Link } from 'react-router-dom';


const List = ({title ,handleDeleteObject}) => {
  
  return (
    <div className="d-flex flex-column">
    <div className="d-flex justify-content-between">
        <Header title ={title} />
        <Link className="my-2 btn btn-primary shadow-2 "
          to={`/AddUser`}>  Add Livreur 
            </Link>
      </div>
    <div className="card-body px-0 pb-2">
      <div className="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
            
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                Livreur Username
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Livreur Fullname
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Livreur Email
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Livreur Phone
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Livreur Adress
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Item handleDeleteObject={handleDeleteObject} />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};
export default List;