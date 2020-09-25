/**
 * A powerful, lightweight unique identifier generator.
 * @param {number} [length=10] - Defaults to 10
 * @param {number} [length=10] - The length of the unique identifier
 * @param {(string|Object[])} [format='alphanumeric'] - Defaults to alphanumeric
 * @param {(string|Object[])} [format='alphanumeric'] - all | alphabetic | numeric | alphanumeric | symbolic | custom
 */
function uniid(length = 10, format = "alphanumeric") {
	if (typeof length === "number") {
		if (typeof format === "string") {
			const value = format.toUpperCase();
			if (value === "ALL") {
				const arrStr =
					'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[{]}:;"|<,>./?`~' +
					// eslint-disable-next-line quotes
					"'";
				const arr = arrStr.split("");
				const uniidArr = [];
				while (uniidArr.length < length) {
					uniidArr.push(arr[Math.floor(Math.random() * arr.length)]);
				}
				const uniid = uniidArr.join("");
				return uniid;
			} else if (value === "ALPHABETIC") {
				const arrStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				const arr = arrStr.split("");
				const uniidArr = [];
				while (uniidArr.length < length) {
					uniidArr.push(arr[Math.floor(Math.random() * arr.length)]);
				}
				const uniid = uniidArr.join("");
				return uniid;
			} else if (value === "NUMERIC") {
				const arrStr = "1234567890";
				const arr = arrStr.split("");
				const uniidArr = [];
				while (uniidArr.length < length) {
					uniidArr.push(arr[Math.floor(Math.random() * arr.length)]);
				}
				const uniid = uniidArr.join("");
				return uniid;
			} else if (value === "ALPHANUMERIC") {
				const arrStr =
					"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
				const arr = arrStr.split("");
				const uniidArr = [];
				while (uniidArr.length < length) {
					uniidArr.push(arr[Math.floor(Math.random() * arr.length)]);
				}
				const uniid = uniidArr.join("");
				return uniid;
			} else if (value === "SYMBOLIC") {
				const arrStr =
					'!@#$%^&*()-_=+[{]}:;"|<,>./?`~' +
					// eslint-disable-next-line quotes
					"'";
				const arr = arrStr.split("");
				const uniidArr = [];
				while (uniidArr.length < length) {
					uniidArr.push(arr[Math.floor(Math.random() * arr.length)]);
				}
				const uniid = uniidArr.join("");
				return uniid;
			} else {
				throw new Error("Format must be a specified string or an array.");
			}
		} else if (Array.isArray(format)) {
			const arr = format;
			const uniidArr = [];
			while (uniidArr.length < length) {
				uniidArr.push(arr[Math.floor(Math.random() * arr.length)]);
			}
			const uniid = uniidArr.join("");
			return uniid;
		} else {
			throw new Error("Format must be a specified string or an array.");
		}
	} else {
		throw new Error("Length must be a number.");
	}
}

module.exports = uniid;
