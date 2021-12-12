function highlight(table) {
  let rows = table.rows
  for (i = 1; i < rows.length; i++){
    if (rows[i].cells[3].dataset.available == 'true') {
      rows[i].classList.add('available');
    } else if (rows[i].cells[3].dataset.available == 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].hidden = true;
    }
    if (rows[i].cells[2].textContent == 'm') {
      rows[i].classList.add('male');
    } else {
      rows[i].classList.add('female');
    }

    if (rows[i].cells[1].textContent < 18) {
      rows[i].setAttribute('style', 'text-decoration: line-through');
    }
  }
}
