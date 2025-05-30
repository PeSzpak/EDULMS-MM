export interface GetCourseDTO {
    id: string;
    uniqueCode: string;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}