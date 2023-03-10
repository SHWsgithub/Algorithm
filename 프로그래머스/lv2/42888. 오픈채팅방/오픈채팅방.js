function solution(record) {
    const map = new Map();
    const message = [];

    for (let i = 0; i < record.length; i++) {
        const [command, uid, nickname] = record[i].split(' ');

        if (command === 'Enter' || command === 'Change') {
            map.set(uid, nickname);
        }
    }

    for (let i = 0; i < record.length; i++) {
        const [command, uid, nickname] = record[i].split(' ');

        if (command === 'Enter') {
            message.push(`${map.get(uid)}님이 들어왔습니다.`);
        }
        
        else if (command === 'Leave') {
            message.push(`${map.get(uid)}님이 나갔습니다.`);
        }
    }

    return message;
}