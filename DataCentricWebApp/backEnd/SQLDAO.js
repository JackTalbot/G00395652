var express = require('express');
var app = express();
require('dotenv').config();
var pmysql = require('promise-mysql');
var pool;

const username = process.env.SQLDB_USER;
const password = process.env.SQLDB_PASSWORD;
const database = process.env.SQLDB_DATABASE;
const host = process.env.SQLDB_HOST;
const port = process.env.SQLDB_PORT;
const connectionLimit = process.env.SQLDB_CONNECTION_LIMIT;

pmysql.createPool({
    host: host,
    user: username,
    password: password,
    database: database,
    port: port,
    connectionLimit: connectionLimit
}).then((result) => {
    pool = result;
}).catch((error) => {
    console.log(error);
});

function getStores() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM stores').then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function editStores(sid, loc, mgrid) {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE stores SET location = ?, manager_id = ? WHERE store_id = ?', [loc, mgrid, sid]).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function addStores(sid, loc, mgrid) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO stores VALUES (?, ?, ?)', [sid, loc, mgrid]).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function deleteStores(sid) {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM stores WHERE store_id = ?', [sid]).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function getStoresID(sid) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM stores WHERE store_id = ?', [sid]).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function getProducts() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products').then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function deleteProducts(pid) {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM products WHERE product_id = ?', [pid]).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

function checkStoreProducts(sid) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products WHERE store_id = ?', [sid]).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}

module.exports = {
    getStores: getStores,
    editStores: editStores,
    addStores: addStores,
    deleteStores: deleteStores,
    getStoresID: getStoresID,
    getProducts: getProducts,
    deleteProducts: deleteProducts,
    checkStoreProducts: checkStoreProducts
};