const {Nuxt, Builder} = require('nuxt')
const options = require('../nuxt.config')
const nuxt = new Nuxt(options), 
builder = new Builder(nuxt)
builder.build()
F.middleware('nuxt', nuxt.render)
