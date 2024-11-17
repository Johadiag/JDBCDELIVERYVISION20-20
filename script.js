document.addEventListener('DOMContentLoaded', () => {
    // Manejar la facturación
    document.getElementById('form-facturacion').addEventListener('submit', (e) => {
        e.preventDefault();
        const cliente = document.getElementById('cliente').value;
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;
        const total = cantidad * precio;
        const facturaHtml = `
            <h3>Factura Generada</h3>
            <p>Cliente: ${cliente}</p>
            <p>Producto: ${producto}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Precio Unitario: $${precio}</p>
            <p>Total: $${total.toFixed(2)}</p>
        `;
        document.getElementById
        