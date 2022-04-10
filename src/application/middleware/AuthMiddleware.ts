const jwt = require('jsonwebtoken');

module.exports = (request: any, response: any, next: any) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: "Token não encontrado!" });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return response.status(401).json({ error: "Erro no token!" });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return response.status(401).json({ error: "Token mal formatado!" });
    }

    jwt.verify(token, process.env.SECRET, (error: Error, decoded: any) => {
        if (error) {
            return response.status(401).json({ error: error.message });
        }

        request.userId = decoded.id;
        return next();
    });
};
