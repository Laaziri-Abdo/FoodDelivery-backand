// import React from 'react';
// import Card from './Card';


// const Cards = () => {
//   return (
//     <div>
    
//     </div>
//   );
// }

// export default Cards;

import React from 'react'
import Card from './Card'

function Cards({setPanel}) {
  return (
    <div>
      <div className='container-fluid '>
        <div className='row mx-auto justify-content-center '>
            <Card title='Annonce' setPanel={setPanel} />
            <Card title='Repas' setPanel={setPanel} />
            <Card title='Livreur' setPanel={setPanel} />
            <Card title='Client' setPanel={setPanel} />
        </div>
      </div>
    </div>
    
  )
}

export default Cards  
