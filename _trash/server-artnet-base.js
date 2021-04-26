// npm uninstall artnet-base
// const an = require('artnet-base');
// const artNetOptions = {
//   host: '2.0.0.10',
//   networkInterface: 'eth7',
// }
// const artnet = new an.ArtnetSender(artNetOptions);

const strip1 = [];
const ledsPrMeter = 60;
const ledMeters = 3;
const colorsPrLED = 4;
const ledParams = 4;
// const ledParams = ledsPrMeter * ledMeters * colorsPrLED;
// wrap parameters to next universe, if > 255

console.log(ledParams);


function initStrips() {
  for(let i = 0; i < ledParams; i++ ) {
    strip1.push(0);
  }
}

initStrips();

function strip(param) {
  if(param === 'on') {
    for(let i = 0; i < strip1.length; i++ ) {
      strip1[i] = 255;
      artnet.send(0, strip1);
    }
  }
  if(param === 'off') {
    for(let i = 0; i < strip1.length; i++ ) {
      strip1[i] = 0;
      artnet.send(0, strip1);
    }
  }
  // console.log(strip1);
}

// strip('off');
// strip('off');

// artnet.send(0, [0, 0, 0, 255] );