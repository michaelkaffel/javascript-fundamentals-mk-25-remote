const regTicketCost = 20;
const discTicketCost = 10;
const discount = 3;

function getBaseTicketCost(age) {
    let fullPrice;
    if ((age < 13) || (age > 64)) {
        fullPrice = false;
    } else {
        fullPrice = true;
    }
    return fullPrice
}

 //     alert('Your ticket price is $' + discTicketCost + ".");
    // } else {
    //     alert('Your ticket price is $' + regTicketCost + ".");

function buyTicket() {
    const age = prompt('What is your age?');
    getBaseTicketCost(age);
    let matinee = prompt('Are you attending a matinee? (Respond "yes" or "no"');
    if ((matinee === 'yes') && !((age < 13) || (age > 64))) {
        alert('The cost of your ticket is $' + (regTicketCost - discount));

    } else if ((matinee === 'no') && !((age < 13) || (age > 64))) {
         alert('The cost of your ticket is $' + regTicketCost);

    } else if ((matinee === 'yes') && ((age < 13) || (age > 64))) {
        alert('The cost of your ticket is $' + (discTicketCost - discount));

    } else if ((matinee === 'no') && ((age < 13) || (age > 64))) {
        alert('The cost of your ticket is $' + discTicketCost);

    } else {
        alert('We could not calculate your ticket price. Please reload and try again')
    }
    
}