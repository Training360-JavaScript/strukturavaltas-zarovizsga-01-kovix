/* Megkeres az oldalon minden quote osztályhoz tartozó elemet, és három stílust állít be rájuk JavaScript segítségével:
a körvonaluk legyen kék,
a hátterük világoskék
és az általuk használt betűtípus dőlt. */
function manipulateDom() {
    const quotes = Array.from(document.querySelectorAll('.quote'));
    quotes.forEach(quote => {
        quote.style.borderColor = 'blue';
        quote.style.backgroundColor = 'lightblue';
        quote.style.fontStyle = 'italic';
    });

};

export { manipulateDom };