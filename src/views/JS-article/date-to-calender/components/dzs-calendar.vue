<template>
    <div class="calender-container">
        <div class="festival" v-if="calender.lunarFestival">
            {{ calender.lunarFestival }}
        </div>
        <div class="festival" v-if="calender.gregorianFestival">
            {{ calender.gregorianFestival }}
        </div>
        <div class="festival" v-if="calender.solarTerm">
            {{ calender.solarTerm }}
        </div>
        <div class="weekday">
            {{ calender.weekday }}
        </div>
        <div class="gregorian-day">{{ calender.gregorianDay }}</div>
        <div class="lunar-day">
            {{ calender.lunarMonthCn }}{{ calender.lunarDayCn }}
        </div>
    </div>
</template>
<script>
export default {
    props : {
        calender : {
            type : Object,
            default : () => {
                return {}
            }
        }
    }
}

</script>
<style lang="scss" scoped>
.calender-container {
    width: 140px;
    background: #fff;
    box-shadow: 1px 1px 5px #ccc;
    padding: 10px;
    border-radius: 10px;
    user-select: none;
    cursor: pointer;

    .festival {
        color: var(--themecolor);
        padding-top: 5px;
        font-size: 16px;

        &:first-child {
            padding-top: 0;
        }
    }

    .weekday {
        font-size: 14px;
        color: #999;
    }

    .gregorian-day {
        font-size: 36px;
        padding-top: 5px;
        font-weight: 600;
    }

    .lunar-day {
        font-size: 14px;
        padding-top: 5px;
    }
}
</style>
