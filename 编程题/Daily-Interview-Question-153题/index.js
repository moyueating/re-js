// 实现一个批量请求函数 multiRequest(urls, maxNum)
// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出

function mockFetch(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`url:${url}`)
            resolve(`url:${url}`);
        }, Math.floor(Math.random() * 5) * 1000)
    })
}


function multiRequest1(urls, maxNum){
    return new Promise((resolve, reject) => {
        let count = 0;
        let response = [];
        function send(){
            count++;
            let currentUrl = urls.shift();
            if(currentUrl){
                mockFetch(currentUrl).then(res => {
                    response.push(res);
                    send();
                })
            }
            if(count >= urls.length){
                resolve(response);
            }
        }
        while(count < maxNum){
            send()
        }
    })
}

function multiRequest2(urls, maxNum){
    let allPromises = [];
    let count = 0;
    let resolve;
    let promise = new Promise(r => resolve = r);

    function addTask(){
        if(count >= urls.length) resolve();

        let index = count++;
        urls[index] && allPromises.push(mockFetch(urls[index]).finally(addTask))
    }

    while(count < maxNum){
        addTask();
    }

    return promise. then(() => Promise.all(allPromises))
}


let urls = [
    'http://www.example_1.com/',
    'http://www.example_2.com/',
    'http://www.example_3.com/',
    'http://www.example_4.com/',
    'http://www.example_5.com/',
    'http://www.example_6.com/',
    'http://www.example_7.com/',
    'http://www.example_8.com/',
    'http://www.example_9.com/',
  ]
// multiRequest1(urls, 3)
multiRequest2(urls, 4)
