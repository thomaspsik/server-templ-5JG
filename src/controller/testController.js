import asyncHandler from 'express-async-handler';
import * as model from '../model/testModel.js';

// eslint-disable-next-line import/prefer-default-export
export const getTest = asyncHandler(async (_req, res) => {
  res.status(200).json(await model.getTest());
});
