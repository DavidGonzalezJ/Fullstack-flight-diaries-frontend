import { DiaryEntry } from "../types"

const Entry = ({entry}: {entry:DiaryEntry}) => {
    return (
        <>
            <h3>{entry.date}</h3>
            <p>visibility: {entry.visibility}<br/>
            weather: {entry.weather}</p>
        </>
    );
};

export default Entry;