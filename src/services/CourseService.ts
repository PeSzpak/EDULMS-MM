import {Course} from '../models/Course';
import { CreateCourseDTO } from '../dtos/course/CreateCourseDTO';
import { UpdateCourseDTO } from '../dtos/course/UpdateCourseDTO';
import { ListCoursesDTO } from '../dtos/course/ListCoursesDTO';
import { CourseRepository } from '../repositories/CourseRepository';
import { Op } from 'sequelize';
 
export class CourseService {
    private courseRepository: CourseRepository;
 
    constructor() {
        this.courseRepository = new CourseRepository();
    }
 
    async createCourse(data: CreateCourseDTO): Promise<Course> {
        return this.courseRepository.create(data);
    }
 
    async getCourseById(id: string): Promise<Course | null> {
        return this.courseRepository.findById(id);
    }
 
    async listCourses(filters?: ListCoursesDTO): Promise<Course[]> {
        const where: any = {};
 
        if (filters?.title) {
            where.title = { [Op.iLike]: `%${filters.title}%` };
        }
 
        if (filters?.uniqueCode) {
            where.uniqueCode = filters.uniqueCode;
        }

          if (filters?.userId) {
            where.userId = filters.userId;
        }
       
        return Course.findAll({ where });
    }
 
    async updateCourse(id: string, data: UpdateCourseDTO): Promise<Course | null> {
        return this.courseRepository.update(id, data);
    }
 
    async deleteCourse(id: string): Promise<boolean> {
        return this.courseRepository.delete(id);
    }
}
 