import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const category = sequelize.define("category", {
   id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false, 
    primaryKey: true, 
  },
  title: {
    type : DataTypes.STRING(255),
    allowNull: false,
  },
  image: {
    type : DataTypes.TEXT("long"),
  },
  status: {
    type : DataTypes.STRING(20),
  },
  position: {
    type : DataTypes.INTEGER,
  },
  slug: {
    type : DataTypes.STRING(255),
    allowNull: false,
  },
  deleted: {
    type : DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deletedAt: {
    type : DataTypes.DATE,
  }
}, {
  tableName: "categories",
  timestamps: true, // tự động thêm 2 cột createdAt và updatedAt
})

export default category;
