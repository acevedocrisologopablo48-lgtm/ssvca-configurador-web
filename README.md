# Configurador SSVCA en la web

Abra el enlace público en un navegador moderno de su laptop. No requiere instalación. Puede explorar la planta R2, modificar fajas, estaciones, pisos y rampas, revisar los límites y las advertencias, crear cotas y comparar alternativas.

La pantalla abre en **Organizar planta**, vista superior. Seleccione un equipo y arrástrelo: su estructura y apoyos se desplazan con él, conservando la altura. También puede usar las flechas del panel derecho o del teclado, elegir el paso y girar el conjunto en incrementos de 15°. **Deshacer** permite recuperar la posición anterior. Los equipos bloqueados no se mueven.

La **Regla** muestra dimensiones en metros y se adapta al zoom; en vista superior también muestra las coordenadas X e Y. La rueda acerca o aleja y el botón derecho desplaza la vista. **Encuadrar todo** recupera la planta completa. Use **Ver en 3D** para revisar el resultado y **Dimensiones y ajustes** para editar parámetros detallados.

Durante el arrastre, el contorno anterior queda visible y aparece la posición prevista con la separación aproximada al conjunto más cercano. **Encaje** alinea ejes y bordes próximos; se puede desactivar junto a «Ajuste». Los avisos de huellas superpuestas son orientativos y deben comprobarse técnicamente. **Comparar** muestra lado a lado R2 u otra alternativa guardada frente a la actual, con desplazamientos, dimensiones y avisos.

**Guardar** conserva la alternativa en el navegador de esa laptop. Cada persona tiene sus propias alternativas; no aparecen automáticamente en los equipos de otras personas. Para enviarla a otra laptop puede copiar el **enlace de la alternativa**: quien lo abra verá esa distribución y podrá guardarla en su propio navegador. El enlace contiene los cambios de esa alternativa, así que compártalo solamente con las personas que deban verla. Para proyectos con muchas modificaciones o como copia de respaldo, use **Exportar → Archivo de configuración (JSON)** y, en la otra laptop, **Abrir archivo**. Si se actualiza el modelo R2, un enlace antiguo puede dejar de ser compatible; conserve también el JSON.

La versión web permite descargar PDF, DXF, PNG y el archivo JSON. La generación de ensamblajes nativos, STEP, SLDDRW y DWG se hace con la edición local en una computadora con SolidWorks 2026. No se ha abierto SolidWorks a Internet.

En **Exportar → Plano A0 · cuatro vistas**, elija la vista adicional antes de generar el PDF. El entregable sigue la presentación del plano general de referencia: dos hojas A0 apaisadas, marco de zonas, cajetín técnico y escalas indicadas por vista. La primera hoja muestra planta acotada y elevación lateral longitudinal con retícula; la segunda muestra la vista elegida y una isométrica sombreada. «Vista elegida en el visor» usa la orientación que está viendo en ese momento. Si el navegador no permite capturar la isométrica sombreada, se conserva una vista vectorial de respaldo.

Los avisos de interferencia y holgura se basan en envolventes aproximadas y se conservan los 16 encuentros documentados de R2. El modelo es para estudio de distribución; no sustituye la verificación técnica para fabricación.
