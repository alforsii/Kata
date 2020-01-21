// Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url) {
  //your code here
  return url.includes('www')
    ? url.split('www.')[1].split('.')[0]
    : url.split('//')[1].split('.')[0];
}

domainName('http://github.com/carbonfive/raygun'); // == "github"
console.log(domainName('http://github.com/carbonfive/raygun'));
domainName('http://www.zombie-bites.com'); // == "zombie-bites"
console.log(domainName('http://www.zombie-bites.com'));
domainName('https://www.cnet.com'); // == "cnet"
console.log(domainName('https://www.cnet.com'));

// (domainName("http://google.com")//, "google");
console.log(domainName('http://google.com'));
// (domainName("http://google.co.jp")//, "google");
console.log(domainName('http://google.co.jp'));
// (domainName("www.xakep.ru") //, "xakep");
console.log(domainName('www.xakep.ru'));
// (domainName("https://youtube.com") //, "youtube");
console.log(domainName('https://youtube.com'));
