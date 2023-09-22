class Product {

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
  }
  display() {}
}

const p = new Product("Bag", 100, "A cool bag."); // Here the calling context is the `brand new plain empty object` that is created by the `new` keyword.
console.log(p);

