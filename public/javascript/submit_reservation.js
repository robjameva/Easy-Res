async function handleSubmitReservation(event) {
    event.preventDefault();
    const timeSlotBtnEL = event.target


    const party_size = document.getElementById('party_size').value;
    const time_slot = timeSlotBtnEL.getAttribute('id').split('_')[1]
    const user_id = 1
    const restaurant_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    console.log(party_size)
    console.log(time_slot)

    const response = await fetch(`/api/reservation`, {
        method: 'POST',
        body: JSON.stringify({
            party_size,
            user_id,
            time_slot,
            restaurant_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        // document.location.replace('/dashboard');
        console.log('You Reserved a slot!!!')
    } else {
        alert(response.statusText);
    }
}

document.getElementById('res-btns').addEventListener('click', handleSubmitReservation);