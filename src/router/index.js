import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskOne from '../views/TaskOne.vue';
import TaskTwo from '../views/TaskTwo';
import TaskThree from '../views/TaskThree.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/task-one',
    name: 'TaskOne',
    component: TaskOne,
  },
  {
    path: '/task-two',
    name: 'TaskTwo',
    component: TaskTwo,
  },
  {
    path: '/task-three',
    name: 'TaskThree',
    component: TaskThree,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
