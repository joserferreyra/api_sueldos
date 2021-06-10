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
            LiquidacionId: "r.idliq",
            PersonaId: "p.idpers",
            Documento: "p.dni",
            Apellido: "p.apellido",
            Nombre: "p.nombre",
            CargoId: "c.idcargo",
            ReparticionId: "c.idrep",
            Orden: "c.orden",
            Afiliado: "c.afiliado",
            TipoEmpleoId: "c.idte",
            Periodo: "r.periodo",
            FechaDev: "r.fechadev",
            TipoLiquidacionId: "r.idtipoliq",
            TipoLiquidacionDescripcion: "tl.descripcion",
            GrupoAdicionalId: "r.NROADICIONAL",
            Neto: "r.NETO",
            Estado: "r.IDESTADO"
        },
        key: {},
        sql: {
            fromClause: [
                "from resumenliq r",
                "inner join cargos c on c.IDCARGO = r.idcargo",
                "inner join personas p on p.idpers = c.idpers",
                "inner join tipoliquidacion tl on r.IDTIPOLIQ = tl.idtipoliq"
            ],
            whereFields: {
                LiquidacionId: "r.idliq",
                Documento: "p.dni",
                ReparticionId: "c.idrep",
                Orden: "c.orden",
                Periodo: "r.periodo",
                TipoLiquidacionId: "r.idtipoliq",
                GrupoAdicionalId: "r.NROADICIONAL"
            },
            orderBy: 'ORDER BY c.idrep,c.ORDEN, r.periodo, r.fechadev'
        }
    },
    boletaCabPie: {
        fields: {
            IdLiq: "l.idliq",
            c1: "rpad(r.idrep,7) || rpad(r.descripcion,35) || lpad('CUIT ' || substr(to_char(r.cuit),1,2)||'-'||substr(to_char(r.cuit),3,8)||'-'||substr(to_char(r.cuit),11,1), 57 )",
            c2: "rpad(' ',7, ' ') ||'DIRECCION ' || upper(r.direccion)",
            c3: "rpad(' ',7, ' ') ||'APELLIDO: ' || rpad(upper(p.apellido),18) || 'NOMBRE: ' || rpad(upper(p.nombre),35) ||  lpad('CUIL '|| substr(to_char(p.cuil),1,2)||'-'||substr(to_char(p.cuil),3,8)||'-'||substr(to_char(p.cuil),11,1), 21)",
            c4: "rpad(' ',7, ' ') || rpad('ORDEN: ' ||c.ORDEN, 20) || rpad('AFILIADO: '||c.AFILIADO, 20) || rpad('CAT: '||C.CATEGORIA,20) || lpad(c.idte || c.idsitrev || c.idtipoos || c.salario, 32)",
            c5: "rpad(' ',7, ' ') ||rpad('LIQUIDACION '|| tl.descripcion, 77) ||'PERIODO '||to_char(l.periodo,'MM/YYYY')",
            habcap: "l.habcap",
            habsap: "l.habsap",
            habley: "l.habley",
            descley: "l.descley",
            descvarios: "l.descvarios",
            neto: "l.neto",
            habtxt: "lpad(to_char(l.habcap+l.habsap+l.habley, '9,999,990.00' ),18,' ')",
            rettxt: "lpad(to_char(l.descley + l.descvarios, '9,999,990.00' ),18,' ')",
            netotxt: "lpad(to_char(l.neto, '9,999,990.00' ),18,' ')",
            filename: "to_char(l.periodo,'MMYYYY')||'_'||substr(tl.descripcion,0,3)||'_'||upper(p.apellido)||'_'||upper(p.nombre)"
        },
        sql: {
            fromClause: [
                'from resumenliq l',
                'inner join cargos c on c.idcargo = L.IDCARGO',
                'inner join personas p on p.idpers = c.idpers',
                'inner join reparticion r on r.idrep = c.idrep',
                'inner join tipoliquidacion tl on tl.idtipoliq = l.idtipoliq'
            ],
            whereFields: {
                IdLiq: "l.idliq"
            }
        }
    },
    boletaDetalle: {
        fields: {
            IdLiq: "li.idliq",
            Cadena: `lpad(con.codigo,3,' ')||'  ' ||lpad(con.subcod,5,' ') ||' '|| rpad(li.descripcion,30,' ') || ' ' ||
            lpad(li.cantidad,7,' ') || ' ' || lpad(nvl(to_char(li.vto,'mm/yyyy'),' '),10,' ')
            ||' '||lpad(to_char(sum(case when tc.idtipoconcepto in (1,2,4,7) then li.impticket else 0 end), '9,999,990.00' ),18,' ')
            ||' '||lpad(to_char(sum(case when tc.idtipoconcepto in (3,6) then li.impticket else 0 end), '9,999,990.00' ),18,' ')`,
            Haberes: "sum(case when tc.idtipoconcepto in (1,2,4,7) then li.impticket else 0 end)",
            Retenciones: "sum(case when tc.idtipoconcepto in (3,6) then li.impticket else 0 end)"
        },
        sql: {
            fromClause: [
                "from resumenliq r",
                "inner join liqitem li on li.idliq = r.idliq",
                "inner join concepto con on con.idconcepto = li.idconcepto",
                "inner join tabtipoconcepto tc on tc.idtipoconcepto = con.idtipoconcepto and tc.idtipoconcepto <>5"
            ],
            whereFields: {
                IdLiq: "li.idliq"
            },
            groupClause: [
                "group by (li.idliq, con.codigo, con.subcod, li.cantidad, li.vto, li.descripcion, tc.idtipoconcepto)",
                "order by con.codigo, con.subcod"
            ]
        }
    }
}
