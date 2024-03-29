import axios from "axios";
import { useEffect, useState } from "react";
import { DiaryEntry, NewDiaryEntry } from "./types";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(response => {
      setEntries(response.data);
    })
  }, []);

  const addEntry = async (entry:NewDiaryEntry) => {
    try{
      const newEntry = await axios.post<DiaryEntry>('http://localhost:3000/api/diaries', entry);
      //console.log(newEntry.data);
      setEntries(entries.concat(newEntry.data));
    }
    catch(error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data);
        setTimeout(() => setMessage(''), 5000);
      }
    }
  };

  return (
    <>
      <EntryForm addingCallback={addEntry} message={message}/>
      <h2>Diary entries</h2>
      {entries.map(entry => <Entry key={entry.id} entry={entry}/>)}
    </>
  );
};

export default App;