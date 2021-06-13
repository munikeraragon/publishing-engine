import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ContactMessageAttributes {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    phone: string;
    country: string;
    message: string;
    dateCreated?: Date;
}

export type ContactMessagePk =
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'company'
    | 'phone'
    | 'country'
    | 'message';
export type ContactMessageId = ContactMessage[ContactMessagePk];
export type ContactMessageCreationAttributes = Optional<ContactMessageAttributes, ContactMessagePk>;

export class ContactMessage
    extends Model<ContactMessageAttributes, ContactMessageCreationAttributes>
    implements ContactMessageAttributes
{
    firstName!: string;
    lastName!: string;
    email!: string;
    company!: string;
    phone!: string;
    country!: string;
    message!: string;
    dateCreated?: Date;

    static initModel(sequelize: Sequelize.Sequelize): typeof ContactMessage {
        ContactMessage.init(
            {
                firstName: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                lastName: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                email: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                company: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                phone: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                country: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true
                },
                message: {
                    type: DataTypes.STRING(1000),
                    allowNull: false,
                    primaryKey: true
                },
                dateCreated: {
                    type: DataTypes.DATE,
                    allowNull: true,
                    defaultValue: Sequelize.Sequelize.fn('current_timestamp')
                }
            },
            {
                sequelize,
                tableName: 'ContactMessage',
                timestamps: false,
                indexes: [
                    {
                        name: 'PRIMARY',
                        unique: true,
                        using: 'BTREE',
                        fields: [
                            { name: 'firstName', length: 50 },
                            { name: 'lastName', length: 50 },
                            { name: 'email', length: 50 },
                            { name: 'company', length: 50 },
                            { name: 'country', length: 50 },
                            { name: 'phone', length: 50 },
                            { name: 'message', length: 100 }
                        ]
                    }
                ]
            }
        );
        return ContactMessage;
    }
}
