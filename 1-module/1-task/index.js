function factorial(n) {
  if (n == 0){
    res = 1;
  }
  else{
    res = n;
    for(i = n-1; i > 1; i--){
      res *= i;
    }
  }
  return res;
}
