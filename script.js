document.addEventListener('DOMContentLoaded', function () {
  // ✅ Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // ✅ Function to set a cookie with an expiration time
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  // ✅ 1. Check if the 'count' cookie exists
  let count = parseInt(getCookie('count')) || 0;  // Get current value or initialize to 0

  // ✅ 2. Increment the value
  count++;

  // ✅ 3. Update the cookie with the new value
  setCookie('count', count, 7);  // Cookie lasts for 7 days

  // ✅ 4. Display the count on the webpage
  let counterElement = document.createElement('h1');
  counterElement.textContent = `Page Views: ${count}`;
  document.body.appendChild(counterElement);
});
