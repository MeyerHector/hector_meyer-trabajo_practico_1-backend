import { sequelize, Model, DataTypes } from "../../db.js";

export const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER(10)
        , primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
},
    {
        timestamps: true,
    })


try {
    user.sync({ force: false }).then(() => {
        console.log('Tabla de usuarios creada');
    });
} catch (error) {
    console.log('error al crear la tabla usuarios', error)
}
