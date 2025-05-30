import express, { Request, Response, Router } from 'express';
import { ContentController } from '../controllers/ContentController';

const router: Router = express.Router();
const controller = new ContentController();

router.post('/', (req: Request, res: Response) => void controller.create(req, res));
router.get('/', (req: Request, res: Response) => void controller.list(req, res));
router.get('/:id', (req: Request, res: Response) => void controller.getById(req, res));
router.put('/:id', (req: Request, res: Response) => void controller.update(req, res));
router.delete('/:id', (req: Request, res: Response) => void controller.delete(req, res));

export default router;