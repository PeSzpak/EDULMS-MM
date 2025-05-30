import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { CreateUserDTO } from '../dtos/user/CreateUserDTO';
import { UpdateUserDTO } from '../dtos/user/UpdateUserDTO';

export class UserController {
    private userService = new UserService();

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data: CreateUserDTO = req.body;
            const user = await this.userService.create(data);
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.userService.getById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            return res.json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.getAll();
            return res.json(users);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data: UpdateUserDTO = req.body;
            const user = await this.userService.update(req.params.id, data);
            if (!user) return res.status(404).json({ message: 'User not found' });
            return res.json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const success = await this.userService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: 'User not found' });
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}