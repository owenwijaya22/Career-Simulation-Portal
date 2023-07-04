import { Router } from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from '../controllers/companyController.js';

const companyRouter = Router();

/**
 * GET /api/companies
 * @summary This endpoint retrieves all companies
 * @tags companies
 * @return {object} 200 - Success response - application/json
 */
/**
 * POST /api/companies
 * @summary This endpoint creates a new company
 * @tags companies
 * @return {object} 201 - Success response - application/json
 */
companyRouter.route('/').get(getAllCompanies).post(createCompany);

/**
 * GET /api/companies/:id
 * @summary This endpoint retrieves a company by ID
 * @tags companies
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * PUT /api/companies/:id
 * @summary This endpoint updates a company by ID
 * @tags companies
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * DELETE /api/companies/:id
 * @summary This endpoint deletes a company by ID
 * @tags companies
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
companyRouter.route('/:id').get(getCompanyById).put(updateCompany).delete(deleteCompany);

export default companyRouter;
