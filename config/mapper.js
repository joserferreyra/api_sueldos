module.exports.jsonEntityMap = {
    hoja: {
        table: 'hoja_nov',
        fields: {
            FechaCreacion: 'FECHAALTA',
            TipoCargaId: 'IDTIPOCARGA',
            TipoHojaDescripcion: {
                table: 'tabtipohoja',
                parentKey: 'IDTIPOHOJA',
                foringKey: 'IDTIPOHOJA',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            EstadoHojaId: 'IDESTADOHOJA',
            GrupoAdicional: 'IDGRUPOADI',
            TipoLiquidacionId: 'IDTIPOLIQ',
            TipoLiquidacionDescripcion: {
                table: 'tipoliquidacion',
                parentKey: 'IDTIPOLIQ',
                foringKey: 'IDTIPOLIQ',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            PeriodoId: 'PERIODO',
            TipoHojaId: 'IDTIPOHOJA',
            Id: 'IDHOJANOV'
        },
        key: { field: "Id", seq: 'HOJA_NOV_SEQ.NEXTVAL' }
    },
    tipoliq: {
        table: 'tipoliquidacion',
        fields: {
            Id: 'IDTIPOLIQ',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id" }
    },
    tipoos: {
        table: 'TABTIPOOS',
        fields: {
            Id: 'IDTIPOOS',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id" }
    },
    sitrevista: {
        table: 'tabsitrevista',
        fields: {
            Id: 'IDSITREV',
            Descripcion: 'DESCRIPCION',
            TipoRevistaId: 'IDTIPOREVISTA',
            Porcentaje: 'PORCENTAJE'
        },
        key: { field: 'Id' }
    },
    novhaberes: {
        table: 'NOVHABERES',
        fields: {
            NroReparticion: 'IDREP',
            ReparticionDescripcion: {
                table: 'reparticion',
                parentKey: 'IDREP',
                foringKey: 'IDREP',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            NroBoleta: 'ORDEN',
            NroAfiliado: 'AFILIADO',
            Codigo: 'CODIGO',
            Subcodigo: 'SUBCOD',
            Clase: 'PARM1',
            Dias: 'PARM2',
            Vencimiento: 'VTO',
            Importe: 'IMPORTE',
            Documento: 'DNI',
            NombreCompleto: 'APYNOM',
            TipoEmpleoId: 'TE',
            TipoEmpleoDescripcion: {
                table: 'tabtipoempleo',
                parentKey: 'TE',
                foringKey: 'IDTE',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            SituacionRevistaId: 'SITREV',
            SituacionRevistaDescripcion: {
                table: 'tabsitrevista',
                parentKey: 'SITREV',
                foringKey: 'IDSITREV',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            TipoObraSocialId: 'OS',
            PPP: 'PPP',
            FechaGrabacion: 'FECHAGRAB',
            EstadoRegistro: 'IDESTADOREG',
            HojaId: 'IDHOJANOV',
            Id: 'IDNOVHAB'
        },
        key: { field: "Id", seq: 'NOVHABERES_SEQ.NEXTVAL' }
    },
    persona: {
        table: "PERSONAS",
        fields: {
            Id: 'IDPERS',
            Documento: 'DNI',
            ApellidoYNombre: 'APEYNOM',
            Sexo: 'SEXO',
            CUIL: 'CUIL',
            FechaNacimiento: 'FECHANAC',
            Telefono: 'TELEFONO',
            EMail: 'EMAIL',
            FechaIngreso: 'FECHAINGRESO',
            DomicilioCalle: 'DOMICILIO',
            DomicilioNumero: 'NRO',
            Localidad: 'LOCALIDAD',
            CodigoPostal: 'CODPOSTAL',
            Provincia: 'PROVINCIA'
        },
        key: { field: "Id", seq: 'PERSONAS_SEQ.NEXTVAL' }
    },
    cargo: {
        table: "CARGOS",
        fields: {
            Id: 'IDCARGO',
            PersonaId: 'IDPERS',
            PersonaDocumento: {
                table: 'personas',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    Documento: 'DNI'
                }
            },
            PersonaApellidoYNombre: {
                table: 'personas',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    ApellidoYNombre: 'APEYNOM'
                }
            },
            ReparticionId: 'IDREP',
            ReparticionDescripcion: {
                table: 'reparticion',
                parentKey: 'IDREP',
                foringKey: 'IDREP',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            Orden: 'ORDEN',
            Afiliado: 'AFILIADO',
            TipoEmpleoId: 'IDTE',
            TipoEmpleoDescripcion: {
                table: 'tabtipoempleo',
                parentKey: 'IDTE',
                foringKey: 'IDTE',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            VtoEscalafon: 'VTOESC',
            Antiguedad: 'ANTIG',
            SituacionRevistaId: 'IDSITREV',
            SituacionRevistaDescripcion: {
                table: 'tabsitrevista',
                parentKey: 'IDSITREV',
                foringKey: 'IDSITREV',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            Categoria: 'CATEGORIA',
            FechaBaja: 'FECHABAJA',
            Estado: 'IDESTADOCARGO',
            TipoObraSocialId: 'IDTIPOOS',
            TipoObraSocialDescripcion: {
                table: 'TABTIPOOS',
                parentKey: 'IDTIPOOS',
                foringKey: 'IDTIPOOS',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            TipoLiquidacionId: 'IDTIPOLIQ',
            TipoLiquidacionDescripcion: {
                table: 'tipoliquidacion',
                parentKey: 'IDTIPOLIQ',
                foringKey: 'IDTIPOLIQ',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
        },
        key: { field: "Id", seq: 'CARGOS_SEQ.NEXTVAL' }
    },
    concepto: {
        table: "CONCEPTO",
        fields: {
            Id: 'IDCONCEPTO',
            Codigo: 'CODIGO',
            SubCodigo: 'SUBCOD',
            DescBreve: 'DESC_BREVE',
            AcumulaGanancia: 'ACUM_GAN',
            AcumulaRemunerativo: 'ACUM_REM',
            TipoConceptoId: 'IDTIPOCONCEPTO',
            AcumulaJubilacion: 'ACUM_JUB',
            CalculaPorPesona: 'CALC_PERSONA',
            CalculaTicket: 'TICKET',
            Bonificable: 'BONIFICABLE',
            AcumulaOSocial: 'ACUM_OS',
            Basico: 'BASICO',
            Especial: 'ESPECIAL',
            DeduceJubilacion: 'DEDUC_JUB',
            DeducePension: 'DEDUC_PEN',
            Reliquidar: 'RELIQUIDA',
            DescBoleta: 'DESC_BOLETA',
            Observacion: 'OBSERVACION',
            TipoConceptoDescripcion: {
                table: 'tabtipoconcepto',
                parentKey: 'IDTIPOCONCEPTO',
                foringKey: 'IDTIPOCONCEPTO',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            }
        },
        key: { field: "Id", seq: 'CONCEPTO_SEQ.NEXTVAL' }
    },
    reparticion: {
        table: "REPARTICION",
        fields: {
            Id: 'IDREP',
            Descripcion: 'DESCRIPCION',
            Direccion: 'DIRECCION',
            CUIT: 'CUIT',
            GrupoReparticionId: 'IDGRUPOREPARTICION'
        },
        key: { field: "Id" }
    },
    formula: {
        table: 'FORMULAS',
        fields: {
            Id: 'IDFORMULA',
            Condicion: 'CONDICION',
            Accion: 'ACCION',
            Detalle: 'DETALLE',
            ConceptoId: 'IDCONCEPTO',
            CondicionInput: 'CONDICION_INPUT',
            AccionInput: 'ACCION_INPUT',
            Codigo: 'CODIGO',
            SpName: 'SPNAME'
        },
        key: { field: 'Id', seq: 'FORMULAS_SEQ.NEXTVAL' }
    },
    conceptoLiq: {
        table: 'CONCEPTOLIQ',
        fields: {
            Id: 'IDCONCEPTOLIQ',
            CargoId: 'IDCARGO',
            Codigo: 'CODIGO',
            SubCodigo: 'SUBCOD',
            Parametro1: 'PARM1',
            Parametro2: 'PARM2',
            Vencimiento: 'VTO',
            Importe: 'IMPORTE',
            Periodo: 'PERIODO',
            GrupoAdicionalId: 'IDGRUPOADI',
            PenLey: 'PENLEY'
        },
        key: {field : 'Id', seq: 'CONCEPTOLIQ_SEQ.NEXTVAL'}
    }
}













