import {query} from "../db.js"

export const getOrders = async () => {
    const { rows } = await query("SELECT * FROM orders_tb ORDER BY id ASC");
    return rows;
};

export const createOrder = async(orderData) => {
    const { name, email, the_order, price, status } = orderData;

    const { rows } = await query(
        `INSERT INTO orders_tb (name, email, the_order, price, status)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, the_order, price, status]
    );
    
    return rows[0];

}

export const updateOrder = async (orderId, orderData) => {
    const { name, email, the_order, price, status } = orderData;

    const { rows } = await query(
        `UPDATE orders_tb SET name = $1, email = $2, the_order = $3, price = $4, status = $5
        WHERE id = $6 RETURNING *`,
        [name, email, the_order, price, status, orderId] 
    );
    
    return rows[0];
};

export const deleteOrder = async (orderId) => {
    const { rowCount } = await query(`DELETE FROM orders_tb WHERE ID = $1`, [orderId]);
    return rowCount > 0;
};

export const searchOrders = async (searchTerm) => {
    const { rows } = await query(
        `SELECT * FROM orders_tb WHERE name ILIKE $1 OR email ILIKE $1 OR the_order ILIKE $1`,
        [`%${searchTerm}%`]
    );
    return rows;
}