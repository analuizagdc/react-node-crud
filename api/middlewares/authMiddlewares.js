
const jwt = require('jsonwebtoken');

// Função para validar o token JWT
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    // Verifica se o token está presente
    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    // Verifica o token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido.' });
        }

        // Armazena os dados decodificados do token na requisição
        req.user = decoded;
        next();
    });
}

function checkRole(allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user.role; // 'role' do usuário decodificado do token

        // Verifica se o role do usuário está nos roles permitidos
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: 'Acesso negado.' });
        }

        next();
    };
}

const express = require('express');
const router = express.Router();
const { verifyToken, checkRole } = require('./middlewares/authMiddleware');

// Rota protegida, acessível apenas por usuários 'admin'
router.get('/rota-protegida', verifyToken, checkRole(['admin']), (req, res) => {
    res.status(200).json({ message: 'Conteúdo acessível apenas para admins.' });
});

// Rota acessível para 'admin' e 'moderator'
router.post('/rota-moderador', verifyToken, checkRole(['admin', 'moderator']), (req, res) => {
    res.status(200).json({ message: 'Conteúdo acessível para admins e moderadores.' });
});

module.exports = { verifyToken, checkRole, router };

