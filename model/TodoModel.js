import {DataTypes} from "sequelize";
import db from "../config/db";

const TodoModel = db.define("todo",{
    id : {
        type : DataTypes.INTEGER, 
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull :false,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    date : {
        type : DataTypes.DATE,
        defaultValue : DataTypes.NOW,
    }
})
export default TodoModel;