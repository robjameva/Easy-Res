async function userLoginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/user-dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }

async function restaurantLoginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/restaurant/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/restaurant-dashboard/');
      } else {
        alert(response.statusText);
      }
    }
}

async function userSignupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/user-dashboard/');
      } else {
        alert(response.statusText);
      }
    }
}

async function restaurantSignupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#restaurant-signup').value.trim();
    const email = document.querySelector('#restaurant-email-signup').value.trim();
    const password = document.querySelector('#restaurant-password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/restaurant', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/restaurant-dashboard/');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.user-login-form').addEventListener('submit', userLoginFormHandler);
document.querySelector('.restaurant-login-form').addEventListener('submit', restaurantLoginFormHandler);
document.querySelector('.user-signup-form').addEventListener('submit', userSignupFormHandler);
document.querySelector('.restaurant-signup-form').addEventListener('submit', restaurantSignupFormHandler);