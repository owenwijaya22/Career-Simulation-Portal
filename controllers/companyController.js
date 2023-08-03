import Company from '../models/companyModel.js';

export async function getAllCompanies(req, res) {
  try {
    const companies = await Company.find();
    if (!companies) {
      return res.status(404).json({ message: 'No companies found' });
    }
    return res.status(200).json({
      companies,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCompanyById(req, res) {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ message: 'No company found with that ID' });
    }
    return res.status(200).json({
      company,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createCompany(req, res) {
  try {
    // const { name, address, phone, email } = req.body;
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.image ||
      !req.body.video ||
      !req.body.website
    ) {
      return res.status(400).json({ message: 'Missing Fields' });
    }
    const company = await Company.create(req.body);
    return res.status(201).json({
      company,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function updateCompany(req, res) {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ message: 'No company found with that ID' });
    }
    req.body.modifiedAt = Date.now();
    const updatedCompany = await Company.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json(updatedCompany);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteCompany(req, res) {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ message: 'No company found with that ID' });
    }
    await Company.findByIdAndDelete(id);
    return res.status(204).json({ status: 'Company deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
