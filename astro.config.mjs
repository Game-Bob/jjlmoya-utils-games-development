import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
    integrations: [icon()],
    server: {
        port: 3022,
        host: true
    },
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 1000,
            }
        }
    }
});

