function solution(str1, str2) {
    var answer = [];

    str1.split("").map((str,index) => {
        answer.push(str1[index])
        answer.push(str2[index])
    })
    
    return answer.join("");
}