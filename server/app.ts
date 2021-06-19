import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.routes";
import errorRoutes from "./routes/404.routes";
import defaultRoutes from "./routes/default.routes";
import { sequelize } from "./utils/database";
import User from "./models/user.model";
import Social from "./models/social.model";
import Project from "./models/project.model";
import Experience from "./models/experience.model";
import Skill from "./models/skill.model";
import Education from "./models/education.model";
import Language from "./models/language.model";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.get("/", defaultRoutes);
app.use(express.static(__dirname + '/public')).use(function (req, res) {
  res.sendFile(__dirname + '/public/' + 'index.html');
})

User.hasMany(Social, {
  sourceKey: "email",
  foreignKey: "email",
  onDelete: "cascade",
});
User.hasMany(Project, {
  sourceKey: "email",
  foreignKey: "email",
  onDelete: "cascade",
});
User.hasMany(Experience, {
  sourceKey: "email",
  foreignKey: "email",
  onDelete: "cascade",
});

User.hasMany(Skill, {
  sourceKey: "email",
  foreignKey: "email",
  onDelete: "cascade",
});

User.hasMany(Education, {
  sourceKey: "email",
  foreignKey: "email",
  onDelete: "cascade",
});

User.hasMany(Language, {
  sourceKey: "email",
  foreignKey: "email",
  onDelete: "cascade",
});
sequelize.sync();

app.listen(3000, () => {
  console.log("Server is running...");
});
