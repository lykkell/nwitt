import React from 'react';

const ProductListItem = () => {
    return (
        <>
             <div class='product-list-item d-flex justify-content-around'>
                <div class='d-flex'>#00001</div>
                <button type='button' class='fa fa-checkbox d-flex'></button>
                <div class='d-flex'>item-short-name</div>
                <div class='d-flex'>item-unit</div>
                <div class='d-flex'>item-quantity</div>
                <div class='d-flex'>item-price</div>
                <div class='d-flex'>item-note</div>
            </div>        
        </>
    )
}

export default ProductListItem;