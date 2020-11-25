module.exports.jsonEntityMap = {
    hoja: {
        table: 'hoja_nov',
        fields: {
            FechaGrabacion: 'FECHAALTA',
            TipoCarga: 'IDTIPOCARGA',
            DescripcionTipoCarga:{
                table:'tabtipocarga',
                foringKey:'IDTIPOCARGA',
                fields:{
                    Descripcion:'DESCRIPCION'
                }
            },
            EstadoHoja: 'IDESTADOHOJA',
            GrupoAdicional: 'IDGRUPOADI',
            TipoLiquidacion: 'IDTIPOLIQ',
            DescripcionTipoLiquidacion:{
                table:'tipoliquidacion',
                foringKey : 'IDTIPOLIQ',
                fields: {                                   
                    Descripcion:'DESCRIPCION'
                }
            },
            Periodo: 'PERIODO',
            TipoHoja: 'IDTIPOHOJA',
            Id: 'IDHOJANOV'
        },
        sequence: {field: "Id", seq:'HOJA_NOV_SEQ.NEXTVAL'}
    },
    tipoliq: {
        table: 'tipoliquidacion',
        fields: {
            Id: 'IDTIPOLIQ',
            Descripcion: 'DESCRIPCION'
        }
    }
};
