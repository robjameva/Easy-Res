const hours_list = document.getElementById('hours_list');

const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
]


fetch(`api/reservation/reserved/${id}`)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(timeSlots) {
                console.log(timeSlots)
                timeSlots.forEach(slot => {
                    let id = slot.time_slot
                    if (slot.total_occupancy >= slot.restaurant.occupancy) {
                        let slotAtCapacity = document.getElementById(`hour_${id}`)
                        slotAtCapacity.className = 'disabled-link';
                    }
                });
            })
        }
    })





// if (response.ok) {
//     document.location.replace('/user-dashboard/');
// } else {
//     alert(response.statusText);
// }

console.log(hours_list)