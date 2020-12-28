# API REST SUELDOS ##

## Descripción
    
    API para acceder a tablas de una base de datos relacional oracle para consltas e inserción de registros.

## Instalación
### Requisitos
- Tener instalado node en el sistema. En principio node viene con la herramienta npm.

### Instalación
Descargar la aplicación. Una vez descargada, en el directorio principal ejecutar ```npm install``` . Éste comando instalará todos los paquetes necesarios para el funcionamiento de la aplicación.

### Ejecución
Para lanzar la aplicación se puede realizar con algunos de los siguientes comandos: 
```npm start``` o ```node index.js ``` .

## Conexión

### Punto de entrada:
http://host:3000/api/[entidad]

### Entidad:

    Se puede realizar una petición a cualquier entidad configurada en el archivo ./config/mapper.js

### Ejemplo del contenido de archivo mapper.js:

```
hoja: {
        table: 'hoja_nov',
        fields: {
            FechaGrabacion: 'FECHAALTA',
            TipoCarga: 'IDTIPOCARGA',
            DescripcionTipoCarga: {
                table: 'tabtipocarga',
                parentKey: 'IDTIPOCARGA',
                foringKey: 'IDTIPOCARGA',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            EstadoHoja: 'IDESTADOHOJA',
            GrupoAdicional: 'IDGRUPOADI',
            TipoLiquidacion: 'IDTIPOLIQ',
            DescripcionTipoLiquidacion: {
                table: 'tipoliquidacion',
                parentKey: 'IDTIPOLIQ',
                foringKey: 'IDTIPOLIQ',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            Periodo: 'PERIODO',
            TipoHoja: 'IDTIPOHOJA',
            Id: 'IDHOJANOV'
        },
        sequence: { field: "Id", seq: 'HOJA_NOV_SEQ.NEXTVAL' }
    },
    tipoliq: {
        table: 'tipoliquidacion',
        fields: {
            Id: 'IDTIPOLIQ',
            Descripcion: 'DESCRIPCION'
        }
    },
    novhaberes: {
        table: 'NOVHABERES',
        fields: {
            NroReparticion: 'IDREP',
            ReparticionDescripcion: {
                table: 'reparticion',
                parentKey: 'IDREP',
                foringKey: 'IDREP',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            NroBoleta: 'ORDEN',
            NroAfiliado: 'AFILIADO',
            Codigo: 'CODIGO',
            Subcodigo: 'SUBCOD',
            Clase: 'PARM1',
            Dias: 'PARM2',
            Vencimiento: 'VTO',
            Importe: 'IMPORTE',
            Documento: 'DNI',
            NombreCompleto: 'APYNOM',
            TipoEmpleoId: 'TE',
            TipoEmpleoDescripcion: {
                table: 'tabtipoempleo',
                parentKey: 'TE',
                foringKey: 'IDTE',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            SituacionRevistaId: 'SITREV',
            SituacionRevistaDescripcion: {
                table: 'tabsitrevista',
                parentKey: 'SITREV',
                foringKey: 'IDSITREV',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            TipoObraSocialId: 'OS',
            PPP: 'PPP',
            FechaGrabacion: 'FECHAGRAB',
            EstadoRegistro: 'IDESTADOREG',
            HojaId: 'IDHOJANOV',
            Id: 'IDNOVHAB'
        },
        sequence: { field: "Id", seq: 'NOVHABERES_SEQ.NEXTVAL' }
    }
```

Ejemplo GET:

http://www.duckdns.org:3000/api/hoja

http://www.duckdns.org:3000/api/tipoliq

---

| Segmento url |Sintaxis|Observación|
| --- |---:| ---:|
| where |?field=value&field=value...| Se puede agregar n condiciones|
| like   | ?search=atributo:texto| Ejemplo: http://localhost:3000/api/persona?search=ApellidoYNombre:FER&limit=5|
| >= o <= | ?greatereq=atrubuto:dd/mm/yyy[&lesseq=atributo:dd/mm/yyyy]| Ejemplo: ?greatereq=Periodo:01/06/2020&lesseq=Periodo:01/11/2020|
|order by | sort={"atributo obj","asc/desc"} |
| limites y corrimiento |&limit=value&offset=value | limit obligatorio, offset opcional |

---


### Ejemplo y pruebas POST:
Las pruebas fueron realizadas con la herramienta curl en linea de comandos.

#### Tipo liquidación:

` curl -X "POST" "http://localhost:3000/api/tipoliq" -i -H 'Content-Type: application/json' -d $'{"Id":"6", "Descripcion":"inc doc"}' `

#### Hoja de novedad:

` curl -X "POST" "http://localhost:3000/api/hoja" -i -H 'Content-Type: application/json' -d $'{"FechaGrabacion":"20-nov-2020", "TipoCarga":"1","EstadoHoja":"1", "GrupoAdicional":"24","TipoLiquidacion":"5","Periodo":"01-dec-2020","TipoHoja":"1"}' `
