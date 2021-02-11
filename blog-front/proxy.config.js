const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/s"
        ],
        target: "http://localhost:3000",
        secure: false,
        logLevel: "debug"
    }
]

module.exports = PROXY_CONFIG;