async function newRestaurantHandler(event) {
  event.preventDefault();

  const occupancy = document.querySelector('input[id="business_occupancy_signup"]').value.trim();
  const business_name = document.querySelector('input[id="business_name_signup"]').value;
  const business_address = document.querySelector('input[id="business_address_signup"]').value.trim();
  const business_phone = document.querySelector('input[id="business_phone_signup"]').value.trim();
  const business_hours_open = document.querySelector('input[id="business_hours_open_signup"]').value.trim();
  const business_hours_close = document.querySelector('input[id="business_hours_close_signup"]').value.trim();
  const business_website = document.querySelector('input[id="business_website_signup"]').value.trim();
  const business_image = document.querySelector('input[id="business_image_signup"]').value.trim();

  const response = await fetch(`/api/restaurant`, {
    method: 'POST',
    body: JSON.stringify(
      {
        occupancy,
        business_name,
        business_address,
        business_phone,
        business_hours_open,
        business_hours_close,
        business_website,
        business_image
      }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/owner/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.restaurant-signup-form').addEventListener('submit', newRestaurantHandler);