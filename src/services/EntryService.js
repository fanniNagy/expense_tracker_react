import axios from 'axios'

const baseUrl = 'http://localhost:8080/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getCategoryCount = () => {
    const request = axios.get(baseUrl + "category/expense/count")
    return request.then(response => response.data)
}

const categoryToPieChartData = (categories) => {
    let data = []
    for (let i = 0; i < categories.length; i++) {
        let pieData = {
            id: categories[i].category,
            label: categories[i].category,
            value: Math.abs(categories[i].price)
        }
        data.push(pieData);
    }
    return data;
}
const getNewRandomEntry = () => {
    const request = axios.get(baseUrl + "random")
    return request.then(response => response)
}

const insertNewEntryToChartData = (r, categoryCounts, setCategoryCounts) => {
    let responseCategory = categoryCounts.filter(
        category => category.category === r.category);
    if (responseCategory.length > 0) {
        responseCategory[0] = {...responseCategory[0], price: r.price + responseCategory[0].price}
        let didntChange = categoryCounts.filter(
            x => x.category !== responseCategory[0].category
        );
        didntChange.push(responseCategory[0])
        setCategoryCounts(didntChange)
    } else {
        setCategoryCounts([...categoryCounts, {category: r.category, price: r.price}])
    }
}

const formatDate = (d) => {
    return d.getFullYear()+'-'+d.getUTCMonth()+1+'-'+d.getDate();
    // d = new Date(d.getTime());
    // return d.split("T")[0];
    // return d.getFullYear()+'-'+("0"+(d.getMonth()+1)).slice(-2)+'-'+("0"+d.getDate()).slice(-2);
    // return d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length===2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length===2?d.getDate().toString():"0"+d.getDate().toString());
}
const formatISOStringDate = (date) => {
    return date.split("T")[0];
}

const addNewEntry = (entry) => {
    const url = baseUrl+"add";
    const request = axios.post(url, entry)
    let response = request.then(response => response);
    return response;
}

const CATEGORIES = ["HOUSING", "TRANSPORTATION", "FOOD", "UTILITIES", "HEALTHCARE",
    "SAVING", "HOUSEHOLD", "PERSONAL", "ENTERTAINMENT", "MISCELLANEOUS",
    "PETS", "CLOTHES", "SERVICES", "UNCATEGORIZED",
    "PAYMENT", "ONETIME_INCOME"]

const INITIAL_ENTRY = {
    price: 0,
    category: "UNCATEGORIZED",
    date: formatISOStringDate(new Date().toISOString()),
    name:""
}

const getTopSpending = () => {
    const request = axios.get(baseUrl + "category/top5spending")
    return request.then(response => response)
}


export default {
    getAll,
    getCategoryCount,
    categoryToPieChartData,
    getNewRandomEntry,
    insertNewEntryToChartData,
    formatDate,
    CATEGORIES,
    addNewEntry,
    INITIAL_ENTRY,
    getTopSpending
}