import axios from "axios";
import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import Entry from "./Entry";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(response => {
      setEntries(response.data);
    })
  }, []);

  return (
    <>
      <h2>Diary entries</h2>
      {entries.map(entry => <Entry key={entry.id} entry={entry}/>)}
    </>
  );
};

export default App;