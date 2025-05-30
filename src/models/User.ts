import {
    Table,
    Model,
    Column,
    PrimaryKey,
    Default,
    DataType,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
    tableName: 'users',
    timestamps: true,
})
export class User extends Model<User> {
    @PrimaryKey
    @Default(uuidv4)
    @Column(DataType.UUID)
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'active',
    })
    status!: string;
}