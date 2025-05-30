import { BaseRepository } from './BaseRepository';
import Course from '../models/Course';
 
export class CourseRepository extends BaseRepository<Course> {
    constructor() {
        super(Course);
    }
}