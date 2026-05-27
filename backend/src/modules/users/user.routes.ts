import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
const controller = new UserController();

router.get('/', async (req, res) => controller.getAll(req, res));
router.get('/:id', async (req, res) => controller.getById(req, res));
router.post('/', async (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', async (req, res) => controller.delete(req, res));

export default router;
