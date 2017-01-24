/**
 * Copyright(c) 2017 wsc <nbwsc@icloud.com>
 *
 * promise-request
 *
 * MIT License 
 */

var request = require('request');


module.exports = function (options) {
	return new Promise(function (resolve, reject) {
		request(options, function (error, response) {
			if (error) return reject(error);
			resolve(response);
		})
	});
};
