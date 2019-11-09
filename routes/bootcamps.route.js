const express = require('express');
const router = express.Router();
const {
  findAllBootcamps,
  createBootcamp,
  updateBootcamp,
  findOneBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require('../controller/bootcamp.controller');
const courseRouter = require('./courses.route');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router
  .route('/')
  .get(findAllBootcamps)
  .post(createBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo').put(bootcampPhotoUpload);

router
  .route('/:id')
  .get(findOneBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
