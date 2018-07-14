import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.or(string)(number);
// @dts-jest:pass:snap
R.or(string, number);
