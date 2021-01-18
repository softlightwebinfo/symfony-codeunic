import { Setting } from "../models/Setting";

const setting = new Setting(
    "Cientos de anuncios",
    "logo.png",
    "http://localhost:8080",
    "http://localhost:3000/api",
).setImageArticle("/static/uploads");

export default setting;