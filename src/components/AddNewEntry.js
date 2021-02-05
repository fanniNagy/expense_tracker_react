import React, {useState} from "react";
import entryService from "../services/EntryService"
import "../css/Entry.css";

const AddNewEntry = ({counts, setCounts}) => {

    const [entry, setEntry] = useState(entryService.INITIAL_ENTRY)

    const handleSubmit = (event) => {
        event.preventDefault();
        entryService.addNewEntry(entry).then(value => {
            if (value.status === 200) {
                entryService.insertNewEntryToChartData(value.data, counts, setCounts)
            }
        }).then(() => setEntry(entryService.INITIAL_ENTRY));
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setEntry(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return <form className="add-entry-form" onSubmit={(event) => handleSubmit(event)}>
        <label>Price: <input type="number" name="price" required={true} onChange={handleChange} value={entry.price}/>
        </label>
        <label>Date: <input type="date" name="date" onChange={handleChange} value={entry.date}/>
        </label>
        <label>Category:
        <select id="categories" name="category" onChange={handleChange} defaultValue={"UNCATEGORIZED"}>
            {entryService.CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        </label>
        <label>Name: <input type="text" name="name" onChange={handleChange} value={entry.name}/>
        </label>
        <button type="submit" value="Submit">Submit</button>
    </form>
}
export default AddNewEntry;