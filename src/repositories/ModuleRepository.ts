import { BaseRepository } from './BaseRepository';
import { Module } from '../models/Module';
 
export class ModuleRepository extends BaseRepository<Module> {
    constructor() {
        super(Module);
    }
}