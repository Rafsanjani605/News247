import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './news.css'


const News = () => {
    

    const news = useLoaderData();
    const {title , details, image_url , category_id} = news;
    
    return (
        <div className='news'>
            <Card>
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>

<Link to={`/category/${category_id}`}>
     <Button variant='primary'>All news this category</Button>
</Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;