<template>
    <div class="dzs-postman-box">
        <div class="request-box">
            <el-select v-model="requestMethod" placeholder="请选择请求方式" class="request-method-select">
                <el-option v-for="item in requestMethodList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="requestUrl" placeholder="请输入请求地址" class="request-url-input"></el-input>
            <dzs-button type="primary" @click="sendRequest">发送请求</dzs-button>
        </div>
        <div class="dzs-postma-title">请求头</div>
        <dzs-postman-table type="Array" v-model="requestHeader"></dzs-postman-table>
        <div class="dzs-postma-title">请求体</div>
        <div>
            <el-radio-group v-model="requestBodyType">
                <el-radio-button v-for="(item, index) in requestBody" :key="index" :label="item.value">
                </el-radio-button>
            </el-radio-group>
        </div>
        <div class="request-body" v-show="requestBodyType === 'json'">
            <dzs-postman-table v-model="requestBodyByJson"></dzs-postman-table>
        </div>
        <div class="request-body" v-show="requestBodyType === 'form-data'">
            <dzs-postman-table></dzs-postman-table>
        </div>
        <div class="request-body" v-show="requestBodyType === 'query'">
            <dzs-postman-table v-model="requestQuery"></dzs-postman-table>
        </div>
        <div class="dzs-postma-title">返回结果</div>
        <div class="request-result">{{requestResult}}</div>
    </div>
</template>
<script>
/**
 * @name 自定义请求管理
 * @description 自定义请求管理
 * @author zsduan
 * @date 20250224
 * @props {Object} request 请求函数
 * */
import { requestMethodList, requestBody } from './config';
import dzsPostmanTable from './components/dzs-postman-table.vue';
import dzsButton from "../dzs-button";
export default {
    name: 'dzsPostman',
    props: {
        request: {
            type: Object | Function,
            required: true,
            default: () => {
                return {}
            }
        }
    },
    components: {
        dzsPostmanTable,
        dzsButton
    },
    data() {
        return {
            requestMethodList: requestMethodList,
            requestBody: requestBody,
            requestMethod: requestMethodList[0].value,
            requestUrl: '',
            requestBodyType: requestBody[0].value,
            requestHeader: "",
            requestBodyByJson: "",
            requestQuery: "",
            requestResult : ""
        }
    },
    methods: {
        sendRequest() {
            if (!this.request) {
                console.error('请求函数不能为空')
                return
            }
            if (!this.requestUrl) {
                console.error('请求地址不能为空')
                return
            }
            let headers = {};
            try {
                let requestHeader = JSON.parse(this.requestHeader);
                requestHeader.forEach(item => {
                    headers[item.name] = item.value;
                })
            } catch (error) {

            }
            let requestUrl = this.requestUrl;
            try {
                if (!JSON.parse(this.requestQuery)) return;
                let urlStr = "";
                for (const key in JSON.parse(this.requestQuery)) {
                    urlStr += `${key}=${JSON.parse(this.requestQuery)[key]}&`
                }
                urlStr = urlStr.slice(0, -1);
                if (requestUrl.indexOf('?') == -1) {
                    requestUrl += `?${urlStr}`
                } else {
                    requestUrl += `&${urlStr}`
                }
            } catch (error) {

            }
            let requestBodyByJson = {};
            try {
                requestBodyByJson = JSON.parse(this.requestBodyByJson);
            }catch (error) {

            }
            this.request({
                url : requestUrl,
                method : this.requestMethod,
                headers : headers,
                data : requestBodyByJson,
            }).then(res => {
                console.log("请求成功 ==>" ,res);
                this.requestResult = res;
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.dzs-postman-box {
    width: 100%;

    .request-box {
        display: flex;

        .request-method-select {
            width: 120px;
            margin-right: 10px;
        }

        .request-url-input {
            flex: 1;
            margin-right: 10px;
        }
    }

    .dzs-postma-title {
        font-size: 18px;
        margin: 10px 0;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            display: inline-block;
            width: 5px;
            height: 18px;
            background-color: #409eff;
            margin-right: 5px;
        }
    }

    .request-body {
        margin-top: 10px;
    }
    .request-result{
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        white-space: pre-line;
        margin-top: 10px;
        border: 1px solid #409eff;
        padding: 5px;
        border-radius: 5px;
    }
}
</style>
