const display = document.querySelector('#display');
const expression = document.querySelector('#expression');
const status = document.querySelector('#status');
const keys = document.querySelector('.keys');
let current = '0';
let stored = null;
let operator = null;
let replaceCurrent = false;
let justEvaluated = false;

function render() { display.textContent = current; }
function showError(message) { current = 'Error'; expression.textContent = ''; status.textContent = message; render(); replaceCurrent = true; stored = null; operator = null; }
function reset() { current = '0'; stored = null; operator = null; replaceCurrent = false; justEvaluated = false; expression.textContent = 'Ready'; status.textContent = 'Use the buttons or your keyboard.'; render(); }
function enterDigit(digit) {
  if (current === 'Error' || replaceCurrent || justEvaluated) { current = digit; replaceCurrent = false; justEvaluated = false; }
  else if (current.length < 16) current = current === '0' ? digit : current + digit;
  render();
}
function decimal() {
  if (current === 'Error' || replaceCurrent || justEvaluated) { current = '0.'; replaceCurrent = false; justEvaluated = false; }
  else if (!current.includes('.')) current += '.';
  render();
}
function calculate(a, op, b) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b === 0 ? null : a / b;
  return b;
}
function format(value) {
  if (!Number.isFinite(value)) return null;
  return String(Number(value.toPrecision(12)));
}
function chooseOperator(nextOperator) {
  if (current === 'Error') return;
  const value = Number.parseFloat(current);
  if (operator && !replaceCurrent) {
    const result = calculate(stored, operator, value);
    const formatted = result === null ? null : format(result);
    if (formatted === null) { showError(result === null ? 'Cannot divide by zero.' : 'Result is outside the supported range.'); return; }
    current = formatted; stored = result; render();
  } else stored = value;
  operator = nextOperator;
  expression.textContent = current + ' ' + nextOperator;
  replaceCurrent = true; justEvaluated = false;
}
function equals() {
  if (!operator || stored === null || current === 'Error') return;
  const a = stored, b = Number.parseFloat(current), op = operator;
  const result = calculate(a, op, b);
  const formatted = result === null ? null : format(result);
  if (formatted === null) { showError(result === null ? 'Cannot divide by zero.' : 'Result is outside the supported range.'); return; }
  expression.textContent = a + ' ' + op + ' ' + b + ' =';
  current = formatted; stored = null; operator = null; replaceCurrent = true; justEvaluated = true; status.textContent = 'Calculated successfully.'; render();
}
function backspace() {
  if (current === 'Error' || replaceCurrent || justEvaluated) { current = '0'; replaceCurrent = false; justEvaluated = false; }
  else current = current.length > 1 ? current.slice(0, -1) : '0';
  render();
}
function handleAction(action) {
  if (action === 'clear') reset();
  if (action === 'backspace') backspace();
  if (action === 'decimal') decimal();
  if (action === 'equals') equals();
}
keys.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.number !== undefined) enterDigit(button.dataset.number);
  else if (button.dataset.operator) chooseOperator(button.dataset.operator);
  else if (button.dataset.action) handleAction(button.dataset.action);
});
document.addEventListener('keydown', event => {
  if (/^[0-9]$/.test(event.key)) enterDigit(event.key);
  else if (event.key === '.') decimal();
  else if (['+', '-', '*', '/'].includes(event.key)) chooseOperator(event.key);
  else if (event.key === 'Enter' || event.key === '=') { event.preventDefault(); equals(); }
  else if (event.key === 'Backspace') backspace();
  else if (event.key === 'Escape') reset();
});
render();