import logger from './loger.js'
import morgan from 'morgan'
require('dotenv').config()
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

//must come after the app creation
const morganFormat=':method :url :status :response-time ms';
app.use(morgan(morganFormat, {
     stream:{
       write: (message)=>{
            const logObject={
                method:message.split(' ')[0],
                url:message.split(' ')[1],
                status:message.split(' ')[2],
                responseTime:message.split(' ')[3],
            };
            logger.info(JSON.stringify(logObject));}}
}));

let users = []
let nextId = 1
// add a new user
 app.post('/users', (req, res) => {
    logger.info("Adding a new user");
  const {name,email}=req.body
  const newUser = {id: nextId++, name, email}
  users.push(newUser)
  res.status(201).send(newUser)
})
// get all users
app.get('/users', (req, res) => {
    logger.info("Getting all users");
  res.send(users)
})
// get a specific user
app.get('/users/:id', (req, res) => {
    logger.info("Getting a specific user");
  const user = users.find(user => user.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).send('User not found')
  }
  res.status(200).send(user)
})
// update a user
app.put('/users/:id', (req, res) => {
    logger.info("Updating a user");
  const userIndex= users.findIndex(user => user.id === parseInt(req.params.id))
  if (!userIndex) {
    return res.status(404).send('User not found')
  }
  const {name,email}=req.body
  users[userIndex].name = name
  users[userIndex].email = email
  res.status(200).send(users)
})
// delete a user
app.delete('/users/:id', (req, res) => {
    logger.info("Deleting a user");
  const userIndex = users.findIndex(user => user.id === parseInt(req.params.id))
  if (userIndex === -1) {
    return res.status(404).send('User not found')
  }
  users.splice(userIndex, 1)
  res.status(204).send(users)
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})