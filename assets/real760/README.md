# Original 760 · Equipos reales

Referencia independiente `ORIGINAL-760-REAL-2026-09-25`. Generada con `native/prepare_real_equipment_assets.ts` a partir del catálogo DWG anterior y `tmp/real_equipment_measurements/equipment_measurements.json`. Los archivos BAK, DWG y PDF de origen se conservaron intactos.

Se sustituyen G01, J01, C01 y S01. Los modelos T01, J02, H01 y las cuatro fajas conservan sus geometrías y coordenadas anteriores. Las cimentaciones incluidas en los planos BAK no se incorporan como parte de las máquinas.

Las máquinas se reconstruyen con perfiles exteriores de las vistas 2D, cilindros y superficies de revolución. El alto, los apoyos, la huella acotada y las posiciones observables tienen trazabilidad en `equipment-measurements.json`. Los espesores no acotados, el interior, la representación de resortes y motores, las mallas y las posiciones de flujo son simplificaciones identificadas; no son un modelo de fabricación del proveedor.

La altura del soporte se calcula restando el alto real sobre el asiento inferior a la cota superior del conjunto anterior. Las máquinas no se escalan. Las columnas, travesaños, vigas y diagonales reutilizan las secciones originales; únicamente cambian sus longitudes y posiciones. Los cuatro conjuntos conservan su cota superior con una diferencia numérica menor de 0,001 mm, documentada en `mounting-verification.json`.

G01 invierte el eje longitudinal del dibujo para conservar el sentido de alimentación de la planta. S01 mantiene el eje longitudinal del dibujo; el nombre del archivo 2YK1237 y el rótulo 2YA1237 se registran por separado. Los puertos y apoyos del catálogo se expresan respecto al asiento inferior de cada estación y giran con su azimut.

`equipment-projections.png` compara las vistas lateral, frontal y superior de los cuatro conjuntos regenerados. Es una comprobación visual, no un plano de fabricación.
