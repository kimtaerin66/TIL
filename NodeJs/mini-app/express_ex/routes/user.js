const express = require('express'); 
const router = express.Router();

router.get('/:id', (req,res)=> {
    res.send('Received a GET request, param:' + req.params.id);
});

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.json({
        success:true,
        user: req.body.username//특정값불러오기
    });
});

router.put('/', (req,res)=>{
    res.status(400).json({message:'Hey, you. Bad Request!'});
});

router.delete('/',(req,res)=> {
    res.send('Received a DELETE request');
});

module.exports = router;