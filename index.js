import express from "express"

const app = express()

app.listen(5001, () => console.log('Api running onport 5001'))

app.get('/', (req, res) => res.json('My Api running'))