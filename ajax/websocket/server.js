//  对应帖子链接
// https://juejin.cn/post/6844904032784367629#heading-2

const express = require('express');
const expressWs = require('express-ws');

const app = new express();
expressWs(app);
// 从http请求的body中获取消息发送方和接收方，
// 然后从连接池中遍历所有消息接收方的websocket连接实例，向客户端推送消息
const wsClients = {}
app.wsClients = wsClients;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('./static'));

// 服务端实现依赖express和express-ws, 主要实现两个接口，一个是websocket接口，一个是http接口

// websocket接口的实现如下：
app.ws('/ws/:wid', (ws, req) => {
    if (!wsClients[req.params.wid]) {
        wsClients[req.params.wid] = []
    }
    // 将连接记录在连接池中
    wsClients[req.params.wid].push(ws);
    ws.onclose = () => {
        // 连接关闭时，wsClients进行清理
        wsClients[req.params.wid] = wsClients[req.params.wid].filter((client) => {
            return client !== ws;
        });
        if (wsClients[req.params.wid].length === 0) {
            delete wsClients[req.params.wid];
        }
    }
});
// 首先声明一个连接池wsClients, 这是一个对象，键为消息发送方的名字，值是一个数组，
// 用于保存所有对应的websocket连接实例。当一个websocket连接建立时，我们把连接记录在连接池中，
// 并在onclose方法中声明连接关闭时清理连接池的回调。
// http接口的实现如下：

app.all('/rest/message', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const to = req.body.to; // 接收方id
    const from = req.body.from; // 发送发id
    const result = { succeed: true };
    if (wsClients[to] !== undefined) {
        console.log(req.body.content, 'req.body.content');
        wsClients[to].forEach((client) => {
            client.send(JSON.stringify({
                from,
                content: req.body.content
            }));
        });
    } else {
        // 如果消息接收方没有连接，则返回错误信息
        result.succeed = false;
        result.msg = '对方不在线';
    }
    res.json(result);
});

setInterval(() => {
    // 定时打印连接池数量
    console.log('websocket connection counts:')
    Object.keys(wsClients).forEach(key => {
        console.log(key, ':', wsClients[key].length);
    })
    console.log('-----------------------------');
}, 5000);

app.listen(3000, () => {
    console.log('visit http://localhost:3000');
    // child_process.execSync('start http://localhost:3000');
});