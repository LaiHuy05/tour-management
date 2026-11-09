import { Request, Response } from 'express';
import category from '../../models/category.model';

// GET /categories
export const index =async (req: Request, res: Response): Promise<void> => {
  const categories = await category.findAll({
    where: {
      deleted: false,
      status: 'active',
    },
    raw: true,
  })

  res.render('client/pages/categories/index', {
    title: 'Danh mục tour',
    categories: categories,
  });
}