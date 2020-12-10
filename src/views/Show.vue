<template>
    <div class="section">
        <div class="title">
            <div class="action">
                <div class="back-button" @click="$router.push('/')">
                    <icon source="arrow-left" />
                </div>
            </div>

            Work Detail

        </div>
        <div class="body">
            <empty v-if="!loading && !item" />

            <div class="work-item single" v-if="!loading && item">
                <div class="work-item__title">
                    {{ item.work.title }}
                </div>
                <div class="work-item__metas">
                    <div class="meta">
                        <icon source="clock-time-four-outline" />
                        {{ item.work.time }} Saat
                    </div>
                    <div class="meta">
                        <div class="level level-1">
                            Zorluk {{ item.work.level }}x
                        </div>
                    </div>
                </div>
            </div>

            <div class="profiles" v-if="!loading && item">
                <div class="profile-item" v-for="(developer, developerIndex) in item.developers" :key="developer.id">
                    <div class="content">
                        <div class="avatar">
                            <img :src="'/img/avatar/' + (developerIndex + 1) + '.jpg'" alt="avatar">
                        </div>
                        <div class="text">
                            <div class="name">{{ developer.name }}</div>
                            <div class="meta">{{ developer.time }}h/{{ developer.level }}x</div>
                        </div>
                    </div>
                    <div class="time">
                        <icon source="clock-time-four-outline" />
                        <span v-if="developer.result.week">{{ developer.result.week }} Hafta,</span>
                        <span v-if="developer.result.day">{{ developer.result.day }} Gun,</span>
                        <span v-if="developer.result.hour">{{ developer.result.hour }} Saat,</span>
                        <span v-if="developer.result.minute">{{ developer.result.minute }} Dakika,</span>
                        icerisinde tamamlaya bilir.
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'WorkShow',
    data() {
        return {
            loading: true,
            item: null
        }
    },
    mounted() {
        this.show();
    },
    methods: {
        show() {
            this.loading = true;

            this.$http
                .get('' + this.$route.params.id)
                .then(response => {
                    this.item = response.body.data;
                    this.loading = false;
                })
                .catch(() => {
                    this.loading = false;
                })
        }
    }
}
</script>
