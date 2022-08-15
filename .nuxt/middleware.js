const middleware = {}

middleware['layoutAccount'] = require('../middleware/layoutAccount.js')
middleware['layoutAccount'] = middleware['layoutAccount'].default || middleware['layoutAccount']

middleware['layoutContent'] = require('../middleware/layoutContent.js')
middleware['layoutContent'] = middleware['layoutContent'].default || middleware['layoutContent']

middleware['layoutMember'] = require('../middleware/layoutMember.js')
middleware['layoutMember'] = middleware['layoutMember'].default || middleware['layoutMember']

export default middleware
