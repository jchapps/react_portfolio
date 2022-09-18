const genHexString = (len) => {
  const hex = "0123456789ABCDEF";
  let output = "";
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
};

const generateRandomHex = (filesize) => {
  console.log("Generate random hex numbers", filesize);

  let data = "";
  const x = (filesize >>> 0).toString(2).split("");
  for (let i = 0; i < x.length; i++) {
    data = data + data;
    if (x[i] == "1") {
      data += genHexString(8);
    }
  }

  console.log("Random Hex data successfully generated");

  const raw = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    raw[i] = data.charCodeAt(i);
  }

  return raw;
};

const generateFile = (filesize) => {
  filesize *= 1024 * 128;
  const data = generateRandomHex(filesize);

  const a = document.createElement("a");
  const blob = new Blob([data], { type: "text/plain" });
  console.log("blob size", blob.size);

  const url = URL.createObjectURL(blob);

  a.setAttribute("href", url);
  a.setAttribute("download", "RandomFile");
  a.click();
  URL.revokeObjectURL(a.href);
};
