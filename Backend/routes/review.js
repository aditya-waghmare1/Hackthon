const express = require('express')
const pool = require('../utils/db')

const router = express.Router()


router.get("/review/:userId",(req,res)=>{

    const userId = req.params.userId;
    

    const sql =`SELECT m.title,  r.rating, r.review_text, r.updated_at, u.fname, u.lname FROM reviews r INNER JOIN movies m ON r.movie_id = m.movie_id  INNER JOIN users u ON r.user_id = u.user_id where u.user_id=${userId}`;
    pool.query(sql,(error,data)=>{
        res.send({"status":"ok","data":data})
    })
})
router.get("/notreview/:userId",(req,res)=>{

    const userId = req.params.userId;
    

    const sql =`SELECT m.title,  r.rating, r.review_text, r.updated_at, u.fname, u.lname FROM reviews r INNER JOIN movies m ON r.movie_id = m.movie_id  INNER JOIN users u ON r.user_id = u.user_id where u.user_id!=${userId}`;
    pool.query(sql,(error,data)=>{
        res.send({"status":"ok","data":data})
    })
})













module.exports = router