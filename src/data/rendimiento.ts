// Rendimiento (perforaciones por cartucho 400 ml) del anclaje químico GBI500SD.
// Profundidades de empotramiento: columnas de 2" a 20" (1" = 25,4 mm).
// Fuente: "Calculadora_Anclaje_Final con hojas de cantidad.xlsx" (Hoja 1), tablas internas Ingefix.
// Nota: valor de tabla para barra estriada φ10 mm a 20" venía como 16 (error de tipeo,
// rompía la secuencia decreciente); se corrigió a 9 para consistencia con la serie.

export interface FilaRendimiento {
  d: string;      // diámetro (pulgadas en varillas, mm en estriadas)
  broca: string;  // broca recomendada (pulgadas)
  vals: number[]; // perforaciones por cartucho, índice 0 = 2" ... índice 18 = 20"
}

export const PROFUNDIDADES: number[] = Array.from({ length: 19 }, (_, i) => i + 2); // 2..20 pulgadas

export const VARILLAS_ROSCADAS: FilaRendimiento[] = [
  {
    "d": "3/8\"",
    "broca": "15/32\"",
    "vals": [
      53,
      41,
      33,
      28,
      24,
      21,
      19,
      17,
      16,
      14,
      13,
      12,
      11,
      11,
      10,
      9,
      9,
      8,
      8
    ]
  },
  {
    "d": "1/2\"",
    "broca": "9/16\"",
    "vals": [
      51,
      39,
      32,
      27,
      23,
      20,
      18,
      16,
      15,
      14,
      12,
      12,
      11,
      10,
      9,
      9,
      8,
      8,
      8
    ]
  },
  {
    "d": "5/8\"",
    "broca": "3/4\"",
    "vals": [
      30,
      21,
      17,
      14,
      11,
      10,
      9,
      8,
      7,
      6,
      6,
      5,
      5,
      5,
      4,
      4,
      4,
      4,
      3
    ]
  },
  {
    "d": "3/4\"",
    "broca": "7/8\"",
    "vals": [
      25,
      18,
      14,
      11,
      9,
      8,
      7,
      6,
      6,
      5,
      5,
      4,
      4,
      4,
      3,
      3,
      3,
      3,
      3
    ]
  },
  {
    "d": "7/8\"",
    "broca": "1\"",
    "vals": [
      21,
      15,
      11,
      9,
      8,
      6,
      6,
      5,
      4,
      4,
      4,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      2
    ]
  },
  {
    "d": "1\"",
    "broca": "1-1/8\"",
    "vals": [
      18,
      12,
      9,
      8,
      6,
      5,
      5,
      4,
      4,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2
    ]
  },
  {
    "d": "1-1/8\"",
    "broca": "1-1/4\"",
    "vals": [
      16,
      11,
      8,
      6,
      5,
      5,
      4,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      1
    ]
  },
  {
    "d": "1-1/4\"",
    "broca": "1-3/8\"",
    "vals": [
      14,
      9,
      7,
      6,
      5,
      4,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      1,
      1,
      1,
      1,
      1
    ]
  }
];

export const BARRAS_ESTRIADAS: FilaRendimiento[] = [
  {
    "d": "8 mm",
    "broca": "15/32\"",
    "vals": [
      52,
      44,
      39,
      34,
      31,
      28,
      26,
      24,
      22,
      21,
      19,
      18,
      17,
      16,
      15,
      15,
      14,
      13,
      13
    ]
  },
  {
    "d": "10 mm",
    "broca": "9/16\"",
    "vals": [
      45,
      37,
      31,
      27,
      24,
      22,
      19,
      18,
      16,
      15,
      14,
      13,
      12,
      12,
      11,
      10,
      10,
      9,
      9
    ]
  },
  {
    "d": "12 mm",
    "broca": "3/4\"",
    "vals": [
      46,
      38,
      32,
      28,
      25,
      22,
      20,
      19,
      17,
      16,
      15,
      14,
      13,
      12,
      11,
      11,
      10,
      10,
      10
    ]
  },
  {
    "d": "16 mm",
    "broca": "7/8\"",
    "vals": [
      45,
      37,
      31,
      27,
      24,
      22,
      19,
      18,
      16,
      15,
      14,
      13,
      12,
      12,
      11,
      10,
      10,
      9,
      9
    ]
  },
  {
    "d": "18 mm",
    "broca": "1\"",
    "vals": [
      29,
      22,
      18,
      15,
      13,
      11,
      10,
      9,
      8,
      7,
      7,
      6,
      6,
      5,
      5,
      5,
      5,
      4,
      4
    ]
  },
  {
    "d": "22 mm",
    "broca": "1-1/8\"",
    "vals": [
      21,
      15,
      12,
      10,
      8,
      7,
      6,
      5,
      5,
      4,
      4,
      4,
      3,
      3,
      3,
      3,
      3,
      2,
      2
    ]
  },
  {
    "d": "25 mm",
    "broca": "1-1/4\"",
    "vals": [
      15,
      10,
      8,
      6,
      5,
      4,
      4,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      1
    ]
  },
  {
    "d": "32 mm",
    "broca": "1-3/8\"",
    "vals": [
      12,
      8,
      6,
      5,
      4,
      4,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  }
];

export const pulgadasAmm = (p: number) => Math.round(p * 25.4);
