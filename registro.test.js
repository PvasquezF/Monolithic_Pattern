const functions = require('./controllers/auth');

//Test del resgistro

let datos = {
    User_Name:'paz@paz.com',
    Correo_Electronico:'paz@paz.com',
    Primer_Nombre:'paz@paz.com',
    Segundo_Nombre:'paz@paz.com',
    Primer_Apellido:'paz@paz.com',
    Segundo_Apellido:'paz@paz.com',
    Telefono:'paz@paz.com',
    Fecha_Nacimiento:'paz@paz.com',
    Pais:'paz@paz.com',
    Ciudad:'paz@paz.com',
    Contrasena:'paz@paz.com'
};

describe("registro", () => {
    it('El correo ya esta registrado,', () => {
        expect(functions.registro(datos));
    });
});