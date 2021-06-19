import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

export interface socialI {
  redirectionLink: string;
  name: string;
  iconClass: string;
}

@Table
export default class Social extends Model implements socialI {
  @Column
  redirectionLink!: string;
  @Column
  name!: string;
  @Column
  iconClass!: string;
}
