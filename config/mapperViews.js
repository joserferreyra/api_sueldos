module.exports.jsonViewMap = {
    personaCargoLiq: {
        fields: {
            Id:'liqitem.idliqitem', 
            PersonaId: 'personas.idpers', 
            Documento: 'personas.dni', 
            ApellidoYNombre: 'personas.apeynom',
            PersonaCUIL:'personas.cuil',
            CargoId: 'cargos.idcargo',
            ReparticionId: 'cargos.IDREP', 
            Orden: 'cargos.ORDEN',
            Afiliado: 'cargos.AFILIADO', 
            TipoEmpleoId: 'cargos.idte',
            LiquidacionId: 'liq.idliq',
            Period:'liq.periodo',
            FechaDev: 'liq.fechadev',
            TipoLiquidacionId: 'liq.idtipoliq',
            TipoLiquidacionDescripcion:'tipoliquidacion.descripcion',
            GrupoAdicionalId: 'liq.idgrupoadi',
            LiquidacionItemId: 'liqitem.idliqitem', 
            ConceptoId: 'liqitem.idconcepto',
            Codigo: 'concepto.codigo', 
            SubCodigo: 'concepto.subcod', 
            TipoConceptoId:'concepto.idtipoconcepto', 
            Descripcion: 'concepto.desc_boleta',
            Cantidad: 'liqitem.cantidad',
            Vencimiento:'liqitem.vto', 
            Importe: 'liqitem.imp',
            ImporteTicket: 'liqitem.impticket',
            PensionAlimenticia: 'liqitem.penley',
            EsLey: 'liqitem.esley' 
        },
        key: { field: "Id"}
    }
}