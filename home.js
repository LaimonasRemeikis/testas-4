class Vaisius {

    constructor(){
        this.dydis = this.rand(5,25);
        this.id = this.rand(1000000,9999999);
        this.prakastas = false;
    }

    prakasti(){
        this.prakastas = true;
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const v1 = new Vaisius();
v1.prakasti();
console.log(v1)

class Krepsys {

    static vaisiai = [];

    static pripildyti(){
        const ilgis = this.vaisiai.length
      for(let i = 0; i < 20-ilgis; i++){
          this.vaisiai.push(new Vaisius);
      }
      this.vaisiai.sort(function(a, b){return b.dydis - a.dydis});
    }

    static isimti(){
        
    }

    constructor(){

    }

    papildyti(){

    }

}

Krepsys.pripildyti();
console.log(Krepsys.vaisiai);
