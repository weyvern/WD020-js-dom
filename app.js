const firstParagraph = document.getElementById('first');
const firstParagraphQuerySelect = document.querySelector('#first');

console.log(firstParagraph);
firstParagraph.innerHTML = `<span>Hello</span> Victor`;
firstParagraph.style.backgroundColor = 'red';
firstParagraph.style.color = 'white';
firstParagraph.style.fontSize = '3rem';

firstParagraph.onclick = e => console.log('Click 1');
firstParagraph.onclick = e => console.log('Click 2');

firstParagraph.addEventListener(
  'click',
  e => (e.target.style.backgroundColor = 'green')
);
firstParagraph.addEventListener(
  'click',
  e => (e.target.style.color = 'yellow')
);
firstParagraph.addEventListener('click', e => console.log('Click 3'));

const htmlCollection = document.getElementsByTagName('p');
const nodeList = document.querySelectorAll('p');
console.log(nodeList);

/* htmlCollection.forEach(item => console.log(item)); */
nodeList.forEach(node => console.log(node));

document.addEventListener('click', e => console.log('ES6 arrow', this));
document.addEventListener('click', function (e) {
  console.log('ES5', this);
});
