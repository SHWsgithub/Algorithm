function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;

    let recordMap = new Map;

    for (let record of records) {
        record = record.split(" ");
        const [time, number, status] = record;

        let hour = Number(time.split(":")[0]);
        let min = Number(time.split(":")[1]);
        let curMin = (hour * 60) + min;

        if (status === "IN") {
            if (!recordMap.has(number)) {
                recordMap.set(number, {
                    inTime: curMin,
                    acc: 0
                });
            } else {
                recordMap.set(number, {
                    inTime: curMin,
                    acc: recordMap.get(number).acc
                })
            }
        }

        if (status === "OUT") {
            recordMap.set(number, {
                inTime: 0,
                acc: curMin - recordMap.get(number).inTime + recordMap.get(number).acc
            })
        }
    }

    return Array.from(recordMap)
        .map((record) => {
            let parkingTime = record[1].acc;
            if (record[1].inTime > 0) {
                parkingTime += 1439 - record[1].inTime;
            }
            if(record[1].inTime === 0 && record[1].acc === 0) {
                parkingTime = 1439;
            }
            let totalFee = basicFee + Math.ceil(Math.max(parkingTime - basicTime, 0) / unitTime) * unitFee;
            if(parkingTime <= basicTime) {
                totalFee = basicFee;
            }
            return [record[0], totalFee];
        })
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map((record) => record[1])
}