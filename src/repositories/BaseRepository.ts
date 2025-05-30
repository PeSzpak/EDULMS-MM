import { Model, ModelStatic, FindOptions, WhereOptions } from 'sequelize';
 
export class BaseRepository<T extends Model> {
    protected model: ModelStatic<T>;
 
    constructor(model: ModelStatic<T>) {
        this.model = model;
    }
 
    async create(data: Partial<T>): Promise<T> {
        return this.model.create(data as any); // Type-safe com DTO validado antes
    }
 
    async findById(id: string): Promise<T | null> {
        return this.model.findByPk(id);
    }
 
    async findAll(filters?: WhereOptions): Promise<T[]> {
        return this.model.findAll({ where: filters } as FindOptions);
    }
 
    async update(id: string, data: Partial<T>): Promise<T | null> {
        const instance = await this.model.findByPk(id);
        if (!instance) return null;
        await instance.update(data as any);
        return instance;
    }
 
    async delete(id: string): Promise<boolean> {
        const deleted = await this.model.destroy({ where: { id } as any });
        return deleted > 0;
    }
 
}