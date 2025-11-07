// Implement a in memory cache for and expensive function (like database query or API call) 

const dataCache = new Map();

const expensiveFunction = (id) => {
    console.log("Run the expensive task for", id);

    return {
        id: id,
        data: `Some data for id:${id}`,
        timestamp : new Date().getTime()
    }
}

const getData = (id) => {
    if(dataCache.has(id)){
        return dataCache.get(id);

    }
    console.log(`cache miss for id :${id}`)
    const data = expensiveFunction(id);
    dataCache.set(id, data)

    return data ;

}
console.log(getData(124))
console.log(getData(124))
console.log(dataCache)