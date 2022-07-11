const routes = [
  {
    path: "/test",
    name: "test",
    component: "test",
    hideInMenu: true,
  },
  {
    path: "/scene",
    name: "scene",
    component: "blank",
    routes: [
      {
        path: "scene",
        name: "scene",
        component: "scene",
      },
    ],
  },
  {
    path: "/crm",
    name: "crm",
    component: "admin",
    routes: [
      {
        path: "dashboard",
        name: "dashboard",
        component: "crm/dashboard",
      },
      {
        path: "task",
        name: "task",
        component: "crm/task",
      },
      {
        path: "statistics",
        name: "statistics",
        component: "crm/statistics",
      },
    ],
  },
];

export default routes;
