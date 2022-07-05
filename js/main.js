const userName = document.getElementById('name').value;

let kilometers = document.getElementById('kilometers').value;

let ticketPrice = kilometers * 0.21;

let ageRange = document.getElementById('age').value;

let minorDiscount = ((ticketPrice * 20) / 100);
let over65Discount = ((ticketPrice * 40) / 100);

let minorPrice = ticketPrice - minorDiscount;
let over65Price = ticketPrice - over65Discount;


//funzione per il print dei valori
let submit = document.getElementById('button');
        submit.addEventListener('click',
            function() {
                document.getElementById('showName').innerHTML = userName;
                document.getElementById('showKm').innerHTML = kilometers;
                document.getElementById('showAge').innerHTML = ageRange;
                document.getElementById('showPrice').innerHTML = ('il prezzo del tuo biglietto è di ' + ticketPrice + ' &euro;');
                    if (ageRange == 'minorenne') {
                        document.getElementById('showPrice').innerHTML = ('il prezzo del tuo biglietto è di ' + minorPrice + ' &euro;');
                    } else if (ageRange == 'over65') {
                        document.getElementById('showPrice').innerHTML = ('il prezzo del tuo biglietto è di ' + over65Price + ' &euro;');
                    } else {
                        alert('seleziona la tua età');
                    }
            })

