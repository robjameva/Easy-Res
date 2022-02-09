
async function handleSubmitReservation(event) {
    event.preventDefault();
    const timeSlotBtnEL = event.target

    const party_size = document.getElementById('party_size').value;
    const time_slot = timeSlotBtnEL.getAttribute('id').split('_')[1]
    const reservation_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const response = await fetch(`/api/reservation/${reservation_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            party_size,
            time_slot,
            reservation_id
            // user_id sent on route using session 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('confirmed')
    } else {
        alert(response.statusText);
    }
}


async function handleClose(event) {
    event.preventDefault();
    document.location.replace(`/restaurant/${id}`);
}

async function handleMainMenu(event) {
    event.preventDefault();
    document.location.replace('/');
}

document.getElementById('res-btns').addEventListener('click', handleSubmitReservation);
document.getElementById('close').addEventListener('click', handleClose);
document.getElementById('main-menu').addEventListener('click', handleMainMenu);









