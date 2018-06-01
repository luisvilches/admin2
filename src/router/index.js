import Vue from 'vue'
import Router from 'vue-router'
// dashboard
import Dashboard from '@/pages/dashboard'
// proyectos
import ProyectosNew from '@/pages/proyectos/nuevo'
import ProyectosSearch from '@/pages/proyectos/buscar'
import ProyectosList from '@/pages/proyectos/listado'
// clientes
import ClientesNew from '@/pages/clientes/nuevo'
import ClientesSearch from '@/pages/clientes/buscar'
import ClientesList from '@/pages/clientes/listado'
// equipos
import TeamNew from '@/pages/equipos/nuevo'
import TeamSearch from '@/pages/equipos/buscar'
import TeamList from '@/pages/equipos/listado'
// usuarios
import UserNew from '@/pages/usuarios/nuevo'
import UserSearch from '@/pages/usuarios/buscar'
import UserList from '@/pages/usuarios/listado'
// app
import Categories from '@/pages/application/categories'
import ProyectosCategories from '@/pages/application/proyecto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/proyectos/new',
      name: 'nuevo-proyecto',
      component: ProyectosNew
    },
    {
      path: '/proyectos/search',
      name: 'buscar-proyecto',
      component: ProyectosSearch
    },
    {
      path: '/proyectos/list',
      name: 'listar-proyecto',
      component: ProyectosList
    },
    {
      path: '/clientes/new',
      name: 'nuevo-cliente',
      component: ClientesNew
    },
    {
      path: '/clientes/search',
      name: 'buscar-cliente',
      component: ClientesSearch
    },
    {
      path: '/clientes/list',
      name: 'listar-clientes',
      component: ClientesList
    },

    {
      path: '/equipos/new',
      name: 'nuevo-equipo',
      component: TeamNew
    },
    {
      path: '/equipos/search',
      name: 'buscar-equipo',
      component: TeamSearch
    },
    {
      path: '/equipos/list',
      name: 'listar-equipos',
      component: TeamList
    },

    {
      path: '/app/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/app/proyectos',
      name: 'tipo-proyecto',
      component: ProyectosCategories
    },


    {
      path: '/usuarios/new',
      name: 'nuevo-usuario',
      component: UserNew
    },
    {
      path: '/usuarios/search',
      name: 'buscar-usuario',
      component: UserSearch
    },
    {
      path: '/usuarios/list',
      name: 'listar-usuarios',
      component: UserList
    },

  ]
})
