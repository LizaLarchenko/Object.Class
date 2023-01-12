class Hotel {
  constructor(name, address, tenantNumber, hotelPrice, roomCount) {
    this.name = name;
    this.address = address;
    this.tenantNumber = tenantNumber;
    this.hotelPrice = hotelPrice;
    this.roomCount = roomCount;
  }

  getIncomePerDay() {
    let income = 0;
    let tenantNumber = 0;
    for (let i = 0; i < this.tenantNumber.length; i++) {
      tenantNumber += this.tenantNumber[i];
    }
    income = tenantNumber * this.hotelPrice;
    return income;
  }

  reducingPrice() {
    let tenantNumber = 0;
    for (let i = 0; i < this.tenant_number.length; i++) {
      tenantNumber += this.tenantNumber[i];
    }
    if (tenantNumber / this.roomCount < 0.5) {
      this.hotelPrice = this.hotelPrice * 0.8;
    }
  }

  getBestHotel(hotel) {
    let profitability1 = (this.tenantNumber / this.roomCount) * 100;
    let profitability2 = (hotel.tenantNumber / hotel.roomCount) * 100;
    if (profitability1 > profitability2) {
      return true;
    } else {
      return false;
    }
  }

  static getBestOfTheBestHotel(hotel1, hotel2, hotel3) {
    let profitability1 = (hotel1.tenantNumber / hotel1.roomCount) * 100;
    let profitability2 = (hotel2.tenantNumber / hotel2.roomCount) * 100;
    let profitability3 = (hotel3.tenantNumber / hotel3.roomCount) * 100;
  }
}

let hotel1 = new Hotel(
  "виктория олимп",
  "РБ, Минск, Пушкина-колотушкина 88а",
  [1, 1, 1],
  10000,
  10
);

let hotel2 = new Hotel("Звезда", "РБ, Минск, Лобанка 14", [1, 4, 1], 15000, 10);
let hotel3 = new Hotel(
  "Ренессанс",
  "РБ, Минск, Кольцова 2",
  [1, 3, 2],
  13000,
  10
);
// console.log("Выручка за день: " + hotel1.getIncomePerDay());
// console.log(hotel1);
// hotel.reducingPrice();
// console.log(hotel1);
console.log(hotel.getBestHotel(hotel2));

console.log(Hotel.getBestOfTheBestHotel(hotel1, hotel2, hotel3));
