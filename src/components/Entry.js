import React, {useState, useEffect} from "react";
import entryService from "../services/EntryService";
import AddNewEntry from "./AddNewEntry";
import CategoryPieChart from "./CategoryPieChart";
import EntryCalendar from "./Calendar";

const Entry = () => {
    const [categoryCounts, setCategoryCounts] = useState([])
    const [error, setError] = useState({
        display: false,
        message: ""
    })

    useEffect(() => {
        entryService.getCategoryCount()
            .then(categoryCountsResponse => {
                setCategoryCounts(categoryCountsResponse)
            })
    }, [])

    const makeItRain = () => {
        entryService.getNewRandomEntry()
            .then(r => {
                console.log(r)
                if(r.status === 200) {
                    entryService.insertNewEntryToChartData(r.data, categoryCounts, setCategoryCounts)
                } else{
                    setError({display: true, message: "Something went wrong :("})
                }
            })
    }

    if (categoryCounts.length === 0) {
        return (<>
            <div> No entry found :(</div>
            <button onClick={makeItRain}>Make it rain!</button>
        </>)
    } else if(error.display){
        return <div>{error.message}</div>
    }
    else {

        return (
            <div>
                <button onClick={makeItRain}>Make it rain!</button>
                <AddNewEntry/>
                <div style={{height: "30em"}}>
                    <CategoryPieChart data={entryService.categoryToPieChartData(categoryCounts)}/>
                </div>
                <div style={{height: "30em"}}>
                    <EntryCalendar/>
                </div>
            </div>
        )
    }
}


export default Entry;