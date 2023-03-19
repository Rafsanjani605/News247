import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsummeryCart from '../../newsummarycart/NewsummeryCart';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            
            
            {
                allnews.map(news => <NewsummeryCart
                key={news._id}
                news = {news}
                ></NewsummeryCart>)
                
            }
        </div>
    );
};

export default Home;