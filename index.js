// hamburger menu
function myFunction() {
    var x = document.getElementById("visible");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  // Hide and show div
  let cuisines = document.getElementById('cuisines');
  let event1 = document.getElementById('event');
  let gears = document.getElementById('gears');
  let sites = document.getElementById('site');

const items = [cuisines, event1, gears, sites];
for(let content of items){
  if(content == sites){
    content.style.display = 'flex';
  }
  else{
    content.style.display = 'none';
  }
}

//butons for call
let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let bt4 = document.getElementById('bt4');

bt1.addEventListener('click', function(){
  event1.style.display = 'none';
  gears.style.display = 'none';
  sites.style.display = 'none';
  cuisines.style.display ='flex';
})
bt2.addEventListener('click', function(){
  event1.style.display = 'none';
  gears.style.display = 'none';
  sites.style.display = 'flex';
  cuisines.style.display ='none';
})
bt3.addEventListener('click', function(){
  event1.style.display = 'flex';
  gears.style.display = 'none';
  sites.style.display = 'none';
  cuisines.style.display ='none';
})
bt4.addEventListener('click', function(){
  event1.style.display = 'none';
  gears.style.display = 'flex';
  sites.style.display = 'none';
  cuisines.style.display ='none';
})


