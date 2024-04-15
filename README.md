# Desafío - Citas Médicas
## Descripción
Para este desafío, la Clínica Dende Spam requiere una aplicación que pueda registrar y almacenar nuevos usuarios. En consecuencia, se solicita la creación de un servidor que proporcione una ruta para consultar todos los usuarios registrados.
## Tecnologías Utilizadas
- NODE
## Requerimientos
1. El registro de los usuarios debe hacerse con la API Random User usando axios para
consultar la data. (2 Puntos)
2. Cada usuario registrado debe tener un campo id único generado por el paquete UUID.
(2 Puntos)
3. Cada usuario debe tener un campo timestamp almacenando la fecha de registro
obtenida y formateada por el paquete Moment. (2 Puntos)
4. Por cada consulta realizada al servidor, se debe devolverle al cliente una lista con los
datos de todos los usuarios registrados usando Lodash para dividir el arreglo en 2
separando los usuarios por sexo. (2 Puntos)
5. En cada consulta también se debe imprimir por la consola del servidor la misma lista
de usuarios pero con fondo blanco y color de texto azul usando el paquete Chalk. (1
Punto)
6. El servidor debe ser levantado con el comando Nodemon. (1 Punto)
