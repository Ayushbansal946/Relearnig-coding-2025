let car={
  color:"red",
  model:"bmw m3",
  year:2022,
  start:function(){
    return `${this.model} is model of year ${this.year} with ${this.color} color`;
  },
}
let mycar=car.start()
console.log(`car`,car.start());