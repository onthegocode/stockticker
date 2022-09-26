const trackers = document.querySelector('.tracker');
const perday = document.querySelector('.perday');
const input = document.querySelector('.input');
function doSomething(tracker){
  console.log(tracker);
  trackers.textContent = `${tracker.data.currentPrice ? 'Stock Price: '+'$' + tracker.data.currentPrice : ''}`;
  perday.textContent = `${tracker.data.currentPrice ? 'Market Cap: '+ '$' + tracker.data.marketCap.toLocaleString() : ''}`;
 }

const stockFunc = () => {
  setTimeout(()=> {
    const encodedParams = new URLSearchParams();
encodedParams.append("symbol", input.value.toLowerCase());

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '9d4b38764bmsh10e50229dd1e447p136041jsnd90c2aebb38c',
		'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://yahoo-finance97.p.rapidapi.com/stock-info', options)
	.then(response => response.json())
	.then(response => doSomething(response))
	.catch(err => console.error(err));
  }, 1000)
  
}

input.addEventListener('input', stockFunc);
