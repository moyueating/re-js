const mockFetch = url => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${url}_response`);
        }, Math.random() * 2000);
    });
};

const urls = [2, 4, 5, 6, 7, 8, 9, 10, 21, 23, 34];

const sendRequest = (urls, max) => {
    return new Promise(resolve => {
        const total = urls.length;
        let finished = 0;
        let responses = [];
        const handler = () => {
            let url = urls.shift();
            if (url) {
                mockFetch(url).then(res => {
                    finished++;
                    console.log(res, '已经完成数量', finished);
                    responses.push(res);
                    if (finished === total) {
                        resolve(responses);
                    }else{
                        handler();
                    }
                });
            }
        };
        while (max--) {
            handler();
        }
    });
};

sendRequest(urls, 4).then(data => {
    console.log('all complete', data);
});


// const sendRequest1 = (urls, max) => {
//     return new Promise((resolve, reject) => {
//         const total = urls.length
//         let finished = 0
//         function handler(){
//             let url = urls.shift()
//             if(url){
//                 mockFetch(url).then(res => {
//                     finished++
//                     responses.push(res);
//                     handler()
//                 })
//             }

//         }
//         while(max--){
//             handler()
//         }
//     })
// }
