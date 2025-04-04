import HomeStart from "@/modules/home/HomeStart.vue";
import ListEsg from "@/modules/esg/views/ListEsg.vue";
import CreateEsg from "@/modules/esg/views/CreateEsg.vue";

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
          path: "list-esg",
          name: "list-esg",
          component: ListEsg,
          meta: {
            title: "Lista de Esg",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
        {
          path: "create-esg",
          name: "create-esg",
          component: CreateEsg,
          meta: {
            title: "Nuevo Esg",
            role: ['MASTER', 'ADMIN', 'SUPERADMIN'],
            area: ['FRONTERA']
          },
        },
      ],
    },
  ];