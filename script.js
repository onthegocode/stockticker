const trackers = document.querySelector('.tracker');
const perday = document.querySelector('.perday');
const input = document.querySelector('.input');
function doSomething(tracker){
  console.log(tracker);
  trackers.textContent = `${tracker.price ? 'Stock Price: '+'$' + tracker.price : ''}`;
  let digits;
  if(tracker.total_vol.includes('K')) digits = 1_000;
  else if (tracker.total_vol.includes('M')) digits = 1_000_000;
  else if (tracker.total_vol.includes('B')) digits = 1_000_000_000;
  perday.textContent = `${tracker.price ? 'Traded Today: '+ '$' + ((Number.parseFloat(tracker.total_vol)*digits) * tracker.price).toLocaleString() : ''}`;
 }
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d4b38764bmsh10e50229dd1e447p136041jsnd90c2aebb38c',
		'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
	}
};
const stockFunc = function() {
  setTimeout(() => {
  if(!input.value) return;
  const stonk =  fetch(`https://realstonks.p.rapidapi.com/${input.value.toUpperCase()}`, options)
	.then(response => response.json())
	.then(response => doSomething(response))
	.catch(err => console.error(err)); 
  }, 1000);
 
}
input.addEventListener('input', stockFunc);



