export interface UpdateUserDTO {
    name?: string;
    email?: string;
    status?: 'active' | 'inactive';
}