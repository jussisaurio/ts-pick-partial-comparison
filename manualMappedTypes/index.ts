// This utility is the same in both versions
type requiredKeys<T extends object> = {
  [k in keyof T]: undefined extends T[k] ? never : k;
}[keyof T];
// This uses inlined Pick and Partial
export type addQuestionMarks<
  T extends object,
  R extends keyof T = requiredKeys<T>
> = { [K in R]: Required<T>[K] } & {
  [K in keyof T]?: T[K] | undefined;
};

// type Pick<T, R extends keyof T> = { [K in R]: T[K]; }
// type Partial<T> = { [K in keyof T]?: T[K] | undefined; }

type Person = {
  name: string;
  location?: string;
};

type PartialPerson = addQuestionMarks<Person>;

declare const person: PartialPerson;
