const express = require('express');
const router = express.Router();

router.route('/api')
      .get((req, res)=>{
        //res.send('api').status(200);
        res.send(JSON.stringify(req.body));
      });

module.exports = router;