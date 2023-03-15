// URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

    const urlRegex =/^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)+$/;
    ;
    const url1 = 'https://www.example.com';
    const url2 = 'http://example.com/path';
    
    if (urlRegex.test(url1)) {
      console.log(`${url1} is a valid URL.`);
    } else {
      console.log(`${url1} is not a valid URL.`);
    }
    if (urlRegex.test(url2)) {
      console.log(`${url2} is a valid URL.`);
    } else {
      console.log(`${url2} is not a valid URL.`);
    }