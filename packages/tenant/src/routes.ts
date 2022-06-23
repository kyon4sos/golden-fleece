const routes = [
    {
        path: "/test",
        name: 'test',
        component: 'test',
        hideInMenu: true,
    },
    {
        path: "/admin",
        name: 'admin',
        component: 'admin',
        routes: [
            {
                path: "test1",
                name: 'test1',
                component: 'test',
            },
            {
                path: "test2",
                name: 'test2',
                component: 'test2',
            }
        ]
    }
]

export default routes