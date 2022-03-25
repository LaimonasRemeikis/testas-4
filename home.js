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
console.log(v1);

class Krepsys {

    static vaisiai = [];

    static pripildyti(){
      for(let i = 0; i < 20; i++){
          this.vaisiai.push(new Vaisius());
      }
      this.vaisiai.sort(function(a, b){return b.dydis - a.dydis});
    }

    static isimti(){
        const isimtasVaisius = this.vaisiai[0];
        this.vaisiai.shift();
        const key = isimtasVaisius.id;
        isimtasVaisius.prakasti();
        grauztukai.set(key, isimtasVaisius);
    }

    static papildyti(){
        while (this.vaisiai.length < 20){
            this.vaisiai.push(new Vaisius());
        }
        this.vaisiai.sort(function(a, b){return b.dydis - a.dydis});
    }

    constructor(){

    }

}
const grauztukai = new Map();




Krepsys.pripildyti();
Krepsys.isimti();
Krepsys.isimti();
Krepsys.papildyti();
console.log(Krepsys.vaisiai);
console.log(grauztukai)

