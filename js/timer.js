let clientsNumbers = setInterval ("numbersClients()", 1);
let clients = 120;

function numbersClients () {
    if (document.body.scrollTop > 1150 || document.documentElement.scrollTop > 1150)
    {
        clients ++;
        document.getElementById('clientsNumber').innerHTML = clients;
        if (clients == 580)
        clearInterval (clientsNumbers);
    }}

let clientsWins = setInterval ("clientWins()", 1);
let wins = 80;

function clientWins () {
    if (document.body.scrollTop > 1150 || document.documentElement.scrollTop > 1150)
    {
        wins ++;
        document.getElementById('clientsWin').innerHTML = wins;
        if (wins == 540)
        clearInterval (clientsWins);
    }}

let clientsMoney = setInterval ("clientMoney()", 1);
let moneyBig = 0;
let moneySmall = 421;
let HTML = "0";

function clientMoney () {
    if (document.body.scrollTop > 1150 || document.documentElement.scrollTop > 1150)
    {
        moneyBig ++;
        moneySmall ++;
        HTML = `${moneyBig}.${moneySmall} €`

        document.getElementById('clientsMoney').innerHTML = HTML;
        if (moneyBig == 279) {
            clearInterval (clientsMoney)
}}}