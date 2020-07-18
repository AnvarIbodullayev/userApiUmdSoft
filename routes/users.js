const express = require('express');
const router = express.Router();

const User = require('../model/User');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// add new user
router.post('/new', (req, res, next) => {
	
	// const user = new User(req.body);  //postman bilan ishlash uchun

	const music = new Music();
    music.content = req.body.content;
    music.personId = req.user.personId;
    music.year = req.body.year;
    music.publishedAt = req.body.publishedAt;


	user.save((err,data) => {
		if (err){
			return res.json(err);
		} else{
			res.json(data);
		}
	});

});

// findById
router.get('/:user_id', (req, res, next) => {

	const promise = User.findById(req.params.user_id);

	promise.then((err, user) => {
		if (err) {
			res.json(err)
		} else {
			res.json(user);
		}
	});

});

// delete
router.delete('/delete/:user_id', (req,res,next) => {
	const promise = User.findByIdAndRemove(
		req.params.user_id
	);

	promise.then((err, user) => {
		if (err) {
			res.json(err)
		} else {
			res.json(user);
		}
	});
});

module.exports = router;