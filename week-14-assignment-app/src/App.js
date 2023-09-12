import MovieList from './Assets/MovieList'
import ReviewList from './Assets/ReviewList';
import ReviewForm from './Assets/ReviewForm';
import Movie from './Components/Movie';
import Stars from './Components/Stars';
import Review from './Components/Review';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieList />
      <ReviewList />
      <ReviewForm />
      <Movie />
      <Stars />
      <Review />
    </div>
  );
}

export default App;

