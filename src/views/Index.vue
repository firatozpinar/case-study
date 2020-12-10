<template>
    <div class="section">
        <div class="title">
            Works
        </div>
        <div class="body" v-loading="loading">
            <empty v-if="!loading && !items" />

            <div v-if="!loading && items">
                <div class="work-item" v-for="item in items" :key="item.id" @click="$router.push('/' + item.id)">
                    <div class="work-item__title">
                        {{ item.title }}
                    </div>
                    <div class="work-item__metas">
                        <div class="meta">
                            <icon source="clock-time-four-outline" />
                            {{ item.time }} Saat
                        </div>
                        <div class="meta">
                            <div class="level" :class="'level-' + item.level">
                                Zorluk {{ item.level }}
                            </div>
                        </div>
                    </div>
                </div>

                <div style="text-align: center; padding-top: 40px" v-if="paginate.total > paginate.per_page">
                    <el-pagination
                        :page-size="paginate.per_page"
                        @current-change="handleChangePage"
                        :current-page="paginate.current_page"
                        background
                        layout="prev, pager, next"
                        :total="paginate.total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkIndex',
    data() {
        return {
            loading: true,
            paginate: {
                current_page: 1,
                per_page: 0,
                total: 0,
            },
            items: null
        }
    },
    mounted() {
        this.index();
    },
    methods: {
        index() {
            this.loading = true;

            this.$http
                .get('', {params : {page : this.paginate.current_page}})
                .then(response => {
                    this.items = this.lodash.size(response.body.data) ? response.body.data : null;
                    this.paginate = response.body.paginate;
                    this.loading = false;
                })
                .catch(() => {
                    this.loading = false;
                })
        },

        handleChangePage(page) {
            this.paginate.current_page = page;
            this.index();
        }
    }
}
</script>
