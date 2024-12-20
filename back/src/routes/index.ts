import { Router } from 'express';
import usersRoutes from './usersRoutes';
import appointmentsRoutes from './appointmentsRoutes';
import emailRoutes from './emailRoutes';

const router: Router = Router();

router.use('/users', usersRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/email', emailRoutes);

export default router;
