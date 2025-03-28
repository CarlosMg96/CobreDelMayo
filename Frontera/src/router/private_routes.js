import HomeStart from "@/modules/home/HomeStart.vue";
import ListNews from "@/modules/news/views/ListNews.vue";
import CreateNews from "@/modules/news/views/CreateNews.vue";

export default [
    {
      path: "",
      component: () =>
        import( "@/layouts/PrivateLayout.vue"),
      meta: {
        requireAuth: true,
        role: ['MASTER', 'ADMIN']
      },
      children: [
        {
          path: "start",
          name: "start",
          component: HomeStart,
          meta: {
            title: "Inicio",
            role: ['MASTER', 'ADMIN']
          },
        },
        {
          path: "list-news",
          name: "list-news",
          component: ListNews,
          meta: {
            title: "Noticias",
            role: ['MASTER', 'ADMIN']
          },
        },
        {
          path: "create-news",
          name: "create-news",
          component: CreateNews,
          meta: {
            title: "Nueva noticia",
            role: ['MASTER', 'ADMIN']
          },
        },
      ],
    },
  ];