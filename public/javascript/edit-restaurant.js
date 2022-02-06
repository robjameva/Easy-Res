async function editRestaurantHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[id="business_name_edit"]').value.trim();
    const occupancy = document.querySelector('input[id="business_occupancy_edit"]').value.trim();
    const address = document.querySelector('input[id="business_address_edit"]').value.trim();
    const phone = document.querySelector('input[id="business_phone_edit"]').value.trim();
    const open = document.querySelector('input[id="business_hours_open_edit"]').value.trim();
    const close = document.querySelector('input[id="business_hours_close_edit"]').value.trim();
    const website = document.querySelector('input[id="business_website_edit"]').value.trim();
    const image = document.querySelector('input[id="business_image_edit"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/restaurant/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
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
      document.location.replace('/owner/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit_restaurant_form').addEventListener('submit', editRestaurantHandler);