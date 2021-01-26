module.exports.jsonStoreProcedure = {
    liq: {
        sp_name: 'MOD_LIQUIDACION.LIQ_PRINCIPAL',
        in_param: {
            Periodo: 'vPeriodo',
            GrupoRep: 'vGrupoRep',
            Rep: 'vRep_liq',
            IdPersona: 'vIdPers_liq',
            CargoId: 'vIdCargo_liq',
            TipoLiq: 'vIdTipoLiq',
            GrupoAdicional: 'vIdGrupoAdic'
        },
        out_param: {}
    },
    transform: {
        sp_name: 'MOD_TRANS_NOV.PRINCIPAL',
        in_param: {
            Periodo: 'vPER',
            GrupoRep: 'vGRUPOREP',
            TipoLiq: 'vIDTIPOLIQ',
            GrupoAdicional: 'vIDGRUPOADI'
        },
        out_param: {}
    },
    cabeceraValorCat: {
        sp_name: 'MOD_PARAM.P_DESC_CABVALCAT',
        in_param: {
            Id: 'vIDCABVALCAT',
            Descripcion: 'vDESCRIPCION'
        },
        out_param: { varName: 'value' }
    },
    descValorCat: {
        sp_name: 'MOD_PARAM.P_DESC_VALORCATEGORIA',
        in_param: {
            Id: 'vIDDESC_VALCAT',
            Descripcion: 'vDESCRIPCION',
            IdCabecera: 'vIDCABVALCAT'
        },
        out_param: { varName: 'value' }
    },
    valorCat: {
        sp_name: 'MOD_PARAM.P_VALORCATEGORIA',
        in_param: {
            Id: 'vIDVALCATEGORIA',
            IdDesc: 'vIDDESC_VALCAT',
            Cat: 'vNROCAT',
            Valor: 'vVALOR'
        },
        out_param: { varName: 'value' }
    },
    cabeceraEscalaSalarial: {
        sp_name: 'MOD_PARAM.P_ESCALA',
        in_param: {
            Id: 'vIDESCALA',
            Descripcion: 'vDESCRIPCION'
        },
        out_param: { varName: 'value' }
    },
    escalaSalarial:{
        sp_name: 'MOD_PARAM.P_ESCALASALARIAL',
        in_param: {
            Id: 'vIDESCALASAL',
            IdCabecera: 'vIDESCALA',
            Cat: 'vNROCAT',            
            Descripcion: 'vDESCRIPCION',
            Detalle: 'vDESC_DETALLE',
            Importe: 'vIMPORTE'
        },
        out_param: { varName: 'value' }
    },
    cabeceraValorFijo:{
        sp_name: 'MOD_PARAM.P_DESC_VALORFIJO',
        in_param: {
            Id: 'vIDDESCFIJO',         
            Descripcion: 'vDESCRIPCION'
        },
        out_param: { varName: 'value' }
    },
    valorFijo:{
        sp_name: 'MOD_PARAM.P_VALORUNICO',
        in_param: {
            Id: 'vIDVALUNICO',         
            Descripcion: 'vDESCRIPCION',
            Valor: 'vVALOR',
            IdCabecera: 'vIDDESCFIJO'
        },
        out_param: { varName: 'value' }
    },
    concepto:{
        sp_name: 'MOD_PARAM.P_CONCEPTO',
        in_param: {
            Id: 'vIDCONCEPTO',
            Codigo: 'vCODIGO',
            SubCodigo: 'vSUBCOD',
            DescBreve: 'vDESC_BREVE',
            DescBoleta: 'vDESC_BOLETA',
            TipoConcepto: 'vIDTIPOCONCEPTO',
            AcumRem: 'vACUM_REM',
            AcumJub:'vACUM_JUB',
            AcumOs:'vACUM_OS',
            Basico: 'vBASICO',
            Ticket:'vTICKET',
            Bonificable:'vBONIFICABLE',
            CalculaPersona:'vCALC_PERSONA',
            DeduceJubilacion:'vDEDUC_JUB',
            DeducePension:'vDEDUC_PEN',
            Especial:'vESPECIAL',
            Reliquida:'vRELIQUIDA',
            Observacion: 'vOBSERVACION',
            AcumGan : 'vACUM_GAN'
        },
        out_param: { varName: 'value' }
    }
}