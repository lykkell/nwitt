import React from 'react';

const ListItem = ({itemId, itemShortName, itemUnit, itemQuantity, itemPrice, itemNote}) => {
    return (
        <>
             <div className='list-item d-flex justify-content-around'>
                <div className='d-flex'>{itemId}</div>
                <button type='button' className='fa fa-checkbox d-flex'></button>
                <div className='d-flex'>{itemShortName}</div>
                <div className='d-flex'>{itemUnit}</div>
                <div className='d-flex'>{itemQuantity}</div>
                <div className='d-flex'>{itemPrice}</div>
                <div className='d-flex'>{itemNote}</div>
            </div>        
        </>
    )
}

export default ListItem;