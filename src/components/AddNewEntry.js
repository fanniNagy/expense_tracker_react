import React, {useState} from "react";
import entryService from "../services/EntryService"

const AddNewEntry = () => {

    const [entry, setEntry] = useState(entryService.INITIAL_ENTRY)

    const handleSubmit = (event) => {
        event.preventDefault();
        entryService.addNewEntry(entry);
        console.log("submitting: " + JSON.stringify(entry));
        setEntry(entryService.INITIAL_ENTRY);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setEntry(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return <form onSubmit={(event) => handleSubmit(event)}>
        <label>
            Price: <input type="number" name="price" required={true} onChange={handleChange}/>
        </label>
        <label>
            Date: <input type="date" name="date" onChange={handleChange}/>
        </label>
        <select id="categories" name="category" onChange={handleChange} defaultValue={"UNCATEGORIZED"}>
            {entryService.CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        <label onChange={handleChange}>
            Name: <input type="text" name="name"/>
        </label>
        <button type="submit" value="Submit">Submit</button>
    </form>
}
export default AddNewEntry;