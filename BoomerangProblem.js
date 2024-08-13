const numOfBoomerangs = (arr) => {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 2 ] && arr[i + 1] !== arr[i]) {
        (a.push(arr[i]));
        (a.push(arr[i + 1]));
        (a.push(arr[i + 2]));
        b.push(a);
        a = [];
      }
    }
    let c = b.length;
    return c;
  };