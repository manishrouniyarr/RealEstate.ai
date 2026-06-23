import { pool } from '../config/db.js';

export const getAllProperties = async (req, res) => {
  try {
    const { city, property_type, price_type, min_price, max_price, bedrooms } = req.query;

    let query = 'SELECT * FROM properties WHERE 1=1';
    const params = [];
    let i = 1;

    if (city) {
      query += ` AND LOWER(city) LIKE LOWER($${i++})`;
      params.push(`%${city}%`);
    }
    if (property_type) {
      query += ` AND LOWER(property_type) = LOWER($${i++})`;
      params.push(property_type);
    }
    if (price_type) {
      query += ` AND price_type = $${i++}`;
      params.push(price_type);
    }
    if (min_price) {
      query += ` AND price >= $${i++}`;
      params.push(min_price);
    }
    if (max_price) {
      query += ` AND price <= $${i++}`;
      params.push(max_price);
    }
    if (bedrooms) {
      query += ` AND bedrooms = $${i++}`;
      params.push(bedrooms);
    }

    query += ' ORDER BY is_featured DESC, created_at DESC';

    const result = await pool.query(query, params);
    res.json({ success: true, count: result.rows.length, properties: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM properties WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json({ success: true, property: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFeaturedProperties = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM properties WHERE is_featured = true ORDER BY created_at DESC'
    );
    res.json({ success: true, properties: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};