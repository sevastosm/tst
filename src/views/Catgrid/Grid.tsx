import React from 'react';
import CatItem from './CatItem'
import useCatLoverApp from "../../hooks/useCatLoverApp"
import Catbreedlist from "../Carbreed/Catbreedlist"


const Grid: React.FC = () => {
  const {catlist,handleLoadMore}=useCatLoverApp()
  {console.log("datat:",catlist)}

  return (
    <div>
      <Catbreedlist/>
            <button onClick={()=>handleLoadMore()}>Load more cats</button>
        <div className={'d-flex fl-wrap catgrid'}>
            <div onDragEnter={()=>alert('fsdfsdfsdfsd')}></div>
            {console.log("datat:",catlist)}
            {catlist.map((cat:any)=>{
                return <CatItem key={cat.id} data={cat}/>
            })}
</div>      
</div>
  );
};


export default Grid