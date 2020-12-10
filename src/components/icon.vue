<template>
    <i :class="'icon mdi mdi-' + source"></i>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        source: {
            type: String,
            default: 'account'
        },
    }
}
</script>
