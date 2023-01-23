import { useState } from 'react';
import frameworkList from './Items'
import ListView from './ListView';

// Componentes de p

function List(){

    let [items, setItems] = useState(frameworkList);

    function filterItems(searchPatter){
        if(searchPatter === ""){
            setItems(frameworkList);
        }else{
            let newItems = filterListBySearchPatters(searchPatter);
            setItems(newItems);
        }

    }

    function filterListBySearchPatters(searchPatter){
        let filterItems = frameworkList
        .map(items => items.toLowerCase().includes(searchPatter.toLowerCase()) ? items : null)
        return filterItems;
    }


    return(
        <div>
            <ListView elements={items} funcFilterItems={filterItems}/>
        </div>

    );


}

export default List; 