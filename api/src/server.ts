import { app } from "./register";
import { env } from "./util/env";

app.listen({
    port: env.port,
    host: '0.0.0.0'
}).then(() => {
    console.log(`Runner API http in port: ${env.port} 🍃`);
})