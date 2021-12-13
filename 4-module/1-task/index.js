function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  items = '';
  for (let item of friends) {
    items += `<li>${item.firstName} ${item.lastName}</li>`
  }
	newUl.innerHTML = items;
  return newUl;
}
