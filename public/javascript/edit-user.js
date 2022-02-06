async function editUserHandler(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('input[id="first_name_edit"]').value.trim();
    const lastName = document.querySelector('input[id="last_name_edit"]').value.trim();
    const username = document.querySelector('input[id="username_edit"]').value.trim();
    const email = document.querySelector('input[id="email_edit"]').value.trim();
    const password = document.querySelector('input[id="password_edit"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit_user_form').addEventListener('submit', editUserHandler);