import { Router } from 'express';

import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from '../controllers/companyController.js';

const companyRouter = Router();

companyRouter.route('/').get(getAllCompanies).post(createCompany);
companyRouter
  .route('/:id')
  .get(getCompanyById)
  .put(updateCompany)
  .delete(deleteCompany);

export default companyRouter;
