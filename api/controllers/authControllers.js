import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Controlador para registrar um novo usuário
const register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        // Verificar se o usuário já existe
        db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: 'Erro ao verificar usuário' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'Usuário já existe' });
            }

            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);

            // Inserir o novo usuário no banco de dados
            db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(400).json({ message: 'Erro ao registrar usuário', error: err });
                }

                res.status(201).json({ message: 'Usuário registrado com sucesso', userId: result.insertId });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Erro ao registrar usuário', error });
    }
};

// Controlador para realizar login
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Buscar o usuário no banco de dados
        db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: 'Erro ao buscar usuário' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Usuário ou senha inválidos' });
            }

            const user = results[0];

            // Comparar a senha
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                // Gerar o token JWT
                const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });

                res.status(200).json({ message: 'Login bem-sucedido', token });
            } else {
                res.status(401).json({ message: 'Usuário ou senha inválidos' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Erro ao realizar login', error });
    }
};

module.exports = { register, login };
