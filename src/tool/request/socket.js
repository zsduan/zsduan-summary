let socket= null;

/**
 * @name 建立 WebSocket 连接
 * @param {string} socketUrl WebSocket 连接地址
 * @return {object} socket 对象
 * */ 
export const socketCoonnect = (socketUrl ) => {
    if(!socketUrl) {
        throw new Error("socketUrl is required");
    }
    socket = new WebSocket(`${socketUrl}`);

    // 断点重连
    socket.addEventListener('close', function() {
        console.warn('socket close');
        socket.close();
        socket = null;
        setTimeout(() => {
            socketCoonnect(socketUrl);
        }, 3000);
    })

    return socket;
}

/**
 * @name 发送事件
 * @param {object} sendData 发送数据
 * */ 
export const socketSend = (sendData) => {
    if(!socket) {
        throw new Error("socket is not connected");
    }
    if(typeof sendData !== "object") {
        throw new Error("sendData must be object");
    }
    socket.send(JSON.stringify(sendData));
}