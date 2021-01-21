import React, {useState, useEffect} from "react";
import entryService from "../services/EntryService"
import CategoryPieChart from "./CategoryPieChart";

const Entry = () => {
    const [categoryCounts, setCategoryCounts] = useState([])

    useEffect(() => {
        entryService.getCategoryCount()
            .then(categoryCountsResponse => {
                setCategoryCounts(categoryCountsResponse)
            })
    }, [])

    const makeItRain = () => {
        entryService.getNewRandomEntry()
            .then(r => {
               entryService.insertNewEntryToChartData(r, categoryCounts, setCategoryCounts)
            })
    }

    if (categoryCounts.length === 0) {
        return (<>
            <div> No entry found :(</div>
            <button onClick={makeItRain}>Make it rain!</button>
        </>)
    } else {

        return (
            <div>
                <button onClick={makeItRain}>Make it rain!</button>
                <div style={{height: "40em"}}>
                    <CategoryPieChart data={entryService.categoryToPieChartData(categoryCounts)}/>
                </div>
            </div>
        )
    }
}


export default Entry;