

<div id="calculator">
  <div id="left-col">
    <h3>Column 1 (Left)</h3>
  </div>
  <div id="right-col">
    <h3>Column 2 (Right)</h3>
  </div>
  <div id="result">
    <h3>Result</h3>
    <p id="sum">Sum: 0</p>
    <p id="diff">Difference: 0</p>
  </div>
  <button id="add-left">Add to left</button>
  <button id="add-right">Add to right</button>
</div>

<script>
    const calculator = document.getElementById('calculator');
const leftCol = document.getElementById('left-col');
const rightCol = document.getElementById('right-col');
const addLeftBtn = document.getElementById('add-left');
const addRightBtn = document.getElementById('add-right');
const resultSum = document.getElementById('sum');
const resultDiff = document.getElementById('diff');

let leftSum = 0;
let rightSum = 0;

addLeftBtn.addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'number';
  input.addEventListener('input', function() {
    leftSum -= parseInt(this.previousValue || 0);
    leftSum += parseInt(this.value || 0);
    resultDiff.textContent = `Difference: ${leftSum - rightSum}`;
    this.previousValue = this.value;
  });
  leftCol.appendChild(input);
});

addRightBtn.addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'number';
  input.addEventListener('input', function() {
    rightSum -= parseInt(this.previousValue || 0);
    rightSum += parseInt(this.value || 0);
    resultSum.textContent = `Sum: ${leftSum + rightSum}`;
    this.previousValue = this.value;
  });
  rightCol.appendChild(input);
});

</script>