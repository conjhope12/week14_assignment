import React from "react";

export default function ReviewForm(props) {

    // const [nameValue, setNameValue] = useState('')
    // const [reviewValue, setReviewValue] = useState('')
    // const [starsValue, setStarsValue] = useState('')
    // const [show, setShow] = useState(false)

    // const onFormSubmit = (event) => {
    //     event.preventDefault()

    //     const newReview = {
    //         name: movies,
    //         review: reviews,
    //     }

    //     props.addReview(newReview)

    //     setMovies('')
    //     setReviews('')
    // }

    return (
       <div>
         <form>
            {/* <h2>Movie Name</h2>
            <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/> */}
            <h2>Review:</h2>
            <input  />
            <h2>Star Rating:</h2>
            <input />
            <button className="btn btn-outline-success" >Submit</button>
        </form> 
       </div>
    )
   
}

// type="text" value={reviewValue} onChange={(event) => setReviewValue(event.target.value)}
// type="number" value={starsValue} onChange={(event) => setStarsValue(event.target.value)}
// onClick={onFormSubmit}
{/* <button onClick={() => setShow(!show)}>Toggle Form</button>
        { show ?
            : null } */}