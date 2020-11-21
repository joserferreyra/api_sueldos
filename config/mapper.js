module.exports.jsonEntityMap = {
    hoja: {
        table: 'hoja_nov',
        fields: {
            FechaGrabacion: 'FECHAALTA',
            TipoCarga: 'IDTIPOCARGA',
            EstadoHoja: 'IDESTADOHOJA',
            GrupoAdicional: 'IDGRUPOADI',
            TipoLiquidacion: 'IDTIPOLIQ',
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
