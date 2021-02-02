import React, {useState, useEffect} from "react";
import entryService from "../services/EntryService";
import "../css/Entry.css";

const TopSpendingCategories = () => {
    const [topSpending, setTopSpending] = useState([])

    useEffect(() => {
        entryService.getTopSpending()
            .then(r => {
                if (r.status === 200) {
                    setTopSpending(r.data)
                }
            })
    }, [])


    return (
        <div className="spending">
            <span>Categories with biggest expense: </span>
            <ol id="top5spending" className="flex-row">
                {topSpending.length >= 3 ?
                    topSpending.map(categoryCount =>
                        <li key={categoryCount.category}>
                            <ul>
                                <li>{categoryCount.category}</li>
                                <li>{Math.abs(categoryCount.price)}</li>
                            </ul>
                        </li>)
                    : ""}
            </ol>
        </div>
    )
}
export default TopSpendingCategories