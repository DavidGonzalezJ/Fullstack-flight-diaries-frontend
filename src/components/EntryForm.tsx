import { useState } from "react";
import { NewDiaryEntry, Visibility, Weather } from "../types";

const Entryform = ({addingCallback}: { addingCallback:(entry:NewDiaryEntry)=>void}) => {
    const [date, setDate] = useState('');
    const [visibility, setVisibility] = useState('');
    const [weather, setWeather] = useState('');
    const [comment, setComment] = useState('');

    const createEntry = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const newDiaryEntry = {
            date: date,
            visibility: visibility as Visibility,
            weather: weather as Weather,
            comment: comment
        };
        addingCallback(newDiaryEntry);

        setDate('');
        setVisibility('');
        setWeather('');
        setComment('');
    }

    return (
        <>
            <h2>Add new entry</h2>
            <form onSubmit={createEntry}>
                date: <input value={date} onChange={(event) => setDate(event.target.value)} /><br/>
                weather: <input value={weather} onChange={(event) => setWeather(event.target.value)} /><br/>
                visibility: <input value={visibility} onChange={(event) => setVisibility(event.target.value)} /><br/>
                comment: <input value={comment} onChange={(event) => setComment(event.target.value)} /><br/>

                <button type='submit'>add</button>
            </form>
        </>
    )

}

export default Entryform;