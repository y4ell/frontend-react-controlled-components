import React, {useState} from 'react';
import './App.css';


function App() {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0)
    const [reviewValue, setReviewValue] = useState('')
    const [newsletterValue, toggleNewsletterValue] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(nameValue, ageValue, reviewValue, newsletterValue)
    }




    return (
        <div>
<form
onSubmit={handleSubmit}>
    <fieldset>
    <legend>Gegevens</legend>
    <label htmlFor="form-name">
        Naam:
        <input
            type="text"
            id="form-name"
            name="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
/>
    </label>
    <label htmlFor="form-age">
        Leeftijd:
        <input
            type="number"
            id="form-age"
            name="age"
            value={ageValue}
            onChange={(e) => setAgeValue(e.target.value)}
            />
    </label>
    </fieldset>
<fieldset>
    <legend>Jouw review</legend>
    <label htmlFor="form-review">
        Opmerkingen:
        <br/>
        <textarea
            id="form-review"
            name="review"
            value={reviewValue}
            onChange={(e) => setReviewValue(e.target.value)}
            placeholder="Wat vond je van het recept?"

            rows={4}
            cols={40}
            />
    </label>
    <br/>

    <label htmlFor="">
        <input
            type="checkbox"
            checked={newsletterValue}
            onChange={(e) => toggleNewsletterValue(!newsletterValue)}
            />
        Ik schrijf me in voor de nieuwsbrief
    </label>
        <br />
        <button
            type="submit">Versturen</button>
</fieldset>
</form>
        </div>
    );
}

export default App;
