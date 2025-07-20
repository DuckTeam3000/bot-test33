import * as https from 'https';

console.log("Hello, World!");

https.get('https://www.google.com', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response body length:', data.length);
    // console.log(data); // Uncomment this line if you want to see the full HTML response
  });

}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
}); 