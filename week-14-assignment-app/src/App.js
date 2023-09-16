import MovieList from './Assets/MovieList';
import ReviewList from './Assets/ReviewList';
import ReviewForm from './Assets/ReviewForm';
import {TEST_MOVIE} from './Components/Movie';
import Stars from './Components/Stars';
import Review from './Components/Review';
import './App.css';
import {useState} from "react";

let nextId = 2;

function App() {
  const [reviewList, setReviewList] = useState(TEST_MOVIE)

  const incrementStars = (id) => {
    setReviewList(reviewList.map(review =>
      (review.id === id) ?
       {...review, quantity: review.quantity + 1} :
        review
      ))
  }

  const addReview = (reviewData) => {
    const newReview = { id: nextId++, ...reviewData}

    setReviewList (reviewList.conact(newReview))
  }

  return (
    <div className="App">
      <h1 className="appHeader"> Rate That Movie</h1>
      <ReviewForm addReview={addReview}/>
        {reviewList.map(review =>
          <div key={review.id}>
            {review.name} - {review.quantity}
            <button onClick={() => incrementStars(review.id)}>Add Stars</button>
          </div>
            )}
      {/* <Movie /> */}
      {/* <MovieList />
      < ReviewList/> */}
      {/* <Stars />
      <Review /> */}
    </div>
  );
}

export default App;

