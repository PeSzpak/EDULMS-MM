import express, { Request, Response, Router } from 'express';
import { ModuleController } from '../controllers/ModuleController';

const router: Router = express.Router();
const controller = new ModuleController();

router.post('/', (req: Request, res: Response) => {void controller.create(req, res);});
router.get('/', (req: Request, res: Response) => {void controller.list(req, res);});
router.get('/:id', (req: Request, res: Response) => {void controller.getById(req, res);});
router.put('/:id', (req: Request, res: Response) => {void controller.update(req, res);});
router.delete('/:id', (req: Request, res: Response) => {void controller.delete(req, res);});

export default router;