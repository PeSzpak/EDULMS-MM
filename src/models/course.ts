import {
    Model,
    Column,
    Table,
    DataType,
    PrimaryKey,
    Default,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

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
    
     @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}
export default Course;