import { Hono } from "hono";
console.log("hello form honojs");
const app = new Hono();
app.get("/", (c) => { return c.text("hello world"); });
export default app;
