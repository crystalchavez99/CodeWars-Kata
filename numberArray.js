function digitize(n) {
    //code here
  //    n = String(n);
  //    n = n.split("").reverse().map(Number)
  //   return n;
    n = `${n}`
    let result = [];
    for(let i = n.length - 1; i >= 0; i --){
      let ele = parseInt(n[i]);
      result.push(ele)
    }
    return result;
  }
