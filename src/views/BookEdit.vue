<template>
    <div>
<h1>{{ id!=0 ? "Add Book":"Book Edit" }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 0
            }
        },
    };
    mounted: {
        this.id;
    };
   
</script>

<style lang="scss" scoped>

</style>