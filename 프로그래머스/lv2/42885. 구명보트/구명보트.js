function solution(people, limit) {
    people.sort((a, b) => b - a);
    
    let count = 0;
    let left = 0;
    let right = people.length - 1;
  
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            left++;
        }
        count++;
    }
  
    return count;
}