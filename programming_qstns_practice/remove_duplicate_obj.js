const arr = [
  { id: 1, name: "Vivek" },
  { id: 2, name: "Amit" },
  { id: 1, name: "Vivek G" },
  { id: 3, name: "Rahul" },
  { id: 2, name: "Naina" }
];

console.log([...new Map(arr.map(obj => [obj.id, obj])).values()]);
console.log(Object.entries(arr));

