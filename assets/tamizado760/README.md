# Original 760 · Tamizado

Revisión independiente `ORIGINAL-760-TAMIZADO-2026-09-25`. Los catálogos anteriores se conservan intactos.

Las aberturas libres de las dos mallas son 25,4 y 12,7 mm. Los alambres cuadrados de 2 mm son una estimación explícita. La geometría usa cuatro piezas reutilizadas: alambres longitudinales y transversales para cada piso; las separaciones físicas se conservan en el modelo y la receta CAD. Los marcos y la envolvente de la máquina no cambian.

Se agrega `TR10_FINOS_F04`, una bajante de configuración independiente para los finos, con tres tramos descendentes y una descarga por encima de F04. La sección estimada es 260 × 260 mm con chapa de 6 mm. `screening-verification.json` registra la ruta y su comprobación conservadora contra envolventes orientadas de las piezas; no se detectaron cruces. Esta comprobación geométrica no dimensiona la capacidad ni verifica el deslizamiento real del mineral.

La torre auxiliar del motor de S01 tenía cuatro columnas de 5,31 m sin uniones laterales. Esta revisión la sustituye por un bastidor unido a las columnas principales, con voladizos, riostras, travesaños y patas cortas. La ubicación y cota del motor y la zaranda permanecen idénticas. Los apoyos independientes de G01 y C01 reciben marcos y arriostres; J01 conserva su base baja con cabezales. Se reutilizan las secciones de perfiles existentes. Estas adaptaciones son estimaciones de montaje, no dimensionamiento resistente para fabricación.

La paleta recupera los roles de color del plano original: estructuras grises, chapas rojas y marrones, mallas azules, motores azules y piezas mecánicas diferenciadas.

El colector inferior de S01 tiene una boca abierta de 2150 × 1140 mm entre los apoyos, bajo la segunda malla. Sus cuatro caras se construyen con ocho chapas triangulares de 6 mm para unir la boca inclinada con la salida horizontal de 260 × 260 mm. Las medidas son estimadas. Se comprobaron los triángulos reales de las chapas contra las envolventes orientadas de los perfiles: no se detectan cruces estructurales. El colector acompaña a S01 y está vinculado a TR10 para su ocultación y retirada conjunta.

La derivación antigua TR07B se conserva como geometría fuera del circuito. El rechazo retorna por secundaria → F03 → cono → F02 → zaranda; el intermedio pasa por martillos y los finos van por el colector inferior directamente a F04.

Generación: `native/prepare_screening_assets.ts`. Pruebas: `tests/screening-assets.test.ts`.
