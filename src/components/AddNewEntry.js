import React, {useState} from "react";
import entryService from "../services/EntryService"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

    const handleCategoryAutoComplete = (event, value) => {
        setEntry(prevState => ({
            ...prevState,
            ["category"]: value
        }));
    }


    return <form className="add-entry-form" onSubmit={(event) => handleSubmit(event)}>
        <TextField  id="price-input" className={"form-element form-input"} name="price" type="number" label="Price" variant="filled" required={true} onChange={handleChange} value={entry.price} />

        <TextField id="date-input" className={"form-element form-input"} type="date" name="date" onChange={handleChange} value={entry.date} label="Outlined" variant="outlined" InputLabelProps={{shrink: true}}/>

        <Autocomplete
            id="category-input"
            className={"form-element form-input"}
            label="Category"
            name="category"
            defaultValue={"UNCATEGORIZED"}
            options={entryService.CATEGORIES}
            getOptionLabel={(option) => option}
            onChange={handleCategoryAutoComplete}
            // style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
        />

        <TextField id="name-input" className={"form-element form-input"} type="text" name="name" onChange={handleChange} value={entry.name} label="Name" variant="outlined" InputLabelProps={{shrink: true}}/>


        {/*<label>Price: <input type="number" name="price" required={true} onChange={handleChange} value={entry.price}/></label>*/}
        {/*<label>Date: <input type="date" name="date" onChange={handleChange} value={entry.date}/></label>*/}

        {/*<label>Category:*/}
        {/*<select id="categories" name="category" onChange={handleChange} defaultValue={"UNCATEGORIZED"}>*/}
        {/*    {entryService.CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}*/}
        {/*</select>*/}
        {/*</label>*/}

        {/*<label>Name: <input type="text" name="name" onChange={handleChange} value={entry.name}/></label>*/}
        <Button className={"form-element"} type="submit" value="Submit" variant="outlined" color="primary"> Submit </Button>
        {/*<button className={"form-element"} type="submit" value="Submit">Submit</button>*/}
    </form>
}
export default AddNewEntry;