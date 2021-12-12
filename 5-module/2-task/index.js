function toggleText() {
  document.addEventListener('click', function() {
    let elem = document.getElementById('text');
    elem.hidden = !elem.hidden;
  });
}
