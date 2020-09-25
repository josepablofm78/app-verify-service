export default {
    env: process.env.NODE_ENV || 'development',
    server: {
        port: process.env.SERVER_PORT || 3001,
        verifierAddress:
            process.env.VERIFIER_ADDRESS ||
            't1xxx',
        nodeToken: process.env.NODE_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.OJlFIgYG3D23RjWWXfjdTluG6Qx2EOgwMeWQxnUQrMM',
        nodeUrl: process.env.NODE_URL || 'ws://localhost:1234/rpc/v0'
    } /*,
    database: {
        uri: process.env.ELASTIC_URL || 'http://localhost:9200',
        user: process.env.ELASTIC_USER || 'elastic',
        password: process.env.ELASTIC_PASSWORD || 'changeme',
        index: process.env.ELASTIC_INDEX || 'faucetdb'
    }
    */
}
