/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area= function (n1, n2)
{ 
    const area= n1 *= n2 /= 2
    
    return area
}

console.log("l'area del triangolo è", area(11,12) )
area()



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2)
{
    const crazySum = (n1, n2)
    if ( n1 === 0) { console.log (crazySum = n1 += n2 *= 3)}
    else if ( n2 === 0) { console.log (crazySum = n1 += n2 *= 3)}
    else {console.log( n1 += n2)} 

    return crazySum
}

console.log(crazySum(4, 2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1, n2)
{
    const crazyDiff = n1 -= n2

    if ( n1 > 19) { console.log ( n1 -= n2 *= 3)}

    return crazyDiff
}

console.log(crazyDiff(22, 19))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n)

{
    const boundary = (n)
    if ( 20 <= n <= 100) {console.log(true)}
    else if ( n === 400 ) {console.log( boundary, true)}
     else if ( n !== 400)  {console.log(false)}
    return boundary
}

console.log (boundary(Math.random()))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function( x )
{ 
    const epify= "lavora nel tech"
   
    return epify
}
 
console.log("EPICODE," + epify(" lavora nel tech"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n3)

{
const check3and7 = n3

if (n3 % 3 === 0 || n3 % 7 === 0 ) {console.log("n3 allora è", check3and7)}
else if ( n3 > 0) {console.log( check3and7,"accetta un parametro positivo")}
return check3and7
}

console.log(check3and7(21))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (n)
{
    const cutString= "epicode"

    //  const azz= cutString.slice(2,7)

    return cutString
   

}
 console.log(cutString)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
