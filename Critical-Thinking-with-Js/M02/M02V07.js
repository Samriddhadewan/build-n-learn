const data = [
  "A",
  "B",
  "A",
  "C",
  "B",
  "A",
  "D",
  "C",
  "A",
  "B",
  "E",
  "A",
  "C",
  "B",
  "D",
  "E",
  "A",
  "C",
  "B",
  "A",
  "F",
  "A",
  "C",
  "E",
  "B",
  "A",
  "D",
  "C",
  "A",
  "B",
  "G",
  "A",
  "E",
  "C",
  "B",
  "A",
  "D",
  "F",
  "A",
  "B",
  "H",
  "A",
  "C",
  "E",
  "B",
  "A",
  "D",
  "C",
  "A",
  "B",
  "I",
  "A",
  "C",
  "B",
  "E",
  "A",
  "F",
  "C",
  "A",
  "D",
];

const aggregate = data.reduce((table, data) => {
  if (table[data]) {
    table[data] = table[data] + 1;
  } else {
    table[data] = 1;
  }

// table[data] = (table[data] || 0) + 1
console.log(data)
  return table;
}, {});

console.log(aggregate)
