/**
 * User API
 */
 const express = require('express');
 const { Router } = express;
 
 
 const {
    createVideoHandler,
    deleteVideoHandler,
    getSingleVideoHandler,
    updateVideoHandler,
  } = require('./video.controller.js')
  
  const router = Router();
  
  router.post('/', createVideoHandler)
  router.get('/:id', getSingleVideoHandler)
  router.patch('/:id', updateVideoHandler)
  router.delete('/:id', deleteVideoHandler)
  
 module.exports = router;