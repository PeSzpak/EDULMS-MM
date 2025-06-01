export interface CreateCourseDTO {
    uniqueCode: string;
    title: string;
    description?: string;
    userId: number;
}