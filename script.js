const toggleSwitch = document.getElementById('toggle');

toggleSwitch.addEventListener('change', function() {
  if (this.checked){
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'black';
  } 
});

