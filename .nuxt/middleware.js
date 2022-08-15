const middleware = {}

middleware['layoutContent'] = require('../middleware/layoutContent.js')
middleware['layoutContent'] = middleware['layoutContent'].default || middleware['layoutContent']

export default middleware
