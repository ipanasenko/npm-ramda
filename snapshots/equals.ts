import R_equals = require('../ramda/dist/src/equals');

declare const string: string;

// @dts-jest:pass:snap -> (b: string) => boolean
R_equals(string);
// @dts-jest:pass:snap -> boolean
R_equals(string)(string);
// @dts-jest:pass:snap -> boolean
R_equals(string, string);
