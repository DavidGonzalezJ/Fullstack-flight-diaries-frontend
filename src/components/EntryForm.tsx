import { useState } from "react";
import { NewDiaryEntry, Visibility, Weather } from "../types";

const Notification = ({message}:{message:string}) => {
    if(!message || message === '')
      return;
  
    const style = {
      color: 'red'
    };
  
    return <p style={style}>{message}</p>
};

const Entryform = ({addingCallback, message}: { addingCallback:(entry:NewDiaryEntry)=>void, message: string}) => {
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
    }

    return (
        <>
            <h2>Add new entry</h2>
            <Notification message={message}/>
            <form onSubmit={createEntry}>
                date: <input type="date" onChange={(event) => setDate(event.target.value)} /><br/>
                weather: <input type="radio" id="sunny" name="weather" value="sunny" onChange={(event) => setWeather(event.target.value)} />
                <label>Sunny</label>
                <input type="radio" id="rainy" name="weather" value="rainy" onChange={(event) => setWeather(event.target.value)} />
                <label>Rainy</label>
                <input type="radio" id="cloudy" name="weather" value="cloudy" onChange={(event) => setWeather(event.target.value)} />
                <label>Cloudy</label>
                <input type="radio" id="stormy" name="weather" value="stormy" onChange={(event) => setWeather(event.target.value)} />
                <label>Stormy</label>
                <input type="radio" id="windy" name="weather" value="windy" onChange={(event) => setWeather(event.target.value)} />
                <label>Windy</label>
                <br/>
                visibility: <input type="radio" id="great" name="visibility" value="great" onChange={(event) => setVisibility(event.target.value)} />
                <label>Great</label>
                <input type="radio" id="good" name="visibility" value="good" onChange={(event) => setVisibility(event.target.value)} />
                <label>Good</label>
                <input type="radio" id="ok" name="visibility" value="ok" onChange={(event) => setVisibility(event.target.value)} />
                <label>Ok</label>
                <input type="radio" id="poor" name="visibility" value="poor" onChange={(event) => {setVisibility(event.target.value)}} />
                <label>Poor</label>
                <br/>
                comment: <input value={comment} onChange={(event) => setComment(event.target.value)} /><br/>

                <button type='submit'>add</button>
            </form>
        </>
    )

}

export default Entryform;