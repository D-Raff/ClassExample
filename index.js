import express from 'express';
import { Person } from './person.js';

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
)

router.get('^/$|/class', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
})

router.get('/person1', (req, res)=>{
    let person1 = new Person()
    person1.FirstName = "Shawn"
    person1.LastName = "Louw"
    person1.Age = "18"
    person1.display()
    res.end('Please check the console')
})

router.get('/person2', (req, res)=>{
    let person2 = new Person()
    person2.FirstName = "Qaqambile"
    person2.LastName = "Mnqika"
    person2.Age = "18"
    person2.display()
    res.end('Please check the console')
})

app.listen(port, ()=>{
    console.log(`Server is runnning on port ${port}`);
})