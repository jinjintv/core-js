const memoFibo = (n) => {
  if (n <= 0) return 0;
  if (n <= 2) return 1;

  if (memoFibo.cache[n]) {
    return memoFibo.cache[n];
  } else {
    return (memoFibo.cache[n] = memoFibo(n - 1) + memoFibo(n - 2));
  }
};

memoFibo.cache = {};

const calculateFibonacci = () => {
  const inputNumber = document.getElementById('inputNumber').value;
  const resultElement = document.getElementById('result');

  const number = parseInt(inputNumber, 10);

  if (isNaN(number) || number < 0) {
    resultElement.textContent = 'Please enter a valid non-negative integer.';
    return;
  }

  const fiboResult = memoFibo(number);
  resultElement.textContent = `Fibonacci of ${number} is ${fiboResult}`;
};
