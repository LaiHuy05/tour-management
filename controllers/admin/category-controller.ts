import {Request, Response} from 'express';
import category from '../../models/category.model';

//[GET] /admin/categories
export const index = async (req: Request, res: Response) => {
  const categories = await category.findAll({
    where: {
      deleted: false
    }, 
    raw: true
  });

  res.render("admin/pages/categories/index", {
    pageTitle: "Danh mục tour",
    categories: categories
  })
}