const stockTrack = document.querySelector('.tracker');
const cap = document.querySelector('.perday');
const input = document.querySelector('.input');
const tracker = function (stock){
  stockTrack.textContent = `${stock.data.currentPrice ? 'Stock Price: '+'$' + stock.data.currentPrice : ''}`;
  cap.textContent = `${stock.data.currentPrice ? 'Market Cap: '+ '$' + stock.data.marketCap.toLocaleString() : ''}`;
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
	.then(response => tracker(response))
	.catch(err => console.error(err));
  }, 1000)
}
input.addEventListener('input', stockFunc);
