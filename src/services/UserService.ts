import { User } from '../models/User';
import { CreateUserDTO } from '../dtos/user/CreateUserDTO';
import { UpdateUserDTO } from '../dtos/user/UpdateUserDTO';
import { GetUserDTO } from '../dtos/user/GetUserDTO';
import { UserRepository } from '../repositories/UserRepository';
import { Op } from 'sequelize';

export class UserService {
    private userRepository = new UserRepository();

    async create(data: CreateUserDTO): Promise<User> {
        return this.userRepository.create(data);
    }

    async getById(id: string): Promise<User | null> {
        return this.userRepository.findById(id);
    }

    async getAll(filters?: GetUserDTO): Promise<User[]> {
        const where: any = {};

        if (filters?.name) {
            where.name = { [Op.iLike]: `%${filters.name}%` };
        }

        if (filters?.email) {
            where.email = { [Op.iLike]: `%${filters.email}%` };
        }

        if (filters?.status !== undefined) {
            where.status = filters.status;
        }

        return this.userRepository.findAll(where);
    }

    async update(id: string, data: UpdateUserDTO): Promise<User | null> {
        return this.userRepository.update(id, data);
    }

    async delete(id: string): Promise<boolean> {
        return this.userRepository.delete(id);
    }
}