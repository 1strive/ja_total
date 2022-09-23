/*
 * @Author: JA
 * @Date: 2022-09-21 01:37:35
 * @LastEditTime: 2022-09-21 01:59:52
 * @LastEditors: JA
 */
function limitRequest(urls = [], limit = 3) {

    return new Promise((reslove, reject) => {
        const len = urls.length
        let count = 0

        //同时启动limit个任务
        while (limit > 0) {
            start()
            limit -= 1
        }

        function start() {
            const url = urls.shift()
            if (url) {
                axios.post(url).then((res) => {

                }).catch((err) => {
                    reject(err)
                }).finally(() => {
                    if (count = len - 1) {
                        reslove()
                    } else {
                        count++
                        start()
                    }
                })
            }
        }
    })

}

// // 测试
// limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])