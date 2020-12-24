import React from 'react';

const ListItem = () => {
    return (
        <>
             <div className='list-item d-flex justify-content-around'>
                <div className='d-flex'>#00001</div>
                <button type='button' className='fa fa-checkbox d-flex'></button>
                <div className='d-flex'>item-short-name</div>
                <div className='d-flex'>item-unit</div>
                <div className='d-flex'>item-quantity</div>
                <div className='d-flex'>item-price</div>
                <div className='d-flex'>item-note</div>
            </div>        
        </>
    )
}

export default ListItem;