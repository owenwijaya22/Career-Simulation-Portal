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
 * @summary This endpoint retrieves all companies.
 * @tags companies
 * @return {object} 200 - An array of company objects. Each object contains company's name, description, image, video, website, creation and modification date.
 */
companyRouter.route('/').get(getAllCompanies);

/**
 * POST /api/companies
 * @summary This endpoint creates a new company.
 * @description Requires name, description, image, wvideo, and website in the request body. Returns the newly created company object along with its creation and modification date.
 * @tags companies
 * @param {object} request.body.required - The company's data to be created.
 * @return {object} 201 - Success response containing the created company's data including _id, name, description, image, video, website, createdAt and modifiedAt.
 * @example request - application/json
 * {
 *    "name": "OpenAI",
 *    "description": "Artificial Intelligence Company",
 *    "image": "https://www.example.com/logo.png",
 *    "video": "https://www.example.com/video.mp4",
 *    "website": "https://openai.com"
 * }
 *
 * @example response - 201 - application/json
 * {
 *   "status": "success",
 *   "data": {
 *     "company": {
 *       "_id": "6141f93c5120a6289c850431",
 *       "name": "OpenAI",
 *       "description": "Artificial Intelligence Company",
 *       "image": "https://www.example.com/logo.png",
 *       "video": "https://www.example.com/video.mp4",
 *       "website": "https://openai.com",
 *       "createdAt": "2023-09-13T14:54:20.804Z",
 *       "modifiedAt": "2023-09-13T14:54:20.804Z"
 *     }
 *   }
 * }
 */
companyRouter.route('/').post(createCompany);

/**
 * GET /api/companies/{id}
 * @summary This endpoint retrieves a company by ID.
 * @tags companies
 * @param {string} id.path.required - The ID of the company to retrieve.
 * @return {object} 200 - The company object for the specific ID.
 */
companyRouter.route('/:id').get(getCompanyById);

/**
 * PUT /api/companies/{id}
 * @summary This endpoint updates a company by ID. The ID in the URL is required.
 * @tags companies
 * @param {string} id.path.required - The ID of the company to update.
 * @param {object} request.body.required - The new data for the company. Can contain the fields name, description, image, video, website.
 * @return {object} 200 - Returns the updated company object.
 *
 * @example request - application/json
 * {
 *    "name": "OpenAI updated",
 *    "description": "Updated description",
 *    "image": "https://www.example.com/new_logo.png",
 *    "video": "https://www.example.com/new_video.mp4",
 *    "website": "https://new.openai.com"
 * }
 *
 */
companyRouter.route('/:id').put(updateCompany);

/**
 * DELETE /api/companies/{id}
 * @summary This endpoint deletes a company by ID.
 * @tags companies
 * @param {string} id.path.required - The ID of the company to delete.
 * @return {object} 204 - Returns success status with no content.
 */
companyRouter.route('/:id').delete(deleteCompany);

export default companyRouter;
