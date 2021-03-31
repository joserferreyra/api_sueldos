module.exports.jsonReportes = {
    resumenLiq: {
        fields: {
            Orden: "c.orden",
            PersonaDocumento: "p.dni",
            PersonaApellido: "P.APELLIDO",
            PersonaNombre: "P.NOMBRE",
            SujetoAporte: "sum( case when CON.IDTIPOCONCEPTO = 1 THEN li.impticket ELSE 0 END)",
            ExcentoAporte: "sum( case when CON.IDTIPOCONCEPTO = 2 THEN li.impticket ELSE 0 END)",
            AsignacionFamiliar: "sum( case when CON.IDTIPOCONCEPTO = 4 THEN li.impticket ELSE 0 END)",
            DescuentosLey: "sum( case when CON.IDTIPOCONCEPTO = 3 THEN li.impticket ELSE 0 END)",
            DescuentosVarios: "sum( case when CON.IDTIPOCONCEPTO = 6 THEN li.impticket ELSE 0 END) ",
            Neto: "sum( case when CON.IDTIPOCONCEPTO in (1,2,4) THEN li.impticket ELSE li.impticket*(-1) END)",
            TipoTotal: "grouping(c.orden)"
        },
        whereFields: {
            SituacionRevistaId: "c.idsitrev",
            TipoLiquidacionId: "l.idtipoliq",
            GrupoAdicionalId: "l.idgrupoadi",
            Periodo: "l.periodo"
        },
        key: { field: "" },
        sql: {
            fromClause: [
                "from liq l",
                "inner join liqitem li on l.idliq = li.idliq",
                "inner join cargos c on C.IDCARGO = l.idcargo",
                "inner join personas p on p.idpers = c.idpers",
                "inner join concepto con on con.idconcepto = li.idconcepto"
            ],
            groupClause: [
                "group by rollup ((c.orden,p.dni,P.APELLIDO,P.NOMBRE))",
                "ORDER BY c.orden, TipoTotal"
            ]
        }
    },
    resumenCodLiq: {
        fields: {
            IdTipoConcepto: "CON.IDTIPOCONCEPTO",
            Codigo: "CON.CODIGO",
            SubCodigo: "CON.SUBCOD",
            Descripcion: "CON.desc_boleta",
            Cantidad: "count(*)",
            Importe: "sum(li.impticket)",
            Periodo: "l.periodo",
            TipoTotal: "grouping(idtipoconcepto)+grouping(desc_boleta)+grouping(l.periodo) "
        },
        whereFields: {
            Periodo: "l.periodo",
            IdTipoLiquidacion: "l.idtipoliq"
        },
        key: { field: "" },
        sql: {
            fromClause: [
                "from liq l",
                "inner join liqitem li on l.idliq = li.idliq",
                "inner join cargos c on C.IDCARGO = l.idcargo",
                "inner join personas p on p.idpers = c.idpers",
                "inner join concepto con on con.idconcepto = li.idconcepto and CON.IDTIPOCONCEPTO <> 5"
            ],
            groupClause: [
                "group by rollup((l.periodo,CON.IDTIPOCONCEPTO),(CON.CODIGO,CON.SUBCOD,CON.desc_boleta))"
            ]
        }

        /*where
        L.PERIODO = to_date('01/03/2021','dd/mm/yyyy')
        and L.IDTIPOLIQ = 1
        and CON.IDTIPOCONCEPTO <> 5
        
        order by CON.IDTIPOCONCEPTO,CON.CODIGO,CON.SUBCOD;*/
    }
}
