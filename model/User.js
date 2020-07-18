const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = Schema({
	
	name: {
		type: String
	},
	content: [{
		message: String
	}],
	personId: {
		type: Number,
		unique: true
	},
	year: {
		type: Number
	},
	publishedAt: {
		type: Date,
		default: Date.now
	}
	
});

module.exports = mongoose.model('user', userSchema);