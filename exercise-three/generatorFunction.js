// Generators are functions that do not execute all your content inmediatly, its a funnction that execute step by step when you call the next of this function execute the next yield value

function* getNextPosition() {
  let position = 0;
  while(true) {
    yield position++;
  }
}

const position = getNextPosition();

console.log(position.next().value); // 0
console.log(position.next().value); // 1
console.log(position.next().value); // 2
console.log(position.next().value); // 3
console.log(position.next().value); // 4
console.log(position.next().value); // 5
console.log(position.next().value); // 6
console.log(position.next().value); // 7
console.log(position.next().value); // 8


// tip

async function* request() {
  let i = 1;
  let url = "https://jsonplaceholder.typicode.com/todos/";
  while(true){
      let res = await fetch(url+i);
      let json = await res.json();
      yield json;
      i++;
  }
}

let r = request();

console.log(await r.next());

