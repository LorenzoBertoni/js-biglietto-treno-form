const userName = document.getElementById('name').value;

let kilometers = document.getElementById('kilometers').value;

let ticketPrice = kilometers * 0.21;

let ageRange = document.getElementById('age').value;

let minorDiscount = ((ticketPrice * 20) / 100);
let over65Discount = ((ticketPrice * 40) / 100);

let minorPrice = ticketPrice - minorDiscount;
let over65Price = ticketPrice - over65Discount;

let carriageNumber = Math.floor(Math.random() * 11);
let cpNumber = Math.floor(Math.random() * 10000) + 90000;



//funzione per il print dei valori
let submit = document.getElementById('button');
        submit.addEventListener('click',
            function() {
                document.getElementById('showName').innerHTML = userName;

                document.getElementById('showOffer').innerHTML = 'Biglietto Standard';
                    if(ageRange == 'minorenne' || ageRange == 'over65'){
                        document.getElementById('showOffer').innerHTML = 'Biglietto Ridotto';
                    }

                document.getElementById('showCarriage').innerHTML = carriageNumber;   

                document.getElementById('showCode').innerHTML = cpNumber;

                document.getElementById('showPrice').innerHTML = (ticketPrice + ' &euro;');
                    if (ageRange == 'minorenne') {
                        document.getElementById('showPrice').innerHTML = (minorPrice + ' &euro;');
                    } else if (ageRange == 'over65') {
                        document.getElementById('showPrice').innerHTML = (over65Price + ' &euro;');
                    } else {
                        alert('seleziona la tua età');
                    }
            })

