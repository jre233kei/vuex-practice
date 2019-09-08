import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskView from '@/components/templates/KbnTaskView.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: {requresAuth: true}
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskView,
  meta: {requresAuth: true}
}, {
  path: '*',
  redirect: '/'
}]
