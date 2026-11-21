import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const OrderItem = sequelize.define("OrderItem", {
   id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false, 
    primaryKey: true, 
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tourId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
  timeStart: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: "orders_item",
  timestamps: false, // tự động thêm 2 cột createdAt và updatedAt
})

export default OrderItem;
