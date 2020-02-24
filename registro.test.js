const functions = require('./controllers/auth');

//Test del resgistro

describre("registro", () => {
    it('El correo ya esta registrado,', () => {
        expect(functions.registro("paz@paz.com")).toBe("El usuario ya existe");
    });
});