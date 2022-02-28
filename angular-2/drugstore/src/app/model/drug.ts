/* const drugs = [{
  "id": 1,
  "name": "Escitalopram Oxalate",
  "brand": "Escitalopram",
  "company": "Major Pharmaceuticals",
  "barcode": "23-537-0123",
  "stock": 26
}];  */

export class Drug {
  id: number = 1;
  name: string = "Escitalopram Oxalate";
  brand: string = 'Escitalopram';
  company?: string = 'Major Pharmaceuticals';
  barcode: string = '23-537-0123';
  stock: number = 26;
}
