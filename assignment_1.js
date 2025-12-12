/* 
returns an array of lotto numbers
numbers should be 1=<x=<47 and be random
does not accept 39 or 17
no duplication of numbers
skip 2 unlucky numbers
*/

function getLottoNums() {
  const lottoDrawList = [];
  while (lottoDrawList.length < 6) {
    const lottoNum = Math.floor(Math.random() * 47 + 1);
    if (lottoNum === 39 || lottoNum === 17) {
      continue;
    }
    if (!lottoDrawList.includes(lottoNum)) {
      lottoDrawList.push(lottoNum);
    }
  }
  console.log("final list", lottoDrawList);
  return lottoDrawList;
}

getLottoNums();
