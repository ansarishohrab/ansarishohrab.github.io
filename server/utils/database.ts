import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize("portfolio-data", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  models: [__dirname + "/../models"],
});
