export interface GetUserDTO {
    id: string;
    name: string;
    email: string;
    status: 'active' | 'inactive';
    createdAt: Date;
    updatedAt: Date;
}