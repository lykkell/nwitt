// import { getAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = () => {
    return (
        <>  
            <div className='d-flex justify-content-between'>
                <h1 className='d-flex'>Saler: account-name </h1>
                <h5 className='d-flex'>App: NWITT by Oleksandr Sytnychenko</h5>
            </div>
            
            <div className='list-header d-flex justify-content-between'>
                <h2 className='list-title d-flex'>
                    The List
                </h2>
                <h2 className='list-account-name d-flex'>
                    Customer: account-name
                </h2>
            </div>
            <div className='d-flex justify-content-center' >
                <div className="dropdown d-flex">
                    <button 
                        className="btn btn-secondary dropdown-toggle" 
                        type="button"       
                        id="dropdownMenu2" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        Filter
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Type of item 1</button>
                        <button className="dropdown-item" type="button">Type of item 2</button>
                        <button className="dropdown-item" type="button">Type of item 3</button>
                    </div>
                </div>
                <div className='btn-favorit d-flex'>
                    <button type='button' className='btn btn-info'>All items</button>
                    <button type='button' className='btn btn-info'>My favorit items</button>
                </div>
                <input 
                    className='form-control search-panel d-flex justify-content-end'
                    placeholder='Type for searching...'>
                </input>
            </div>
            <h4 className='d-flex justify-content-around'>
                <div className='product-list-subheader d-flex'>#code</div>
                <div className='product-list-subheader d-flex'>checkbox</div>
                <div className='product-list-subheader d-flex'>favorit</div>
                <div className='product-list-subheader d-flex'>Col-1</div>
                <div className='product-list-subheader d-flex'>Col-2</div>
                <div className='product-list-subheader d-flex'>Col-3</div>
                <div className='product-list-subheader d-flex'>Col-4</div>
                <div className='product-list-subheader d-flex'>Col-5</div>
            </h4>
            <ListItem itemId='000001' itemShortName='Product1' itemUnit='kg' itemQuantity='0.5' itemPrice='110' itemNote=''/>
            {/* <ListItem itemId='000002' itemShortName='Product2'/>
            <ListItem itemId='000003' itemShortName='Product3'/> */}
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-success">Add item to order</button>
                <button type="button" className="btn btn-success">Add item to my favorits</button>
                <button type="button" className="btn btn-danger">Delete item from my favorits</button>
                <button className="btn btn-info" type="button">Print selected items
                    {/* <a href="#"></a> */}
                </button>
                <button className="btn btn-info" type="button">Send selected items
                    {/* <a href="#"></a> */}
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary">Add new item to list</button>
                <button type="button" className="btn btn-danger">Delete item from list</button>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    );
} 
export default List;