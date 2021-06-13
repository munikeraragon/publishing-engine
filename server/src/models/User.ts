import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserAttributes {
    firstName: string;
    lastName?: string;
    email: string;
    locale?: string;
    provider?: string;
    picture?: string;
}

export type UserPk = 'firstName' | 'email';
export type UserId = User[UserPk];
export type UserCreationAttributes = Optional<UserAttributes, UserPk>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    firstName!: string;
    lastName?: string;
    email!: string;
    locale?: string;
    provider?: string;
    picture?: string;

    static initModel(sequelize: Sequelize.Sequelize): typeof User {
        User.init(
            {
                firstName: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                lastName: {
                    type: DataTypes.STRING(255),
                    allowNull: true
                },
                email: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                locale: {
                    type: DataTypes.STRING(255),
                    allowNull: true
                },
                provider: {
                    type: DataTypes.STRING(255),
                    allowNull: true
                },
                picture: {
                    type: DataTypes.STRING(1000),
                    allowNull: true
                }
            },
            {
                sequelize,
                tableName: 'User',
                timestamps: false,
                indexes: [
                    {
                        name: 'PRIMARY',
                        unique: true,
                        using: 'BTREE',
                        fields: [{ name: 'email' }, { name: 'firstName' }]
                    }
                ]
            }
        );
        return User;
    }
}
