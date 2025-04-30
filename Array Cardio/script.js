const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];
const people = ['Back, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Bellow, Saul', 'Benchley, Robert', 'Benson, Leana', 'Bennington, Chester', 'Bergman, Ingmar', 'Bianchi, Lucio', 'Bierce, Ambrose', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Henry', 'Blackwood, Algernon', 'Blake, William', 'Blume, Judy', 'Blyton, Enid', 'Blythe, John', 'Bohr, Niels', 'Bradbury, Ray', 'Brady, James', 'Brando, Marlon', 'Brassens, Georges', 'Brautigan, Richard', 'Breton, Andre', 'Browning, Elizabeth Barrett', 'Bryant, William Cullen', 'Burroughs, Edgar Rice', 'Burroughs, William S.', 'Byron, George Gordon Lord'];

// Array.prototype.filter()
// 1. filter the list of inventors for those who were born in the 1500

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log(fifteen);
// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. sort the inventors by birthdate, oldest to youngest
// 
const sorted = inventors.sort((a, b) => a.year - b.year) ? 1 : -1;
console.table(sorted);
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);


// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//               .map(link => link.textContent)
//               .filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// sum the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1 ;
});
console.log(alpha);
// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car','ar','truck','truck','bike','walk','car','van','bike','walk','car', 'van','car', 'truck','pogostick'];

const transportation = date.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);