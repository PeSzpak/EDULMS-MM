import { Module } from '../models/Module';
import { CreateModuleDTO } from '../dtos/module/CreateModuleDTO';
import { UpdateModuleDTO } from '../dtos/module/UpdateModuleDTO';
import { ListModulesDTO } from '../dtos/module/ListModulesDTO';
import { ModuleRepository } from '../repositories/ModuleRepository';
import { Op } from 'sequelize';
 
export class ModuleService {
    private moduleRepository: ModuleRepository;
 
    constructor() {
        this.moduleRepository = new ModuleRepository();
    }
 
    async createModule(data: CreateModuleDTO): Promise<Module> {
        return this.moduleRepository.create(data);
    }
 
    async getModuleById(id: string): Promise<Module | null> {
        return this.moduleRepository.findById(id);
    }
 
    async listModules(filters?: ListModulesDTO): Promise<Module[]> {
        const where: any = {};
 
        if (filters?.courseId) {
            where.courseId = filters.courseId;
        }
 
        if (filters?.title) {
            where.title = { [Op.iLike]: `%${filters.title}%` };
        }

         if (filters?.userId) {
            where.userId = filters.userId;
        }
 
        return this.moduleRepository.findAll(where);
    }
 
    async updateModule(id: string, data: UpdateModuleDTO): Promise<Module | null> {
        return this.moduleRepository.update(id, data);
    }
 
    async deleteModule(id: string): Promise<boolean> {
        return this.moduleRepository.delete(id);
    }
}