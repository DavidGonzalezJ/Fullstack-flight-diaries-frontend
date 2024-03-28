import axios from "axios";
import { useEffect, useState } from "react";
import { DiaryEntry, NewDiaryEntry } from "./types";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(response => {
      setEntries(response.data);
    })
  }, []);

  const addEntry = async (entry:NewDiaryEntry) => {
    const newEntry = await axios.post<DiaryEntry>('http://localhost:3000/api/diaries', entry);
    console.log(newEntry.data);
    setEntries(entries.concat(newEntry.data));
  };

  return (
    <>
    <EntryForm addingCallback={addEntry}/>
      <h2>Diary entries</h2>
      {entries.map(entry => <Entry key={entry.id} entry={entry}/>)}
    </>
  );
};

export default App;