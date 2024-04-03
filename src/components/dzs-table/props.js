
/**默认配置信息*/ 
const defaultProps = {
    /**操作栏 配置 ['add' , 'edit' , 'details' , 'del']*/
    operation: {
        type: Array,
        default: () => {
            return [];
        },
    },
    /**表格 显示配置*/
    'table-header': {
        type: Array,
        default: () => {
            return [];
        },
    },
    /**是否显示 复选框*/
    'show-checkbox': {
        type: Boolean,
        default: () => {
            return false;
        },
    },
    /**每条 最大显示数量*/
    'max-size': {
        type: Number,
        default: () => {
            return 10;
        },
    },
    /**分页 总数*/
    total: {
        type: Number,
        default: () => {
            return 0;
        },
    },
    /**是否显示 分页*/
    'show-page': {
        type: Boolean,
        default: () => {
            return true;
        },
    },
    /**操作项配置信息*/
    'operation-option': {
        type: Object,
        default: () => {
            return {};
        },
    },
    /**表单自定义 同 el-table一样*/
    'table-options': {
        type: Object,
        default: () => {
            return {};
        },
    },
    /**表格数据*/
    list: {
        type: Array,
        default: () => {
            return [];
        },
    },
    /**加载中*/
    loading: {
        type: Boolean,
        default: () => {
            return false;
        },
    },
    /**高度*/
    height: {
        type: String | Number,
        default: () => {
            return "";
        },
    },
    /**是否显示侧边栏*/
    "show-sider": {
        type: Boolean,
        default: () => {
            return true;
        },
    },
    /**是否显示操作栏*/
    'show-operation' : {
        type: Boolean,
        default: () => {
            return true;
        },
    },
    /**强制搜索*/
    'force-search' : {
        type: Boolean,
        default: () => {
            return false;
        },
    },
    /**侧边栏显示列表*/
    'show-siders' : {
        type : Array,
        default : () =>{
            return ['search','column','height']
        }
    } 
};

export default defaultProps;