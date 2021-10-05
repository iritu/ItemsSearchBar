import React, {  useState, useEffect } from 'react';
import data from './API/items' ; 
import Header from './Components/header';
import Search from './Components/search';


const MainApp = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

     // fetchItems()
     async function fetchData() {
        const res = await fetch(data);
        res.json()
            .then(setItems(data))
            .catch(setIsLoading(false));
    }
    useEffect(() => {
        fetchData();
    }, []);
    

    return (
        <div className='container'>
            <Header />
            <Search isLoading={isLoading} items={items} />
        </div>
    );
}

export default MainApp;