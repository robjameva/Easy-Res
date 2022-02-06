async function handleSubmitReservation(event) {
    event.preventDefault();
    const timeSlotBtnEL = event.target

    const party_size = document.getElementById('party_size').value;
    const time_slot = timeSlotBtnEL.getAttribute('id').split('_')[1]
    const restaurant_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const response = await fetch(`/api/reservation`, {
        method: 'POST',
        body: JSON.stringify({
            party_size,
            time_slot,
            restaurant_id
            // user_id sent on route using session 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/restaurant/${id}`);
    } else {
        alert(response.statusText);
    }
}

document.getElementById('res-btns').addEventListener('click', handleSubmitReservation);