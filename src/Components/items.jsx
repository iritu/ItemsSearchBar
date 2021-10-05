import React from 'react';


function Items({item }){
    return(
        <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={item.img} alt={item.name}></img>
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Name : </strong>{item.name}
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
    )

}

export default Items;