import { Request, Response } from 'express';
import { ContentService } from '../services/ContentService';
import { CreateContentDTO } from '../dtos/content/CreateContentDTO';
import { UpdateContentDTO } from '../dtos/content/UpdateContentDTO';
import { GetContentDTO } from '../dtos/content/GetContentDTO';

export class ContentController {
    private contentService = new ContentService();

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data: CreateContentDTO = req.body;
            const content = await this.contentService.create(data);
            return res.status(201).json(content);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const content = await this.contentService.getById(req.params.id);
            if (!content) return res.status(404).json({ message: 'Content not found' });
            return res.json(content);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const filters: GetContentDTO = req.query;
            const contents = await this.contentService.getAll(filters);
            return res.json(contents);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const data: UpdateContentDTO = req.body;
            const content = await this.contentService.update(req.params.id, data);
            if (!content) return res.status(404).json({ message: 'Content not found' });
            return res.json(content);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const success = await this.contentService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: 'Content not found' });
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}