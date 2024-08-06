<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>

</script>

<style lang="scss">
:root{
    --themecolor : #66b1ff;
    --fontcolor : #333;
}
::selection {
    background: var(--themecolor);
    color: #fff;
}
</style>
