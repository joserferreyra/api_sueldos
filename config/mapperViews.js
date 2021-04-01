module.exports.jsonViewMap = {
    personaCargoLiq: {
        fields: {
            Id: 'liqitem.idliqitem',
            PersonaId: 'personas.idpers',
            Documento: 'personas.dni',
            Apellido: 'personas.APELLIDO',
            Nombre: 'personas.NOMBRE',
            //ApellidoYNombre: 'personas.apeynom',
            PersonaCUIL: 'personas.cuil',
            CargoId: 'cargos.idcargo',
            ReparticionId: 'cargos.IDREP',
            Orden: 'cargos.ORDEN',
            Afiliado: 'cargos.AFILIADO',
            TipoEmpleoId: 'cargos.idte',
            SituacionRevistaId: 'cargos.idsitrev',
            LiquidacionId: 'liq.idliq',
            Periodo: 'liq.periodo',
            FechaDev: 'liq.fechadev',
            TipoLiquidacionId: 'liq.idtipoliq',
            TipoLiquidacionDescripcion: 'tipoliquidacion.descripcion',
            GrupoAdicionalId: 'liq.idgrupoadi',
            LiquidacionItemId: 'liqitem.idliqitem',
            ConceptoId: 'liqitem.idconcepto',
            Codigo: 'concepto.codigo',
            SubCodigo: 'concepto.subcod',
            TipoConceptoId: 'concepto.idtipoconcepto',
            Descripcion: 'concepto.desc_boleta',
            Cantidad: 'liqitem.cantidad',
            Vencimiento: 'liqitem.vto',
            Importe: 'liqitem.imp',
            ImporteTicket: 'liqitem.impticket',
            PensionAlimenticia: 'liqitem.penley',
            EsLey: 'liqitem.esley'
        },
        key: { field: "Id" },
        sql: {
            fromClause: [
                "FROM LIQITEM",
                "INNER JOIN LIQ ON LIQ.IDLIQ = LIQITEM.IDLIQ",
                "INNER JOIN CARGOS ON CARGOS.IDCARGO = LIQ.IDCARGO",
                "inner join concepto on concepto.idconcepto = liqitem.idconcepto",
                "inner join tipoliquidacion on tipoliquidacion.idtipoliq = liq.idtipoliq",
                "inner join personas on personas.idpers = cargos.idpers"
            ]
        }
    },
    historiaConcepto: {
        fields: {
            ConceptoId:'hist_concepto.idconcepto', 
            HistoriaNomencladorId: 'hist_concepto.idhistnom', 
            Codigo: 'concepto.codigo', 
            SubCodigo: 'concepto.subcod',
            DescBoleta: 'concepto.desc_boleta',
            Observacion: 'concepto.observacion'
        },
        key: { field: "ConceptoId"},
        sql: {
            fromClause: [
                "FROM hist_concepto",
                "INNER JOIN concepto ON concepto.idconcepto = hist_concepto.idconcepto"
            ]
        }
        
    },    
    historiaValorUnico: {
        fields: {
            ValorUnicoId: 'hist_valunico.idvalunico',
            HistoriaNomencladorId: 'hist_valunico.idhistnom',
            ValorUnicoDescripcion: 'valorunico.descripcion',
            ValorUnicoValor: 'valorunico.valor',
            ValorUnicoTipoId: 'valorunico.iddescfijo',
            ValorUnicoTipoDescripcion: 'desc_valorfijo.descripcion'
        },
        key: { field: "ValorUnicoId" },
        sql: {
            fromClause: [
                "FROM hist_valunico",
                "INNER JOIN valorunico ON valorunico.idvalunico = hist_valunico.idvalunico",
                "INNER JOIN desc_valorfijo ON desc_valorfijo.iddescfijo = valorunico.iddescfijo"
            ]
        }
    },
    historiaValorCategoria: {
        fields: {
            CategoriaId: 'hist_valcategoria.iddesc_valcat',
            HistoriaNomencladorId: 'hist_valcategoria.idhistnom',
            CategoriaDescripcion: 'desc_valorcategoria.descripcion',
            CategoriaTipoId: 'desc_valorcategoria.idcabvalcat',
            CategoriaTipoDescripcion: 'desc_cabvalcat.descripcion'
        },
        key: { field: "CategoriaId" },
        sql: {
            fromClause: [
                "FROM hist_valcategoria",
                "INNER JOIN desc_valorcategoria ON desc_valorcategoria.iddesc_valcat = hist_valcategoria.iddesc_valcat",
                "INNER JOIN desc_cabvalcat ON desc_cabvalcat.idcabvalcat = desc_valorcategoria.idcabvalcat"
            ]
        }
    },
    cargo: {
        fields: {
            Id: 'cargos.IDCARGO',
            PersonaId: 'cargos.IDPERS',
            PersonaDocumento: "personas.DNI",
            PersonaApellido: "personas.APELLIDO",
            PersonaNombre: "personas.NOMBRE",
            ReparticionId: "cargos.IDREP",
            ReparticionDescripcion: "reparticion.DESCRIPCION",
            Orden: "cargos.ORDEN",
            Afiliado: "cargos.AFILIADO",
            TipoEmpleoId: "cargos.IDTE",
            TipoEmpleoDescripcion: "tabtipoempleo.DESCRIPCION",
            VtoEscalafon: "cargos.VTOESC",
            Antiguedad: "cargos.ANTIG",
            SituacionRevistaId: "cargos.IDSITREV",
            SituacionRevistaDescripcion: "tabsitrevista.DESCRIPCION",
            Categoria: "cargos.CATEGORIA",
            FechaBaja: "cargos.FECHABAJA",
            EstadoCargoId: "cargos.IDESTADOCARGO",
            EstadoCargoDescripcion: "tabestadocargo.DESCRIPCION",
            TipoObraSocialId: "cargos.IDTIPOOS",
            TipoObraSocialDescripcion: "tabtipoos.DESCRIPCION",
            TipoLiquidacionId: "cargos.IDTIPOLIQ",
            TipoLiquidacionDescripcion: "tipoliquidacion.DESCRIPCION",
            Salario: "cargos.SALARIO"
        },
        key: {
           field: "Id"
        },
        sql: {
            fromClause: [
                "FROM personas",
                "INNER JOIN cargos ON personas.idpers = cargos.idpers",
                "INNER JOIN reparticion ON cargos.IDREP = reparticion.IDREP",
                "INNER JOIN tabtipoempleo ON cargos.IDTE = tabtipoempleo.IDTE",
                "INNER JOIN tabsitrevista ON cargos.IDSITREV = tabsitrevista.IDSITREV",                
                "INNER JOIN tabestadocargo ON cargos.IDESTADOCARGO = tabestadocargo.IDESTADOCARGO",
                "INNER JOIN tabtipoos ON cargos.IDTIPOOS = tabtipoos.IDTIPOOS",
                "INNER JOIN tipoliquidacion ON cargos.IDTIPOLIQ = tipoliquidacion.IDTIPOLIQ"
            ]
        }
    },
    jsonliq: {
        fields: {
            IdLiq: "idliq",
            json: `'{ "liqcabecera":' || cab || ', "liqdetalle":' || det ||', "liqresumen":' ||res|| '}'`
        },
        key: { field: "IdLiq"},
        sql: {
            fromClause:[
                "from liq_json"
            ]
        }
    },    
    djPrevLiqsPeriodoDJ: {
        fields: {
            Id: "DDJJ_Liquidaciones.Id",
            PeriodoDJ: "DDJJ_Liquidaciones.periodo_ddjj",
            TipoLiquidacionId: "DDJJ_Liquidaciones.IdTipoLiq",
            TipoLiquidacionDescripcion: "TipoLiquidacion.descripcion",
            GrupoAdicionalId: "DDJJ_Liquidaciones.IdGrupoAdic",
            PeriodoLiq: "DDJJ_Liquidaciones.Periodo_Liq",
            HabCA: "DDJJ_Liquidaciones.HABCA"
        },
        key: {
            field: "Id"
        },
        sql: {
            "fromClause": [
                "FROM DDJJ_Liquidaciones",
                "INNER JOIN TipoLiquidacion ON TipoLiquidacion.IdTipoLiq = DDJJ_Liquidaciones.IdTipoLiq"
            ]
        }
    },
    djPrevTxtDDJJ: {
        fields: {
            Id: "VW_DDJJ_PRESENTACION.Id",
            Cadena: "VW_DDJJ_PRESENTACION.CADENA",
            CUIL: "VW_DDJJ_PRESENTACION.CUIL",
            PeriodoDJ: "VW_DDJJ_PRESENTACION.PERIODO"
        },
        key: {
            field: "Id"
        },
        sql: {
            fromClause: [
                "FROM VW_DDJJ_PRESENTACION"
            ]
        }
    },
    archivoIPSST: {
        fields: {
            Periodo: "ipsst_cab.PERIODO",
            TipoLiquidacionId: "ipsst_cab.IdTipoLiq",
            GrupoAdicionalId: "ipsst_cab.IdGrupoAdi",
            NombreArchivo: "ipsst_cab.NOMBRE",
            Cadena: "ipsst_det.CADENA",
            IdLiq: "ipsst_det.idliq"
        },
        key: {},
        sql: {
            fromClause: [
                "FROM ipsst_cab",
                "INNER JOIN ipsst_det ON ipsst_det.idcab = ipsst_cab.idcab"
            ]
        }
    },
    personaLista: {
        fields: {            
            PersonaId: 'personas.idpers',
            Documento: 'personas.dni',
            Apellido: 'personas.APELLIDO',
            Nombre: 'personas.NOMBRE',
            Sexo:'personas.sexo',
            PersonaCUIL: 'personas.cuil',
            Telefono: 'personas.telefono',
            TipoDocumentoId: 'personas.idtipodoc',
            TipoDocumentoSintetico: 'tabtipodoc.sintetico',
            FechaNacimiento: 'personas.FECHANAC',
            FechaIngreso: 'personas.FECHAINGRESO',
            CBU:'personas.CBU',
            Cuenta:'personas.CUENTA',
            CobraLey: '(case when n.idnoley is not null then 1 else 0 end)'
        },
        key: { field: "Id" },
        sql: {
            fromClause: [
                "FROM personas",
                "INNER JOIN tabtipodoc ON tabtipodoc.idtipodoc = personas.idtipodoc",
                "left outer join nocobran_ley n on n.dni = personas.dni"
            ]
        }
    }

}