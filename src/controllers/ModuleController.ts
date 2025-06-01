import { Request, Response } from 'express';
import { ModuleService } from '../services/ModuleService';
import { CreateModuleDTO } from '../dtos/module/CreateModuleDTO';
import { UpdateModuleDTO } from '../dtos/module/UpdateModuleDTO';
import { ListModulesDTO } from '../dtos/module/ListModulesDTO';
 
export class ModuleController {
    private moduleService = new ModuleService();
 
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { title, description, courseId, userId } = req.body;

            if (!title || !courseId || !userId) {
                return res.status(400).json({ error: 'title, courseId, and userId are required' });
            }

            const data: CreateModuleDTO = {
                title,
                description,
                courseId,
                userId,
            };
            const module = await this.moduleService.createModule(data);
            return res.status(201).json(module);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const module = await this.moduleService.getModuleById(req.params.id);
            if (!module) return res.status(404).json({ message: 'Module not found' });
            return res.json(module);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async list(req: Request, res: Response): Promise<Response> {
        try {
            const filters: ListModulesDTO = req.query;
            const modules = await this.moduleService.listModules(filters);
            return res.json(modules);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data: UpdateModuleDTO = req.body;
            const module = await this.moduleService.updateModule(req.params.id, data);
            if (!module) return res.status(404).json({ message: 'Module not found' });
            return res.json(module);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
 
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const success = await this.moduleService.deleteModule(req.params.id);
            if (!success) return res.status(404).json({ message: 'Module not found' });
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}