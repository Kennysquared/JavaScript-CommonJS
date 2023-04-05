import './style.css';



const arithmetic = require('./arithmetic.js')
const appDiv = document.getElementById('app');

const addButton = document.getElementById('add-button');
const aBox = document.getElementById('a');
const bBox = document.getElementById('b');


addButton.addEventListener('click', function () {

  const a = Number(aBox.value);
  const b = Number(bBox.value);
  const c = arithmetic.subtract(a,b);

  alert(c);
});
