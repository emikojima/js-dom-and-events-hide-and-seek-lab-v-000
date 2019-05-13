
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const x = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = x.length; i < l; i++) {
  let children = x[i].children

  for (let j = 0, k = children.length; j < k; j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
}
}

function deepestChild() {
  let child = document.getElementById('grand-node').querySelectorAll('div')
  return child[child.length - 1]
}
