function add(a, b) {
  console.log(Number(a) + Number(b));
}

const a = process.argv[2];
const b = process.argv[3];

add(a, b);
