import {
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType,
} from "sequelize-typescript";

export interface UserI {
  profileImage: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  designation: string;
  description: string;
  country: string;
  state: string;
  city: string;
}

@Table
export default class User extends Model implements UserI {
  @Column(DataType.BLOB)
  profileImage!: string;
  @Column
  firstname!: string;
  @Column
  lastname!: string;
  @PrimaryKey
  @Column
  email!: string;
  @Column
  phone!: string;
  @Column
  designation!: string;
  @Column(DataType.BLOB)
  description!: string;
  @Column
  country!: string;
  @Column
  state!: string;
  @Column
  city!: string;
}
