import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidenav.css'

const Sidenav = () => {
    const [categories , setCategories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:1000/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    })
    
    return (
        <div className='sidenav'>
            
            <div className=''> 
            {
                    categories.map(category => <p key={category.id}>
                         <Link to={`/category/${category.id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidenav;