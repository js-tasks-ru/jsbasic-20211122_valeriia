function namify(users) {
  let array = [];
  for (i = 0; i < users.length; i++) {
    array.push(users[i].name);
  }
  return array;
}
