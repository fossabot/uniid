# uniid

![GitHub](https://img.shields.io/github/license/ElitKrit/uniid?color=blue)
[![install size](https://packagephobia.com/badge?p=uniid@latest)](https://packagephobia.com/result?p=uniid@latest)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ElitKrit/uniid)
[![Build Status](https://travis-ci.org/ElitKrit/uniid.svg?branch=master)](https://travis-ci.org/ElitKrit/uniid)
![npm](https://img.shields.io/npm/dw/uniid)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FElitKrit%2Funiid.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FElitKrit%2Funiid?ref=badge_shield)

A powerful, lightweight unique identifier generator.

## Installation
___

`npm i uniid`

`yarn add uniid`  

Then...  

```
const uniid = require('uniid');

uniid(length, options);
```  

## Options
___

### **Length**

The length of the unique identifier.
- Must be a number
- Defaults to 10

### **Format**

The format of the unique identifier. Can be alphanumeric (default), alphabetic, numeric, symbolic, all, or a custom array.

#### ***Alphanumeric***  
Letters a-z (uppercase and lowercase) and numbers 0-9

#### ***Alphabetic***  
Letters a-z (uppercase and lowercase)

#### ***Numeric***
Numbers 0-9

#### ***Symbolic***
All symbols visible on keyboard

#### ***All***  
Letters a-z (uppercase and lowercase), numbers 0-9, and all symbols visible on keyboard

#### ***Custom***
This must be an array, the unique identifier will only contain values in the array.