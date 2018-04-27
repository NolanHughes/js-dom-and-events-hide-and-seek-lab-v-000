function getFirstSelector(element) {
  return document.querySelector(element)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length- 1];

}

function increaseRankBy(n) {
  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + 3).toString()
  }
}
