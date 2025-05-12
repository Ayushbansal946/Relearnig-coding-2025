import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
let users = []
let nextId = 1
// add a new user
 app.post('/users', (req, res) => {
  const {name,email}=req.body
  const newUser = {id: nextId++, name, email}
  users.push(newUser)
  res.status(201).send(newUser)
})
// get all users
app.get('/users', (req, res) => {
  res.send(users)
})
// get a specific user
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).send('User not found')
  }
  res.status(200).send(user)
})
// update a user
app.put('/users/:id', (req, res) => {
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