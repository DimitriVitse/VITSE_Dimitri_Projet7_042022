import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Posts = db.define('Posts',
    {
        // nom: { type: DataTypes.STRING, allowNull: false },
        // prenom: { type: DataTypes.STRING, allowNull: false },
        // email: { type: DataTypes.STRING, allowNull: false },
        // userImg: { type: DataTypes.STRING, allowNull: true },
        postMsg: { type: DataTypes.STRING, allowNull: false }
    }
);

export default Posts;