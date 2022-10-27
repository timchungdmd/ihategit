function Destination(
  name,
  price,
  climate,
  density,
  code,
  fileextension = 'jpg',
  location = undefined
) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.src = `img/${name}-${price}-${climate}-${density}-${location}.${fileextension}`; //img link */
  this.code = code;
}
//test location array//

let niagarafalls = new Destination(
  'Niagara Falls',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg'
);
let yellowstone = new Destination(
  'Yellowstone National Park',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg'
);
let niagara = new Destination(
  'Niagara Falls',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg'
);
let rockefeller = new Destination(
  'Rockefeller',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg'
);
let aspen = new Destination('Aspen', 'highprice', 'cold', 'highdensity','bbb' ,'jpg');
let stmortiz = new Destination(
  'St. Mortiz',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg'
);
let kirkenes = new Destination(
  'Kirkenes',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg'
);
let solitudemountain = new Destination(
  'Solitude Mountain',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg'
);

let grandcanyon = new Destination(
  'Grand Canyon',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg'
);
let deathvalley = new Destination(
  'Death Valley',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg'
);
let lasvegas = new Destination(
  'Las Vegas',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg'
);
let sanantonio = new Destination(
  'San Antonio',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg'
);
let hoggarmountains = new Destination(
  'Hoggar Mountains',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpg'
);
let pyramids = new Destination(
  'Pyramids',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);
let dubai = new Destination(
  'Dubai',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);
let expensivevegas = new Destination(
  'Las Vegas',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);

let kepuhibeach = new Destination(
  'Kepuhi Beach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg'
);
let montanadeoro = new Destination(
  'Montanadeoro',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg'
);
let panamacitybeach = new Destination(
  'Panama City Beach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'png'
);
let myrtlebeach = new Destination(
  'Myrtle Beach',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpeg'

);
let miami = new Destination(
  'Miami',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpeg'
);
let galapagos = new Destination(
  'Galapagos',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);
let parrotbay = new Destination(
  'Parrot Bay',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg'
);
let cocoprive = new Destination(
  'Coco Prive',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg'
);
// let scottsdale = new Destination('scottsdale', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
// let palmsprings = new Destination('palmsprings', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
// let sedona = new Destination('sedona', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
// let mojavedesert = new Destination('mojavedesert', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
// let picturedrocksnational = new Destination('picturedrocksnational', 'mediumprice', 'cold', 'lowdensity', 'jpg');
// let leavenworth = new Destination('leavenworth', 'mediumprice', 'cold', 'highdensity', 'jpg');
// let asheville = new Destination('asheville', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
// let bigsky = new Destination('bigsky', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
// let grandcayman = new Destination('grandcayman', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let hiltonhead = new Destination('hiltonhead', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let orlando = new Destination('orlando', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let santacruz = new Destination('santacruz', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let pensacola = new Destination('pensacola', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let hohrainforest = new Destination('hohrainforest', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let myrtletropical = new Destination('myrtletropical', 'lowprice', 'warm', 'highdensity','jpg', 'tropical');
// let southpadretropical = new Destination('southpadretropical', 'lowprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let lizardisland = new Destination('lizardisland', 'highprice', 'warm', 'lowdensity', 'jpeg', 'tropical');
// let laucalaisland = new Destination('laucalaisland', 'highprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let kauaihawaii = new Destination('kauaihawaii', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let cookislands = new Destination('cookislands', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let negriljamaica = new Destination('negriljamaica', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
// let rivieramaya = new Destination('rivieramaya', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
// let keywest = new Destination('keywest', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');
// let tybeebeach = new Destination('tybeebeach', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');

let locations = [
  yellowstone,
  niagarafalls,
  niagara,
  rockefeller,
  aspen,
  stmortiz,
  grandcanyon,
  deathvalley,
  lasvegas,
  sanantonio,
  miami,
  galapagos,
  parrotbay,
  cocoprive,
  hoggarmountains,
  pyramids,
  dubai,
  expensivevegas,
  kirkenes,
  solitudemountain,
  kepuhibeach,
  montanadeoro,
  panamacitybeach,
  myrtlebeach,
];

function Destination(
  name,
  price,
  climate,
  density,
  code,
  fileextension = 'jpg',
  location = undefined,
  expedia
) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.src = `img/${name}-${price}-${climate}-${density}-${location}.${fileextension}`; //img link */
  this.code = code;
  this.expedia=expedia;
}
//test location array//

let niagarafalls = new Destination(
  'Niagara Falls',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'http://google.com'
);
let yellowstone = new Destination(
  'Yellowstone National Park',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'http://google.com'
);
let niagara = new Destination(
  'Niagara Falls',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'http://google.com'
);
let rockefeller = new Destination(
  'Rockefeller',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'http://google.com'
);
let aspen = new Destination('Aspen', 'highprice', 'cold', 'highdensity','bbb' ,'jpg','http://google.com');
let stmortiz = new Destination(
  'St. Mortiz',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg',
  'http://google.com'
);
let kirkenes = new Destination(
  'Kirkenes',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'http://google.com'
);
let solitudemountain = new Destination(
  'Solitude Mountain',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'http://google.com'
);

let grandcanyon = new Destination(
  'Grand Canyon',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'http://google.com'
);
let deathvalley = new Destination(
  'Death Valley',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'http://google.com'
);
let lasvegas = new Destination(
  'Las Vegas',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'http://google.com'
);
let sanantonio = new Destination(
  'San Antonio',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'http://google.com'
);
let hoggarmountains = new Destination(
  'Hoggar Mountains',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpg',
  'http://google.com'
);
let pyramids = new Destination(
  'Pyramids',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'http://google.com'
);
let dubai = new Destination(
  'Dubai',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'http://google.com'
);
let expensivevegas = new Destination(
  'Las Vegas',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'http://google.com'
);

let kepuhibeach = new Destination(
  'Kepuhi Beach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'http://google.com'
);
let montanadeoro = new Destination(
  'Montana de Oro',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'http://google.com'
);
let panamacitybeach = new Destination(
  'Panama City Beach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'png',
  'http://google.com'
);
let myrtlebeach = new Destination(
  'Myrtle Beach',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpeg',
  'http://google.com'

);
let miami = new Destination(
  'Miami',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpeg',
  'http://google.com'
);
let galapagos = new Destination(
  'Galapagos',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'http://google.com'
);
let parrotbay = new Destination(
  'Parrot Bay',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'http://google.com'
);
let cocoprive = new Destination(
  'Coco Prive',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'http://google.com'
);
// let scottsdale = new Destination('scottsdale', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
// let palmsprings = new Destination('palmsprings', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
// let sedona = new Destination('sedona', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
// let mojavedesert = new Destination('mojavedesert', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
// let picturedrocksnational = new Destination('picturedrocksnational', 'mediumprice', 'cold', 'lowdensity', 'jpg');
// let leavenworth = new Destination('leavenworth', 'mediumprice', 'cold', 'highdensity', 'jpg');
// let asheville = new Destination('asheville', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
// let bigsky = new Destination('bigsky', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
// let grandcayman = new Destination('grandcayman', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let hiltonhead = new Destination('hiltonhead', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let orlando = new Destination('orlando', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let santacruz = new Destination('santacruz', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let pensacola = new Destination('pensacola', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let hohrainforest = new Destination('hohrainforest', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let myrtletropical = new Destination('myrtletropical', 'lowprice', 'warm', 'highdensity','jpg', 'tropical');
// let southpadretropical = new Destination('southpadretropical', 'lowprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let lizardisland = new Destination('lizardisland', 'highprice', 'warm', 'lowdensity', 'jpeg', 'tropical');
// let laucalaisland = new Destination('laucalaisland', 'highprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let kauaihawaii = new Destination('kauaihawaii', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let cookislands = new Destination('cookislands', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let negriljamaica = new Destination('negriljamaica', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
// let rivieramaya = new Destination('rivieramaya', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
// let keywest = new Destination('keywest', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');
// let tybeebeach = new Destination('tybeebeach', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');

let locations = [
  yellowstone,
  niagarafalls,
  niagara,
  rockefeller,
  aspen,
  stmortiz,
  grandcanyon,
  deathvalley,
  lasvegas,
  sanantonio,
  miami,
  galapagos,
  parrotbay,
  cocoprive,
  hoggarmountains,
  pyramids,
  dubai,
  expensivevegas,
  kirkenes,
  solitudemountain,
  kepuhibeach,
  montanadeoro,
  panamacitybeach,
  myrtlebeach,
];

let locationCode=localStorage.getItem('locationcode');
let userName=localStorage.getItem('name');
let description1 = document.getElementById('description1');
let locationSlist=document.createElement('ul');
let locationpic=document.createElement('ul');
let imgBox=document.getElementById('pic1');
description1.appendChild(locationSlist);
imgBox.appendChild(locationpic);
let greeting=document.getElementById('greeting');

let expediaLink=document.getElementById('expedia1');
let expdiaList=document.createElement('ul');
expediaLink.appendChild(expdiaList);

greeting.innerText=`${localStorage.getItem('name')}, here is the list of places you should visit!`;
answerResult();
function answerResult(){
  for(let i=0; i<locations.length; i++) {
    if(locationCode===locations[i].code){
      console.log(`${userName} matches your preference!`);
      let locationlist=document.createElement('li');
      locationlist.innerText=(`${locations[i].name.toUpperCase()} matches your preference!`);
      locationSlist.appendChild(locationlist);


      let locationimg=document.createElement('li');
      locationimg.innerHTML=`<img src="${locations[i].src}" width=240px height=auto>`;
      locationpic.appendChild(locationimg);

      let expediaSrc=document.createElement('li');
      expediaSrc.innerHTML=`<a href=${locations[i].expedia}> ${locations[i].name}</a>`;
      expediaLink.appendChild(expediaSrc);
    }
  }
}

