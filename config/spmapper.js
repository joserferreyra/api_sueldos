module.exports.jsonStoreProcedure = {
    liq: {
        sp_name: 'MOD_LIQUIDACION.LIQ_PRINCIPAL',
        in_param:{
            Periodo : 'vPeriodo',
            GrupoRep: 'vGrupoRep',
            Rep: 'vRep_liq',
            IdPersona : 'vIdPers_liq',
            CargoId:'vIdCargo_liq',
            TipoLiq: 'vIdTipoLiq',
            GrupoAdicional : 'vIdGrupoAdic'
        },
        out_param:{}
    }
}