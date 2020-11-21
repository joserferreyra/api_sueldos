## API REST SUELDOS ##
### Conexión

### Punto de entrada:
http://host:3000/api/[entidad]

### Entidades:

Cualquier entidad configurada en ./config/mapper.js


Ejemplo GET:

http://www.duckdns.org:3000/api/hoja


http://www.duckdns.org:3000/api/tipoliq

--

| Segmento url |Sintaxis|Observación|
| --- |---:| ---:|
| where |?field=value&field=value...| Se puede agregar n condiciones|
| limites y corrimiento |&limit=value&offset=value | limit obligatorio, offset opcional |


Pruebas POST:

- Alta tipo de liquidación:

curl -X "POST" "http://localhost:3000/api/tipoliq" -i -H 'Content-Type: application/json' -d $'{"Id":"8", "Descripcion":"ART5"}'

- Alta hoja:

curl -X "POST" "http://localhost:3000/api/hoja" -i -H 'Content-Type: application/json' -d $'{"FechaGrabacion":"20-nov-2020", "TipoCarga":"1","EstadoHoja":"1", "GrupoAdicional":"22","TipoLiquidacion":"5","Periodo":"01-dic-2020","TipoHoja":"1"}'



