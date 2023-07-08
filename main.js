var myHeaders = new Headers();
myHeaders.append("x-api-key", "ogCUESFbsYDx8n39");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.shyft.to/sol/v1/token/get_info?network=devnet&token_address=ESsJWTPyELmA72XgcpdCYe4d4YwLX5gxpoLTu3J7qLhP", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));