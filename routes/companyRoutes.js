const router = require('express').Router();

const {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require('../controllers/companyController');

router.route('/').get(getAllCompanies).post(createCompany);
router
  .route('/:id')
  .get(getCompanyById)
  .put(updateCompany)
  .delete(deleteCompany);

module.exports = router;
