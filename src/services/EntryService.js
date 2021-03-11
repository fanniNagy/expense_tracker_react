import axios from 'axios'

const baseUrl = 'http://localhost:8080';
axios.defaults.baseURL = baseUrl;


const getAll = () => {
    const request = axios.get(`/`, {withCredentials: true})
    return request.then(response => response.data)
}

const getCategoryCount = () => {
    const request = axios.get("/category/expense/count", {withCredentials: true})
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
    const request = axios.get("/random", {withCredentials: true})
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
    return d.getFullYear() + '-' + d.getUTCMonth() + 1 + '-' + d.getDate();
}
const formatISOStringDate = (date) => {
    return date.split("T")[0];
}

const addNewEntry = (entry) => {
    const request = axios.post("/add", entry, {withCredentials: true})
    return request.then(response => response);
}

const CATEGORIES = ["HOUSING", "TRANSPORTATION", "FOOD", "UTILITIES", "HEALTHCARE",
    "SAVING", "HOUSEHOLD", "PERSONAL", "ENTERTAINMENT", "MISCELLANEOUS",
    "PETS", "CLOTHES", "SERVICES", "UNCATEGORIZED",
    "PAYMENT", "ONETIME_INCOME"]

const INITIAL_ENTRY = {
    price: 0,
    category: "UNCATEGORIZED",
    date: formatISOStringDate(new Date().toISOString()),
    name: ""
}

const getTopSpending = () => {
    const request = axios.get("/category/top5spending", {withCredentials: true})
    return request.then(response => response)
}


// eslint-disable-next-line import/no-anonymous-default-export
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