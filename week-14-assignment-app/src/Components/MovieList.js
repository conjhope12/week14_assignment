import React from 'react';
import ReviewForm from './ReviewForm'
import Review from './Review'

export default function MovieList(props) {
        const ReviewComponent = props.reviewComponent;

        return (
        <>
            {props.movies.map((movie, index)=> 
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div onClick={ () => props.handleReviewClick(movie)} 
                className='overylay d-flex align-items-center justify-content-center '
                >
                    <ReviewForm />
                </div>
                
            </div>)}
            {props.movies.map((movie, index)=> 
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div onClick={ () => props.handleReviewClick(movie)} 
                className='overylay d-flex align-items-center justify-content-center '
                >
                    <Review />
                </div>
                
            </div>)}
        </>
        )
   
}