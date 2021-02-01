import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EntryService from "../services/EntryService";


const EntryCalendar = () => {
    const [date, setDate] = useState(new Date())


    const change = (dateToChange) =>{
        setDate(dateToChange)
        console.log(date)
        console.log("formatted to: " + EntryService.formatDate(date))
    }
    return <Calendar
    // selectRange={true}
    onChange={value => change(value)}/>

}

export default EntryCalendar