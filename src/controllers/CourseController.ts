import { Request, Response } from 'express';
import { CourseService } from '../services/CourseService';
import { CreateCourseDTO } from '../dtos/course/CreateCourseDTO';
import { UpdateCourseDTO } from '../dtos/course/UpdateCourseDTO';
import { ListCoursesDTO } from '../dtos/course/ListCoursesDTO';
 
export class CourseController {
    private courseService = new CourseService();
 
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data: CreateCourseDTO = req.body;
            const course = await this.courseService.createCourse(data);
            return res.status(201).json(course);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const course = await this.courseService.getCourseById(req.params.id);
            if (!course) return res.status(404).json({ message: 'Course not found' });
            return res.json(course);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async list(req: Request, res: Response): Promise<Response> {
        try {
            const filters: ListCoursesDTO = req.query;
            const courses = await this.courseService.listCourses(filters);
            return res.json(courses);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data: UpdateCourseDTO = req.body;
            const course = await this.courseService.updateCourse(req.params.id, data);
            if (!course) return res.status(404).json({ message: 'Course not found' });
            return res.json(course);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const success = await this.courseService.deleteCourse(req.params.id);
            if (!success) return res.status(404).json({ message: 'Course not found' });
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
 