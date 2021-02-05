import React, {useState, useEffect} from "react";
import entryService from "../services/EntryService";
import AddNewEntry from "./AddNewEntry";
import CategoryPieChart from "./CategoryPieChart";
import "../css/Entry.css"
import TopSpendingCategories from "./TopSpendingCategories";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

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
                if (r.status === 200) {
                    entryService.insertNewEntryToChartData(r.data, categoryCounts, setCategoryCounts)
                } else {
                    setError({display: true, message: "Something went wrong :("})
                }
            })
    }

    if (categoryCounts.length === 0) {
        return (<>
            <div> No entry found :(</div>
            <button onClick={makeItRain}>Make it rain!</button>
        </>)
    } else if (error.display) {
        return <div>{error.message}</div>
    } else {

        return (
            <div id="entry" className="flex-row">
                <div id="left-side" className="flex-column">
                    <p id="my-wallet">My wallet</p>
                    <div id="wallet-card" className="flex-column">

                        <div id="pie-chart">
                            <CategoryPieChart data={entryService.categoryToPieChartData(categoryCounts)}/>
                        </div>
                        <div id="top-5-spending">
                            <TopSpendingCategories counts={categoryCounts}/>
                        </div>
                    </div>
                </div>
                <div id="right-side" className="flex-column">
                    <div id="add-entry" className="flex-column">
                        <AddNewEntry counts={categoryCounts} setCounts={setCategoryCounts}/>
                    </div>
                    <button id="make-it-rain" onClick={makeItRain}><FontAwesomeIcon icon={faMagic} /></button>
                </div>
            </div>
        )
    }
}


export default Entry;