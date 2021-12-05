function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof(salaries[key]) == "number" && salaries[key] != NaN && isFinite(salaries[key])){
      sum += salaries[key];
    }
  }
  return sum;
}
