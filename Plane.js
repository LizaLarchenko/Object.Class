//Дз
class Plane {
  constructor(
    boardNum,
    flightNum,
    engines,
    fuel,
    totalFuel,
    speed,
    altitude,
    baggage,
    totalBaggage
  ) {
    this.boardNum = boardNum;
    this.flightNum = flightNum;
    this.engines = engines;
    this.fuel = fuel;
    this.totalFuel = totalFuel;
    this.speed = speed;
    this.altitude = altitude;
    this.baggage = baggage;
    this.totalBaggage = totalBaggage;
  }
  getConsumption() {
    return (
      this.fuel *
      this.engines.length *
      (this.totalBaggage / this.baggage).toFixed(2)
    );
  }
  getFaultEngines() {
    let totalEnginesVolume = this.engines.reduce((a, b) => a + b, 0);
    if (totalEnginesVolume < 50) {
      this.speed = this.speed / totalEnginesVolume;
      this.altitude = this.altitude / totalEnginesVolume;
    }
    return `Speed: ${this.speed}, Altitude: ${this.altitude}`;
  }

  getSpeed(plane) {
    return this.speed > plane.speed ? this : plane;
  }

  static getMostFastestPlane(plane1, plane2, plane3) {
    return plane1.speed > plane2.speed && plane1.speed > plane3.speed
      ? plane1
      : plane2.speed > plane3.speed && plane2.speed > plane1.speed
      ? plane2
      : plane3;
  }
}

const plane1 = new Plane(
  "B567",
  "234",
  [10, 10, 10, 10],
  3,
  300,
  20,
  3000,
  30,
  100
);

const plane2 = new Plane(
  "J987",
  "567",
  [10, 40, 20, 10],
  6,
  700,
  10,
  2030,
  40,
  100
);

const plane3 = new Plane(
  "N767",
  "375",
  [10, 40, 10, 40],
  6,
  700,
  10,
  2560,
  40,
  100
);
// console.log(plane1.getConsumption());
// console.log(plane1.getFaultEngines());
// console.log(plane2.getFaultEngines());

// console.log(plane1.getSpeed(plane2));

console.log(Plane.getMostFastestPlane(plane1, plane2, plane3));
