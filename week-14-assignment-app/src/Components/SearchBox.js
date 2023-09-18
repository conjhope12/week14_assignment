import React from 'react';

export default function SearchBox (props) {
    return (
        <div className='col col-sm-4'>
            <input className='form-control' 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Type to search movies '/> 
        </div>
    )
}
// className='form-control' placeholder='Type to search... '