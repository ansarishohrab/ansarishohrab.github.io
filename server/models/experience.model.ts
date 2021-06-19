import { Column, Model, Table } from "sequelize-typescript";

export interface ExperienceI {
  designation: string;
  company: string;
  joiningDate: Date;
  endDate: Date;
  description: string;
}

@Table
export default class Experience extends Model implements ExperienceI {
  @Column
  designation!: string;
  @Column
  company!: string;
  @Column
  joiningDate!: Date;
  @Column
  endDate!: Date;
  @Column
  description!: string;
}
