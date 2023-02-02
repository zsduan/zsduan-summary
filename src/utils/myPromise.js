/*
 * @Author: zs.duan
 * @Date: 2023-01-15 09:45:55
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-28 21:41:15
 * @FilePath: \vue2+elui+template\src\utils\myPromise.js
 */

const PENDING = 'pending';
const RESOVLED = 'resolved';
const REJECTED = 'rejected';

class myPromise {
    constructor(executor) {
        let that = this;
        this.status = PENDING;   //状态未变之前都是pending
        this.data = undefined;     //未定义的数据
        this.callbacks = [];       //每个元素的结构：onResolved(){},onRejected(){}
        //执行器函数，会立即执行
        //两个改变promise状态的函数
        function resolve(value) {
            if (that.status !== PENDING) return
            //调用resolve后，需要将状态改变成为resolved
            that.status = RESOVLED;
            //保存data数据
            that.data = value;
            //如果有未执行的callback，则立即异步执行onResolved,是包含两个回调的对象
            if (that.callbacks.length > 0) {
                setTimeout(() => {
                    that.callbacks.forEach(element => {
                        element.onResolved(value)
                    });
                });
            }
        }
        function reject(reason) {
            if (that.status !== PENDING) return
            //调用reject后，需要将状态改变成为rejected
            that.status = REJECTED;
            //保存data数据
            that.data = reason;
            //如果有未执行的callback，则立即异步执行onRejected,是包含两个回调的对象
            if (that.callbacks.length > 0) {
                setTimeout(() => {
                    that.callbacks.forEach(element => {
                        element.onResolved(reason)
                    });
                });
            }
        }
        //传入的参数为两个函数
        //除了resolve和reject,还有可能自己抛出异常，会失败，此时需要一个try catch
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error);
        }
    }
    /* 
//.then接收成功失败的回调
返回新的Promise
*/
    then(onResolved, onRejected) {
        const that = this;
        // 指定回调函数的默认值(必须是函数)
        onResolved = typeof onResolved === 'function' ? onResolved : value => value  //继续向下传递
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }  //抛出异常
        return new Promise((resolve, reject) => {
            if (this.status === PENDING) {
                //假设当前状态还是pending,将回调保存下来
                this.callbacks.push({
                    onResolved(value) {
                        onResolved(that.data);
                        try {
                            const result = onResolved(that.data)
                            if (result instanceof Promise) {
                                result.then(resolve, reject
                                    // value =>{
                                    //     resolve(value)
                                    // },
                                    // reason=>{
                                    //     reject(reason)
                                    // }
                                )
                            }
                        } catch (error) {
                            resolve(error);
                        }
                    },
                    onRejected(reason) {
                        onRejected(that.data);
                        try {
                            const result = onRejected(that.data)
                            if (result instanceof Promise) {
                                result.then(resolve, reject
                                    // value =>{
                                    //     resolve(value)
                                    // },
                                    // reason=>{
                                    //     reject(reason)
                                    // }
                                )
                            }
                        } catch (error) {
                            reject(error);
                        }
                    }
                })
            } else if (this.status === RESOVLED) {
                setTimeout(() => {
                    //  如果回调是promise,return的promise结果就是这个promise结果
                    try {
                        const result = onResolved(that.data)
                        if (result instanceof Promise) {
                            result.then(resolve, reject
                                // value =>{
                                //     resolve(value)
                                // },
                                // reason=>{
                                //     reject(reason)
                                // }
                            )
                        } else {//返回的不是promise，返回promise为成功，value就是返回值
                            resolve(result)
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            } else {
                //如果前面的promise返回的是失败的回调
                setTimeout(() => {
                    //  如果回调是promise,return的promise结果就是这个promise结果
                    try {
                        const result = onRejected(that.data)
                        if (result instanceof Promise) {
                            result.then(resolve, reject
                                // value =>{
                                //     resolve(value)
                                // },
                                // reason=>{
                                //     reject(reason)
                                // }
                            )
                        }
                    } catch (error) {
                        try {
                            const result = onResolved(that.data)
                            if (result instanceof Promise) {
                                result.then(resolve, reject
                                    // value =>{
                                    //     resolve(value)
                                    // },
                                    // reason=>{
                                    //     reject(reason)
                                    // }
                                )
                            }
                        } catch (error) {
                            reject(error);
                        }
                    }
                });
            }
        })
    }
    /*
    接收失败的回调
    返回新的promise
     */
    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
    /*
    promise函数对象的resolve方法
     */
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value);
            }
        })
    }
    /*
    promise函数对象的reject方法
     */
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }
    //all接收数组
    static all(promises) {
        const values = [];
        let resolvedCount = 0;
        return new Promise((resolve, reject) => {
            //遍历promise获取每个promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    //成功的时候需要放入数组中
                    value => {
                        resolvedCount++;
                        values[index] = value;
                        if (resolvedCount == promises.length) {
                            resolve(values);
                        }
                    },
                    reason => {
                        //只要一个失败了，return的promise就失败
                        reject(reason)
                    }
                )
            })
        })
    }
    //race接收数组
    static race(promise) {
        //返回一个pomise
        return new Promise((resolve, reject) => {
            Promise.resolve(p).then(
                //一旦有成功，return成功
                value => {
                    resolve(value);
                },
                //一旦有失败，return失败
                reason => {
                    reject(reason)
                }
            )
        })
    }

    // promise的resolveDelay，rejectDelay
    /* promise函数对象的resolveDelay方法
    */
    static resolveDelay(value, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value instanceof Promise) {
                    value.then(resolve, reject)
                } else {
                    resolve(value);
                }
            }, time);
        })
    }
    /*
    promise函数对象的rejectDelay方法
    */
    static rejectDelay(reason, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(reason)
            }, time);
        })
    }
}

export default  myPromise