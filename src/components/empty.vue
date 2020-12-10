<template>
    <div class="empty">
        <div class="media">
            <img src="/img/empty.svg" alt="media">
        </div>
        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Empty',
    props: {
        text: {
            type: String,
            default: 'Sonuc bulunamadi!'
        },
    }
}
</script>
