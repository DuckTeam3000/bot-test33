import * as https from 'https';
import { ClientRequest } from 'http';

console.log("Hello, World!");

https.get('https://www.google.com', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.setEncoding('utf8'); // Set explicit response encoding
  let data: Buffer[] = []; // Use Buffer array to collect chunks

  res.on('data', (chunk) => {
    data.push(chunk);
  });

  res.on('end', () => {
    const responseBody = Buffer.concat(data).toString();
    console.log('Response body length:', responseBody.length);
    // console.log(responseBody); // Uncomment this line if you want to see the full HTML response
  });

}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
}).setTimeout(5000, function(this: ClientRequest) { // Set a 5-second timeout and specify 'this' type
  this.destroy(new Error('Request timed out after 5 seconds'));
});

// Note: The request to Google is currently for testing purposes. Consider replacing it
// with a purposeful URL relevant to the application or removing it if no longer needed. 