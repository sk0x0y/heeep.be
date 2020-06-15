const express = require('express');
const controller = require('./controller');

const router = express.Router();

router
  .route('')
  .get(controller.get)
  .post(controller.post)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
