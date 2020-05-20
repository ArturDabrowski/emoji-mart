const build = require('./build')
const sets = ['apple', 'facebook', 'google', 'twitter']

build({ output: 'data/apple.json' })

sets.forEach((set) => {
  build({
    output: `data/${set}.json`,
    sets: [set],
  })
})
