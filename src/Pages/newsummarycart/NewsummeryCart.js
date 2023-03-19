import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import './newscart.css'


const NewsummeryCart = ({news}) => {

    const {_id , title , author , details , image_url , total_view} = news;
    return (
    <div className='newscart'>
            <Card className="mb-5">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div  className='d-flex'>
                <Image
                roundedCircle
                src={author?.img}
                style = {{height: '60px'}}
                className= 'me-2'
                ></Image>
                <div>
                    <p className='mb-0'>{author.name}</p>
                    <p>{author.published_date}</p>

                </div>
            </div>
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>

            </div>

        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant='top' src={image_url} />
          <Card.Text>
            {
                details.length > 250 ?
                <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>show more</Link></p> 
                :
                <p>
                    {details}
                </p> 
                  

            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
    );
};

export default NewsummeryCart;