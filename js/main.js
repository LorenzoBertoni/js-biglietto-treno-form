const userName = document.getElementById('name').value;

let kilometers = document.getElementById('kilometers').value;

let ticketPrice = kilometers * 0.21;

let ageRange = document.getElementById('age').value;

//variabili sconto
let minorDiscount = ((ticketPrice * 20) / 100);
let over65Discount = ((ticketPrice * 40) / 100);

//variabili prezzo scontato
let minorPrice = ticketPrice - minorDiscount;
let over65Price = ticketPrice - over65Discount;

//variabli per numeri random
let carriageNumber = Math.floor(Math.random() * 10) + 1;
let cpNumber = Math.floor(Math.random() * 10000) + 90000;

let showTicket = document.querySelector('.ticket');

//funzione per il print dei valori
let submit = document.getElementById('button');
        submit.addEventListener('click',
            function() {
                showTicket.classList.add('d-block');

                document.getElementById('showName').innerHTML = userName;

                document.getElementById('showOffer').innerHTML = 'Biglietto Standard';
                    if(ageRange == 'minorenne' || ageRange == 'over65'){
                        document.getElementById('showOffer').innerHTML = 'Biglietto Ridotto';
                    }

                document.getElementById('showCarriage').innerHTML = carriageNumber;   

                document.getElementById('showCode').innerHTML = cpNumber;

                document.getElementById('showPrice').innerHTML = (ticketPrice.toFixed(2) + ' &euro;');
                    if (ageRange == 'minorenne') {
                        document.getElementById('showPrice').innerHTML = (minorPrice.toFixed(2) + ' &euro;');
                    } else if (ageRange == 'over65') {
                        document.getElementById('showPrice').innerHTML = (over65Price.toFixed(2) + ' &euro;');
                    } else {
                        alert('seleziona la tua età');
                    }
            })

