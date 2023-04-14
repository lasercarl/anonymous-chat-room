/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
    env:{
        LIVEKIT_API_KEY:"APIfwkyoNL9LdQc",
        LIVEKIT_API_SECRET:"W9tufWrqd6KyIMtSfTrDhJ36DNd8P5eJ3wsBxMeaD5gB",
        LIVEKIT_WS_URL:"wss://chat10-gdnwa483.livekit.cloud",
        // UMAMI_URL:"https://xxx/script.js",
        // UMAMI_ID:"xxx-xx-xx-xx-25d559c0b33d"
    }
};

module.exports = nextConfig;
