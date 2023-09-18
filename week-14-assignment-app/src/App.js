import MovieList from './Components/MovieList';
// import ReviewList from './Assets/ReviewList';
import ReviewForm from './Components/ReviewForm';
// import {TEST_MOVIE} from './Assets/movieData';
// import Stars from './Components/Stars';
import Review from './Components/Review';
import './App.css';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';


// This is the app that displays all the components and functions in order to make this app.

function App() {

// These are all my variables that use useState.
//>> These variables were used in multiple functions below to help connect this app comp with the other smaller comps.

  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [show, setShow] = useState(false)

// This function allowd me to connect the API to this app.
// >> Await was used to literally wait for a Promise to recieve its fulfillment value.
// The absolute value within the url link allowed me to grab any movie from the API.

const getMovieRequest = async (searchValue) => {
  const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=33468f20`;

  const response = await fetch(URL);
  const responseJson = await response.json();

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue])

// The addMovieReview function allowed me to add certain movies to the review section of the page. 

const addMovieReview = (movie) => {
  const newReviewList = [...reviews, movie];
  setReviews (newReviewList);
};

// The function below was supposed to help me post reviews in the review section,
// but, I ran out of time to complete this assignment :/
// preventDeafault ensured that the subit btn would not refresh the page.
// The empty quote marks would have helped me clear the review form so that another review could be left.

const onFormSubmit = (event) => {
  event.preventDefault()

  const newReview = {
      name: movies,
      review: reviews,
  }

  props.addReview(newReview)

  setMovies('')
  setReviews('')
}

// The JSX below connected all the other components to make this app functional.
// MovieListHeading was used to add a title on the movie and review horizontal scroll bars.
// SearchBox was the comp used to search the API to find certain data to post into the website.

// Movie list composed of two different components. This comp made it possible to add a review form and final review.
// ReviewForm was used to display a form next to every movie that showed up in the serch results from the search bar.
// >> This was supposed to send the strings within the inputs into the Review comp
// The Review comp was used to store user reviews from the form above. 

  return (
    <div className='container-fluid movie-app'> 
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList 
        movies={movies} 
        handleReviewClick={addMovieReview} 
        reviewComponent={ReviewForm} 
        />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Reviews'/>
      </div>
      <div className='row'>
        <MovieList 
        movies={reviews} 
        handleReviewClick={addMovieReview} 
        reviewComponent={Review} 
        />
      </div>
    </div>
  );
};

export default App;

// const [reviewList, setReviewList] = useState(TEST_MOVIE)

  // const incrementStars = (id) => {
  //   setReviewList(reviewList.map(review =>
  //     (review.id === id) ?
  //      {...review, quantity: review.quantity + 1} :
  //       review
  //     ))
  // }

  // const addReview = (reviewData) => {
  //   const newReview = { id: nextId++, ...reviewData}

  //   setReviewList (reviewList.concat(newReview))
  // }

  // return (
  //   <div className="App">
  //     <h1 className="appHeader"> Rate That Movie</h1>
  //     <ReviewForm addReview={addReview}/>
  //       {reviewList.map(review =>
  //         <div key={review.id}>
  //           {review.name} - {review.quantity}
  //           <button onClick={() => incrementStars(review.id)}>Add Stars</button>
  //         </div>
  //           )}
  //     {/* <Movie /> */}
  //     {/* <MovieList />
  //     < ReviewList/> */}
  //     {/* <Stars />
  //     <Review /> */}
  //   </div>
  // );
  // let nextId = 2;