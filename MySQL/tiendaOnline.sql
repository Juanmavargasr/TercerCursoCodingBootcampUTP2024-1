CREATE DATABASE iendaOnline;

USE TiendaOnline;

-- Crear registros en las Tablas cliente, producto, proveedor y ventas.
CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Email VARCHAR(255) UNIQUE,
    Telefono VARCHAR(20),
    Direccion VARCHAR(255)
);

CREATE TABLE Productos (
    ProductoID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Descripcion TEXT,
    Precio DECIMAL(10, 2),
    CantidadDisponible INT,
    ProveedorID INT,
    FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ProveedorID)
);

CREATE TABLE Proveedores (
    ProveedorID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Contacto VARCHAR(100),
    Telefono VARCHAR(20),
    Direccion VARCHAR(255)
);

CREATE TABLE Ventas (
    VentaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT,
    ProductoID INT,
    Cantidad INT,
    FechaVenta DATE,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);


-- Consultar registros en cada tabla
SELECT * FROM Clientes;
SELECT * FROM Productos;
SELECT * FROM Proveedores;
SELECT * FROM Ventas;


-- Insertar datos en cada tabla

INSERT INTO Clientes (Nombre, Email, Telefono, Direccion)
VALUES 
    ("Juan", "juan@gmail.com", "3333333333", "Pereira"),
    ("María", "maria@hotmail.com", "5555555555", "Bogotá"),
    ("Pedro", "pedro@yahoo.com", "7777777777", "Medellín"),
    ("Laura", "laura@example.com", "9999999999", "Cali"),
    ("Andrés", "andres@gmail.com", "1111111111", "Barranquilla"),
    ("Ana", "ana@yahoo.com", "2222222222", "Cartagena"),
    ("Santiago", "santiago@hotmail.com", "4444444444", "Santa Marta"),
    ("Carolina", "carolina@example.com", "6666666666", "Manizales"),
    ("Daniel", "daniel@gmail.com", "8888888888", "Armenia"),
    ("Valentina", "valentina@example.com", "0000000000", "Cúcuta");

INSERT INTO Proveedores (Nombre, Contacto, Telefono, Direccion)
VALUES 
    ("Maderas SAS", "Juan Madera", "3333333333", "Pereira"),
    ("Pinturas y Colores S.A.", "Pedro Pintor", "5555555555", "Bogotá"),
    ("Herramientas Industriales Ltda.", "María Herrero", "7777777777", "Medellín"),
    ("Ferretería El Martillo", "Luis Martínez", "9999999999", "Cali"),
    ("Electrodomésticos del Valle", "Ana Electricista", "1111111111", "Barranquilla"),
    ("Materiales de Construcción Hermanos López", "Juan López", "2222222222", "Cartagena"),
    ("Suministros Industriales S.A.", "Sandra Suministros", "4444444444", "Santa Marta"),
    ("Productos Químicos del Caribe", "Carlos Químico", "6666666666", "Manizales"),
    ("Fábrica de Tornillos y Tuercas", "Diego Tornillero", "8888888888", "Armenia"),
    ("Equipos y Maquinaria Pesada S.A.", "Valentina Maquinaria", "0000000000", "Cúcuta");

INSERT INTO Productos (Nombre, Descripcion, Precio, CantidadDisponible, ProveedorID)
VALUES 
    ("Escritorio 1", "Escritorio para oficina grande", 300000, 10, 3),
    ("Silla 1", "Silla ergonómica para oficina", 150000, 20, 3),
    ("Computadora 1", "Computadora de escritorio con pantalla LCD", 1200000, 5, 6),
    ("Impresora 1", "Impresora láser a color", 500000, 8, 8),
    ("Teléfono 1", "Teléfono móvil con cámara y GPS", 800000, 15, 2),
    ("Teclado 1", "Teclado inalámbrico para computadora", 50000, 30, 9),
    ("Mouse 1", "Mouse óptico con cable USB", 30000, 25, 3),
    ("Monitor 1", "Monitor LED de alta definición", 600000, 12, 7),
    ("Lámpara de Escritorio 1", "Lámpara LED ajustable para lectura", 70000, 18, 5),
    ("Papelera 1", "Papelera metálica para oficina", 50000, 20, 3);

    INSERT INTO Ventas (ClienteID, ProductoID, Cantidad, FechaVenta)
VALUES
    (1, 1, 2, '2024-05-14'),
    (2, 3, 1, '2024-05-15'),
    (3, 5, 3, '2024-05-16'),
    (4, 7, 2, '2024-05-17'),
    (5, 9, 1, '2024-05-18'),
    (6, 2, 4, '2024-05-19'),
    (7, 4, 2, '2024-05-20'),
    (8, 6, 1, '2024-05-21'),
    (9, 8, 3, '2024-05-22'),
    (10, 10, 2, '2024-05-23');



-- Consulta para obtener detalles de una venta con información del cliente y producto asociado
SELECT v.VentaID, c.Nombre AS NombreCliente, p.Nombre AS NombreProducto, v.Cantidad, v.FechaVenta
FROM Ventas v
INNER JOIN Clientes c ON v.ClienteID = c.ClienteID

INNER JOIN Productos p ON v.ProductoID = p.ProductoID
WHERE v.VentaID = 1;



--GESTIÓN DE INVENTARIO:

-- Actualizar cantidad disponible de un producto después de una venta
UPDATE Productos
SET CantidadDisponible = CantidadDisponible - 2
WHERE ProductoID = 1;

-- Consultar estado del inventario y cantidad disponible de un producto en particular
SELECT * FROM Productos;
SELECT CantidadDisponible FROM Productos WHERE ProductoID = 1;



--GENERACIÓN DE REPORTES

-- Ventas totales el último día
SELECT SUM(Cantidad) AS VentasTotales
FROM Ventas
WHERE FechaVenta = CURDATE();

-- Ventas totales de la última semana
SELECT SUM(Cantidad) AS VentasTotales
FROM Ventas
WHERE FechaVenta >= CURDATE() - INTERVAL 7 DAY;

-- Ventas totales del último mes
SELECT SUM(Cantidad) AS VentasTotales
FROM Ventas
WHERE MONTH(FechaVenta) = MONTH(CURDATE()) AND YEAR(FechaVenta) = YEAR(CURDATE());

-- Ingresos totales
SELECT SUM(p.Precio * v.Cantidad) AS IngresosTotales
FROM Ventas v
JOIN Productos p ON v.ProductoID = p.ProductoID;

-- Productos más vendidos
SELECT p.Nombre, SUM(v.Cantidad) AS TotalVendido
FROM Ventas v
JOIN Productos p ON v.ProductoID = p.ProductoID
GROUP BY p.ProductoID
ORDER BY TotalVendido DESC
LIMIT 5;

-- Clientes más frecuentes
SELECT c.Nombre, COUNT(v.ClienteID) AS TotalCompras
FROM Ventas v
JOIN Clientes c ON v.ClienteID = c.ClienteID
GROUP BY v.ClienteID
ORDER BY TotalCompras DESC
LIMIT 5;