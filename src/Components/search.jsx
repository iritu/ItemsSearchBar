import { React, useState  } from 'react';
import data from '../API/items'
import Items from './items';


function Search({items}){
    const [searchField, setSearchField] = useState("");

    let _data = data.filter(function (item) {
        return item.name.toLowerCase().match(searchField) ;
    });

    const handleChange = e => {
        setSearchField(e.target.value);
      };


    return(
        <>
        <input 
            className="searchInput"
            type="text"
            placeholder={"search ...."}
            onChange = {handleChange}
       />
       <br/>
        <section className='cards'>
            {_data.map(item => {
                return (
                    <Items key={item.char_id} item={item}></Items>
                );
            })}
        </section>
       </>
    ); 


}

export default Search;