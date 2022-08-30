/** Big O => O(2^n) very BAD */
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/** Improve by memoization, Big I => O(N) */
function memo_fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  console.log(res);
  return res;
}

/** tabulation(상향식 접근)  O(n)*/
function tab_fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  console.log(fibNums[n]);
  return fibNums[n];
}

tab_fib(10);
