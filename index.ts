let 이름 :{name: string} = {name: 'kim'};
let 이름2 :{name? : string} = {name: 'kim'};
let 이름3 :string[] = ['kim', 'park'];
let 이름4 :string | number = 'kim';

type 내타입 = string | number;
let 이름5 :내타입 = 123;

function 함수(x :number) :number{
  return x * 2
}
type Member = [number, boolean];
let john:Member = [123, true];

class User {
  name;
  constructor(name :string){
    this.name = name;
  }
}