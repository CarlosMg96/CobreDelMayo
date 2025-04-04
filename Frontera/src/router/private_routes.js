import HomeStart from "@/modules/home/HomeStart.vue";
import ListSections from "@/modules/sections/views/ListSections.vue";
import updateAbout from "@/modules/sections/views/updatePages/updateAbout.vue";

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
        }
      ],
    },
  ];