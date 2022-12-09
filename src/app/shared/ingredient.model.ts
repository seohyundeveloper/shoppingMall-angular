export class Ingredient {
  // public name:string;
  // public amout:number;
  // constructor(name:string, amount:number){
  //   this.name = name;
  //   this.amout = amount;
  // }  // 아래처럼 단축해서 쓸 수 있다.
  constructor(public name: string, public amount: number) { }
}