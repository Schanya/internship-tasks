const domainName = url => url.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\..*/, '');


console.log(domainName("http://google.com"));