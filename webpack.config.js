const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		login: './src/script/login.js', 
		// homepage: '.src/script/homepage.js',
		// recipes: './src/script/recipes.js',
		// detail: './src/script/detail.js',
		// saved: './src/script/saved.js',
		// contact: './src/script/contact.js'
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	watch: true
}

