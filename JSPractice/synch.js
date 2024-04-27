// ------------------------ Promises ------------------------

// const event = new Promise((resolve, reject) => {
//     name = "Imd"

//     if (name == "Imad")
//         resolve()
//     else
//         reject("Wrong Name Mate")
//     })
    
// event
//     .then(() => {
//         console.log("Successed")
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Promise finished")
//     })
                
// ------------------------ axios promise fetching ------------------------

// const axios = require("axios")
// const data = axios.get("https://cat-fact.herokuapp.com/facts") // This line return a promise

// data
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
        
// ------------------------ axios asynch fetching ------------------------
        
const axios = require("axios")

// async function fetchData(){
const fetchData = async () =>{
    const data = await axios.get("https://cat-fact.herokuapp.com/facts") // This line return a promise
    console.log(data)
}

fetchData()

// ------------------------ Sleeper Timer ------------------------

// setTimeout (() => {
    //   console.log("Waiting 1 second \n");
    // } ,1000);
    
    // setTimeout (() => {
    //   console.log("3");
    //     setTimeout (() => {
        //       console.log("2");
        //       setTimeout (() => {
        //         console.log("1");
        //       } ,1000);
        //     } ,1000);
        // } ,1000);
        