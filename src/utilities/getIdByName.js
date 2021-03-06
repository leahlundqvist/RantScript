'use strict';
const http = require('./http');
const variables = require('../variables');

function _getIdByUsername(username) {
	const url = `${variables.API}/get-user-id`;
	const parameters = {
        app: 3,
        username
    };

	return http
        .GET(url, parameters)
        .then(data => data.user_id);
}

module.exports = _getIdByUsername;