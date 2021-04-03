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
        out_param: {},
        log: {status: true, type:1}
    },
    transform: {
        sp_name: 'MOD_TRANS_NOV.PRINCIPAL',
        in_param: {
            Periodo: 'vPER',
            GrupoRep: 'vGRUPOREP',
            TipoLiq: 'vIDTIPOLIQ',
            GrupoAdicional: 'vIDGRUPOADI'
        },
        out_param: {},
        log: {status: true, type:1}
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
    escalaSalarial: {
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
    cabeceraValorFijo: {
        sp_name: 'MOD_PARAM.P_DESC_VALORFIJO',
        in_param: {
            Id: 'vIDDESCFIJO',
            Descripcion: 'vDESCRIPCION'
        },
        out_param: { varName: 'value' }
    },
    valorFijo: {
        sp_name: 'MOD_PARAM.P_VALORUNICO',
        in_param: {
            Id: 'vIDVALUNICO',
            Descripcion: 'vDESCRIPCION',
            Valor: 'vVALOR',
            IdCabecera: 'vIDDESCFIJO'
        },
        out_param: { varName: 'value' }
    },
    concepto: {
        sp_name: 'MOD_PARAM.P_CONCEPTO',
        in_param: {
            Id: 'vIDCONCEPTO',
            Codigo: 'vCODIGO',
            SubCodigo: 'vSUBCOD',
            DescBreve: 'vDESC_BREVE',
            DescBoleta: 'vDESC_BOLETA',
            TipoConcepto: 'vIDTIPOCONCEPTO',
            AcumRem: 'vACUM_REM',
            AcumJub: 'vACUM_JUB',
            AcumOs: 'vACUM_OS',
            Basico: 'vBASICO',
            Ticket: 'vTICKET',
            Bonificable: 'vBONIFICABLE',
            CalculaPersona: 'vCALC_PERSONA',
            DeduceJubilacion: 'vDEDUC_JUB',
            DeducePension: 'vDEDUC_PEN',
            Especial: 'vESPECIAL',
            Reliquida: 'vRELIQUIDA',
            Observacion: 'vOBSERVACION',
            AcumGan: 'vACUM_GAN'
        },
        out_param: { varName: 'value' }
    },
    histNomenclador:{
        sp_name: 'MOD_PARAM.P_HIST_NOMENCLADOR',
        in_param: {
            Id: 'vIDHISTNOM',
            FechaInicio: 'vFECHAINICIO',
            FechaFin: 'vFECHAFIN',
            IdNomenclador: 'vIDNOM',
            IdEscala: 'vIDESCALA'
        },
        out_param: { varName: 'value' }        
    },
    histConcepto:{
        sp_name: 'MOD_PARAM.P_HIST_CONCEPTO',
        in_param: {
            Id: 'vIDHISTNOM',
            IdConcepto: 'vIDCONCEPTO',
            Operacion: 'vOPERACION'
        },
        out_param: { varName: 'value' }        
    },
    histValUnico:{
        sp_name: 'MOD_PARAM.P_HIST_VALUNICO',
        in_param: {
            Id: 'vIDHISTNOM',
            IdValorUnico: 'vIDVALUNICO',
            Operacion: 'vOPERACION'
        },
        out_param: { varName: 'value' }        
    },
    histValCat:{
        sp_name: 'MOD_PARAM.P_HIST_VALCATEGORIA',
        in_param: {
            Id: 'vIDHISTNOM',
            IdDesc: 'vIDDESC_VALCAT',
            Operacion: 'vOPERACION'
        },
        out_param: { varName: 'value' }        
    },
    generaFormula: {
        sp_name: 'SP_GENERAR_FORMULAS',
        in_param: {
            Id: 'vIDFORMULA',
            Condicion: 'vCONDICION',
            Accion: 'vACCION',
            Detalle: 'vDETALLE',
            IdConcepto: 'vIDCONCEPTO',
            DescripcionCorta: 'vDESC_BREVE'
        },
        out_param: { varName: 'value', varErrorName: 'error'}
    },
    generaPrimitiva: {
        sp_name: 'SP_GENERAR_PRIMITIVAS',
        in_param: {
            Id: 'vIDPRIMITIVA',
            Nombre: 'vNOMBRE',
            Descripcion: 'vDESCRIPCION',
            Cabecera: 'vCABECERA',
            Cuerpo: 'vCUERPO',
            Pie: 'vPIE'
        },
        out_param: { varName: 'vSALIDA', varErrorName: 'vERROR'}
    },
    importaHistNomenclador: {
        sp_name: 'MOD_PARAM.P_IMPORTA_HIST_NOM',
        in_param: {
            HistIdOrigen: 'vIDHIST_ORIGEN',
            HistIdDestino: 'vIDHIST_DESTINO'
        },
        out_param: {
            varName: 'value'
        }
    },
    cargaLiqJSON: {
        sp_name: 'MOD_REPORTES.CARGA_JSNOLIQ',
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
    djPrevIncluyeLiqs: {
        sp_name: 'PKG_DDJJ_PREVISIONAL.INCLUYE_TIPOLIQ_PERIODOAPLIC',
        in_param: {
            PeriodoDDJJ: 'vPERIODO_DDJJ',
            TipoLiquidacionId: 'vIDTIPOLIQ',
            GrupoAdicionalId: 'vIDGRUPOADIC',
            ReparticionId: 'vIDREP',
            PeriodoLiq: 'vPERIODO_LIQ'
        },
        out_param: {            
            varName: 'vSALIDA',
            varErrorName: 'vMSG_ERROR'
        }
    },
    djPrevExcluyeLiqs: {
        sp_name: 'PKG_DDJJ_PREVISIONAL.EXCLUYE_TIPOLIQ_PERIODOAPLIC',
        in_param: {
            PeriodoDDJJ: 'vPERIODO_DDJJ',
            TipoLiquidacionId: 'vIDTIPOLIQ',
            GrupoAdicionalId: 'vIDGRUPOADIC',
            ReparticionId: 'vIDREP',
            PeriodoLiq: 'vPERIODO_LIQ'
        },
        out_param: {
            varName: 'vSALIDA',
            varErrorName: 'vMSG_ERROR'
        }
    },
    djPrevCargaResumen: {
        sp_name: 'PKG_DDJJ_PREVISIONAL.CARGA_RESUMEN',
        in_param: {
            PeriodoDDJJ: 'vPERIODO'
        },
        out_param: {
            varName: 'vSALIDA',
            varErrorName: 'vMSG_ERROR'
        }
    },
    djPrevCargaDDJJ: {
        sp_name: 'PKG_DDJJ_PREVISIONAL.CARGA_DDJJ',
        in_param: {
            PeriodoDDJJ: 'vPERIODO'
        },
        out_param: {
            varName: 'vSALIDA',
            varErrorName: 'vMSG_ERROR'
        }
    },
    archivoIPSST: {
        sp_name: 'mod_exportacion.GENERA_ARCHIVO_IPSST ',
        in_param: {
            Periodo: 'vPERIODO',
            TipoLiquidacionId: 'vIDTIPOLIQ',
            GrupoAdicionalId: 'vIDGRUPOADI'          
        },
        out_param: {}
    },
    estableceNoLey: {
        sp_name: 'MOD_FUNCIONES.ESTABLECE_NOLEY',
        in_param: {
            Dni: 'DNI',
            Tipo:'TIPO',
            Periodo: 'PERIODO'
        },
        out_param: { varName: 'vSALIDA', varErrorName: 'vMSG_ERROR'}
    },
    eliminaNoLey: {
        sp_name: 'MOD_FUNCIONES.ELIMINA_NOLEY',
        in_param: {
            Dni: 'DNI'
        },
        out_param: { varName: 'vSALIDA', varErrorName: 'vMSG_ERROR'}
    }

}