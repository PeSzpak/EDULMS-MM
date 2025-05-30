import {
    Table,
    Column,
    Model,
    PrimaryKey,
    Default,
    DataType,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { Course } from './Course';
 
@Table({
    tableName: 'modules',
    timestamps: true,
})
export class Module extends Model<Module> {
    @PrimaryKey
    @Default(uuidv4)
    @Column(DataType.UUID)
    id!: string;
 
    @ForeignKey(() => Course)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    courseId!: string;
 
    @BelongsTo(() => Course)
    course!: Course;
 
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;
 
    @Column(DataType.TEXT)
    description?: string;
}