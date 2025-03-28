<template>
    <button :disabled="disabled" :type="nativeType" class="dzs-button" :class="{
        [`dzs-button-${type}`]: type,
        [`dzs-button-${size}`]: size,
        [`dzs-button-disabled`]: disabled,
        [`dzs-button-text`]: text,
        ['isplain']: plain,
        ['isround']: round,
        ['iscircle']: circle,
        [`${className}`]: className
    }" @click="onClick">
        <slot name="icon"></slot>
        <i v-if="icon" :class="icon" class="dzs-button-icon"></i>
        <span>
            <slot></slot>
        </span>
        <slot name="icon-right"></slot>
    </button>
</template>
<script>
/**
 * @name dzs-button
 * @description 按钮
 * @param {String} type - 按钮类型，可选值为 primary / success / warning / danger / info / default
 * @param {String} size - 按钮尺寸，可选值为 small / medium / large / mini
 * @param {Boolean} disabled - 是否禁用
 * @param {Boolean} plain - 是否朴素按钮
 * @param {Boolean} round - 是否圆角按钮
 * @param {Boolean} circle - 是否圆形按钮
 * @param {Boolean} text - 是否文字按钮
 * @param {String} nativeType - 原生 type 属性
 * @param {String} icon - 图标类名
 * 
 * @param {slot} icon-right - 右侧图标插槽
 * @param {slot} icon - 图标插槽
 * @param {slot} default - 默认插槽
 * @example <dzs-button>按钮</dzs-button>
 * */ 
export default {
    name: 'dzsButton',
    props: {
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['primary', 'success', 'warning', 'danger', 'info', 'default'].indexOf(value) !== -1
            }
        },
        size: {
            type: String,
            default: '',
            validator(value) {
                return ['small', 'medium', 'mini', ''].indexOf(value) !== -1
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: () => {
                return ''
            }
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        icon : {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    },
    methods: {
        onClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>
<style lang="scss" scoped>
$success-color: #67c23a;
$success-light-color: #f0f9eb;
$success-active-color: #5daf34;
$warning-color: #e6a23c;
$warning-light-color: #fdf6ec;
$warning-active-color: #cf9236;
$danger-color: #f56c6c;
$danger-light-color: #fef0f0;
$danger-active-color: #dd6161;
$info-color: #909399;
$info-light-color: #f4f4f5;
$info-active-color: #82848a;
$primary-color: #409EFF;
$primary-light-color: #ecf5ff;
$primary-active-color: #3a8ee6;

.dzs-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &.isround {
        border-radius: 20px;
    }

    &.iscircle {
        border-radius: 50%;
        padding: 12px;
        overflow: hidden;
    }
}

.dzs-button-default {
    &.dzs-button-text {
        border: 0;
        padding: 0;

        &:hover {
            background-color: transparent;
            border: 0;

            span {
                color: $primary-color;
            }
        }
    }

    &.dzs-button-disabled {
        &:hover {
            background-color: #fff;
            opacity: 0.6;

            span {
                color: #606266;
            }
        }

        &:active {
            border: 1px solid #dcdfe6;
            background-color: #fff;
        }
    }

    &:hover {
        background-color: $primary-light-color;
        border: 1px solid $primary-light-color;

        span {
            color: $primary-color;
        }
    }

    &:active {
        border: 1px solid $primary-color;
        background-color: $primary-light-color;
    }
}

.dzs-button-primary {
    background-color: $primary-color;
    color: #fff;
    border: 1px solid $primary-color;

    &.dzs-button-text {
        border: 0;
        padding: 0;
        background-color: transparent;
        color: $primary-color;

        &:hover {
            background-color: transparent;
            border: 0;

            span {
                color: $primary-color;
            }
        }

        &:active {
            span {
                color: $primary-active-color;
            }
        }
    }

    &.dzs-button-disabled {
        &:hover {
            background-color: $primary-color;
            opacity: 0.6;
        }
    }

    &.isplain {
        border: 1px solid $primary-color;
        background-color: $primary-light-color;

        &.dzs-button-disabled {
            &:hover {
                background-color: $primary-light-color;
                opacity: 0.6;

                span {
                    color: $primary-color;
                }
            }
        }

        span {
            color: $primary-color;
        }

        &:hover {
            background-color: $primary-color;

            span {
                color: #fff;
            }
        }

        &:active {
            background-color: $primary-active-color;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        background-color: $primary-active-color;
    }
}

.dzs-button-success {
    background-color: $success-color;
    color: #fff;
    background-color: $success-color;

    &.dzs-button-text {
        border: 0;
        padding: 0;
        background-color: transparent;
        color: $success-color;

        &:hover {
            background-color: transparent;
            border: 0;

            span {
                color: $success-color;
            }
        }

        &:active {
            span {
                color: $success-active-color;
            }
        }
    }

    &.dzs-button-disabled {
        &:hover {
            background-color: $success-color;
            opacity: 0.6;
        }
    }

    &.isplain {
        border: 1px solid $success-color;
        background-color: $success-light-color;

        span {
            color: $success-color;
        }

        &.dzs-button-disabled {
            &:hover {
                background-color: $success-light-color;
                opacity: 0.6;

                span {
                    color: $success-color;
                }
            }
        }

        &:hover {
            background-color: $success-color;

            span {
                color: #fff;
            }
        }

        &:active {
            background-color: $success-active-color;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        background-color: $success-active-color;
    }
}

.dzs-button-warning {
    background-color: $warning-color;
    color: #fff;
    border: 1px solid $warning-color;

    &.dzs-button-text {
        border: 0;
        padding: 0;
        background-color: transparent;
        color: $warning-color;

        &:hover {
            background-color: transparent;
            border: 0;

            span {
                color: $warning-color;
            }
        }

        &:active {
            span {
                color: $warning-active-color;
            }
        }
    }

    &.dzs-button-disabled {
        &:hover {
            background-color: $warning-color;
            opacity: 0.6;
        }
    }

    &.isplain {
        border: 1px solid $warning-color;
        background-color: $warning-light-color;

        span {
            color: $warning-color;
        }

        &.dzs-button-disabled {
            &:hover {
                background-color: $warning-light-color;
                opacity: 0.6;

                span {
                    color: $warning-color;
                }
            }
        }

        &:hover {
            background-color: $warning-color;

            span {
                color: #fff;
            }
        }

        &:active {
            background-color: $warning-active-color;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        background-color: $warning-active-color;
    }
}

.dzs-button-danger {
    background-color: $danger-color;
    color: #fff;
    border: 1px solid $danger-color;

    &.dzs-button-text {
        border: 0;
        padding: 0;
        background-color: transparent;
        color: $danger-color;

        &:hover {
            background-color: transparent;
            border: 0;

            span {
                color: $danger-color;
            }
        }

        &:active {
            span {
                color: $danger-active-color;
            }
        }
    }

    &.dzs-button-disabled {
        &:hover {
            background-color: $danger-color;
            opacity: 0.6;
        }
    }

    &.isplain {
        border: 1px solid $danger-color;
        background-color: $danger-light-color;

        span {
            color: $danger-color;
        }

        &.dzs-button-disabled {
            &:hover {
                background-color: $danger-light-color;
                opacity: 0.6;

                span {
                    color: $danger-color;
                }
            }
        }

        &:hover {
            background-color: $danger-color;

            span {
                color: #fff;
            }
        }

        &:active {
            background-color: $danger-active-color;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        background-color: $danger-active-color;
    }
}

.dzs-button-info {
    background-color: $info-color;
    color: #fff;
    border: 1px solid $info-color;

    &.dzs-button-text {
        border: 0;
        padding: 0;
        background-color: transparent;
        color: $info-color;

        &:hover {
            background-color: transparent;
            border: 0;

            span {
                color: $info-color;
            }
        }

        &:active {
            span {
                color: $info-active-color;
            }
        }
    }

    &.dzs-button-disabled {
        &:hover {
            background-color: $info-color;
            opacity: 0.6;
        }
    }

    &.isplain {
        border: 1px solid $info-color;
        background-color: $info-light-color;

        span {
            color: $info-color;
        }

        &.dzs-button-disabled {
            &:hover {
                background-color: $info-light-color;
                opacity: 0.6;

                span {
                    color: $info-color;
                }
            }
        }

        &:hover {
            background-color: $info-color;

            span {
                color: #fff;
            }
        }

        &:active {
            background-color: $info-active-color;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        background-color: $info-active-color;
    }
}

.dzs-button-disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.dzs-button-small {
    padding: 9px 15px;
    border-radius: 3px;
    height: 32px;

    span {
        font-size: 12px;
        line-height: 12px;
    }
}

.dzs-button-mini {
    padding: 6px 15px;
    border-radius: 3px;
    height: 28px;

    span {
        line-height: 12px;
        font-size: 12px;
    }
}

.dzs-button-medium {
    padding: 10px 20px;
    border-radius: 4px;
    height: 36px;

    span {
        font-size: 14px;
        line-height: 14px;
    }
}

.dzs-button+.dzs-button {
    margin-left: 10px;
}
.dzs-button-icon{
    display: inline-block;
    margin-right: 5px;
}
</style>