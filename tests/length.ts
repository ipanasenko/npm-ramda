import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R.length(string);
// @dts-jest:pass:snap
R.length(string_array);
