import React from 'react';
import './product.css';

const ProductList = () => {
    return (
        <>  <h2 class='d-flex justify-content-end'>NWITT</h2>
            <div class='product-list-header d-flex justify-content-around'>
                <h1 class='product-list-title d-flex'>
                    The Product List
                </h1>
                <h2 class='product-list-account-name d-flex'>
                    The account name is Account1
                </h2>
            </div>
            <h4 class='d-flex justify-content-around'>
                <div class='product-list-subheader d-flex'>#code</div>
                <div class='product-list-subheader d-flex'>Colonum-1</div>
                <div class='product-list-subheader d-flex'>Colonum-2</div>
                <div class='product-list-subheader d-flex'>Colonum-3</div>
                <div class='product-list-subheader d-flex'>Colonum-4</div>
                <div class='product-list-subheader d-flex'>Colonum-5</div>
            </h4>
            <div class='product-list-item d-flex justify-content-around'>
                <div class='d-flex'>#00001</div>
                <div class='d-flex'>item-short-name</div>
                <div class='d-flex'>item-unit</div>
                <div class='d-flex'>item-quantity</div>
                <div class='d-flex'>item-price</div>
                <div class='d-flex'>item-note</div>
            </div>
        </>
    );
} 
export default ProductList;