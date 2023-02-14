/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
		if (s[s.length - 1] === '1') return false;

		let prevBound = 0;
		const arr = [0];

		for (let el of arr) {
			let i = Math.max(el + minJump, prevBound + 1);

			if (s.length - 1 >= i && s.length - 1 <= el + maxJump) return true;
			for (; i <= el + maxJump && i < s.length; i++) {
				if (s[i] === '0') {
					arr.push(i);
				}
			}
			prevBound = el + maxJump;
		}
		
		return false;
};