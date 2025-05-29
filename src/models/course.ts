import { Model, Column, Table, DataType, PrimaryKey, Default } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
    tableName: 'courses',
    timestamps: true,
})
export class Course extends Model<Course> {
    @PrimaryKey
    @Default(uuidv4)
    @Column(DataType.UUID)
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    uniqueCode!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;

    @Column(DataType.TEXT)
    description?: string;
}
export default Course;