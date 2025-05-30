import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    ForeignKey,
    Default,
    BelongsTo,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { Module } from './Module';

@Table({
    tableName: 'contents',
    timestamps: true,
})
export class Content extends Model<Content> {
    @PrimaryKey
    @Default(uuidv4)
    @Column(DataType.UUID)
    id!: string;

    @ForeignKey(() => Module)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    moduleId!: string;

    @BelongsTo(() => Module)
    module!: Module;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    content!: string;
}