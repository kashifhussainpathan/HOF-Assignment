// LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.


function validateLinkedInURL(url) {
    const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return urlRegex.test(url);
  }
  
  const url1 = 'https://www.linkedin.com/in/aryan-yadav';
  const url2 = 'https://www.linkedin.com/in/aryan_raj/';
  
  
  if (validateLinkedInURL(url1)) {
    console.log(`${url1} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url1} is not a valid LinkedIn profile URL.`);
  }
  if (validateLinkedInURL(url2)) {
    console.log(`${url2} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url2} is not a valid LinkedIn profile URL.`);
  }
  