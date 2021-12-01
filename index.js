function rot13(str) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  let alphabet13 = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  let decodedarray = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        decodedarray.push(alphabet13[j]);
      }
    }
  }

  return decodedarray.join("");
}

rot13("SERR PBQR PNZC");
