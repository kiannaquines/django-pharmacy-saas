import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        symfonyPlugin(),
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js",
                dashboard: "./assets/js/pages/dashboard-ecommerce.js",
                calendar: "./assets/js/pages/apps-calendar.js",
                orders: "./assets/js/pages/apps-ecommerce-orders.js",
                mailbox: "./assets/js/pages/apps-mailbox.js",
                analytics: "./assets/js/pages/dashboard-analytics.js",
                email: "./assets/js/pages/dashboard-email.js",
                dashboard_hr: "./assets/js/pages/dashboard-hr.js",
                landing: "./assets/js/pages/landing.js",
                comingsoon: "./assets/js/pages/pages-comingsoon.js",
                dropzone: "./assets/js/components/dropzone.js",
                input_spin: "./assets/js/components/input-spin.js",
                timepicker: "./assets/js/components/timepicker.js"
            }
        }
    },
    server: {
        host: "127.0.0.1",
        port: 5173,
    }
});
