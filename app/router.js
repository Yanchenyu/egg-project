module.exports = app => {
    const { router, controller } = app;

    // home
    router.get("/", controller.home.index);

    // user
    router.get("/user/:id", controller.user.info);
};
