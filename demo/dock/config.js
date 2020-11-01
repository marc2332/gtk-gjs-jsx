const { join } = require('path')

module.exports = {
	entry: join(__dirname, './index.js'),
	dist: join(__dirname, './dist')
}