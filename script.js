const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// Save selected movie index and price 
function setMovieData(movieIndex, moviePrice) {

    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// Update count and total
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    const selectedIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('seatIndex', JSON.stringify(selectedIndex));


    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

// Movie change event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', e => {
    let clicked = e.target;

    if (clicked.classList.contains('seat') && !clicked.classList.contains('occupied')) {
        console.log(clicked);
        clicked.classList.toggle('selected');
        updateSelectedCount();
    }
})