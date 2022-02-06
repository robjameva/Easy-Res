const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
]

fetch(`/api/reservation/reserved/${id}`)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(timeSlots) {
                timeSlots.forEach(slot => {
                    let id = slot.time_slot
                    if (slot.total_occupancy >= slot.restaurant.occupancy) {
                        let slotAtCapacity = document.getElementById(`hour_${id}`)
                        slotAtCapacity.classList = 'visually-hidden'
                    }
                });
            })
        }
    })
