module.exports = {
  dbPool: {
    user: 'US_SUELDO',
    password: 'usuario',
    connectString: 'www.sueldos.duckdns.org:1521/DESA',
    //connectString: 'www.sueldos.duckdns.org:1521/ORCL',
    //connectString: '192.168.1.8:1521/ORCL',
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
    poolTimeout: 0
  },
  jwtSecretKey: "SueldosMuni098Burru"
};