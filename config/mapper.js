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
            Apellido: 'APELLIDO',
            Nombre: 'NOMBRE',
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
            Apellido: 'APELLIDO',
            Nombre: 'NOMBRE',
            Sexo: 'SEXO',
            CUIL: 'CUIL',
            FechaNacimiento: 'FECHANAC',
            Telefono: 'TELEFONO',
            EMail: 'EMAIL',
            FechaIngreso: 'FECHAINGRESO',
            DomicilioCalle: 'DOMICILIO',
            DomicilioNumero: 'NRO',
            Piso: 'PISO',
            Departamento: 'DPTO',
            LocalidadId:'LOCALIDAD_ID',
            LocalidadDescripcion: {
                table: 'LOCALIDADES',
                parentKey: 'LOCALIDAD_ID',
                foringKey: 'LOCALIDAD_ID',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            LocalidadCodigoPostal:{
                table: 'LOCALIDADES',
                parentKey: 'LOCALIDAD_ID',
                foringKey: 'LOCALIDAD_ID',
                fields: {
                    CP: 'CODIGO_POSTAL'
                }
            },
            ProvinciaId: 'PROVINCIA_ID',
            ProvinciaDescripcion:{
                table: 'PROVINCIAS',
                parentKey: 'PROVINCIA_ID',
                foringKey: 'PROVINCIA_ID',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            PaisId: 'PAIS_ID',
            PaisDescripcion:{
                table: 'PAISES',
                parentKey: 'PAIS_ID',
                foringKey: 'PAIS_ID',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            TipoDocumentoId: 'IDTIPODOC',
            TipoDocumentoSintetico: {
                table: 'TABTIPODOC',
                parentKey: 'IDTIPODOC',
                foringKey: 'IDTIPODOC',
                fields: {
                    Sintetico: 'SINTETICO'
                }
            },
            EstadoCivilId: 'IDESTCIVIL',
            EstadoCivilDescripcion:{
                table: 'TABESTCIVIL',
                parentKey: 'IDESTCIVIL',
                foringKey: 'IDESTCIVIL',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            CBU: 'CBU',
            Cuenta: 'CUENTA'
        },
        key: { field: "Id", seq: 'PERSONAS_SEQ.NEXTVAL' }
    },
    cargo: {
        table: "CARGOS",
        fields: {
            Id: 'IDCARGO',
            PersonaId: 'IDPERS',
            PersonaDocumento: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    Documento: 'DNI'
                }
            },
            PersonaApellido: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    ApellidoYNombre: 'APELLIDO'
                }
            },
            PersonaNombre: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    ApellidoYNombre: 'NOMBRE'
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
            Salario: 'SALARIO'
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
        key: { field: 'Id', seq: 'CONCEPTOLIQ_SEQ.NEXTVAL', del: true }
    },
    cargaFamiliar: {
        table: 'CARGA_FAMILIAR',
        fields: {
            Id: 'IDCARFAM',
            PersonaId: 'IDPERS',
            PersonaDocumento: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    Documento: 'DNI'
                }
            },
            PersonaApellido: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    ApellidoYNombre: 'APELLIDO'
                }
            },
            PersonaNombre: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    ApellidoYNombre: 'NOMBRE'
                }
            },
            Documento: 'DNI',
            ApellidoYNombre: 'APEYNOM',
            TipoRelacionId: 'IDTABTIPOREL',
            TipoRelacionDescripcion: {
                table: 'TABTIPORELACION',
                parentKey: 'IDTABTIPOREL',
                foringKey: 'IDTABTIPOREL',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            FechaNacimiento: 'FECHANAC',
            TipoEscolaridadId: 'IDTABTIPOESC',
            TipoEscolaridadDescripcion: {
                table: 'TABTIPOESCOLARIDAD',
                parentKey: 'IDTABTIPOESC',
                foringKey: 'IDTABTIPOESC',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
            Grado: 'GRADO',
            Discapacitado: 'DISCAPACITADO'
        },
        key: { field: "Id", seq: 'CARGA_FAMILIAR_SEQ.NEXTVAL', del: true }
    },
    tipoEscolaridad: {
        table: 'TABTIPOESCOLARIDAD',
        fields: {
            Id: 'IDTABTIPOESC',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id" }
    },
    tipoRelacion: {
        table: 'TABTIPORELACION',
        fields: {
            Id: 'IDTABTIPOREL',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id" }
    },
    escala:{
        table: 'ESCALA',
        fields:{
            Id: 'IDESCALA',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id", seq: 'ESCALA_SEQ.NEXTVAL'}
    },
    valUnicoTipo:{
        table: 'DESC_VALORFIJO',
        fields:{
            Id: 'IDDESCFIJO',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id", seq: 'DESC_VALFIJO_SEQ.NEXTVAL'}
    },
    valCatTipo:{
        table: 'DESC_CABVALCAT',
        fields:{
            Id: 'IDCABVALCAT',
            Descripcion: 'DESCRIPCION'
        },
        key: { field: "Id", seq: 'DESC_CABVALCAT_SEQ.NEXTVAL'}
    },
    valCatCabecera:{
        table: 'DESC_VALORCATEGORIA',
        fields:{
            Id: 'IDDESC_VALCAT',
            Descripcion: 'DESCRIPCION',
            ValCatTipoId: 'IDCABVALCAT'
        },
        key: { field: "Id", seq: 'DESC_VALCAT_SEQ.NEXTVAL'}
    },
    escalaSalarialDetalle:{
        table: 'ESCALASALARIAL',
        fields:{
            Id: 'IDESCALASAL',
            EscalaSalarialId: 'IDESCALA',
            Categoria:'NROCAT',
            DescripcionCorta: 'DESCRIPCION',
            DescripcionLarga: 'DESC_DETALLE',
            Importe: 'IMPORTE'
        },
        key: { field: "Id", seq: 'ESCALASALARIAL_SEQ.NEXTVAL'}
    },
    valCatDetalle:{
        table: 'VALORCATEGORIA',
        fields:{
            Id: 'IDVALCATEGORIA',
            ValCatCabeceraId: 'IDDESC_VALCAT',
            Categoria:'NROCAT',
            Valor: 'Valor'
        },
        key: { field: "Id", seq: 'VALORCATEGORIA_SEQ.NEXTVAL'}
    },
    valUnico:{
        table: 'VALORUNICO',
        fields:{
            Id: 'IDVALUNICO',
            Descripcion: 'DESCRIPCION',
            Valor: 'Valor',
            ValUnicoTipoId:'IDDESCFIJO'
        },
        key: { field: "Id", seq: 'VALUNICO_SEQ.NEXTVAL'}
    },
    provincias:{
        table: 'PROVINCIAS',
        fields:{
            Id: 'PROVINCIA_ID',
            Descripcion: 'DESCRIPCION',
            PaisId: 'PAIS_ID',
            PaisDescripcion: {
                table: 'PAISES',
                parentKey: 'PAIS_ID',
                foringKey: 'PAIS_ID',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            },
        }        
    },
    paises:{
        table: 'PAISES',
        fields:{
            Id: 'PAIS_ID',
            Descripcion: 'DESCRIPCION'
        }
    },
    localidad:{
        table: 'LOCALIDADES',
        fields:{
            Id: 'LOCALIDAD_ID',
            Descripcion: 'DESCRIPCION',
            CP: 'CODIGO_POSTAL',
            ProvinciaId: 'PROVINCIA_ID',
            ProvinciaDescripcion:{
                table: 'PROVINCIAS',
                parentKey: 'PROVINCIA_ID',
                foringKey: 'PROVINCIA_ID',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            }
        }
    },
    tipoDoc:{
        table: 'TABTIPODOC',
        fields:{
            Id: 'IDTIPODOC',
            Descripcion: 'DESCRIPCION',
            Sintetico: 'SINTETICO'
        }
    },
    estadoCivil:{
        table: 'TABESTCIVIL',
        fields:{
            Id: 'IDESTCIVIL',
            Descripcion: 'DESCRIPCION',
            Sintetico: 'SINTETICO'
        }
    },

    /*personaCargoFam: {
        table: 'PERSONAS_CARGOS_FAM',
        fields: {
            Id: 'IDPERS', // Este se vincula a IDPERS
            PersonaDocumento: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    Documento: 'DNI'
                }
            },
            PersonaApellidoYNombre: {
                table: 'PERSONAS',
                parentKey: 'IDPERS',
                foringKey: 'IDPERS',
                fields: {
                    ApellidoYNombre: 'APEYNOM'
                }
            },
            CargoId: 'IDCARGO', // Este se vincula a IDCARGO
            ReparticionId: '',
            ReparticionDescripcion: '',
            Orden: '',
            Afiliado: '',
            TipoEmpleoId: '',
            TipoEmpleoDescripcion: {
                table: 'tabtipoempleo',
                parentKey: 'IDTE',
                foringKey: 'IDTE',
                fields: {
                    Descripcion: 'DESCRIPCION'
                }
            }
        }
    }*/
}








