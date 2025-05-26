import { Model, ModelStatic, FindOptions, CreationAttributes, UpdateOptions, WhereOptions } from 'sequelize';

export class BaseRepository<T extends Model> {
    private model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this.model = model;
    }

    async findAll(options: FindOptions = {}): Promise<T[]> {
        return this.model.findAll(options);
    }

    async findById(id: number): Promise<T | null> {
        return this.model.findByPk(id);
    }

    async create(data: CreationAttributes<T>): Promise<T> {
        return this.model.create(data);
    }

    async update(id: number, data: Partial<CreationAttributes<T>>, options: Omit<UpdateOptions, 'where'> = {}): Promise<number | null> {
        const [affectedCount] = await this.model.update(data, { ...options, where: { ...(options as any).where, id } as WhereOptions });
        return affectedCount > 0 ? id : null;
    }

    async delete(id: number): Promise<number> {
        // Use a generic where clause to avoid type issues
        return this.model.destroy({ where: { id } as WhereOptions });
    }
}
