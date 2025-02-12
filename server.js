const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta GET para probar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// Ruta POST para crear un usuario
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Simulación de creación de usuario (normalmente aquí guardarías en la base de datos)
    const newUser = { id: Date.now(), name, email, password };

    res.status(201).json({ message: 'Usuario creado con éxito', user: newUser });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});