import { Pool } from 'pg';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


export const query = async (text: string, params?: any[]): Promise<any> => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
};
