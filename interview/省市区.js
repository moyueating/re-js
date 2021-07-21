var transObject = function (tableData, keys) {
    const hashTable = {}
    const res = []
    const keysLen = keys.length;
    for (let i = 0; i < tableData.length; i++) {
        let arr = res
        let cur = hashTable
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j]
            const filed = tableData[i][key]
            if (!cur[filed]) {
                const pusher = {
                    key: key,
                    name: filed,
                }
                if (j < keysLen - 1) {
                    pusher.children = []
                }
                cur[filed] = { position: arr.push(pusher) - 1 }
                cur = cur[filed]
                arr = pusher.children
            } else {
                cur = cur[filed]
                arr = arr[cur.position].children
            }
        }
    }
    return res
}
const arr = [
    { "province": "四川省", "city": "成都市", "county": "金牛区" },
    { "province": "四川省", "city": "绵阳市", "county": "平武县" },
    { "province": "上海市", "city": "上海市", "county": "长宁区" },
];
console.log(JSON.stringify(transObject(arr, ['province', 'city', 'county'])))