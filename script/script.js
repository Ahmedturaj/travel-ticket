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
            element.style.backgroundColor = "#1DD100";
            bookedSeat++;
            totalSeats--;
            totalSeatElement.innerText = totalSeats;
            bookedSeatElement.innerText = bookedSeat;

            // Update total price
            totalPrice += parseFloat(ticketPriceElement.innerText);
            totalPriceElement.innerText = totalPrice.toFixed(2);

            const seatInfo = document.createElement("div");
            seatInfo.innerHTML = `<div class="flex justify-between items-center p-2">
                <h2 class="text-xl font-inter">${element.id}</h2>
                <h2 class="text-xl font-inter">Economy</h2>
                <h2 class="text-xl font-inter">${ticketPriceElement.innerText}</h2>          
            </div> `;

            const seatInfoElement = document.getElementById("seat-info");
            seatInfoElement.appendChild(seatInfo);
        });
    }
});


document.getElementById('btn-apply').addEventListener('click', function () {
    const coupon1Element = document.getElementById('coupon-1');
    const coupon1 = coupon1Element.innerText;
    const coupon2Element = document.getElementById('coupon-2');
    const coupon2 = coupon2Element.innerText;
    const couponInputElement = document.getElementById('coupon-input');
    const couponInput = couponInputElement.value;
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceElement.innerText);
    if (couponInput === coupon1 || couponInput === coupon2) {
        if (couponInput === coupon1 && !isNaN(totalPrice)) {
            const discountPercentage = 15;
            const discountAmount = (totalPrice * discountPercentage) / 100;
            const discountedPrice = totalPrice - discountAmount;
            const discountBDTElement = document.getElementById('discount-price');
             discountBDTElement.innerText =discountAmount
            document.getElementById('discount').classList.remove('hidden');
            const grandTotalElement = document.getElementById('grand-total');
            grandTotalElement.innerText= discountedPrice;
        }else if(couponInput === coupon2 && !isNaN(totalPrice)){
            const discountPercentage = 20;
            const discountAmount = (totalPrice * discountPercentage) / 100;
            const discountedPrice = totalPrice - discountAmount;
            const discountBDTElement = document.getElementById('discount-price');
             discountBDTElement.innerText =discountAmount
            document.getElementById('discount').classList.remove('hidden');
            const grandTotalElement = document.getElementById('grand-total');
            grandTotalElement.innerText= discountedPrice;
        }else{
            alert('Please Select Your Seat First');
            couponInputElement.value = '';
        }
        const couponInputContainer = document.getElementById('coupon-input-container');
        couponInputContainer.classList.add('hidden');
    } else {
        alert('Your Coupon code is not valid.')
        couponInputElement.value = '';
    }

});