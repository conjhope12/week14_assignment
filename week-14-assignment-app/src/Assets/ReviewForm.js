import {useState} from "react";

export default function ReviewForm(props) {

    const [nameValue, setNameValue] = useState('')
    const [reviewValue, setReviewValue] = useState('')
    const [starsValue, setStarsValue] = useState('')
    const [show, setShow] = useState(false)

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newReviewData = {
            name: nameValue,
            review: reviewValue,
            stars: parseInt(starsValue),
        }

        props.addReview(newReviewData)

        setNameValue('')
        setReviewValue('')
        setStarsValue('')
    }

    return (
       <div>
        <button onClick={() => setShow(!show)}>Toggle Form</button>
        { show ? <form>
            <h2>Movie Name</h2>
            <input type="text" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
            <h2>Review</h2>
            <input type="text" value={reviewValue} onChange={(event) => setReviewValue(event.target.value)} />
            <h2>Star Rating</h2>
            <input type="number" value={starsValue} onChange={(event) => setStarsValue(event.target.value)}/>
            <button className="btn btn-outline-success" onClick={onFormSubmit}>Submit</button>
        </form> : null }
       </div>
    )
   
}