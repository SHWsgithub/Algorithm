function solution(progresses, speeds) {
    let deploy = [];
    while (progresses.length > 0) {
        if(progresses[0] >= 100) {
            let deployCount = 0;
            while(progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                deployCount++;
            }
            deploy.push(deployCount);
        } else {
            for(let i = 0; i < progresses.length; i++) {
                progresses[i] += speeds[i] 
            }
        }
    }
    return deploy;
}