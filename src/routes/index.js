import Vue from 'vue'
import Router from 'vue-router'

/**
 * Pages
 */
import PageContainer from '../views/PageContainer'
import WorkIndex from '../views/Index'
import WorkShow from '../views/Show'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
        {
            path: '/',
            component: PageContainer,
            children: [
                {
                    name: 'api.marketing.campaigns.index',
                    path: '',
                    component: WorkIndex,
                },
                {
                    name: 'api.marketing.campaigns.edit',
                    path: ':id',
                    component: WorkShow,
                }
            ]
        },
	]
});

export default router;
