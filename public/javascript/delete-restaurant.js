async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/restaurant/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/owner/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-restaurant-btn').addEventListener('click', deleteFormHandler);