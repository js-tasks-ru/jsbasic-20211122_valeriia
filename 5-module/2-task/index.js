function toggleText() {
  const btn = document.querySelector('.toggle-text-button'); 
  const toggleText = document.querySelector('#text');
  btn.addEventListener('click', () => toggleText.hidden = !toggleText.hidden, false);
}
