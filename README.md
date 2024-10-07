ACERCA DEL PROYECTO 

Este repositorio es un CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios implementado en Java usando JDBC y MySQL.
TECNOLOGIA PRINCIPAL 

JDBC: Para este proyecto se aplicó la teoría JDBC (Java Database Connectivity) como la tecnología principal para la conexión con la base de datos MySQL


VENTAJAS


•	Conectividad Sencilla: JDBC permite la conexión fácil y directa con bases de datos, lo que facilita la gestión de datos como facturas, clientes y productos.
•	Integración con Base de Datos: Permite utilizar diferentes tipos de bases de datos (MySQL, PostgreSQL, Oracle, etc.) sin necesidad de cambiar el código, lo que brinda flexibilidad para elegir la mejor opción para la óptica.
•	Operaciones SQL Efectivas: JDBC permite ejecutar consultas SQL de manera eficiente, lo que es fundamental para realizar operaciones de lectura y escritura de datos, como generar facturas y actualizar el inventario.
•	Transacciones: Soporta transacciones, lo que es crucial para garantizar la integridad de las operaciones, como asegurarse de que una factura se registre correctamente junto con su pago.
•	Escalabilidad: A medida que la óptica crece, JDBC puede escalar con facilidad, permitiendo manejar un mayor volumen de transacciones y datos sin comprometer el rendimiento.
•	Portabilidad: Al ser parte de Java, el software puede ejecutarse en diferentes plataformas, lo que ofrece flexibilidad en la infraestructura de TI de la óptica.
•	Seguridad: JDBC proporciona mecanismos de autenticación y cifrado que pueden ayudar a proteger la información sensible de los clientes y las transacciones.
•	Manejo de Errores: Incluye herramientas para manejar excepciones y errores, lo que facilita la creación de un software robusto y confiable.
•	Soporte para Concurrencia: Permite el manejo de múltiples conexiones a la base de datos, lo que es esencial para una óptica con varios usuarios accediendo simultáneamente al sistema.
•	Desarrollo Ágil: Facilita un desarrollo más rápido y eficiente gracias a su amplia documentación y la comunidad de desarrolladores que utiliza Java.

DESVENTAJAS 

•	Complejidad en la Gestión de Conexiones: Manejar conexiones a la base de datos puede ser complejo, especialmente en aplicaciones con alta concurrencia. Se requiere una gestión adecuada para evitar fugas de conexiones y problemas de rendimiento.
•	Dependencia de Java: Si bien JDBC es específico de Java, esto puede limitar la flexibilidad si la óptica desea cambiar a otro lenguaje o tecnología en el futuro.
•	Sobrecarga de Código: El uso de JDBC a menudo requiere más código que otros frameworks de persistencia (como Hibernate), lo que puede aumentar el tiempo de desarrollo y hacer que el mantenimiento sea más complicado.
•	Manejo Manual de Errores: Aunque JDBC proporciona mecanismos de manejo de errores, requiere una implementación manual y puede ser propenso a errores si no se maneja correctamente.
•	Sin Funcionalidades Avanzadas: JDBC es una API de bajo nivel, lo que significa que no proporciona muchas de las características avanzadas que ofrecen los ORM (Object-Relational Mapping), como el mapeo automático de objetos
•	Rendimiento en Consultas Complejas: Para consultas muy complejas, es posible que el uso directo de JDBC no sea tan eficiente como otras soluciones que optimizan automáticamente las consultas.
•	Configuración Inicial: La configuración de JDBC puede ser más compleja en comparación con soluciones más modernas, lo que podría requerir más tiempo al inicio del proyecto.

Contenido del repositorio

En este documento encontrará todo lo necesario para ejecutar el programa, incluyendo:

Main.java: Archivo principal que contiene la clase principal ( Main).
DatabaseConnector.java: Clase que gestiona la conexión y desconexión con la base de datos.
UsuarioManager.java: Clase que contiene la lógica para realizar operaciones CRUD en la base de datos.

IDE y herramientas utilizadas
El proyecto fue desarrollado utilizando IntelliJ IDEA. Las herramientas incluyen:

Versión de Java "15.0.2"
Base de datos MySQL
XAMPP (para el servidor MySQL)
IDEA de IntelliJ

Estado del Proyecto
✅Finalizado.
🔄 Última actualización: 02/04/2024.
🚫 No se han detectado errores.
🌐 Se conecta a la base de datos alojada en localhost:3306/mi_db.
Próximas características
En futuras versiones, se planea:

🌐 Implementar una interfaz web utilizando servlets y HTML.
🔄 Mejorar la experiencia del usuario con una interfaz más amigable.


