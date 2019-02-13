export default class GetService {

  constructor(){
    this._base = '/db.json';
  }
  getAllData = async () => {
    const res = await fetch(`${this._base}`);
    return await res.json();
  }
  getBestItems = async () => {
    const res = await this.getAllData();
    return res.bestsellers;
  }

  getShop = async () => {
    const res = await this.getAllData();
    return res.coffee;
  }

  getGoods = async () => {
    const res = await this.getAllData();
    return res.goods;
  }

}

// const got = new GetService();

// console.log(got.getAllData());

// got.getAllData()
//   .then(shit => console.log(shit));



// if(!res.ok) {
    //   throw new Error(`Could not fetch ${this._base}, status: ${res.status} `);
    // }

  // loadJson = async () => {
  //   const res = await fetch(`{this._base}`);

  //   if(!res.ok) {
  //     throw new Error(`Could not fetch ${this._base}, status: ${res.status} `);
  //   }

  //   const data = await res.json();
  //   console.log(data);

  //   return data;
  // }

