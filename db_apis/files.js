const oracledb = require('oracledb');
const database = require('../services/database.js');

const createSql =
  `insert into jsao_files (
    id,
    file_name,
    content_type,
    blob_data
  ) values (
    TEMPFILES_SEQ.NEXTVAL,
    :file_name,
    :content_type,
    :content_buffer
  ) returning id into :id`;

async function create(fileName, contentType, contentBuffer) {
  const binds = {
    file_name: fileName,
    content_type: contentType,
    content_buffer: contentBuffer,
    id: {
      type: oracledb.NUMBER,
      dir: oracledb.BIND_OUT
    }
  };

  result = await database.simpleExecute(createSql, binds);

  //console.log(result);

  return result.outBinds.id[0];
}

module.exports.create = create;


const getSql =
  `select file_name "file_name",
    dbms_lob.getlength(blob_data) "file_length",
    content_type "content_type",
    blob_data "blob_data"
  from jsao_files
  where id = :id`

async function get(id) {
  const binds = {
    id: id
  };
  const opts = {
    fetchInfo: {
      blob_data: {
        type: oracledb.BUFFER
      }
    }
  };
  const result = await database.simpleExecute(getSql, binds, opts);
  return result.rows;
}
module.exports.get = get;

function getArrayObjects(data, parser) {
  try {
    const array = data.split("\n");
    const object = parser.row;

    const rows = [];
    const resume = {};

    array.forEach(element => {
      if (element.trimEnd().length > 1) {

        const row = {};

        for (const key in object) {

          if (Object.hasOwnProperty.call(object, key)) {
            const atrib = object[key];
            const field = element.substr(atrib.substr[0], atrib.substr[1]);

            switch (atrib.type) {
              case "number":
                row[key] = Number(field)
                if (resume[key]) resume[key] += Number(field);
                else resume[key] = Number(field);
                break;
              case "text":
                row[key] = String(field).trim();
                if (resume[key]) resume[key] += 1;
                else resume[key] = 1;
                break;
              default:
                break;
            }
          }
        }
        rows.push(row);
      }

    });

    return { "resume": resume, "rows": rows };

  } catch (error) {

    console.log(error);
    return null;
  }

};

module.exports.getObjects = getArrayObjects;