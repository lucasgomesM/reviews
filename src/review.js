import data from './data';
import React, {useState, useEffect} from 'react';

const Review = () => {
    const [review, setReview] = useState(0);
    return <article>
        <div className='stuff'>
        <img className='pics' src={data[review].image} alt={data[review].name} />
        <h4>{data[review].name}</h4>
        <h5>{data[review].job} </h5>
        <h6 >{data[review].text} </h6>

        </div>
        
        <div>
            <button className='btn' onClick = {() => {
                if(review === 0){
                    setReview(3);
                }else{
                    setReview(review-1);
                }}}>previous</button>
            <button className='btn' onClick = {() => {
                if(review === 3){
                    setReview(0);
                }else{
                    setReview(review+1);
                }
            }}>next</button>
        </div>
        <button className='btn' onClick={() => {
            setReview(Math.floor(Math.random() * 4));
        }}>random</button>
    </article>
};

export default Review;