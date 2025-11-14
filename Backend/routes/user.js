const express = require('express')
const pool = require('../utils/db')

const router = express.Router()


router.get("/",(req,res)=>{
    res.send("hello")
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql, [email],  (error, data) => {
        if (data != '') {

            if(password ==data[0].password)
            {
                res.send({"status":"ok","data":data})
            }
            
            

        }
            
            else
            {
                res.send("Invalid")
            }
                
        }
    
            
    )
})

router.post('/register', async (req, res) => {
    const { fname, lname, email, mobile_no, dob,password} = req.body
    const sql = `INSERT INTO users(fname, lname, email, mobile_no, dob,password) VALUES(?,?,?,?,?,?)`
    try {
       
        pool.query(sql, [fname, lname, email, mobile_no, dob,password], (error, data) => {
            res.send("Creted sucesfully")
        })
    }
    catch (error) {
        res.send(error)
    }


})







module.exports = router