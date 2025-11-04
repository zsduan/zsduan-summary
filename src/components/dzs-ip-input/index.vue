<template>
    <div class="ip-input">
        <template v-for="(segment, index) in ipSegments">
            <el-input :key="index" v-model="ipSegments[index]" type="text" maxlength="3" class="ip-input__segment"
                @input="validateSegment(index)" @paste="handlePaste($event)" :ref="'segment' + index" />
            <span v-if="index < 3" class="ip-input__dot">.</span>
        </template>
    </div>
</template>
<script>
export default {
    name: "IpInput",
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            ipSegments: ["", "", "", ""],
            iptIndex: 0
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.ipSegments = newValue.split(".");
                } else {
                    this.ipSegments = ["", "", "", ""];
                }
            },
        },
        ipSegments: {
            deep: true,
            handler(newSegments) {
                this.$emit("input", newSegments.join("."));
                this.$emit("update:value", newSegments.join("."))
            },
        },
    },
    mounted() {
        window.addEventListener("keydown", (e) => {
            if (e.key === '.') {
                e.preventDefault();
                this.focusNext(this.iptIndex);
            }
        })
    },
    beforeDestroy() {
        window.removeEventListener("keydown", (e) => {

        })
    },
    methods: {
        validateSegment(index) {
            this.iptIndex = index;
            let value = this.ipSegments[index].replace(/[^0-9]/g, "");
            value = Math.min(255, Math.max(0, parseInt(value || "0", 10)));
            this.ipSegments[index] = value.toString();
            this.$emit("change", this.ipSegments.join("."));
            if (value >= 100) {
                this.focusNext(index);
            }
        },
        focusNext(index) {
            if (index < 3 && this.ipSegments[index].length > 0) {
                this.$refs[`segment${index + 1}`][0]?.focus();
            }
        },
        handlePaste(event) {
            const clipboardData = event.clipboardData.getData("text");
            const segments = clipboardData.split(".");
            if (segments.length === 4 && segments.every((seg) => seg >= 0 && seg <= 255)) {
                this.ipSegments = segments;
            }
        },
    },
};
</script>
<style scoped lang="scss">
.ip-input {
    display: flex;
    align-items: center;
}

.ip-input__segment {
    width: 60px;
    text-align: center;

    :deep(input) {
        text-align: center;
    }
}

.ip-input__dot {
    margin: 0 5px;
}
</style>