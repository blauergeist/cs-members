import React from 'react';
import 'tachyons';

const Searchbox = ({searchfield, searchInput})  => {
    return(
        <div className='pa3'>
            <input
                className='pa3 ba b--blue bg-light-green' 
                type='search' 
                placeholder='Filter players by name' 
                onChange={searchInput}
            />
        </div>
        
    )
}

export default Searchbox;