import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import NewsummeryCart from '../newsummarycart/NewsummeryCart';



const Category = () => {
    const categorynews = useLoaderData();
    

    
    return (
        <div className=''>
          
          {
            categorynews.map(news => <NewsummeryCart
            key={news._id}
            news = {news}
            ></NewsummeryCart>)
          }
            

        </div>
        
    );
};

export default Category;
