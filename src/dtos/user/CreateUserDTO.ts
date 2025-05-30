export interface CreateUserDTO {
    name: string;
    email: string;
    status?: 'active' | 'inactive';
}