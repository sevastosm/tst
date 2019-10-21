import React from 'react';
import useCatLoverApp from "../../hooks/useCatLoverApp"


const Catbreedlist: React.FC = () => {
  const {breedsList}=useCatLoverApp()
  let jobsUnique:any = breedsList.filter(function(item:any, index:any){
    return breedsList.indexOf(item) >= index;
});

  return (
    <div>
        <div className={'d-flex fl-wrap breedgrid'}>
            <div onDragEnter={()=>alert('fsdfsdfsdfsd')}></div>
            <select>
            {jobsUnique.map((breed:any)=>{
                return <option key={breed.id}>{breed.name}</option >
            })}
     </select>
     </div>
</div>
  );
};


export default Catbreedlist