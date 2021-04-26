module.exports = {
  artnet: 
  class ArtNet {
    constructor() {
      // ARTNET
      this.options = {
        host: '2.0.0.10'
      }
      this.artnet = require('artnet')(this.options);

      this.strip1 = [];
      this.ledsPrMeter = 60;
      this.ledMeters = 3;
      this.colorsPrLED = 3;
      this.LEDParams = this.ledsPrMeter * this.ledMeters * this.colorsPrLED;

      this.initStrips();
    }

    initStrips = () => {
      for(let i = 0; i < this.LEDParams; i++ ) {
          this.strip1.push(0);
      }
      this.updateStrips();
    }

    clearStrips = () => {
      for(let i = 0; i < this.LEDParams; i++ ) {
          this.strip1[i] = 0;
      }
      this.updateStrips();
    }

    fillStrips = (value) => {
      for(let i = 0; i < this.LEDParams; i++) {
        this.strip1[i] = value;
      }
      this.updateStrips();
    }

    updateStrips = () => {
      this.artnet.set(this.strip1.slice(0, 511));
      this.artnet.set(1, 1, this.strip1.slice(512, this.strip1.length));
    }
  }
}
// set channel 1 to 255 and disconnect afterwards.
// start at channel 1
// artnet.set(1, 255, function (err, res) {
//   artnet.close();
// });



