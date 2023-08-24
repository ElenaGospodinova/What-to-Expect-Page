import React from 'react';
import Card from 'react-bootstrap/Card';
import Reviews from '../img/Reviews.jpeg';
import Sales_Reviews from '../img/Sales-management.jpeg';
import Development_Reviews from '../img/Development_reviews.jpeg';
import '../styles/StudentsReviews.css';



const cardData = [
    {
        image: Reviews,
        title: 'Mark',
        content: 'After concluding the short courses, I found myself presented with more job offers and a firm baseline to hone my web development expertise and techniques.'
    },
    {
        image: Sales_Reviews,
        title: 'Sofie',
        content: "Click Start was incredibly enlightening and motivational. Venturing into the tech sphere feels less daunting now, and I'm more assured in my job search."
    },
    {
        image: Development_Reviews,
        title: 'Lucas',
        content: "I took the 'Introduction to Immersive Audio' course and was blown away! It masterfully balanced theory with practice, led by knowledgeable instructors. I left equipped and excited about the future of sound."
    }
];
const MyCard = ({ image, title, content }) => (
    <Card className="card">
        <Card.Img variant="top" src={image} fluid className='images'/>
        <Card.Body>
            <Card.Title className='content title'>{title}</Card.Title>
            <Card.Text className='content'>
                {content}
            </Card.Text>
        </Card.Body>
    </Card>
);

function StudentsRevies() {
   
  return (
      <>
     <div className='reviews'>
            <div className="reviews-inner">
                    <h3>Students experiences</h3>
            </div>
            </div>
           
            <div className="card-group">
                {cardData.map((card, index) => (
                    <MyCard 
                        key={index} 
                        image={card.image} 
                        title={card.title} 
                        content={card.content}
                    />
                ))}
            </div>
        </>
  );
}

export default StudentsRevies;


 {/* <div className="card-group">
    <div className="card">
        
        <img src={Reviews} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className="card">
        <img src={Reviews} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className="card">
        <img src={Reviews} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div> */}