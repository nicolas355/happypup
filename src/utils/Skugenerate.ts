export function generateSKU(prefix: string, id: number): string {
    const datePart = new Date().getTime().toString(36); // Parte basada en la fecha
    return `${prefix}-${id}-${datePart}`; // Combina el prefijo, el ID y la parte de fecha
  }
  
