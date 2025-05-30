import { Content } from '../models/Content';
import { CreateContentDTO } from '../dtos/content/CreateContentDTO';
import { UpdateContentDTO } from '../dtos/content/UpdateContentDTO';
import { GetContentDTO } from '../dtos/content/GetContentDTO';
import { ContentRepository } from '../repositories/ContentRepository';
import { Op } from 'sequelize';

export class ContentService {
    private repository = new ContentRepository();

    async create(data: CreateContentDTO): Promise<Content> {
        return this.repository.create(data);
    }

    async getById(id: string): Promise<Content | null> {
        return this.repository.findById(id);
    }

    async getAll(filters?: GetContentDTO): Promise<Content[]> {
        const where: any = {};

        if (filters?.title) {
            where.title = { [Op.iLike]: `%${filters.title}%` };
        }

        if (filters?.moduleId) {
            where.moduleId = filters.moduleId;
        }

        return this.repository.findAll(where);
    }

    async update(id: string, data: UpdateContentDTO): Promise<Content | null> {
        return this.repository.update(id, data);
    }

    async delete(id: string): Promise<boolean> {
        return this.repository.delete(id);
    }
}