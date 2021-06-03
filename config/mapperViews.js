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
            ConceptoId: 'hist_concepto.idconcepto',
            HistoriaNomencladorId: 'hist_concepto.idhistnom',
            Codigo: 'concepto.codigo',
            SubCodigo: 'concepto.subcod',
            DescBoleta: 'concepto.desc_boleta',
            Observacion: 'concepto.observacion'
        },
        key: { field: "ConceptoId" },
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
        key: { field: "IdLiq" },
        sql: {
            fromClause: [
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
            Sexo: 'personas.sexo',
            PersonaCUIL: 'personas.cuil',
            Telefono: 'personas.telefono',
            TipoDocumentoId: 'personas.idtipodoc',
            TipoDocumentoSintetico: 'tabtipodoc.sintetico',
            FechaNacimiento: 'personas.FECHANAC',
            FechaIngreso: 'personas.FECHAINGRESO',
            CBU: 'personas.CBU',
            Cuenta: 'personas.CUENTA',
            CobraLey: '(case when n.idnoley is null then 1 else 0 end)'
        },
        key: { field: "Id" },
        sql: {
            fromClause: [
                "FROM personas",
                "INNER JOIN tabtipodoc ON tabtipodoc.idtipodoc = personas.idtipodoc",
                "left outer join nocobran_ley n on n.dni = personas.dni"
            ]
        }
    },
    logProcesos: {
        fields: {
            Id: "l.id",
            Estado: "(case when fin is null then 'En ejecucion' else 'Terminado' end)",
            Procedimiento: "l.sp",
            Inicio: "TO_CHAR((inicio), 'YYYY-MM-DD HH24:MI:SS')",
            Fin: "TO_CHAR((fin), 'YYYY-MM-DD HH24:MI:SS')",
            Parametros: "l.binds",
            Tipo: "l.tipo"
        },
        key: {},
        sql: {
            fromClause: [
                "from logproc l"
            ]
        }
    },
    acredDet: {
        fields: {
            Orden: 'C.ORDEN',
            Documento: 'P.DNI',
            Apellido: "(P.APELLIDO||' '|| P.NOMBRE)",
            Neto: 'ABD.NETO',
            Cuota1: 'ABD.CUOTA1',
            ValorFijo: 'ABD.VALFIJO',
            Cuenta: 'ABD.CUENTA'
        },
        key: {},
        sql: {
            fromClause: [
                "from US_SUELDO.ACRED_BCO_CAB ABC",
                "INNER JOIN US_SUELDO.ACRED_BCO_DET ABD ON ABD.IDACREDCAB = ABC.IDACREDCAB",
                "INNER JOIN US_SUELDO.PERSONAS P ON P.IDPERS = ABD.IDPERS",
                "INNER JOIN US_SUELDO.LIQ L ON L.IDLIQ = ABD.IDLIQ",
                "INNER JOIN US_SUELDO.CARGOS C ON C.IDCARGO = L.IDCARGO"
            ],
            whereFields: {
                Periodo: 'ABC.PERIODO',
                TipoLiquidacionId: 'ABC.IDTIPOLIQ',
                GrupoAdicionalId: 'ABC.IDGRUPOADI'
            },
            orderBy: 'ORDER BY C.ORDEN'
        }
    },
    /*
    acredBancoDet: {
        fields: {
            AcredDetId: "ACRED_BCO_DET.IDACREDDET",
            AcredCabId: "ACRED_BCO_DET.IDACREDCAB",
            LiquidacionId: "ACRED_BCO_DET.IDLIQ",
            PersonaId: "ACRED_BCO_DET.IDPERS",
            Apellido: "PERSONAS.APELLIDO",
            Nombre: "PERSONAS.NOMBRE",
            Neto: "ACRED_BCO_DET.NETO",
            ValorFijo: "ACRED_BCO_DET.VALFIJO",
            Cuota: "ACRED_BCO_DET.CUOTA1",
            UltCuota: "ACRED_BCO_DET.CUOTA2",
            Cuenta: "ACRED_BCO_DET.CUENTA",
            Estado: "ACRED_BCO_DET.ESTADO"
        },
        key: {
            field: "AcredDetId"
        },
        sql: {
            fromClause: [
                "FROM ACRED_BCO_DET",
                "INNER JOIN PERSONAS ON ACRED_BCO_DET.IDPERS = PERSONAS.IDPERS"
            ]
        }
    }, */
    acredBancoDet: {
        fields: {
            AcredDetId: "ACRED_BCO_DET.IDACREDDET",
            AcredCabId: "ACRED_BCO_DET.IDACREDCAB",
            LiquidacionId: "ACRED_BCO_DET.IDLIQ",
            PersonaId: "ACRED_BCO_DET.IDPERS",
            Orden: "CARGOS.ORDEN",
            DNI: "PERSONAS.DNI",
            Apellido: "PERSONAS.APELLIDO",
            Nombre: "PERSONAS.NOMBRE",
            Neto: "ACRED_BCO_DET.NETO",
            ValorFijo: "ACRED_BCO_DET.VALFIJO",
            Cuota: "ACRED_BCO_DET.CUOTA1",
            UltCuota: "ACRED_BCO_DET.CUOTA2",
            Cuenta: "ACRED_BCO_DET.CUENTA",
            Estado: "ACRED_BCO_DET.ESTADO"
        },
        key: {
            field: "AcredDetId"
        },
        sql: {
            fromClause: [
                "FROM ACRED_BCO_DET",
                "INNER JOIN PERSONAS ON ACRED_BCO_DET.IDPERS = PERSONAS.IDPERS",
                "INNER JOIN LIQ ON ACRED_BCO_DET.IDLIQ = LIQ.IDLIQ",
                "INNER JOIN CARGOS ON LIQ.IDCARGO = CARGOS.IDCARGO"
            ]
        }
    },
    acredBancoCab: {
        fields: {
            AcredCabId: "ACRED_BCO_CAB.IDACREDCAB",
            Periodo: "ACRED_BCO_CAB.PERIODO",
            TipoLiquidacionId: "ACRED_BCO_CAB.IDTIPOLIQ",
            GrupoAdicionalId: "ACRED_BCO_CAB.IDGRUPOADI",
            ValorFijo: "ACRED_BCO_CAB.VALOR_FIJO",
            CantCuotas: "ACRED_BCO_CAB.CANT_CUOTAS"
        },
        key: {
            field: "AcredCabId"
        },
        sql: {
            fromClause: [
                "FROM ACRED_BCO_CAB"
            ]
        }
    },
    repTeNomenclador: {
        fields: {
            ReparticionId: "REPTENOMENCLADOR.IDREP",
            ReparticionDescripcion: "REPARTICION.DESCRIPCION",
            TipoEmpleoId: "REPTENOMENCLADOR.IDTE",
            TipoEmpleoDescripcion: "TABTIPOEMPLEO.DESCRIPCION",
            NomencladorId: "REPTENOMENCLADOR.IDNOM",
            NomencladorDescripcion: "NOMENCLADOR.DESCRIPCION"
        },
        key: {},
        sql: {
            fromClause: [
                "FROM REPTENOMENCLADOR",
                "INNER JOIN REPARTICION ON REPTENOMENCLADOR.IDREP = REPARTICION.IDREP",
                "INNER JOIN TABTIPOEMPLEO ON REPTENOMENCLADOR.IDTE = TABTIPOEMPLEO.IDTE",
                "INNER JOIN NOMENCLADOR ON REPTENOMENCLADOR.IDNOM = NOMENCLADOR.IDNOM"
            ]
        }
    },
    boletas: {
        fields: {
            LiquidacionId: "lj.idliq",
            PersonaId: "lj.idpers",
            Documento: "p.dni",
            Apellido: "p.apellido",
            Nombre: "p.nombre",
            CargoId: "c.idcargo",
            ReparticionId: "c.idrep",
            Orden: "c.orden",
            Afiliado: "c.afiliado",
            TipoEmpleoId: "c.idte",
            Periodo: "lj.periodo",
            FechaDev: "lj.fechadev",
            TipoLiquidacionId: "lj.idtipoliq",
            TipoLiquidacionDescripcion: "tl.descripcion",
            GrupoAdicionalId: "lj.NROADICIONAL"
        },
        key: {},
        sql: {
            fromClause: [
                "from liq_json lj",
                "inner join liq l on lj.idliq = l.idliq",
                "inner join cargos c on L.IDCARGO = c.idcargo",
                "inner join personas p on p.idpers = c.idpers",
                "inner join tipoliquidacion tl on LJ.IDTIPOLIQ = tl.idtipoliq"
            ],
            whereFields: {
                Documento: "p.dni",
                ReparticionId: "c.idrep",
                Orden: "c.orden",
                Periodo: "lj.periodo",
                TipoLiquidacionId: "lj.idtipoliq",
                GrupoAdicionalId: "lj.NROADICIONAL"
            },
            orderBy: 'ORDER BY c.idrep,c.ORDEN, lj.periodo, lj.fechadev'
        }
    }

    /*,
    archivoAcred: {
        fields: {
            Cadena: `LPAD(P.DNI,10,' ')||LPAD(NVL(P.CUIL,0),11,'0')||LPAD(ABD.CUENTA,15,' ')||'                      '||
            (CASE WHEN :CUOTA = 0 THEN LPAD((ABD.VALFIJO*100),9,' ') ELSE 
              (CASE WHEN :CUOTA = 1 THEN LPAD((ABD.CUOTA1*100),9,' ') ELSE LPAD((ABD.CUOTA2*100),9,' ') END)END) ||
            RPAD(SUBSTR(P.APELLIDO,1,20),20,' ')||
            RPAD(SUBSTR(P.NOMBRE,1,20),20,' ')|| 
            '90909'`
        },
        sql:{
            fromClause:[
                'from US_SUELDO.ACRED_BCO_CAB ABC',
                'INNER JOIN US_SUELDO.ACRED_BCO_DET ABD ON ABD.IDACREDCAB = ABC.IDACREDCAB',
                'INNER JOIN US_SUELDO.PERSONAS P ON P.IDPERS = ABD.IDPERS',
                'INNER JOIN US_SUELDO.LIQ L ON L.IDLIQ = ABD.IDLIQ',
                'INNER JOIN US_SUELDO.CARGOS C ON C.IDCARGO = L.IDCARGO'
            ]
        }
    }

    SELECT LPAD(P.DNI, 10, ' ')||
        LPAD(NVL(P.CUIL, 0), 11, '0') ||
        LPAD(ABD.CUENTA, 15, ' ') ||
        '                      ' ||
        (CASE WHEN: CUOTA = 0 THEN LPAD((ABD.VALFIJO * 100), 9, ' ') ELSE
            (CASE WHEN : CUOTA = 1 THEN LPAD((ABD.CUOTA1 * 100), 9, ' ') ELSE LPAD((ABD.CUOTA2 * 100), 9, ' ') END)END) ||
                RPAD(SUBSTR(P.APELLIDO, 1, 20), 20, ' ') ||
                RPAD(SUBSTR(P.NOMBRE, 1, 20), 20, ' ') ||
                '90909' AS CADENA
    from US_SUELDO.ACRED_BCO_CAB ABC
    INNER JOIN US_SUELDO.ACRED_BCO_DET ABD ON ABD.IDACREDCAB = ABC.IDACREDCAB
    INNER JOIN US_SUELDO.PERSONAS P ON P.IDPERS = ABD.IDPERS
    INNER JOIN US_SUELDO.LIQ L ON L.IDLIQ = ABD.IDLIQ
    INNER JOIN US_SUELDO.CARGOS C ON C.IDCARGO = L.IDCARGO
    WHERE
    ABC.PERIODO = to_date('01/03/2021', 'dd/mm/yyyy')
    AND ABC.IDTIPOLIQ = 1
    AND ABC.IDGRUPOADI = 0
    AND NOT TRIM(ABD.CUENTA) IS NULL AND TRIM(ABD.CUENTA) > 0
    AND(CASE WHEN : CUOTA = 0 THEN ABD.VALFIJO ELSE(CASE WHEN : CUOTA = 1 THEN ABD.CUOTA1 ELSE ABD.CUOTA2 END)END) > 0
    ORDER BY C.ORDEN;
    */

}