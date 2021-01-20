import React, {useState, useEffect} from "react";
import entryService from "../services/EntryService"

const Entry = () => {

    const [entries, setEntries] = useState([])

    useEffect(() => {
        entryService.getAll()
            .then(response => {
                console.log(response)
                setEntries(response)
            })
    }, [])


    if (entries.length === 0) {
        return <div> No entry found :( </div>
    } else {
        return (
            <div>
                <ul>
                    {entries.map(entry =>
                        <li key={entry.id}>
                            <ul>
                                <li>{entry.name}</li>
                                <li>{entry.price}</li>
                                <li>{entry.date}</li>
                                <li>{entry.category}</li>
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


export default Entry;