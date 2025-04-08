import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import { h, resolveComponent } from 'vue';
import publicRoutes from "@/router/public_routes";
import NotFound from '@/public/views/errorPages/NotFound.vue';
import Unauthorized from '@/public/views/errorPages/AccessDenied.vue';
import Login from '@/public/views/UserLogin.vue';
import { getRoleByToken, getToken, getAreaByToken } from "@/kernel/utils"; // Asegúrate de tener una función para obtener el área
import privateRoutes from "@/router/private_routes";


const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/',
    component: {
      render() {
        return h(resolveComponent("router-view"))
      }
    },
    children: [
      ...publicRoutes.map(route => {
        route.meta.requireAuth = false
        return { ...route }
      }),
      ...privateRoutes.map(route => {
        route.meta.requireAuth = true
        return { ...route }
      }),
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  },
  {
    name: "unautorized",
    path: "/unautorized",
    component: Unauthorized
  },
  {
    path: '/admin',
    name: 'admin',
    component: Login,
    meta: {
      title: 'Inicio de sesión'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const publicRoutes = ["/admin", "/unautorized", "/home", "/about", "not-found", "/history", "/esg", "/operations", "/location", "/gallery" ];
  const authRequired = !publicRoutes.includes(to.path);
  const loggedIn = getToken();

  if (authRequired && !loggedIn) {
    return next("/admin");
  }

  if (loggedIn) {
    const role = await getRoleByToken();

    if (role) {
      // Verificar si el rol del usuario está en los roles permitidos
      if (to.meta && to.meta.role && Array.isArray(to.meta.role)) {
        if (!to.meta.role.includes(role.toUpperCase())) {
          return next("/unautorized");
        }
      } else if (to.meta && to.meta.role && to.meta.role.toString().toLowerCase() !== role.toString().toLowerCase()) {
        return next("/unautorized");
      }

      // Verificación del área
      const userArea = await getAreaByToken(); // Obtén el área del usuario
      if (to.meta && to.meta.area && Array.isArray(to.meta.area)) {
        // Si el área está definida como un arreglo en la ruta, verificamos si el área del usuario está permitido
        if (!to.meta.area.includes(userArea)) {
          return next("/unautorized");
        }
      }
    } else {
      return next("/home");
    }
    next();
  }

  if (loggedIn && to.path.toString().toLowerCase() === "/home") {
    return next("/start");
  }

  next();
});


export default router;
