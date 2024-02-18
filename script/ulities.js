document.getElementById('buy-ticket').addEventListener('click', function () {
    const seatBooking = document.getElementById('seat-booking');
    seatBooking.scrollIntoView({ behavior: 'smooth' });
})


document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll('[id^="A"], [id^="B"], [id^="C"], [id^="D"], [id^="E"], [id^="F"], [id^="G"], [id^="H"], [id^="I"], [id^="J"]');

    const totalSeatElement = document.getElementById("total-seat");
    const bookedSeatElement = document.getElementById('bookedSeat');
    const totalPriceElement = document.getElementById('total-price');

    const ticketPriceElement = document.getElementById('ticketPrice');

    let bookedSeat = 0;
    let totalSeats = elements.length;
    let totalPrice = 0;

    totalSeatElement.innerText = totalSeats;
    bookedSeatElement.innerText = bookedSeat;

    for (let element of elements) {
        element.addEventListener("click", function () {
            element.style.backgroundColor = "green";
            bookedSeat++;
            totalSeats--;
            totalSeatElement.innerText = totalSeats;
            bookedSeatElement.innerText = bookedSeat;
            
            // Update total price
            totalPrice += parseFloat(ticketPriceElement.innerText);
            totalPriceElement.innerText = totalPrice.toFixed(2);

            const seatInfo = document.createElement("div");
            seatInfo.innerHTML = `<div class="flex justify-between items-center p-2">
                <h2 class="text-xl font-raleWay">${element.id}</h2>
                <h2 class="text-xl font-raleWay">Economy</h2>
                <h2 class="text-xl font-raleWay">${ticketPriceElement.innerText}</h2>          
            </div> `;

            const seatInfoElement = document.getElementById("seat-info");
            seatInfoElement.appendChild(seatInfo);
        });
    }
});












// document.addEventListener("DOMContentLoaded", function () {
//     for (let letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
//         for (let number of [1, 2, 3, 4]) {
//             let id = letter + number;
//             let element = document.getElementById(id);
//             let total = 8;
//             if (element && total !== 0) {
//                 element.addEventListener("click", function () {

//                     element.style.backgroundColor = "#1DD100";

//                     const totalSeat = document.getElementById('total-seat');
//                     for (let i = 8; i < totalSeat; i--) {
//                         totalSeat.innerText = i;
//                     }

//                 });
//             }
//         }
//     }
// });