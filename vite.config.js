import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; 

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: "/"
    };

    // Adjust the base path only for non-development modes (e.g., build)
    if (command !== "serve") {
        config.base = "/lendlyfinal/";
    }

    return config;
});
