const Company = require('../models/companyModel');

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    if (!companies) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No companies found' });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        companies,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No company found with that ID' });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        company,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    // const { name, address, phone, email } = req.body;
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.image ||
      !req.body.video ||
      !req.body.website
    ) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing Fields' });
    }
    const company = await Company.create(req.body);
    return res.status(201).json({
      status: 'success',
      data: {
        company,
      },
    });
  } catch (error) {
    return res.status(400).json({ status: 'error', message: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No company found with that ID' });
    }
    const updatedCompany = await Company.findByIdAndUpdate({ id }, req.body, {
      new: true,
      runValidators: true,
    });
    return res
      .status(200)
      .json({ status: 'success', data: { updatedCompany } });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No company found with that ID' });
    }
    await Company.findByIdAndDelete(id);
    return res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};
