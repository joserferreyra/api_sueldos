module.exports.jsonEntityMap = {
    hoja: {
        table: 'hoja_nov',
        fields: {
            //FechaGrabacion: 'FECHAALTA',
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
        sequence: { field: "Id", seq: 'HOJA_NOV_SEQ.NEXTVAL' }
    },
    tipoliq: {
        table: 'tipoliquidacion',
        fields: {
            Id: 'IDTIPOLIQ',
            Descripcion: 'DESCRIPCION'
        }
    },
    tipoos: {
        table: 'TABTIPOOS',
        fields: {
            Id: 'IDTIPOOS',
            Descripcion: 'DESCRIPCION'
        }
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
        sequence: { field: "Id", seq: 'NOVHABERES_SEQ.NEXTVAL' }
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
        sequence: { field: "Id", seq: 'PERSONAS_SEQ.NEXTVAL' }
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
        sequence: { field: "Id", seq: 'CARGOS_SEQ.NEXTVAL' }
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
        sequence: { field: "Id", seq: 'CONCEPTO_SEQ.NEXTVAL' }
    }

};
