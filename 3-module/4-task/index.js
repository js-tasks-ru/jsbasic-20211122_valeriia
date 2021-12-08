function showSalary(users, age) {
  let arr = users.filter(item => item.age <= age)
  return arr
  .map(item => ((item != arr[arr.length - 1]) ? (item.name + ', ' + item.balance + '\n') : (item.name + ', ' + item.balance)))
  .join('');
}
