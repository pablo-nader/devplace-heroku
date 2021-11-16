import methodOverride from "method-override";
import cors from "cors";
import express from "express";
//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero", "marge"]; 

app.use(cors());
app.use(methodOverride());

app.get("/users", (req, res) => {
   res.send(users);
});

app.post("/user/create/:nombre", (req, res) => {
   users.push(req.params.nombre);
   res.send("usuario creado");
});

app.delete("/user/delete/:nombre", (req, res) => {
   //  let index = users.indexOf(req.params.nombre);
   //  users.splice(index, 1);
   users.find(e => e !== req.params.nombre);
   res.send("usuario eliminado");
});

app.put("/user/:nombre/:nuevo", (req, res) => {
   let index = users.indexOf(req.params.nombre);
   users[index] = req.params.nuevo;
   res.send("Usuario actualizado");
});

app.listen(port, () => {
    log("server start");
});