module.exports = {
    apps: [
        {
            name: "new.lishlazz.com",
            exec_mode: "cluster",
            instances: "1",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 3009,
                DOMAIN: "lishlazz.com",
                COOKIE_SECURE: "true",
                REMOTE_PATTERN_HTTP: "false",
                RECAPTCHA_SITE_KEY: "",
            },
        },
    ],
};
