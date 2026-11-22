import {Express} from 'express';
import { categoryRouters } from './category-route';
import { systemConfig } from '../../config/system';
import { tourRouters } from './tour-route';

const adminRoutes = (app: Express): void => {

  const PATH_ADMIN = `/${systemConfig.prefixAdmin}`;

  app.use(`${PATH_ADMIN}/categories`, categoryRouters);

  app.use(`${PATH_ADMIN}/tours`, tourRouters);
}

export default adminRoutes;