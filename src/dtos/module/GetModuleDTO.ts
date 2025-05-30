export interface GetModuleDTO {
    id: string;
    courseId: string;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}