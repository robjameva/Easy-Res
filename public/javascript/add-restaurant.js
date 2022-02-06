async function newRestaurantHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[id="business_name_signup"]').value;
    const email = document.querySelector('input[id="business_email_signup"]').value.trim();
    const password = document.querySelector('input[id="business_password_signup"]').value.trim();
    const occupancy = document.querySelector('input[id="business_occupancy_signup"]').value.trim();
    const address = document.querySelector('input[id="business_address_signup"]').value.trim();
    const phone = document.querySelector('input[id="business_phone_signup"]').value.trim();
    const open = document.querySelector('input[id="business_hours_open_signup"]').value.trim();
    const close = document.querySelector('input[id="business_hours_close_signup"]').value.trim();
    const website = document.querySelector('input[id="business_website_signup"]').value.trim();
    const image = document.querySelector('input[id="business_image_signup"]').value.trim();
  
    const response = await fetch(`/api/restaurant`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        occupancy,
        address,
        phone,
        open,
        close,
        website,
        image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/owner');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.restaurant-signup-form').addEventListener('submit', newRestaurantHandler);