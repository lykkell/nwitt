// import { getAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = () => {
    return (
        <>  
            <div class='d-flex justify-content-between'>
                <h1 class='d-flex'>Saler: account-name </h1>
                <h5 class='d-flex'>App: NWITT by Oleksandr Sytnychenko</h5>
            </div>
            
            <div class='list-header d-flex justify-content-between'>
                <h2 class='list-title d-flex'>
                    The List
                </h2>
                <h2 class='list-account-name d-flex'>
                    Customer: account-name
                </h2>
            </div>
            <div class='d-flex justify-content-center' >
                <div class="dropdown d-flex">
                    <button 
                        class="btn btn-secondary dropdown-toggle" 
                        type="button"       
                        id="dropdownMenu2" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        Filter
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Type of item 1</button>
                        <button class="dropdown-item" type="button">Type of item 2</button>
                        <button class="dropdown-item" type="button">Type of item 3</button>
                    </div>
                </div>
                <div class='btn-favorit d-flex'>
                    <button type='button' class='btn btn-info'>All items</button>
                    <button type='button' class='btn btn-info'>My favorit items</button>
                </div>

                <input class='d-flex justify-content-end'
                    className='search-panel form-control search-panel'
                    placeholder='Type for searching...'>
                </input>
            </div>
            <h4 class='d-flex justify-content-around'>
                <div class='product-list-subheader d-flex'>#code</div>
                <div class='product-list-subheader d-flex'>checkbox</div>
                <div class='product-list-subheader d-flex'>Colonum-1</div>
                <div class='product-list-subheader d-flex'>Colonum-2</div>
                <div class='product-list-subheader d-flex'>Colonum-3</div>
                <div class='product-list-subheader d-flex'>Colonum-4</div>
                <div class='product-list-subheader d-flex'>Colonum-5</div>
            </h4>
            <ListItem />
            <ListItem />
            <ListItem />
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-success">Add item to order</button>
                <button type="button" class="btn btn-success">Add item to my favorits</button>
                <button type="button" class="btn btn-danger">Delete item from my favorits</button>
                <a class="btn btn-info" href="#" role="button">Print selected items</a>
                <a class="btn btn-info" href="#" role="button">Send selected items</a>
            </div>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">Add new item to list</button>
                <button type="button" class="btn btn-danger">Delete item from list</button>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    );
} 
export default List;