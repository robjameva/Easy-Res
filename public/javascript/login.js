async function userLoginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email_login').value.trim();
  const password = document.querySelector('#password_login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function userSignupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('#first_name_signup').value.trim();
  const last_name = document.querySelector('#last_name_signup').value.trim();
  const username = document.querySelector('#username_signup').value.trim();
  const email = document.querySelector('#email_signup').value.trim();
  const phone_number = document.querySelector('#phone_number').value.trim().split('-').join('');
  const password = document.querySelector('#password_signup').value.trim();

  console.log(phone_number)

  if (first_name && last_name && username && email && phone_number && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        phone_number,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function restaurantSignupFormHandler(event) {
  event.preventDefault();

  const business_name = document.querySelector('#business_name_signup').value.trim();
  const business_email = document.querySelector('#business_email_signup').value.trim();
  const business_password = document.querySelector('#business_password_signup').value.trim();
  const business_occupancy = document.querySelector('#business_occupancy_signup').value.trim();
  const business_address = document.querySelector('#business_address_signup').value.trim();
  const business_phone = document.querySelector('#business_phone_signup').value.trim();
  const business_hours_open = document.querySelector('#business_hours_open_signup').value.trim();
  const business_hours_close = document.querySelector('#business_hours_close_signup').value.trim();
  const business_website = document.querySelector('#business_website_signup').value.trim();
  const business_image = document.querySelector('#business_image_signup').value.trim();

  if (business_name && business_email && business_password && business_occupancy && business_address && business_phone && business_hours_open && business_hours_close && business_website && business_image) {
    const response = await fetch('/api/restaurant', {
      method: 'POST',
      body: JSON.stringify({
        business_name,
        business_email,
        business_password,
        business_occupancy,
        business_address,
        business_phone,
        business_hours_open,
        business_hours_close,
        business_website,
        business_image
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.user_login_form').addEventListener('submit', userLoginFormHandler);
document.querySelector('.user_signup_form').addEventListener('submit', userSignupFormHandler);
// document.querySelector('.restaurant_signup_form').addEventListener('submit', restaurantSignupFormHandler);