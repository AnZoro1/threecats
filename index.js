var catMe = require('cat-me')
function cats() {
  for (let i = 0; i <= 3; i++) {
    console.log(catMe())
  }
}
console.log(cats())
