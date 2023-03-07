function solution(k, tangerine) {
    const sizeMap = new Map();
  

    for(let i = 0; i < tangerine.length; i++) {
        sizeMap.set(tangerine[i], (sizeMap.get(tangerine[i]) || 0) + 1);
    }
  
    const sizeArray = [...sizeMap];
        
    sizeArray.sort((a, b) => b[1] - a[1]);
    console.log(sizeArray)
  
    let count = 0;
    let sizeCount = 0;
    
    for(let i = 0; i < sizeArray.length; i++) {
        const [size, num] = sizeArray[i];

        if (count >= k) break;

        if (count + num > k) {
            sizeCount++;
            break;
        }
        else {
            count += num;
            sizeCount++;
        }
    }
  
    return sizeCount;
}