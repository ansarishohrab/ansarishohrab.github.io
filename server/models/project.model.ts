import { Column, Model, Table } from "sequelize-typescript";

export interface ProjectI {
  title: string;
  description: string;
}

@Table
export default class Project extends Model implements ProjectI {
  @Column
  title!: string;
  @Column
  description!: string;
}
