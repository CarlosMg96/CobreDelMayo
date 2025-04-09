import HomeStart from "@/modules/home/HomeStart.vue";
import ListSections from "@/modules/sections/views/ListSections.vue";
import updateAbout from "@/modules/sections/views/updatePages/updateAbout.vue";
import updateEsg from "@/modules/sections/views/updatePages/updateEsg.vue";
import updateHistory from "@/modules/sections/views/updatePages/updateHistory.vue";
import updateHome from "@/modules/sections/views/updatePages/updateHome.vue";
import updateLocation from "@/modules/sections/views/updatePages/updateLocation.vue";
import updateOperations from "@/modules/sections/views/updatePages/updateOperations.vue";

export default [
    {
      path: "",
      component: () =>
        import( "@/layouts/PrivateLayout.vue"),
      meta: {
        requireAuth: true,
        role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
        area: ['FRONTERA', 'NA']
      },
      children: [
        {
          path: "start",
          name: "start",
          component: HomeStart,
          meta: {
            title: "Inicio",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "list-sections",
          name: "list-sections",
          component: ListSections,
          meta: {
            title: "Lista de Secciones",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "update-about",
          name: "update-about",
          component: updateAbout,
          meta: {
            title: "Actualizar Acerca de",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "update-esg",
          name: "update-esg",
          component: updateEsg,
          meta: {
            title: "Actualizar ESG",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "update-history",
          name: "update-history",
          component: updateHistory,
          meta: {
            title: "Actualizar Historia",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "update-home",
          name: "update-home",
          component: updateHome,
          meta: {
            title: "Actualizar Inicio",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "update-location",
          name: "update-location",
          component: updateLocation,
          meta: {
            title: "Actualizar Ubicación",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "update-operations",
          name: "update-operations",
          component: updateOperations,
          meta: {
            title: "Actualizar Operaciones",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        }
      ],
    },
  ];