
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mySQL = require('mysql')
const cors = require('cors')

const db = mySQL.createPool({
    host: 'mysql.eecs.ku.edu',
    user: 'c491q003',
    password: 'Chohqu9o',
    database: 'c491q003'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/products/insert', (req, res) => {
    const price = req.body.Price
    const name = req.body.Name
    const quantity = req.body.Quantity
    const pic = req.body.PictureURL
    const sqlInsert = "INSERT INTO Products (Price, Quantity, Name, PictureURL) VALUES (?,?)"
    db.query(sqlInsert, [price, quantity, name, pic], (err, result) => {console.log(result)})
})

app.post('/api/user/insert/', (req, res) => {
    const username = req.body.Username
    const password = req.body.Password
    console.log(username, password)
    const sqlInsert = "INSERT INTO User (Username, Password) VALUES (?,?)"
    db.query(sqlInsert, [username, password], (err, result) => {console.log(result)})
})

app.post('/api/sells/insert/', (req, res) => {
    const prodID = req.body.ProductID
    const userID = req.body.UserID
    //console.log(username, password)
    const sqlInsert = "INSERT INTO Sells (prodID, userID) VALUES (?,?)"
    db.query(sqlInsert, [prodID, userID], (err, result) => {console.log(result)})
})

app.post('/api/cart/insert/', (req, res) => {
    const prodID = req.body.ProductID
    const userID = req.body.UserID
    const quantity = req.body.Quantity
    //console.log(username, password)
    const sqlInsert = "INSERT INTO Cart (prodID, userID, quantity) VALUES (?,?)"
    db.query(sqlInsert, [prodID, userID, quantity], (err, result) => {console.log(result)})
})

app.get('/api/user/select', (req, res) => {
    //res.send("whattup")
    const SQLselect = "SELECT * FROM User"
    db.query(SQLselect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/products/select', (req, res) => {
    //res.send("whattup")
    const SQLselect = "SELECT * FROM Products"
    db.query(SQLselect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/sells/select', (req, res) => {
    //res.send("whattup")
    const SQLselect = "SELECT * FROM Sells"
    db.query(SQLselect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/cart/select', (req, res) => {
    //res.send("whattup")
    const SQLselect = "SELECT * FROM Cart"
    db.query(SQLselect, (err, result) => {
        res.send(result)
    })
})

app.delete('api/products/delete/:id', (req, res) => {
    const id = req.params.ProductID
    const SQLdelete = "DELETE FROM Products WHERE ProductID = ?"
    db.query(SQLdelete, id, (err, result) => {
        if(err) console.log(err)})
})

app.put('api/products/update/', (req, res) => {
    const id = req.body.ProductID
    const quantity = req.body.Quantity
    const updateSQL = "UPDATE SET Products Quantity = ? WHERE ProductID = ?"
    db.query(updateSQL, [quantity, id], (err, result) => {
        if(err) console.log(err)})
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})