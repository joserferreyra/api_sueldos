module.exports.jsonEntityMap = {
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
};
