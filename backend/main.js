import express, { request } from "express";
import axios from "axios";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.use(cors({
  origin: 'https://url-shortening-app-server.vercel.app/'
}));

app.use(express.json());

const fetchData = async (urlLink) => {
    try {
        // let api = await axios.post("https://cleanuri.com/api/v1/shorten?", { url: "https://google.com" });
        let api = await axios.post("https://cleanuri.com/api/v1/shorten?", { url: urlLink });
        console.log(api.data);
        // let x = api.data.result_url;
        return api.data
    } catch (error) {
        console.error(error);
    }

}

app.get('/', async (req, res) => {
    console.log("The request Method is:", req.method)
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    // let data = await fetchData();
    // console.log(`Hello console from backend! I'm GET`);
    // res.json(data);
    res.send("Hello World!")
})

app.post('/', async (req, res) => {
    console.log("Hello post!");
    console.log(req.body)
    let urlLink = req.body.userInputLink;
    console.log(urlLink);
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    let data = await fetchData(urlLink);
    console.log(`Hello console! I'm POST from Nikhil`);
    res.json(data)
})

app.listen(port, () => {
    console.log(`The example app is running at http://127.0.0.1:${port}`);
})
