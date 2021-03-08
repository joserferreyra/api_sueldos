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
            Id: 'cargo.IDCARGO',
            PersonaId: 'cargo.IDPERS',
            PersonaDocumento: 'persona.DNI',
            PersonaApellido: 'persona.APELLIDO',
            PersonaNombre: 'persona.NOMBRE',
            ReparticionId: 'cargo.IDREP',
            ReparticionDescripcion:'reparticion.DESCRIPCION',
            Orden: 'cargo.ORDEN',
            Afiliado: 'cargo.AFILIADO',
            TipoEmpleoId: 'cargo.IDTE',
            TipoEmpleoDescripcion: 'tabtipoempleo.DESCRIPCION',
            VtoEscalafon: 'cargo.VTOESC',
            Antiguedad: 'cargo.ANTIG',
            SituacionRevistaId: 'cargo.IDSITREV',
            SituacionRevistaDescripcion: 'tabtiporevista.DESCRIPCION',
            Categoria: 'cargo.CATEGORIA',
            FechaBaja: 'cargo.FECHABAJA',
            EstadoCargoId: 'cargo.IDESTADOCARGO',
            EstadoCargoDescripcion: 'tabestadocargo.DESCRIPCION',
            TipoObraSocialId: 'cargo.IDTIPOOS',
            TipoObraSocialDescripcion: 'tabtipoos.DESCRIPCION',
            TipoLiquidacionId: 'cargo.IDTIPOLIQ',
            TipoLiquidacionDescripcion: 'tipoliquidacion.DESCRIPCION',
            Salario: 'cargo.SALARIO'
        },
        key: { field: "Id"},
        sql: {
            fromClause: [
                "FROM cargo",
                "INNER JOIN reparticion ON cargo.IDREP = reparticion.IDREP",
                "INNER JOIN tabtipoempleo ON cargo.IDTE = tabtipoempleo.IDTE",
                "INNER JOIN tabtiporevista ON cargo.IDTIPOREVISTA = tabtiporevista.IDTIPOREVISTA",
                "INNER JOIN tabestadocargo ON cargo.IDESTADOCARGO = tabestadocargo.IDESTADOCARGO",
                "INNER JOIN tabtipoos ON cargo.IDTIPOOS = tabtipoos.IDTIPOOS",
                "INNER JOIN tipoliquidacion ON cargo.IDTIPOLIQ = tipoliquidacion.IDTIPOLIQ"
            ]
        }
    }
}