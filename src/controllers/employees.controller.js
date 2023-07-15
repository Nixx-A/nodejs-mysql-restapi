import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employee')
    res.json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'something went wrong' })
  }
}

export const getEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    if (!result[0]) return res.status(404).json({ message: 'Employee not found' })

    res.json(result[0])
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something went wrong' })
  }
}

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body
  try {
    const [result] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])

    res.send({
      id: result.insertId,
      name,
      salary
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'something went wrong' })

  }
}

export const updateEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const { name, salary } = req.body
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

    if (!result.affectedRows) return res.status(404).json({ message: 'Employee not found' })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    res.json(rows)
  } catch (err) {
    return res.status(500).json({ message: 'something went wrong' })
  }
}

export const deleteEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])
    if (!result.affectedRows) return res.status(404).json({ message: 'Employee not found' })
    res.sendStatus(204)
  } catch (err) {
    return res.status(500).json({ message: 'something went wrong' })
  }
}