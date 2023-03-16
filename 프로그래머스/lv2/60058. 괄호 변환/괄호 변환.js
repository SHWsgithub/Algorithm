function solution(p) {
    if (p === '') return '';

    let u = '';
    let v = '';
    let cnt = 0;

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            cnt++;
        } else {
            cnt--;
        }

        if (cnt === 0) {
            u = p.slice(0, i + 1);
            v = p.slice(i + 1);
             break;
        }
    }
    
    function isValid(p) {
        const stack = [];

        for (let i = 0; i < p.length; i++) {
            if (p[i] === '(') {
                stack.push('(');
            } else {
                if (stack.length === 0) {
                return false;
            }
                stack.pop();
            }
        }

        return stack.length === 0;
    }

    if (isValid(u)) {
        return u + solution(v);
    } else {
        let temp = '(';
        temp += solution(v);
        temp += ')';

        u = u.slice(1, u.length - 1);

        for (let i = 0; i < u.length; i++) {
            if (u[i] === '(') {
                temp += ')';
            } else {
                temp += '(';
            }
        }

        return temp;
    }
}