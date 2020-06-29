const express = require('express');
const router = express.Router();

router.route('/api')
      .get((req, res)=>{
        res.send('👋 hi!').status(200);
      });

module.exports = router;