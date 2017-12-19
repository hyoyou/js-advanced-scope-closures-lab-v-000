function produceDrivingRange(blockRange) {
  return function(range1, range2) {
    let range = parseFloat(range2) - parseFloat(range1);

    if (range < blockRange) {
      return `within range by ${blockRange - range}`;
    } else {
      return `${range - blockRange} blocks out of range`;
    };
  };
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  };
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
