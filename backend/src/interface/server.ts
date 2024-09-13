import express from "express";
import motoRoutes from "./routes/motoRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/motos", motoRoutes);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
