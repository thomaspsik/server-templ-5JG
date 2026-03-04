import { query } from '../../boilerplate/db/index.js';

// eslint-disable-next-line import/prefer-default-export
export const getTest = async () => {
  const { rows } = await query("SELECT 'It works' as test");
  return rows;
};
