/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model booking
 *
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>;
/**
 * Model cinema
 *
 */
export type cinema = $Result.DefaultSelection<Prisma.$cinemaPayload>;
/**
 * Model movie
 *
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>;
/**
 * Model showing
 *
 */
export type showing = $Result.DefaultSelection<Prisma.$showingPayload>;
/**
 * Model technical_support
 *
 */
export type technical_support = $Result.DefaultSelection<Prisma.$technical_supportPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.bookingDelegate<ExtArgs>;

  /**
   * `prisma.cinema`: Exposes CRUD operations for the **cinema** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cinemas
   * const cinemas = await prisma.cinema.findMany()
   * ```
   */
  get cinema(): Prisma.cinemaDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.movieDelegate<ExtArgs>;

  /**
   * `prisma.showing`: Exposes CRUD operations for the **showing** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Showings
   * const showings = await prisma.showing.findMany()
   * ```
   */
  get showing(): Prisma.showingDelegate<ExtArgs>;

  /**
   * `prisma.technical_support`: Exposes CRUD operations for the **technical_support** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Technical_supports
   * const technical_supports = await prisma.technical_support.findMany()
   * ```
   */
  get technical_support(): Prisma.technical_supportDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    booking: 'booking';
    cinema: 'cinema';
    movie: 'movie';
    showing: 'showing';
    technical_support: 'technical_support';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'booking' | 'cinema' | 'movie' | 'showing' | 'technical_support' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>;
        fields: Prisma.bookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[];
          };
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      cinema: {
        payload: Prisma.$cinemaPayload<ExtArgs>;
        fields: Prisma.cinemaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.cinemaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.cinemaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          findFirst: {
            args: Prisma.cinemaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.cinemaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          findMany: {
            args: Prisma.cinemaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>[];
          };
          create: {
            args: Prisma.cinemaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          createMany: {
            args: Prisma.cinemaCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.cinemaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          update: {
            args: Prisma.cinemaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          deleteMany: {
            args: Prisma.cinemaDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.cinemaUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.cinemaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCinema>;
          };
          groupBy: {
            args: Prisma.cinemaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CinemaGroupByOutputType>[];
          };
          count: {
            args: Prisma.cinemaCountArgs<ExtArgs>;
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number;
          };
        };
      };
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>;
        fields: Prisma.movieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[];
          };
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          count: {
            args: Prisma.movieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
      showing: {
        payload: Prisma.$showingPayload<ExtArgs>;
        fields: Prisma.showingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.showingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.showingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>;
          };
          findFirst: {
            args: Prisma.showingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.showingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>;
          };
          findMany: {
            args: Prisma.showingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>[];
          };
          create: {
            args: Prisma.showingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>;
          };
          createMany: {
            args: Prisma.showingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.showingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>;
          };
          update: {
            args: Prisma.showingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>;
          };
          deleteMany: {
            args: Prisma.showingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.showingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.showingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$showingPayload>;
          };
          aggregate: {
            args: Prisma.ShowingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShowing>;
          };
          groupBy: {
            args: Prisma.showingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ShowingGroupByOutputType>[];
          };
          count: {
            args: Prisma.showingCountArgs<ExtArgs>;
            result: $Utils.Optional<ShowingCountAggregateOutputType> | number;
          };
        };
      };
      technical_support: {
        payload: Prisma.$technical_supportPayload<ExtArgs>;
        fields: Prisma.technical_supportFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.technical_supportFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.technical_supportFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>;
          };
          findFirst: {
            args: Prisma.technical_supportFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.technical_supportFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>;
          };
          findMany: {
            args: Prisma.technical_supportFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>[];
          };
          create: {
            args: Prisma.technical_supportCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>;
          };
          createMany: {
            args: Prisma.technical_supportCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.technical_supportDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>;
          };
          update: {
            args: Prisma.technical_supportUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>;
          };
          deleteMany: {
            args: Prisma.technical_supportDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.technical_supportUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.technical_supportUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$technical_supportPayload>;
          };
          aggregate: {
            args: Prisma.Technical_supportAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTechnical_support>;
          };
          groupBy: {
            args: Prisma.technical_supportGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Technical_supportGroupByOutputType>[];
          };
          count: {
            args: Prisma.technical_supportCountArgs<ExtArgs>;
            result: $Utils.Optional<Technical_supportCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    showing: number;
  };

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showing?: boolean | CinemaCountOutputTypeCountShowingArgs;
  };

  // Custom InputTypes

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountShowingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: showingWhereInput;
  };

  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    showing: number;
  };

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showing?: boolean | MovieCountOutputTypeCountShowingArgs;
  };

  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountShowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: showingWhereInput;
    };

  /**
   * Count Type ShowingCountOutputType
   */

  export type ShowingCountOutputType = {
    booking: number;
  };

  export type ShowingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | ShowingCountOutputTypeCountBookingArgs;
  };

  // Custom InputTypes

  /**
   * ShowingCountOutputType without action
   */
  export type ShowingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowingCountOutputType
     */
    select?: ShowingCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ShowingCountOutputType without action
   */
  export type ShowingCountOutputTypeCountBookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    booking: number;
    cinema: number;
    technical_support: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | UserCountOutputTypeCountBookingArgs;
    cinema?: boolean | UserCountOutputTypeCountCinemaArgs;
    technical_support?: boolean | UserCountOutputTypeCountTechnical_supportArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: bookingWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cinemaWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTechnical_supportArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: technical_supportWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingAvgAggregateOutputType = {
    number_of_tickets: number | null;
    total_price: number | null;
  };

  export type BookingSumAggregateOutputType = {
    number_of_tickets: number | null;
    total_price: number | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    showing_id: string | null;
    booking_time: Date | null;
    number_of_tickets: number | null;
    total_price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    showing_id: string | null;
    booking_time: Date | null;
    number_of_tickets: number | null;
    total_price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    user_id: number;
    showing_id: number;
    booking_time: number;
    number_of_tickets: number;
    total_price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingAvgAggregateInputType = {
    number_of_tickets?: true;
    total_price?: true;
  };

  export type BookingSumAggregateInputType = {
    number_of_tickets?: true;
    total_price?: true;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    user_id?: true;
    showing_id?: true;
    booking_time?: true;
    number_of_tickets?: true;
    total_price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    showing_id?: true;
    booking_time?: true;
    number_of_tickets?: true;
    total_price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    user_id?: true;
    showing_id?: true;
    booking_time?: true;
    number_of_tickets?: true;
    total_price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BookingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BookingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _avg?: BookingAvgAggregateInputType;
    _sum?: BookingSumAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    user_id: string;
    showing_id: string;
    booking_time: Date;
    number_of_tickets: number | null;
    total_price: number | null;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
          : GetScalarType<T[P], BookingGroupByOutputType[P]>;
      }
    >
  >;

  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      showing_id?: boolean;
      booking_time?: boolean;
      number_of_tickets?: boolean;
      total_price?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      showing?: boolean | showingDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type bookingSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    showing_id?: boolean;
    booking_time?: boolean;
    number_of_tickets?: boolean;
    total_price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showing?: boolean | showingDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'booking';
    objects: {
      showing: Prisma.$showingPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        showing_id: string;
        booking_time: Date;
        number_of_tickets: number | null;
        total_price: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<
    Prisma.$bookingPayload,
    S
  >;

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookingFindManyArgs,
    'select' | 'include'
  > & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking']; meta: { name: 'booking' } };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     **/
    create<T extends bookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingCreateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     **/
    delete<T extends bookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     **/
    upsert<T extends bookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the booking model
     */
    readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    showing<T extends showingDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, showingDefaultArgs<ExtArgs>>,
    ): Prisma__showingClient<
      $Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<'booking', 'String'>;
    readonly user_id: FieldRef<'booking', 'String'>;
    readonly showing_id: FieldRef<'booking', 'String'>;
    readonly booking_time: FieldRef<'booking', 'DateTime'>;
    readonly number_of_tickets: FieldRef<'booking', 'Int'>;
    readonly total_price: FieldRef<'booking', 'Int'>;
    readonly created_at: FieldRef<'booking', 'DateTime'>;
    readonly updated_at: FieldRef<'booking', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
  };

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>;
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput;
  };

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput;
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
  };

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput;
  };

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
  };

  /**
   * Model cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null;
    _avg: CinemaAvgAggregateOutputType | null;
    _sum: CinemaSumAggregateOutputType | null;
    _min: CinemaMinAggregateOutputType | null;
    _max: CinemaMaxAggregateOutputType | null;
  };

  export type CinemaAvgAggregateOutputType = {
    seating_capacity: number | null;
  };

  export type CinemaSumAggregateOutputType = {
    seating_capacity: number | null;
  };

  export type CinemaMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    seating_capacity: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CinemaMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    seating_capacity: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CinemaCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    opening_hours: number;
    seating_capacity: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CinemaAvgAggregateInputType = {
    seating_capacity?: true;
  };

  export type CinemaSumAggregateInputType = {
    seating_capacity?: true;
  };

  export type CinemaMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    seating_capacity?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CinemaMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    seating_capacity?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CinemaCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    seating_capacity?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cinema to aggregate.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cinemas
     **/
    _count?: true | CinemaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CinemaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CinemaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CinemaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CinemaMaxAggregateInputType;
  };

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
    [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>;
  };

  export type cinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cinemaWhereInput;
    orderBy?: cinemaOrderByWithAggregationInput | cinemaOrderByWithAggregationInput[];
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum;
    having?: cinemaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CinemaCountAggregateInputType | true;
    _avg?: CinemaAvgAggregateInputType;
    _sum?: CinemaSumAggregateInputType;
    _min?: CinemaMinAggregateInputType;
    _max?: CinemaMaxAggregateInputType;
  };

  export type CinemaGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    seating_capacity: number | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CinemaCountAggregateOutputType | null;
    _avg: CinemaAvgAggregateOutputType | null;
    _sum: CinemaSumAggregateOutputType | null;
    _min: CinemaMinAggregateOutputType | null;
    _max: CinemaMaxAggregateOutputType | null;
  };

  type GetCinemaGroupByPayload<T extends cinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CinemaGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
          : GetScalarType<T[P], CinemaGroupByOutputType[P]>;
      }
    >
  >;

  export type cinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      opening_hours?: boolean;
      seating_capacity?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      showing?: boolean | cinema$showingArgs<ExtArgs>;
      _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cinema']
  >;

  export type cinemaSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    opening_hours?: boolean;
    seating_capacity?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type cinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    showing?: boolean | cinema$showingArgs<ExtArgs>;
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $cinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'cinema';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      showing: Prisma.$showingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        opening_hours: string | null;
        seating_capacity: number | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['cinema']
    >;
    composites: {};
  };

  type cinemaGetPayload<S extends boolean | null | undefined | cinemaDefaultArgs> = $Result.GetResult<
    Prisma.$cinemaPayload,
    S
  >;

  type cinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    cinemaFindManyArgs,
    'select' | 'include'
  > & {
    select?: CinemaCountAggregateInputType | true;
  };

  export interface cinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cinema']; meta: { name: 'cinema' } };
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {cinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends cinemaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaFindUniqueArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Cinema that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {cinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends cinemaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends cinemaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindFirstArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends cinemaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     *
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends cinemaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Cinema.
     * @param {cinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     *
     **/
    create<T extends cinemaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaCreateArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cinemas.
     *     @param {cinemaCreateManyArgs} args - Arguments to create many Cinemas.
     *     @example
     *     // Create many Cinemas
     *     const cinema = await prisma.cinema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends cinemaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Cinema.
     * @param {cinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     *
     **/
    delete<T extends cinemaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaDeleteArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Cinema.
     * @param {cinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends cinemaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaUpdateArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cinemas.
     * @param {cinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends cinemaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends cinemaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Cinema.
     * @param {cinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     **/
    upsert<T extends cinemaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaUpsertArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
     **/
    count<T extends cinemaCountArgs>(
      args?: Subset<T, cinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CinemaAggregateArgs>(
      args: Subset<T, CinemaAggregateArgs>,
    ): Prisma.PrismaPromise<GetCinemaAggregateType<T>>;

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends cinemaGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cinemaGroupByArgs['orderBy'] }
        : { orderBy?: cinemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, cinemaGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cinema model
     */
    readonly fields: cinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cinemaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    showing<T extends cinema$showingArgs<ExtArgs> = {}>(
      args?: Subset<T, cinema$showingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the cinema model
   */
  interface cinemaFieldRefs {
    readonly id: FieldRef<'cinema', 'String'>;
    readonly description: FieldRef<'cinema', 'String'>;
    readonly location: FieldRef<'cinema', 'String'>;
    readonly opening_hours: FieldRef<'cinema', 'String'>;
    readonly seating_capacity: FieldRef<'cinema', 'Int'>;
    readonly name: FieldRef<'cinema', 'String'>;
    readonly created_at: FieldRef<'cinema', 'DateTime'>;
    readonly updated_at: FieldRef<'cinema', 'DateTime'>;
    readonly user_id: FieldRef<'cinema', 'String'>;
    readonly tenant_id: FieldRef<'cinema', 'String'>;
  }

  // Custom InputTypes

  /**
   * cinema findUnique
   */
  export type cinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema findUniqueOrThrow
   */
  export type cinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema findFirst
   */
  export type cinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cinemas.
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * cinema findFirstOrThrow
   */
  export type cinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cinemas.
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * cinema findMany
   */
  export type cinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinemas to fetch.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cinemas.
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * cinema create
   */
  export type cinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * The data needed to create a cinema.
     */
    data: XOR<cinemaCreateInput, cinemaUncheckedCreateInput>;
  };

  /**
   * cinema createMany
   */
  export type cinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cinemas.
     */
    data: cinemaCreateManyInput | cinemaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * cinema update
   */
  export type cinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * The data needed to update a cinema.
     */
    data: XOR<cinemaUpdateInput, cinemaUncheckedUpdateInput>;
    /**
     * Choose, which cinema to update.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema updateMany
   */
  export type cinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cinemas.
     */
    data: XOR<cinemaUpdateManyMutationInput, cinemaUncheckedUpdateManyInput>;
    /**
     * Filter which cinemas to update
     */
    where?: cinemaWhereInput;
  };

  /**
   * cinema upsert
   */
  export type cinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * The filter to search for the cinema to update in case it exists.
     */
    where: cinemaWhereUniqueInput;
    /**
     * In case the cinema found by the `where` argument doesn't exist, create a new cinema with this data.
     */
    create: XOR<cinemaCreateInput, cinemaUncheckedCreateInput>;
    /**
     * In case the cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cinemaUpdateInput, cinemaUncheckedUpdateInput>;
  };

  /**
   * cinema delete
   */
  export type cinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter which cinema to delete.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema deleteMany
   */
  export type cinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cinemas to delete
     */
    where?: cinemaWhereInput;
  };

  /**
   * cinema.showing
   */
  export type cinema$showingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    where?: showingWhereInput;
    orderBy?: showingOrderByWithRelationInput | showingOrderByWithRelationInput[];
    cursor?: showingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ShowingScalarFieldEnum | ShowingScalarFieldEnum[];
  };

  /**
   * cinema without action
   */
  export type cinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
  };

  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    duration: number | null;
    rating: number | null;
  };

  export type MovieSumAggregateOutputType = {
    duration: number | null;
    rating: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    director: string | null;
    duration: number | null;
    rating: number | null;
    release_date: Date | null;
    genre: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    director: string | null;
    duration: number | null;
    rating: number | null;
    release_date: Date | null;
    genre: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    title: number;
    director: number;
    duration: number;
    rating: number;
    release_date: number;
    genre: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    duration?: true;
    rating?: true;
  };

  export type MovieSumAggregateInputType = {
    duration?: true;
    rating?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    title?: true;
    director?: true;
    duration?: true;
    rating?: true;
    release_date?: true;
    genre?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    title?: true;
    director?: true;
    duration?: true;
    rating?: true;
    release_date?: true;
    genre?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    title?: true;
    director?: true;
    duration?: true;
    rating?: true;
    release_date?: true;
    genre?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput;
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[];
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
    having?: movieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCountAggregateInputType | true;
    _avg?: MovieAvgAggregateInputType;
    _sum?: MovieSumAggregateInputType;
    _min?: MovieMinAggregateInputType;
    _max?: MovieMaxAggregateInputType;
  };

  export type MovieGroupByOutputType = {
    id: string;
    title: string;
    director: string | null;
    duration: number | null;
    rating: number | null;
    release_date: Date | null;
    genre: string | null;
    created_at: Date;
    updated_at: Date;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
          : GetScalarType<T[P], MovieGroupByOutputType[P]>;
      }
    >
  >;

  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      director?: boolean;
      duration?: boolean;
      rating?: boolean;
      release_date?: boolean;
      genre?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      showing?: boolean | movie$showingArgs<ExtArgs>;
      _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type movieSelectScalar = {
    id?: boolean;
    title?: boolean;
    director?: boolean;
    duration?: boolean;
    rating?: boolean;
    release_date?: boolean;
    genre?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type movieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showing?: boolean | movie$showingArgs<ExtArgs>;
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'movie';
    objects: {
      showing: Prisma.$showingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        director: string | null;
        duration: number | null;
        rating: number | null;
        release_date: Date | null;
        genre: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<
    Prisma.$moviePayload,
    S
  >;

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    movieFindManyArgs,
    'select' | 'include'
  > & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie']; meta: { name: 'movie' } };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends movieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends movieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends movieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     **/
    create<T extends movieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, movieCreateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Movies.
     *     @param {movieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends movieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     **/
    delete<T extends movieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, movieDeleteArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends movieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends movieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends movieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     **/
    upsert<T extends movieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpsertArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the movie model
     */
    readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    showing<T extends movie$showingArgs<ExtArgs> = {}>(
      args?: Subset<T, movie$showingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the movie model
   */
  interface movieFieldRefs {
    readonly id: FieldRef<'movie', 'String'>;
    readonly title: FieldRef<'movie', 'String'>;
    readonly director: FieldRef<'movie', 'String'>;
    readonly duration: FieldRef<'movie', 'Int'>;
    readonly rating: FieldRef<'movie', 'Int'>;
    readonly release_date: FieldRef<'movie', 'DateTime'>;
    readonly genre: FieldRef<'movie', 'String'>;
    readonly created_at: FieldRef<'movie', 'DateTime'>;
    readonly updated_at: FieldRef<'movie', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>;
  };

  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>;
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput;
  };

  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput;
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>;
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
  };

  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput;
  };

  /**
   * movie.showing
   */
  export type movie$showingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    where?: showingWhereInput;
    orderBy?: showingOrderByWithRelationInput | showingOrderByWithRelationInput[];
    cursor?: showingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ShowingScalarFieldEnum | ShowingScalarFieldEnum[];
  };

  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
  };

  /**
   * Model showing
   */

  export type AggregateShowing = {
    _count: ShowingCountAggregateOutputType | null;
    _avg: ShowingAvgAggregateOutputType | null;
    _sum: ShowingSumAggregateOutputType | null;
    _min: ShowingMinAggregateOutputType | null;
    _max: ShowingMaxAggregateOutputType | null;
  };

  export type ShowingAvgAggregateOutputType = {
    available_seats: number | null;
    price: number | null;
  };

  export type ShowingSumAggregateOutputType = {
    available_seats: number | null;
    price: number | null;
  };

  export type ShowingMinAggregateOutputType = {
    id: string | null;
    showing_time: Date | null;
    cinema_id: string | null;
    movie_id: string | null;
    available_seats: number | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ShowingMaxAggregateOutputType = {
    id: string | null;
    showing_time: Date | null;
    cinema_id: string | null;
    movie_id: string | null;
    available_seats: number | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ShowingCountAggregateOutputType = {
    id: number;
    showing_time: number;
    cinema_id: number;
    movie_id: number;
    available_seats: number;
    price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ShowingAvgAggregateInputType = {
    available_seats?: true;
    price?: true;
  };

  export type ShowingSumAggregateInputType = {
    available_seats?: true;
    price?: true;
  };

  export type ShowingMinAggregateInputType = {
    id?: true;
    showing_time?: true;
    cinema_id?: true;
    movie_id?: true;
    available_seats?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ShowingMaxAggregateInputType = {
    id?: true;
    showing_time?: true;
    cinema_id?: true;
    movie_id?: true;
    available_seats?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ShowingCountAggregateInputType = {
    id?: true;
    showing_time?: true;
    cinema_id?: true;
    movie_id?: true;
    available_seats?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ShowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which showing to aggregate.
     */
    where?: showingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of showings to fetch.
     */
    orderBy?: showingOrderByWithRelationInput | showingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: showingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` showings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` showings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned showings
     **/
    _count?: true | ShowingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ShowingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ShowingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ShowingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ShowingMaxAggregateInputType;
  };

  export type GetShowingAggregateType<T extends ShowingAggregateArgs> = {
    [P in keyof T & keyof AggregateShowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowing[P]>
      : GetScalarType<T[P], AggregateShowing[P]>;
  };

  export type showingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: showingWhereInput;
    orderBy?: showingOrderByWithAggregationInput | showingOrderByWithAggregationInput[];
    by: ShowingScalarFieldEnum[] | ShowingScalarFieldEnum;
    having?: showingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShowingCountAggregateInputType | true;
    _avg?: ShowingAvgAggregateInputType;
    _sum?: ShowingSumAggregateInputType;
    _min?: ShowingMinAggregateInputType;
    _max?: ShowingMaxAggregateInputType;
  };

  export type ShowingGroupByOutputType = {
    id: string;
    showing_time: Date;
    cinema_id: string;
    movie_id: string;
    available_seats: number | null;
    price: number | null;
    created_at: Date;
    updated_at: Date;
    _count: ShowingCountAggregateOutputType | null;
    _avg: ShowingAvgAggregateOutputType | null;
    _sum: ShowingSumAggregateOutputType | null;
    _min: ShowingMinAggregateOutputType | null;
    _max: ShowingMaxAggregateOutputType | null;
  };

  type GetShowingGroupByPayload<T extends showingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ShowingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ShowingGroupByOutputType[P]>
          : GetScalarType<T[P], ShowingGroupByOutputType[P]>;
      }
    >
  >;

  export type showingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      showing_time?: boolean;
      cinema_id?: boolean;
      movie_id?: boolean;
      available_seats?: boolean;
      price?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | showing$bookingArgs<ExtArgs>;
      cinema?: boolean | cinemaDefaultArgs<ExtArgs>;
      movie?: boolean | movieDefaultArgs<ExtArgs>;
      _count?: boolean | ShowingCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['showing']
  >;

  export type showingSelectScalar = {
    id?: boolean;
    showing_time?: boolean;
    cinema_id?: boolean;
    movie_id?: boolean;
    available_seats?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type showingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | showing$bookingArgs<ExtArgs>;
    cinema?: boolean | cinemaDefaultArgs<ExtArgs>;
    movie?: boolean | movieDefaultArgs<ExtArgs>;
    _count?: boolean | ShowingCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $showingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'showing';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      cinema: Prisma.$cinemaPayload<ExtArgs>;
      movie: Prisma.$moviePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        showing_time: Date;
        cinema_id: string;
        movie_id: string;
        available_seats: number | null;
        price: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['showing']
    >;
    composites: {};
  };

  type showingGetPayload<S extends boolean | null | undefined | showingDefaultArgs> = $Result.GetResult<
    Prisma.$showingPayload,
    S
  >;

  type showingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    showingFindManyArgs,
    'select' | 'include'
  > & {
    select?: ShowingCountAggregateInputType | true;
  };

  export interface showingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['showing']; meta: { name: 'showing' } };
    /**
     * Find zero or one Showing that matches the filter.
     * @param {showingFindUniqueArgs} args - Arguments to find a Showing
     * @example
     * // Get one Showing
     * const showing = await prisma.showing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends showingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, showingFindUniqueArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Showing that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {showingFindUniqueOrThrowArgs} args - Arguments to find a Showing
     * @example
     * // Get one Showing
     * const showing = await prisma.showing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends showingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, showingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__showingClient<
      $Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Showing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showingFindFirstArgs} args - Arguments to find a Showing
     * @example
     * // Get one Showing
     * const showing = await prisma.showing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends showingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, showingFindFirstArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Showing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showingFindFirstOrThrowArgs} args - Arguments to find a Showing
     * @example
     * // Get one Showing
     * const showing = await prisma.showing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends showingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, showingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Showings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Showings
     * const showings = await prisma.showing.findMany()
     *
     * // Get first 10 Showings
     * const showings = await prisma.showing.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const showingWithIdOnly = await prisma.showing.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends showingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, showingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Showing.
     * @param {showingCreateArgs} args - Arguments to create a Showing.
     * @example
     * // Create one Showing
     * const Showing = await prisma.showing.create({
     *   data: {
     *     // ... data to create a Showing
     *   }
     * })
     *
     **/
    create<T extends showingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, showingCreateArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Showings.
     *     @param {showingCreateManyArgs} args - Arguments to create many Showings.
     *     @example
     *     // Create many Showings
     *     const showing = await prisma.showing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends showingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, showingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Showing.
     * @param {showingDeleteArgs} args - Arguments to delete one Showing.
     * @example
     * // Delete one Showing
     * const Showing = await prisma.showing.delete({
     *   where: {
     *     // ... filter to delete one Showing
     *   }
     * })
     *
     **/
    delete<T extends showingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, showingDeleteArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Showing.
     * @param {showingUpdateArgs} args - Arguments to update one Showing.
     * @example
     * // Update one Showing
     * const showing = await prisma.showing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends showingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, showingUpdateArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Showings.
     * @param {showingDeleteManyArgs} args - Arguments to filter Showings to delete.
     * @example
     * // Delete a few Showings
     * const { count } = await prisma.showing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends showingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, showingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Showings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Showings
     * const showing = await prisma.showing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends showingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, showingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Showing.
     * @param {showingUpsertArgs} args - Arguments to update or create a Showing.
     * @example
     * // Update or create a Showing
     * const showing = await prisma.showing.upsert({
     *   create: {
     *     // ... data to create a Showing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Showing we want to update
     *   }
     * })
     **/
    upsert<T extends showingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, showingUpsertArgs<ExtArgs>>,
    ): Prisma__showingClient<$Result.GetResult<Prisma.$showingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Showings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showingCountArgs} args - Arguments to filter Showings to count.
     * @example
     * // Count the number of Showings
     * const count = await prisma.showing.count({
     *   where: {
     *     // ... the filter for the Showings we want to count
     *   }
     * })
     **/
    count<T extends showingCountArgs>(
      args?: Subset<T, showingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Showing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ShowingAggregateArgs>(
      args: Subset<T, ShowingAggregateArgs>,
    ): Prisma.PrismaPromise<GetShowingAggregateType<T>>;

    /**
     * Group by Showing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {showingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends showingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: showingGroupByArgs['orderBy'] }
        : { orderBy?: showingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, showingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetShowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the showing model
     */
    readonly fields: showingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for showing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__showingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends showing$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, showing$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    cinema<T extends cinemaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, cinemaDefaultArgs<ExtArgs>>,
    ): Prisma__cinemaClient<
      $Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    movie<T extends movieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, movieDefaultArgs<ExtArgs>>,
    ): Prisma__movieClient<
      $Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the showing model
   */
  interface showingFieldRefs {
    readonly id: FieldRef<'showing', 'String'>;
    readonly showing_time: FieldRef<'showing', 'DateTime'>;
    readonly cinema_id: FieldRef<'showing', 'String'>;
    readonly movie_id: FieldRef<'showing', 'String'>;
    readonly available_seats: FieldRef<'showing', 'Int'>;
    readonly price: FieldRef<'showing', 'Int'>;
    readonly created_at: FieldRef<'showing', 'DateTime'>;
    readonly updated_at: FieldRef<'showing', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * showing findUnique
   */
  export type showingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * Filter, which showing to fetch.
     */
    where: showingWhereUniqueInput;
  };

  /**
   * showing findUniqueOrThrow
   */
  export type showingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * Filter, which showing to fetch.
     */
    where: showingWhereUniqueInput;
  };

  /**
   * showing findFirst
   */
  export type showingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * Filter, which showing to fetch.
     */
    where?: showingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of showings to fetch.
     */
    orderBy?: showingOrderByWithRelationInput | showingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for showings.
     */
    cursor?: showingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` showings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` showings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of showings.
     */
    distinct?: ShowingScalarFieldEnum | ShowingScalarFieldEnum[];
  };

  /**
   * showing findFirstOrThrow
   */
  export type showingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * Filter, which showing to fetch.
     */
    where?: showingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of showings to fetch.
     */
    orderBy?: showingOrderByWithRelationInput | showingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for showings.
     */
    cursor?: showingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` showings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` showings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of showings.
     */
    distinct?: ShowingScalarFieldEnum | ShowingScalarFieldEnum[];
  };

  /**
   * showing findMany
   */
  export type showingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * Filter, which showings to fetch.
     */
    where?: showingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of showings to fetch.
     */
    orderBy?: showingOrderByWithRelationInput | showingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing showings.
     */
    cursor?: showingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` showings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` showings.
     */
    skip?: number;
    distinct?: ShowingScalarFieldEnum | ShowingScalarFieldEnum[];
  };

  /**
   * showing create
   */
  export type showingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * The data needed to create a showing.
     */
    data: XOR<showingCreateInput, showingUncheckedCreateInput>;
  };

  /**
   * showing createMany
   */
  export type showingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many showings.
     */
    data: showingCreateManyInput | showingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * showing update
   */
  export type showingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * The data needed to update a showing.
     */
    data: XOR<showingUpdateInput, showingUncheckedUpdateInput>;
    /**
     * Choose, which showing to update.
     */
    where: showingWhereUniqueInput;
  };

  /**
   * showing updateMany
   */
  export type showingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update showings.
     */
    data: XOR<showingUpdateManyMutationInput, showingUncheckedUpdateManyInput>;
    /**
     * Filter which showings to update
     */
    where?: showingWhereInput;
  };

  /**
   * showing upsert
   */
  export type showingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * The filter to search for the showing to update in case it exists.
     */
    where: showingWhereUniqueInput;
    /**
     * In case the showing found by the `where` argument doesn't exist, create a new showing with this data.
     */
    create: XOR<showingCreateInput, showingUncheckedCreateInput>;
    /**
     * In case the showing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<showingUpdateInput, showingUncheckedUpdateInput>;
  };

  /**
   * showing delete
   */
  export type showingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
    /**
     * Filter which showing to delete.
     */
    where: showingWhereUniqueInput;
  };

  /**
   * showing deleteMany
   */
  export type showingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which showings to delete
     */
    where?: showingWhereInput;
  };

  /**
   * showing.booking
   */
  export type showing$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * showing without action
   */
  export type showingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the showing
     */
    select?: showingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: showingInclude<ExtArgs> | null;
  };

  /**
   * Model technical_support
   */

  export type AggregateTechnical_support = {
    _count: Technical_supportCountAggregateOutputType | null;
    _min: Technical_supportMinAggregateOutputType | null;
    _max: Technical_supportMaxAggregateOutputType | null;
  };

  export type Technical_supportMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    issue_reported: string | null;
    issue_status: string | null;
    reported_time: Date | null;
    resolved_time: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Technical_supportMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    issue_reported: string | null;
    issue_status: string | null;
    reported_time: Date | null;
    resolved_time: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Technical_supportCountAggregateOutputType = {
    id: number;
    user_id: number;
    issue_reported: number;
    issue_status: number;
    reported_time: number;
    resolved_time: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Technical_supportMinAggregateInputType = {
    id?: true;
    user_id?: true;
    issue_reported?: true;
    issue_status?: true;
    reported_time?: true;
    resolved_time?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Technical_supportMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    issue_reported?: true;
    issue_status?: true;
    reported_time?: true;
    resolved_time?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Technical_supportCountAggregateInputType = {
    id?: true;
    user_id?: true;
    issue_reported?: true;
    issue_status?: true;
    reported_time?: true;
    resolved_time?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Technical_supportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which technical_support to aggregate.
     */
    where?: technical_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of technical_supports to fetch.
     */
    orderBy?: technical_supportOrderByWithRelationInput | technical_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: technical_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` technical_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` technical_supports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned technical_supports
     **/
    _count?: true | Technical_supportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Technical_supportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Technical_supportMaxAggregateInputType;
  };

  export type GetTechnical_supportAggregateType<T extends Technical_supportAggregateArgs> = {
    [P in keyof T & keyof AggregateTechnical_support]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnical_support[P]>
      : GetScalarType<T[P], AggregateTechnical_support[P]>;
  };

  export type technical_supportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: technical_supportWhereInput;
    orderBy?: technical_supportOrderByWithAggregationInput | technical_supportOrderByWithAggregationInput[];
    by: Technical_supportScalarFieldEnum[] | Technical_supportScalarFieldEnum;
    having?: technical_supportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Technical_supportCountAggregateInputType | true;
    _min?: Technical_supportMinAggregateInputType;
    _max?: Technical_supportMaxAggregateInputType;
  };

  export type Technical_supportGroupByOutputType = {
    id: string;
    user_id: string;
    issue_reported: string | null;
    issue_status: string | null;
    reported_time: Date | null;
    resolved_time: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Technical_supportCountAggregateOutputType | null;
    _min: Technical_supportMinAggregateOutputType | null;
    _max: Technical_supportMaxAggregateOutputType | null;
  };

  type GetTechnical_supportGroupByPayload<T extends technical_supportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Technical_supportGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Technical_supportGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Technical_supportGroupByOutputType[P]>
          : GetScalarType<T[P], Technical_supportGroupByOutputType[P]>;
      }
    >
  >;

  export type technical_supportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        issue_reported?: boolean;
        issue_status?: boolean;
        reported_time?: boolean;
        resolved_time?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['technical_support']
    >;

  export type technical_supportSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    issue_reported?: boolean;
    issue_status?: boolean;
    reported_time?: boolean;
    resolved_time?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type technical_supportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $technical_supportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'technical_support';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        issue_reported: string | null;
        issue_status: string | null;
        reported_time: Date | null;
        resolved_time: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['technical_support']
    >;
    composites: {};
  };

  type technical_supportGetPayload<S extends boolean | null | undefined | technical_supportDefaultArgs> =
    $Result.GetResult<Prisma.$technical_supportPayload, S>;

  type technical_supportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    technical_supportFindManyArgs,
    'select' | 'include'
  > & {
    select?: Technical_supportCountAggregateInputType | true;
  };

  export interface technical_supportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['technical_support']; meta: { name: 'technical_support' } };
    /**
     * Find zero or one Technical_support that matches the filter.
     * @param {technical_supportFindUniqueArgs} args - Arguments to find a Technical_support
     * @example
     * // Get one Technical_support
     * const technical_support = await prisma.technical_support.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends technical_supportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, technical_supportFindUniqueArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Technical_support that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {technical_supportFindUniqueOrThrowArgs} args - Arguments to find a Technical_support
     * @example
     * // Get one Technical_support
     * const technical_support = await prisma.technical_support.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends technical_supportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, technical_supportFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Technical_support that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technical_supportFindFirstArgs} args - Arguments to find a Technical_support
     * @example
     * // Get one Technical_support
     * const technical_support = await prisma.technical_support.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends technical_supportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, technical_supportFindFirstArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Technical_support that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technical_supportFindFirstOrThrowArgs} args - Arguments to find a Technical_support
     * @example
     * // Get one Technical_support
     * const technical_support = await prisma.technical_support.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends technical_supportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, technical_supportFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Technical_supports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technical_supportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technical_supports
     * const technical_supports = await prisma.technical_support.findMany()
     *
     * // Get first 10 Technical_supports
     * const technical_supports = await prisma.technical_support.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const technical_supportWithIdOnly = await prisma.technical_support.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends technical_supportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, technical_supportFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Technical_support.
     * @param {technical_supportCreateArgs} args - Arguments to create a Technical_support.
     * @example
     * // Create one Technical_support
     * const Technical_support = await prisma.technical_support.create({
     *   data: {
     *     // ... data to create a Technical_support
     *   }
     * })
     *
     **/
    create<T extends technical_supportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, technical_supportCreateArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Technical_supports.
     *     @param {technical_supportCreateManyArgs} args - Arguments to create many Technical_supports.
     *     @example
     *     // Create many Technical_supports
     *     const technical_support = await prisma.technical_support.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends technical_supportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, technical_supportCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Technical_support.
     * @param {technical_supportDeleteArgs} args - Arguments to delete one Technical_support.
     * @example
     * // Delete one Technical_support
     * const Technical_support = await prisma.technical_support.delete({
     *   where: {
     *     // ... filter to delete one Technical_support
     *   }
     * })
     *
     **/
    delete<T extends technical_supportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, technical_supportDeleteArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Technical_support.
     * @param {technical_supportUpdateArgs} args - Arguments to update one Technical_support.
     * @example
     * // Update one Technical_support
     * const technical_support = await prisma.technical_support.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends technical_supportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, technical_supportUpdateArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Technical_supports.
     * @param {technical_supportDeleteManyArgs} args - Arguments to filter Technical_supports to delete.
     * @example
     * // Delete a few Technical_supports
     * const { count } = await prisma.technical_support.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends technical_supportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, technical_supportDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Technical_supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technical_supportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technical_supports
     * const technical_support = await prisma.technical_support.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends technical_supportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, technical_supportUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Technical_support.
     * @param {technical_supportUpsertArgs} args - Arguments to update or create a Technical_support.
     * @example
     * // Update or create a Technical_support
     * const technical_support = await prisma.technical_support.upsert({
     *   create: {
     *     // ... data to create a Technical_support
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technical_support we want to update
     *   }
     * })
     **/
    upsert<T extends technical_supportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, technical_supportUpsertArgs<ExtArgs>>,
    ): Prisma__technical_supportClient<
      $Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Technical_supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technical_supportCountArgs} args - Arguments to filter Technical_supports to count.
     * @example
     * // Count the number of Technical_supports
     * const count = await prisma.technical_support.count({
     *   where: {
     *     // ... the filter for the Technical_supports we want to count
     *   }
     * })
     **/
    count<T extends technical_supportCountArgs>(
      args?: Subset<T, technical_supportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Technical_supportCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Technical_support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Technical_supportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Technical_supportAggregateArgs>(
      args: Subset<T, Technical_supportAggregateArgs>,
    ): Prisma.PrismaPromise<GetTechnical_supportAggregateType<T>>;

    /**
     * Group by Technical_support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {technical_supportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends technical_supportGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: technical_supportGroupByArgs['orderBy'] }
        : { orderBy?: technical_supportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, technical_supportGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTechnical_supportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the technical_support model
     */
    readonly fields: technical_supportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for technical_support.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__technical_supportClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the technical_support model
   */
  interface technical_supportFieldRefs {
    readonly id: FieldRef<'technical_support', 'String'>;
    readonly user_id: FieldRef<'technical_support', 'String'>;
    readonly issue_reported: FieldRef<'technical_support', 'String'>;
    readonly issue_status: FieldRef<'technical_support', 'String'>;
    readonly reported_time: FieldRef<'technical_support', 'DateTime'>;
    readonly resolved_time: FieldRef<'technical_support', 'DateTime'>;
    readonly created_at: FieldRef<'technical_support', 'DateTime'>;
    readonly updated_at: FieldRef<'technical_support', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * technical_support findUnique
   */
  export type technical_supportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * Filter, which technical_support to fetch.
     */
    where: technical_supportWhereUniqueInput;
  };

  /**
   * technical_support findUniqueOrThrow
   */
  export type technical_supportFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * Filter, which technical_support to fetch.
     */
    where: technical_supportWhereUniqueInput;
  };

  /**
   * technical_support findFirst
   */
  export type technical_supportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * Filter, which technical_support to fetch.
     */
    where?: technical_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of technical_supports to fetch.
     */
    orderBy?: technical_supportOrderByWithRelationInput | technical_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for technical_supports.
     */
    cursor?: technical_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` technical_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` technical_supports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of technical_supports.
     */
    distinct?: Technical_supportScalarFieldEnum | Technical_supportScalarFieldEnum[];
  };

  /**
   * technical_support findFirstOrThrow
   */
  export type technical_supportFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * Filter, which technical_support to fetch.
     */
    where?: technical_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of technical_supports to fetch.
     */
    orderBy?: technical_supportOrderByWithRelationInput | technical_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for technical_supports.
     */
    cursor?: technical_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` technical_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` technical_supports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of technical_supports.
     */
    distinct?: Technical_supportScalarFieldEnum | Technical_supportScalarFieldEnum[];
  };

  /**
   * technical_support findMany
   */
  export type technical_supportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * Filter, which technical_supports to fetch.
     */
    where?: technical_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of technical_supports to fetch.
     */
    orderBy?: technical_supportOrderByWithRelationInput | technical_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing technical_supports.
     */
    cursor?: technical_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` technical_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` technical_supports.
     */
    skip?: number;
    distinct?: Technical_supportScalarFieldEnum | Technical_supportScalarFieldEnum[];
  };

  /**
   * technical_support create
   */
  export type technical_supportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * The data needed to create a technical_support.
     */
    data: XOR<technical_supportCreateInput, technical_supportUncheckedCreateInput>;
  };

  /**
   * technical_support createMany
   */
  export type technical_supportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many technical_supports.
     */
    data: technical_supportCreateManyInput | technical_supportCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * technical_support update
   */
  export type technical_supportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * The data needed to update a technical_support.
     */
    data: XOR<technical_supportUpdateInput, technical_supportUncheckedUpdateInput>;
    /**
     * Choose, which technical_support to update.
     */
    where: technical_supportWhereUniqueInput;
  };

  /**
   * technical_support updateMany
   */
  export type technical_supportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update technical_supports.
     */
    data: XOR<technical_supportUpdateManyMutationInput, technical_supportUncheckedUpdateManyInput>;
    /**
     * Filter which technical_supports to update
     */
    where?: technical_supportWhereInput;
  };

  /**
   * technical_support upsert
   */
  export type technical_supportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * The filter to search for the technical_support to update in case it exists.
     */
    where: technical_supportWhereUniqueInput;
    /**
     * In case the technical_support found by the `where` argument doesn't exist, create a new technical_support with this data.
     */
    create: XOR<technical_supportCreateInput, technical_supportUncheckedCreateInput>;
    /**
     * In case the technical_support was found with the provided `where` argument, update it with this data.
     */
    update: XOR<technical_supportUpdateInput, technical_supportUncheckedUpdateInput>;
  };

  /**
   * technical_support delete
   */
  export type technical_supportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    /**
     * Filter which technical_support to delete.
     */
    where: technical_supportWhereUniqueInput;
  };

  /**
   * technical_support deleteMany
   */
  export type technical_supportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which technical_supports to delete
     */
    where?: technical_supportWhereInput;
  };

  /**
   * technical_support without action
   */
  export type technical_supportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | user$bookingArgs<ExtArgs>;
      cinema?: boolean | user$cinemaArgs<ExtArgs>;
      technical_support?: boolean | user$technical_supportArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | user$bookingArgs<ExtArgs>;
    cinema?: boolean | user$cinemaArgs<ExtArgs>;
    technical_support?: boolean | user$technical_supportArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      cinema: Prisma.$cinemaPayload<ExtArgs>[];
      technical_support: Prisma.$technical_supportPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends user$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    cinema<T extends user$cinemaArgs<ExtArgs> = {}>(
      args?: Subset<T, user$cinemaArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findMany'> | Null>;

    technical_support<T extends user$technical_supportArgs<ExtArgs> = {}>(
      args?: Subset<T, user$technical_supportArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$technical_supportPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.cinema
   */
  export type user$cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    where?: cinemaWhereInput;
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    cursor?: cinemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * user.technical_support
   */
  export type user$technical_supportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the technical_support
     */
    select?: technical_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: technical_supportInclude<ExtArgs> | null;
    where?: technical_supportWhereInput;
    orderBy?: technical_supportOrderByWithRelationInput | technical_supportOrderByWithRelationInput[];
    cursor?: technical_supportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Technical_supportScalarFieldEnum | Technical_supportScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BookingScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    showing_id: 'showing_id';
    booking_time: 'booking_time';
    number_of_tickets: 'number_of_tickets';
    total_price: 'total_price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const CinemaScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    opening_hours: 'opening_hours';
    seating_capacity: 'seating_capacity';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum];

  export const MovieScalarFieldEnum: {
    id: 'id';
    title: 'title';
    director: 'director';
    duration: 'duration';
    rating: 'rating';
    release_date: 'release_date';
    genre: 'genre';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const ShowingScalarFieldEnum: {
    id: 'id';
    showing_time: 'showing_time';
    cinema_id: 'cinema_id';
    movie_id: 'movie_id';
    available_seats: 'available_seats';
    price: 'price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ShowingScalarFieldEnum = (typeof ShowingScalarFieldEnum)[keyof typeof ShowingScalarFieldEnum];

  export const Technical_supportScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    issue_reported: 'issue_reported';
    issue_status: 'issue_status';
    reported_time: 'reported_time';
    resolved_time: 'resolved_time';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Technical_supportScalarFieldEnum =
    (typeof Technical_supportScalarFieldEnum)[keyof typeof Technical_supportScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[];
    OR?: bookingWhereInput[];
    NOT?: bookingWhereInput | bookingWhereInput[];
    id?: UuidFilter<'booking'> | string;
    user_id?: UuidFilter<'booking'> | string;
    showing_id?: UuidFilter<'booking'> | string;
    booking_time?: DateTimeFilter<'booking'> | Date | string;
    number_of_tickets?: IntNullableFilter<'booking'> | number | null;
    total_price?: IntNullableFilter<'booking'> | number | null;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
    showing?: XOR<ShowingRelationFilter, showingWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    showing_id?: SortOrder;
    booking_time?: SortOrder;
    number_of_tickets?: SortOrderInput | SortOrder;
    total_price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    showing?: showingOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type bookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookingWhereInput | bookingWhereInput[];
      OR?: bookingWhereInput[];
      NOT?: bookingWhereInput | bookingWhereInput[];
      user_id?: UuidFilter<'booking'> | string;
      showing_id?: UuidFilter<'booking'> | string;
      booking_time?: DateTimeFilter<'booking'> | Date | string;
      number_of_tickets?: IntNullableFilter<'booking'> | number | null;
      total_price?: IntNullableFilter<'booking'> | number | null;
      created_at?: DateTimeFilter<'booking'> | Date | string;
      updated_at?: DateTimeFilter<'booking'> | Date | string;
      showing?: XOR<ShowingRelationFilter, showingWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    showing_id?: SortOrder;
    booking_time?: SortOrder;
    number_of_tickets?: SortOrderInput | SortOrder;
    total_price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookingCountOrderByAggregateInput;
    _avg?: bookingAvgOrderByAggregateInput;
    _max?: bookingMaxOrderByAggregateInput;
    _min?: bookingMinOrderByAggregateInput;
    _sum?: bookingSumOrderByAggregateInput;
  };

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    OR?: bookingScalarWhereWithAggregatesInput[];
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'booking'> | string;
    user_id?: UuidWithAggregatesFilter<'booking'> | string;
    showing_id?: UuidWithAggregatesFilter<'booking'> | string;
    booking_time?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    number_of_tickets?: IntNullableWithAggregatesFilter<'booking'> | number | null;
    total_price?: IntNullableWithAggregatesFilter<'booking'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
  };

  export type cinemaWhereInput = {
    AND?: cinemaWhereInput | cinemaWhereInput[];
    OR?: cinemaWhereInput[];
    NOT?: cinemaWhereInput | cinemaWhereInput[];
    id?: UuidFilter<'cinema'> | string;
    description?: StringNullableFilter<'cinema'> | string | null;
    location?: StringNullableFilter<'cinema'> | string | null;
    opening_hours?: StringNullableFilter<'cinema'> | string | null;
    seating_capacity?: IntNullableFilter<'cinema'> | number | null;
    name?: StringFilter<'cinema'> | string;
    created_at?: DateTimeFilter<'cinema'> | Date | string;
    updated_at?: DateTimeFilter<'cinema'> | Date | string;
    user_id?: UuidFilter<'cinema'> | string;
    tenant_id?: StringFilter<'cinema'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    showing?: ShowingListRelationFilter;
  };

  export type cinemaOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    seating_capacity?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    showing?: showingOrderByRelationAggregateInput;
  };

  export type cinemaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: cinemaWhereInput | cinemaWhereInput[];
      OR?: cinemaWhereInput[];
      NOT?: cinemaWhereInput | cinemaWhereInput[];
      description?: StringNullableFilter<'cinema'> | string | null;
      location?: StringNullableFilter<'cinema'> | string | null;
      opening_hours?: StringNullableFilter<'cinema'> | string | null;
      seating_capacity?: IntNullableFilter<'cinema'> | number | null;
      name?: StringFilter<'cinema'> | string;
      created_at?: DateTimeFilter<'cinema'> | Date | string;
      updated_at?: DateTimeFilter<'cinema'> | Date | string;
      user_id?: UuidFilter<'cinema'> | string;
      tenant_id?: StringFilter<'cinema'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      showing?: ShowingListRelationFilter;
    },
    'id'
  >;

  export type cinemaOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    seating_capacity?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: cinemaCountOrderByAggregateInput;
    _avg?: cinemaAvgOrderByAggregateInput;
    _max?: cinemaMaxOrderByAggregateInput;
    _min?: cinemaMinOrderByAggregateInput;
    _sum?: cinemaSumOrderByAggregateInput;
  };

  export type cinemaScalarWhereWithAggregatesInput = {
    AND?: cinemaScalarWhereWithAggregatesInput | cinemaScalarWhereWithAggregatesInput[];
    OR?: cinemaScalarWhereWithAggregatesInput[];
    NOT?: cinemaScalarWhereWithAggregatesInput | cinemaScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'cinema'> | string;
    description?: StringNullableWithAggregatesFilter<'cinema'> | string | null;
    location?: StringNullableWithAggregatesFilter<'cinema'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'cinema'> | string | null;
    seating_capacity?: IntNullableWithAggregatesFilter<'cinema'> | number | null;
    name?: StringWithAggregatesFilter<'cinema'> | string;
    created_at?: DateTimeWithAggregatesFilter<'cinema'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'cinema'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'cinema'> | string;
    tenant_id?: StringWithAggregatesFilter<'cinema'> | string;
  };

  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[];
    OR?: movieWhereInput[];
    NOT?: movieWhereInput | movieWhereInput[];
    id?: UuidFilter<'movie'> | string;
    title?: StringFilter<'movie'> | string;
    director?: StringNullableFilter<'movie'> | string | null;
    duration?: IntNullableFilter<'movie'> | number | null;
    rating?: IntNullableFilter<'movie'> | number | null;
    release_date?: DateTimeNullableFilter<'movie'> | Date | string | null;
    genre?: StringNullableFilter<'movie'> | string | null;
    created_at?: DateTimeFilter<'movie'> | Date | string;
    updated_at?: DateTimeFilter<'movie'> | Date | string;
    showing?: ShowingListRelationFilter;
  };

  export type movieOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    genre?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    showing?: showingOrderByRelationAggregateInput;
  };

  export type movieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: movieWhereInput | movieWhereInput[];
      OR?: movieWhereInput[];
      NOT?: movieWhereInput | movieWhereInput[];
      title?: StringFilter<'movie'> | string;
      director?: StringNullableFilter<'movie'> | string | null;
      duration?: IntNullableFilter<'movie'> | number | null;
      rating?: IntNullableFilter<'movie'> | number | null;
      release_date?: DateTimeNullableFilter<'movie'> | Date | string | null;
      genre?: StringNullableFilter<'movie'> | string | null;
      created_at?: DateTimeFilter<'movie'> | Date | string;
      updated_at?: DateTimeFilter<'movie'> | Date | string;
      showing?: ShowingListRelationFilter;
    },
    'id'
  >;

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    genre?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: movieCountOrderByAggregateInput;
    _avg?: movieAvgOrderByAggregateInput;
    _max?: movieMaxOrderByAggregateInput;
    _min?: movieMinOrderByAggregateInput;
    _sum?: movieSumOrderByAggregateInput;
  };

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    OR?: movieScalarWhereWithAggregatesInput[];
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'movie'> | string;
    title?: StringWithAggregatesFilter<'movie'> | string;
    director?: StringNullableWithAggregatesFilter<'movie'> | string | null;
    duration?: IntNullableWithAggregatesFilter<'movie'> | number | null;
    rating?: IntNullableWithAggregatesFilter<'movie'> | number | null;
    release_date?: DateTimeNullableWithAggregatesFilter<'movie'> | Date | string | null;
    genre?: StringNullableWithAggregatesFilter<'movie'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
  };

  export type showingWhereInput = {
    AND?: showingWhereInput | showingWhereInput[];
    OR?: showingWhereInput[];
    NOT?: showingWhereInput | showingWhereInput[];
    id?: UuidFilter<'showing'> | string;
    showing_time?: DateTimeFilter<'showing'> | Date | string;
    cinema_id?: UuidFilter<'showing'> | string;
    movie_id?: UuidFilter<'showing'> | string;
    available_seats?: IntNullableFilter<'showing'> | number | null;
    price?: IntNullableFilter<'showing'> | number | null;
    created_at?: DateTimeFilter<'showing'> | Date | string;
    updated_at?: DateTimeFilter<'showing'> | Date | string;
    booking?: BookingListRelationFilter;
    cinema?: XOR<CinemaRelationFilter, cinemaWhereInput>;
    movie?: XOR<MovieRelationFilter, movieWhereInput>;
  };

  export type showingOrderByWithRelationInput = {
    id?: SortOrder;
    showing_time?: SortOrder;
    cinema_id?: SortOrder;
    movie_id?: SortOrder;
    available_seats?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    cinema?: cinemaOrderByWithRelationInput;
    movie?: movieOrderByWithRelationInput;
  };

  export type showingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: showingWhereInput | showingWhereInput[];
      OR?: showingWhereInput[];
      NOT?: showingWhereInput | showingWhereInput[];
      showing_time?: DateTimeFilter<'showing'> | Date | string;
      cinema_id?: UuidFilter<'showing'> | string;
      movie_id?: UuidFilter<'showing'> | string;
      available_seats?: IntNullableFilter<'showing'> | number | null;
      price?: IntNullableFilter<'showing'> | number | null;
      created_at?: DateTimeFilter<'showing'> | Date | string;
      updated_at?: DateTimeFilter<'showing'> | Date | string;
      booking?: BookingListRelationFilter;
      cinema?: XOR<CinemaRelationFilter, cinemaWhereInput>;
      movie?: XOR<MovieRelationFilter, movieWhereInput>;
    },
    'id'
  >;

  export type showingOrderByWithAggregationInput = {
    id?: SortOrder;
    showing_time?: SortOrder;
    cinema_id?: SortOrder;
    movie_id?: SortOrder;
    available_seats?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: showingCountOrderByAggregateInput;
    _avg?: showingAvgOrderByAggregateInput;
    _max?: showingMaxOrderByAggregateInput;
    _min?: showingMinOrderByAggregateInput;
    _sum?: showingSumOrderByAggregateInput;
  };

  export type showingScalarWhereWithAggregatesInput = {
    AND?: showingScalarWhereWithAggregatesInput | showingScalarWhereWithAggregatesInput[];
    OR?: showingScalarWhereWithAggregatesInput[];
    NOT?: showingScalarWhereWithAggregatesInput | showingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'showing'> | string;
    showing_time?: DateTimeWithAggregatesFilter<'showing'> | Date | string;
    cinema_id?: UuidWithAggregatesFilter<'showing'> | string;
    movie_id?: UuidWithAggregatesFilter<'showing'> | string;
    available_seats?: IntNullableWithAggregatesFilter<'showing'> | number | null;
    price?: IntNullableWithAggregatesFilter<'showing'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'showing'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'showing'> | Date | string;
  };

  export type technical_supportWhereInput = {
    AND?: technical_supportWhereInput | technical_supportWhereInput[];
    OR?: technical_supportWhereInput[];
    NOT?: technical_supportWhereInput | technical_supportWhereInput[];
    id?: UuidFilter<'technical_support'> | string;
    user_id?: UuidFilter<'technical_support'> | string;
    issue_reported?: StringNullableFilter<'technical_support'> | string | null;
    issue_status?: StringNullableFilter<'technical_support'> | string | null;
    reported_time?: DateTimeNullableFilter<'technical_support'> | Date | string | null;
    resolved_time?: DateTimeNullableFilter<'technical_support'> | Date | string | null;
    created_at?: DateTimeFilter<'technical_support'> | Date | string;
    updated_at?: DateTimeFilter<'technical_support'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type technical_supportOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_reported?: SortOrderInput | SortOrder;
    issue_status?: SortOrderInput | SortOrder;
    reported_time?: SortOrderInput | SortOrder;
    resolved_time?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type technical_supportWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: technical_supportWhereInput | technical_supportWhereInput[];
      OR?: technical_supportWhereInput[];
      NOT?: technical_supportWhereInput | technical_supportWhereInput[];
      user_id?: UuidFilter<'technical_support'> | string;
      issue_reported?: StringNullableFilter<'technical_support'> | string | null;
      issue_status?: StringNullableFilter<'technical_support'> | string | null;
      reported_time?: DateTimeNullableFilter<'technical_support'> | Date | string | null;
      resolved_time?: DateTimeNullableFilter<'technical_support'> | Date | string | null;
      created_at?: DateTimeFilter<'technical_support'> | Date | string;
      updated_at?: DateTimeFilter<'technical_support'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type technical_supportOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_reported?: SortOrderInput | SortOrder;
    issue_status?: SortOrderInput | SortOrder;
    reported_time?: SortOrderInput | SortOrder;
    resolved_time?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: technical_supportCountOrderByAggregateInput;
    _max?: technical_supportMaxOrderByAggregateInput;
    _min?: technical_supportMinOrderByAggregateInput;
  };

  export type technical_supportScalarWhereWithAggregatesInput = {
    AND?: technical_supportScalarWhereWithAggregatesInput | technical_supportScalarWhereWithAggregatesInput[];
    OR?: technical_supportScalarWhereWithAggregatesInput[];
    NOT?: technical_supportScalarWhereWithAggregatesInput | technical_supportScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'technical_support'> | string;
    user_id?: UuidWithAggregatesFilter<'technical_support'> | string;
    issue_reported?: StringNullableWithAggregatesFilter<'technical_support'> | string | null;
    issue_status?: StringNullableWithAggregatesFilter<'technical_support'> | string | null;
    reported_time?: DateTimeNullableWithAggregatesFilter<'technical_support'> | Date | string | null;
    resolved_time?: DateTimeNullableWithAggregatesFilter<'technical_support'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'technical_support'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'technical_support'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    booking?: BookingListRelationFilter;
    cinema?: CinemaListRelationFilter;
    technical_support?: Technical_supportListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    cinema?: cinemaOrderByRelationAggregateInput;
    technical_support?: technical_supportOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      booking?: BookingListRelationFilter;
      cinema?: CinemaListRelationFilter;
      technical_support?: Technical_supportListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type bookingCreateInput = {
    id?: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    showing: showingCreateNestedOneWithoutBookingInput;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateInput = {
    id?: string;
    user_id: string;
    showing_id: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    showing?: showingUpdateOneRequiredWithoutBookingNestedInput;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    showing_id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyInput = {
    id?: string;
    user_id: string;
    showing_id: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    showing_id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type cinemaCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCinemaInput;
    showing?: showingCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    showing?: showingUncheckedCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCinemaNestedInput;
    showing?: showingUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    showing?: showingUncheckedUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type cinemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type cinemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type movieCreateInput = {
    id?: string;
    title: string;
    director?: string | null;
    duration?: number | null;
    rating?: number | null;
    release_date?: Date | string | null;
    genre?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    showing?: showingCreateNestedManyWithoutMovieInput;
  };

  export type movieUncheckedCreateInput = {
    id?: string;
    title: string;
    director?: string | null;
    duration?: number | null;
    rating?: number | null;
    release_date?: Date | string | null;
    genre?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    showing?: showingUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type movieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    showing?: showingUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    showing?: showingUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type movieCreateManyInput = {
    id?: string;
    title: string;
    director?: string | null;
    duration?: number | null;
    rating?: number | null;
    release_date?: Date | string | null;
    genre?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showingCreateInput = {
    id?: string;
    showing_time: Date | string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutShowingInput;
    cinema: cinemaCreateNestedOneWithoutShowingInput;
    movie: movieCreateNestedOneWithoutShowingInput;
  };

  export type showingUncheckedCreateInput = {
    id?: string;
    showing_time: Date | string;
    cinema_id: string;
    movie_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutShowingInput;
  };

  export type showingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutShowingNestedInput;
    cinema?: cinemaUpdateOneRequiredWithoutShowingNestedInput;
    movie?: movieUpdateOneRequiredWithoutShowingNestedInput;
  };

  export type showingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutShowingNestedInput;
  };

  export type showingCreateManyInput = {
    id?: string;
    showing_time: Date | string;
    cinema_id: string;
    movie_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type technical_supportCreateInput = {
    id?: string;
    issue_reported?: string | null;
    issue_status?: string | null;
    reported_time?: Date | string | null;
    resolved_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTechnical_supportInput;
  };

  export type technical_supportUncheckedCreateInput = {
    id?: string;
    user_id: string;
    issue_reported?: string | null;
    issue_status?: string | null;
    reported_time?: Date | string | null;
    resolved_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type technical_supportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTechnical_supportNestedInput;
  };

  export type technical_supportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type technical_supportCreateManyInput = {
    id?: string;
    user_id: string;
    issue_reported?: string | null;
    issue_status?: string | null;
    reported_time?: Date | string | null;
    resolved_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type technical_supportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type technical_supportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    cinema?: cinemaCreateNestedManyWithoutUserInput;
    technical_support?: technical_supportCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    cinema?: cinemaUncheckedCreateNestedManyWithoutUserInput;
    technical_support?: technical_supportUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    cinema?: cinemaUpdateManyWithoutUserNestedInput;
    technical_support?: technical_supportUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    cinema?: cinemaUncheckedUpdateManyWithoutUserNestedInput;
    technical_support?: technical_supportUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ShowingRelationFilter = {
    is?: showingWhereInput;
    isNot?: showingWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    showing_id?: SortOrder;
    booking_time?: SortOrder;
    number_of_tickets?: SortOrder;
    total_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingAvgOrderByAggregateInput = {
    number_of_tickets?: SortOrder;
    total_price?: SortOrder;
  };

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    showing_id?: SortOrder;
    booking_time?: SortOrder;
    number_of_tickets?: SortOrder;
    total_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    showing_id?: SortOrder;
    booking_time?: SortOrder;
    number_of_tickets?: SortOrder;
    total_price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingSumOrderByAggregateInput = {
    number_of_tickets?: SortOrder;
    total_price?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type ShowingListRelationFilter = {
    every?: showingWhereInput;
    some?: showingWhereInput;
    none?: showingWhereInput;
  };

  export type showingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type cinemaCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    seating_capacity?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type cinemaAvgOrderByAggregateInput = {
    seating_capacity?: SortOrder;
  };

  export type cinemaMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    seating_capacity?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type cinemaMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    seating_capacity?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type cinemaSumOrderByAggregateInput = {
    seating_capacity?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    genre?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieAvgOrderByAggregateInput = {
    duration?: SortOrder;
    rating?: SortOrder;
  };

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    genre?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    genre?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieSumOrderByAggregateInput = {
    duration?: SortOrder;
    rating?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type BookingListRelationFilter = {
    every?: bookingWhereInput;
    some?: bookingWhereInput;
    none?: bookingWhereInput;
  };

  export type CinemaRelationFilter = {
    is?: cinemaWhereInput;
    isNot?: cinemaWhereInput;
  };

  export type MovieRelationFilter = {
    is?: movieWhereInput;
    isNot?: movieWhereInput;
  };

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type showingCountOrderByAggregateInput = {
    id?: SortOrder;
    showing_time?: SortOrder;
    cinema_id?: SortOrder;
    movie_id?: SortOrder;
    available_seats?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type showingAvgOrderByAggregateInput = {
    available_seats?: SortOrder;
    price?: SortOrder;
  };

  export type showingMaxOrderByAggregateInput = {
    id?: SortOrder;
    showing_time?: SortOrder;
    cinema_id?: SortOrder;
    movie_id?: SortOrder;
    available_seats?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type showingMinOrderByAggregateInput = {
    id?: SortOrder;
    showing_time?: SortOrder;
    cinema_id?: SortOrder;
    movie_id?: SortOrder;
    available_seats?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type showingSumOrderByAggregateInput = {
    available_seats?: SortOrder;
    price?: SortOrder;
  };

  export type technical_supportCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_reported?: SortOrder;
    issue_status?: SortOrder;
    reported_time?: SortOrder;
    resolved_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type technical_supportMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_reported?: SortOrder;
    issue_status?: SortOrder;
    reported_time?: SortOrder;
    resolved_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type technical_supportMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_reported?: SortOrder;
    issue_status?: SortOrder;
    reported_time?: SortOrder;
    resolved_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CinemaListRelationFilter = {
    every?: cinemaWhereInput;
    some?: cinemaWhereInput;
    none?: cinemaWhereInput;
  };

  export type Technical_supportListRelationFilter = {
    every?: technical_supportWhereInput;
    some?: technical_supportWhereInput;
    none?: technical_supportWhereInput;
  };

  export type cinemaOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type technical_supportOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type showingCreateNestedOneWithoutBookingInput = {
    create?: XOR<showingCreateWithoutBookingInput, showingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: showingCreateOrConnectWithoutBookingInput;
    connect?: showingWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type showingUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<showingCreateWithoutBookingInput, showingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: showingCreateOrConnectWithoutBookingInput;
    upsert?: showingUpsertWithoutBookingInput;
    connect?: showingWhereUniqueInput;
    update?: XOR<
      XOR<showingUpdateToOneWithWhereWithoutBookingInput, showingUpdateWithoutBookingInput>,
      showingUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    upsert?: userUpsertWithoutBookingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>,
      userUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userCreateNestedOneWithoutCinemaInput = {
    create?: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
    connectOrCreate?: userCreateOrConnectWithoutCinemaInput;
    connect?: userWhereUniqueInput;
  };

  export type showingCreateNestedManyWithoutCinemaInput = {
    create?:
      | XOR<showingCreateWithoutCinemaInput, showingUncheckedCreateWithoutCinemaInput>
      | showingCreateWithoutCinemaInput[]
      | showingUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: showingCreateOrConnectWithoutCinemaInput | showingCreateOrConnectWithoutCinemaInput[];
    createMany?: showingCreateManyCinemaInputEnvelope;
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
  };

  export type showingUncheckedCreateNestedManyWithoutCinemaInput = {
    create?:
      | XOR<showingCreateWithoutCinemaInput, showingUncheckedCreateWithoutCinemaInput>
      | showingCreateWithoutCinemaInput[]
      | showingUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: showingCreateOrConnectWithoutCinemaInput | showingCreateOrConnectWithoutCinemaInput[];
    createMany?: showingCreateManyCinemaInputEnvelope;
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutCinemaNestedInput = {
    create?: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
    connectOrCreate?: userCreateOrConnectWithoutCinemaInput;
    upsert?: userUpsertWithoutCinemaInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCinemaInput, userUpdateWithoutCinemaInput>,
      userUncheckedUpdateWithoutCinemaInput
    >;
  };

  export type showingUpdateManyWithoutCinemaNestedInput = {
    create?:
      | XOR<showingCreateWithoutCinemaInput, showingUncheckedCreateWithoutCinemaInput>
      | showingCreateWithoutCinemaInput[]
      | showingUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: showingCreateOrConnectWithoutCinemaInput | showingCreateOrConnectWithoutCinemaInput[];
    upsert?: showingUpsertWithWhereUniqueWithoutCinemaInput | showingUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: showingCreateManyCinemaInputEnvelope;
    set?: showingWhereUniqueInput | showingWhereUniqueInput[];
    disconnect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    delete?: showingWhereUniqueInput | showingWhereUniqueInput[];
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    update?: showingUpdateWithWhereUniqueWithoutCinemaInput | showingUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: showingUpdateManyWithWhereWithoutCinemaInput | showingUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: showingScalarWhereInput | showingScalarWhereInput[];
  };

  export type showingUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?:
      | XOR<showingCreateWithoutCinemaInput, showingUncheckedCreateWithoutCinemaInput>
      | showingCreateWithoutCinemaInput[]
      | showingUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: showingCreateOrConnectWithoutCinemaInput | showingCreateOrConnectWithoutCinemaInput[];
    upsert?: showingUpsertWithWhereUniqueWithoutCinemaInput | showingUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: showingCreateManyCinemaInputEnvelope;
    set?: showingWhereUniqueInput | showingWhereUniqueInput[];
    disconnect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    delete?: showingWhereUniqueInput | showingWhereUniqueInput[];
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    update?: showingUpdateWithWhereUniqueWithoutCinemaInput | showingUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: showingUpdateManyWithWhereWithoutCinemaInput | showingUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: showingScalarWhereInput | showingScalarWhereInput[];
  };

  export type showingCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<showingCreateWithoutMovieInput, showingUncheckedCreateWithoutMovieInput>
      | showingCreateWithoutMovieInput[]
      | showingUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: showingCreateOrConnectWithoutMovieInput | showingCreateOrConnectWithoutMovieInput[];
    createMany?: showingCreateManyMovieInputEnvelope;
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
  };

  export type showingUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<showingCreateWithoutMovieInput, showingUncheckedCreateWithoutMovieInput>
      | showingCreateWithoutMovieInput[]
      | showingUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: showingCreateOrConnectWithoutMovieInput | showingCreateOrConnectWithoutMovieInput[];
    createMany?: showingCreateManyMovieInputEnvelope;
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type showingUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<showingCreateWithoutMovieInput, showingUncheckedCreateWithoutMovieInput>
      | showingCreateWithoutMovieInput[]
      | showingUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: showingCreateOrConnectWithoutMovieInput | showingCreateOrConnectWithoutMovieInput[];
    upsert?: showingUpsertWithWhereUniqueWithoutMovieInput | showingUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: showingCreateManyMovieInputEnvelope;
    set?: showingWhereUniqueInput | showingWhereUniqueInput[];
    disconnect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    delete?: showingWhereUniqueInput | showingWhereUniqueInput[];
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    update?: showingUpdateWithWhereUniqueWithoutMovieInput | showingUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: showingUpdateManyWithWhereWithoutMovieInput | showingUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: showingScalarWhereInput | showingScalarWhereInput[];
  };

  export type showingUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<showingCreateWithoutMovieInput, showingUncheckedCreateWithoutMovieInput>
      | showingCreateWithoutMovieInput[]
      | showingUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: showingCreateOrConnectWithoutMovieInput | showingCreateOrConnectWithoutMovieInput[];
    upsert?: showingUpsertWithWhereUniqueWithoutMovieInput | showingUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: showingCreateManyMovieInputEnvelope;
    set?: showingWhereUniqueInput | showingWhereUniqueInput[];
    disconnect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    delete?: showingWhereUniqueInput | showingWhereUniqueInput[];
    connect?: showingWhereUniqueInput | showingWhereUniqueInput[];
    update?: showingUpdateWithWhereUniqueWithoutMovieInput | showingUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: showingUpdateManyWithWhereWithoutMovieInput | showingUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: showingScalarWhereInput | showingScalarWhereInput[];
  };

  export type bookingCreateNestedManyWithoutShowingInput = {
    create?:
      | XOR<bookingCreateWithoutShowingInput, bookingUncheckedCreateWithoutShowingInput>
      | bookingCreateWithoutShowingInput[]
      | bookingUncheckedCreateWithoutShowingInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutShowingInput | bookingCreateOrConnectWithoutShowingInput[];
    createMany?: bookingCreateManyShowingInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type cinemaCreateNestedOneWithoutShowingInput = {
    create?: XOR<cinemaCreateWithoutShowingInput, cinemaUncheckedCreateWithoutShowingInput>;
    connectOrCreate?: cinemaCreateOrConnectWithoutShowingInput;
    connect?: cinemaWhereUniqueInput;
  };

  export type movieCreateNestedOneWithoutShowingInput = {
    create?: XOR<movieCreateWithoutShowingInput, movieUncheckedCreateWithoutShowingInput>;
    connectOrCreate?: movieCreateOrConnectWithoutShowingInput;
    connect?: movieWhereUniqueInput;
  };

  export type bookingUncheckedCreateNestedManyWithoutShowingInput = {
    create?:
      | XOR<bookingCreateWithoutShowingInput, bookingUncheckedCreateWithoutShowingInput>
      | bookingCreateWithoutShowingInput[]
      | bookingUncheckedCreateWithoutShowingInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutShowingInput | bookingCreateOrConnectWithoutShowingInput[];
    createMany?: bookingCreateManyShowingInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutShowingNestedInput = {
    create?:
      | XOR<bookingCreateWithoutShowingInput, bookingUncheckedCreateWithoutShowingInput>
      | bookingCreateWithoutShowingInput[]
      | bookingUncheckedCreateWithoutShowingInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutShowingInput | bookingCreateOrConnectWithoutShowingInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutShowingInput | bookingUpsertWithWhereUniqueWithoutShowingInput[];
    createMany?: bookingCreateManyShowingInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutShowingInput | bookingUpdateWithWhereUniqueWithoutShowingInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutShowingInput | bookingUpdateManyWithWhereWithoutShowingInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type cinemaUpdateOneRequiredWithoutShowingNestedInput = {
    create?: XOR<cinemaCreateWithoutShowingInput, cinemaUncheckedCreateWithoutShowingInput>;
    connectOrCreate?: cinemaCreateOrConnectWithoutShowingInput;
    upsert?: cinemaUpsertWithoutShowingInput;
    connect?: cinemaWhereUniqueInput;
    update?: XOR<
      XOR<cinemaUpdateToOneWithWhereWithoutShowingInput, cinemaUpdateWithoutShowingInput>,
      cinemaUncheckedUpdateWithoutShowingInput
    >;
  };

  export type movieUpdateOneRequiredWithoutShowingNestedInput = {
    create?: XOR<movieCreateWithoutShowingInput, movieUncheckedCreateWithoutShowingInput>;
    connectOrCreate?: movieCreateOrConnectWithoutShowingInput;
    upsert?: movieUpsertWithoutShowingInput;
    connect?: movieWhereUniqueInput;
    update?: XOR<
      XOR<movieUpdateToOneWithWhereWithoutShowingInput, movieUpdateWithoutShowingInput>,
      movieUncheckedUpdateWithoutShowingInput
    >;
  };

  export type bookingUncheckedUpdateManyWithoutShowingNestedInput = {
    create?:
      | XOR<bookingCreateWithoutShowingInput, bookingUncheckedCreateWithoutShowingInput>
      | bookingCreateWithoutShowingInput[]
      | bookingUncheckedCreateWithoutShowingInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutShowingInput | bookingCreateOrConnectWithoutShowingInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutShowingInput | bookingUpsertWithWhereUniqueWithoutShowingInput[];
    createMany?: bookingCreateManyShowingInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutShowingInput | bookingUpdateWithWhereUniqueWithoutShowingInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutShowingInput | bookingUpdateManyWithWhereWithoutShowingInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutTechnical_supportInput = {
    create?: XOR<userCreateWithoutTechnical_supportInput, userUncheckedCreateWithoutTechnical_supportInput>;
    connectOrCreate?: userCreateOrConnectWithoutTechnical_supportInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutTechnical_supportNestedInput = {
    create?: XOR<userCreateWithoutTechnical_supportInput, userUncheckedCreateWithoutTechnical_supportInput>;
    connectOrCreate?: userCreateOrConnectWithoutTechnical_supportInput;
    upsert?: userUpsertWithoutTechnical_supportInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTechnical_supportInput, userUpdateWithoutTechnical_supportInput>,
      userUncheckedUpdateWithoutTechnical_supportInput
    >;
  };

  export type bookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type cinemaCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
  };

  export type technical_supportCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<technical_supportCreateWithoutUserInput, technical_supportUncheckedCreateWithoutUserInput>
      | technical_supportCreateWithoutUserInput[]
      | technical_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | technical_supportCreateOrConnectWithoutUserInput
      | technical_supportCreateOrConnectWithoutUserInput[];
    createMany?: technical_supportCreateManyUserInputEnvelope;
    connect?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type cinemaUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
  };

  export type technical_supportUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<technical_supportCreateWithoutUserInput, technical_supportUncheckedCreateWithoutUserInput>
      | technical_supportCreateWithoutUserInput[]
      | technical_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | technical_supportCreateOrConnectWithoutUserInput
      | technical_supportCreateOrConnectWithoutUserInput[];
    createMany?: technical_supportCreateManyUserInputEnvelope;
    connect?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type cinemaUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    upsert?: cinemaUpsertWithWhereUniqueWithoutUserInput | cinemaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    set?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    disconnect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    delete?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    update?: cinemaUpdateWithWhereUniqueWithoutUserInput | cinemaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: cinemaUpdateManyWithWhereWithoutUserInput | cinemaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
  };

  export type technical_supportUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<technical_supportCreateWithoutUserInput, technical_supportUncheckedCreateWithoutUserInput>
      | technical_supportCreateWithoutUserInput[]
      | technical_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | technical_supportCreateOrConnectWithoutUserInput
      | technical_supportCreateOrConnectWithoutUserInput[];
    upsert?:
      | technical_supportUpsertWithWhereUniqueWithoutUserInput
      | technical_supportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: technical_supportCreateManyUserInputEnvelope;
    set?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    disconnect?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    delete?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    connect?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    update?:
      | technical_supportUpdateWithWhereUniqueWithoutUserInput
      | technical_supportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | technical_supportUpdateManyWithWhereWithoutUserInput
      | technical_supportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: technical_supportScalarWhereInput | technical_supportScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type cinemaUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    upsert?: cinemaUpsertWithWhereUniqueWithoutUserInput | cinemaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    set?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    disconnect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    delete?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    update?: cinemaUpdateWithWhereUniqueWithoutUserInput | cinemaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: cinemaUpdateManyWithWhereWithoutUserInput | cinemaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
  };

  export type technical_supportUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<technical_supportCreateWithoutUserInput, technical_supportUncheckedCreateWithoutUserInput>
      | technical_supportCreateWithoutUserInput[]
      | technical_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | technical_supportCreateOrConnectWithoutUserInput
      | technical_supportCreateOrConnectWithoutUserInput[];
    upsert?:
      | technical_supportUpsertWithWhereUniqueWithoutUserInput
      | technical_supportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: technical_supportCreateManyUserInputEnvelope;
    set?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    disconnect?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    delete?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    connect?: technical_supportWhereUniqueInput | technical_supportWhereUniqueInput[];
    update?:
      | technical_supportUpdateWithWhereUniqueWithoutUserInput
      | technical_supportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | technical_supportUpdateManyWithWhereWithoutUserInput
      | technical_supportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: technical_supportScalarWhereInput | technical_supportScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type showingCreateWithoutBookingInput = {
    id?: string;
    showing_time: Date | string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema: cinemaCreateNestedOneWithoutShowingInput;
    movie: movieCreateNestedOneWithoutShowingInput;
  };

  export type showingUncheckedCreateWithoutBookingInput = {
    id?: string;
    showing_time: Date | string;
    cinema_id: string;
    movie_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showingCreateOrConnectWithoutBookingInput = {
    where: showingWhereUniqueInput;
    create: XOR<showingCreateWithoutBookingInput, showingUncheckedCreateWithoutBookingInput>;
  };

  export type userCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaCreateNestedManyWithoutUserInput;
    technical_support?: technical_supportCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaUncheckedCreateNestedManyWithoutUserInput;
    technical_support?: technical_supportUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
  };

  export type showingUpsertWithoutBookingInput = {
    update: XOR<showingUpdateWithoutBookingInput, showingUncheckedUpdateWithoutBookingInput>;
    create: XOR<showingCreateWithoutBookingInput, showingUncheckedCreateWithoutBookingInput>;
    where?: showingWhereInput;
  };

  export type showingUpdateToOneWithWhereWithoutBookingInput = {
    where?: showingWhereInput;
    data: XOR<showingUpdateWithoutBookingInput, showingUncheckedUpdateWithoutBookingInput>;
  };

  export type showingUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateOneRequiredWithoutShowingNestedInput;
    movie?: movieUpdateOneRequiredWithoutShowingNestedInput;
  };

  export type showingUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
  };

  export type userUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateManyWithoutUserNestedInput;
    technical_support?: technical_supportUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUncheckedUpdateManyWithoutUserNestedInput;
    technical_support?: technical_supportUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCinemaInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    technical_support?: technical_supportCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCinemaInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    technical_support?: technical_supportUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCinemaInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
  };

  export type showingCreateWithoutCinemaInput = {
    id?: string;
    showing_time: Date | string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutShowingInput;
    movie: movieCreateNestedOneWithoutShowingInput;
  };

  export type showingUncheckedCreateWithoutCinemaInput = {
    id?: string;
    showing_time: Date | string;
    movie_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutShowingInput;
  };

  export type showingCreateOrConnectWithoutCinemaInput = {
    where: showingWhereUniqueInput;
    create: XOR<showingCreateWithoutCinemaInput, showingUncheckedCreateWithoutCinemaInput>;
  };

  export type showingCreateManyCinemaInputEnvelope = {
    data: showingCreateManyCinemaInput | showingCreateManyCinemaInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCinemaInput = {
    update: XOR<userUpdateWithoutCinemaInput, userUncheckedUpdateWithoutCinemaInput>;
    create: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCinemaInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCinemaInput, userUncheckedUpdateWithoutCinemaInput>;
  };

  export type userUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    technical_support?: technical_supportUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    technical_support?: technical_supportUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type showingUpsertWithWhereUniqueWithoutCinemaInput = {
    where: showingWhereUniqueInput;
    update: XOR<showingUpdateWithoutCinemaInput, showingUncheckedUpdateWithoutCinemaInput>;
    create: XOR<showingCreateWithoutCinemaInput, showingUncheckedCreateWithoutCinemaInput>;
  };

  export type showingUpdateWithWhereUniqueWithoutCinemaInput = {
    where: showingWhereUniqueInput;
    data: XOR<showingUpdateWithoutCinemaInput, showingUncheckedUpdateWithoutCinemaInput>;
  };

  export type showingUpdateManyWithWhereWithoutCinemaInput = {
    where: showingScalarWhereInput;
    data: XOR<showingUpdateManyMutationInput, showingUncheckedUpdateManyWithoutCinemaInput>;
  };

  export type showingScalarWhereInput = {
    AND?: showingScalarWhereInput | showingScalarWhereInput[];
    OR?: showingScalarWhereInput[];
    NOT?: showingScalarWhereInput | showingScalarWhereInput[];
    id?: UuidFilter<'showing'> | string;
    showing_time?: DateTimeFilter<'showing'> | Date | string;
    cinema_id?: UuidFilter<'showing'> | string;
    movie_id?: UuidFilter<'showing'> | string;
    available_seats?: IntNullableFilter<'showing'> | number | null;
    price?: IntNullableFilter<'showing'> | number | null;
    created_at?: DateTimeFilter<'showing'> | Date | string;
    updated_at?: DateTimeFilter<'showing'> | Date | string;
  };

  export type showingCreateWithoutMovieInput = {
    id?: string;
    showing_time: Date | string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutShowingInput;
    cinema: cinemaCreateNestedOneWithoutShowingInput;
  };

  export type showingUncheckedCreateWithoutMovieInput = {
    id?: string;
    showing_time: Date | string;
    cinema_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutShowingInput;
  };

  export type showingCreateOrConnectWithoutMovieInput = {
    where: showingWhereUniqueInput;
    create: XOR<showingCreateWithoutMovieInput, showingUncheckedCreateWithoutMovieInput>;
  };

  export type showingCreateManyMovieInputEnvelope = {
    data: showingCreateManyMovieInput | showingCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type showingUpsertWithWhereUniqueWithoutMovieInput = {
    where: showingWhereUniqueInput;
    update: XOR<showingUpdateWithoutMovieInput, showingUncheckedUpdateWithoutMovieInput>;
    create: XOR<showingCreateWithoutMovieInput, showingUncheckedCreateWithoutMovieInput>;
  };

  export type showingUpdateWithWhereUniqueWithoutMovieInput = {
    where: showingWhereUniqueInput;
    data: XOR<showingUpdateWithoutMovieInput, showingUncheckedUpdateWithoutMovieInput>;
  };

  export type showingUpdateManyWithWhereWithoutMovieInput = {
    where: showingScalarWhereInput;
    data: XOR<showingUpdateManyMutationInput, showingUncheckedUpdateManyWithoutMovieInput>;
  };

  export type bookingCreateWithoutShowingInput = {
    id?: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutShowingInput = {
    id?: string;
    user_id: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutShowingInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutShowingInput, bookingUncheckedCreateWithoutShowingInput>;
  };

  export type bookingCreateManyShowingInputEnvelope = {
    data: bookingCreateManyShowingInput | bookingCreateManyShowingInput[];
    skipDuplicates?: boolean;
  };

  export type cinemaCreateWithoutShowingInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateWithoutShowingInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type cinemaCreateOrConnectWithoutShowingInput = {
    where: cinemaWhereUniqueInput;
    create: XOR<cinemaCreateWithoutShowingInput, cinemaUncheckedCreateWithoutShowingInput>;
  };

  export type movieCreateWithoutShowingInput = {
    id?: string;
    title: string;
    director?: string | null;
    duration?: number | null;
    rating?: number | null;
    release_date?: Date | string | null;
    genre?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUncheckedCreateWithoutShowingInput = {
    id?: string;
    title: string;
    director?: string | null;
    duration?: number | null;
    rating?: number | null;
    release_date?: Date | string | null;
    genre?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieCreateOrConnectWithoutShowingInput = {
    where: movieWhereUniqueInput;
    create: XOR<movieCreateWithoutShowingInput, movieUncheckedCreateWithoutShowingInput>;
  };

  export type bookingUpsertWithWhereUniqueWithoutShowingInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutShowingInput, bookingUncheckedUpdateWithoutShowingInput>;
    create: XOR<bookingCreateWithoutShowingInput, bookingUncheckedCreateWithoutShowingInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutShowingInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutShowingInput, bookingUncheckedUpdateWithoutShowingInput>;
  };

  export type bookingUpdateManyWithWhereWithoutShowingInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutShowingInput>;
  };

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[];
    OR?: bookingScalarWhereInput[];
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[];
    id?: UuidFilter<'booking'> | string;
    user_id?: UuidFilter<'booking'> | string;
    showing_id?: UuidFilter<'booking'> | string;
    booking_time?: DateTimeFilter<'booking'> | Date | string;
    number_of_tickets?: IntNullableFilter<'booking'> | number | null;
    total_price?: IntNullableFilter<'booking'> | number | null;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
  };

  export type cinemaUpsertWithoutShowingInput = {
    update: XOR<cinemaUpdateWithoutShowingInput, cinemaUncheckedUpdateWithoutShowingInput>;
    create: XOR<cinemaCreateWithoutShowingInput, cinemaUncheckedCreateWithoutShowingInput>;
    where?: cinemaWhereInput;
  };

  export type cinemaUpdateToOneWithWhereWithoutShowingInput = {
    where?: cinemaWhereInput;
    data: XOR<cinemaUpdateWithoutShowingInput, cinemaUncheckedUpdateWithoutShowingInput>;
  };

  export type cinemaUpdateWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type movieUpsertWithoutShowingInput = {
    update: XOR<movieUpdateWithoutShowingInput, movieUncheckedUpdateWithoutShowingInput>;
    create: XOR<movieCreateWithoutShowingInput, movieUncheckedCreateWithoutShowingInput>;
    where?: movieWhereInput;
  };

  export type movieUpdateToOneWithWhereWithoutShowingInput = {
    where?: movieWhereInput;
    data: XOR<movieUpdateWithoutShowingInput, movieUncheckedUpdateWithoutShowingInput>;
  };

  export type movieUpdateWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUncheckedUpdateWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutTechnical_supportInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    cinema?: cinemaCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTechnical_supportInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    cinema?: cinemaUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTechnical_supportInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTechnical_supportInput, userUncheckedCreateWithoutTechnical_supportInput>;
  };

  export type userUpsertWithoutTechnical_supportInput = {
    update: XOR<userUpdateWithoutTechnical_supportInput, userUncheckedUpdateWithoutTechnical_supportInput>;
    create: XOR<userCreateWithoutTechnical_supportInput, userUncheckedCreateWithoutTechnical_supportInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTechnical_supportInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTechnical_supportInput, userUncheckedUpdateWithoutTechnical_supportInput>;
  };

  export type userUpdateWithoutTechnical_supportInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    cinema?: cinemaUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTechnical_supportInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    cinema?: cinemaUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutUserInput = {
    id?: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    showing: showingCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string;
    showing_id: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type cinemaCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    showing?: showingCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    showing?: showingUncheckedCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaCreateOrConnectWithoutUserInput = {
    where: cinemaWhereUniqueInput;
    create: XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>;
  };

  export type cinemaCreateManyUserInputEnvelope = {
    data: cinemaCreateManyUserInput | cinemaCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type technical_supportCreateWithoutUserInput = {
    id?: string;
    issue_reported?: string | null;
    issue_status?: string | null;
    reported_time?: Date | string | null;
    resolved_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type technical_supportUncheckedCreateWithoutUserInput = {
    id?: string;
    issue_reported?: string | null;
    issue_status?: string | null;
    reported_time?: Date | string | null;
    resolved_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type technical_supportCreateOrConnectWithoutUserInput = {
    where: technical_supportWhereUniqueInput;
    create: XOR<technical_supportCreateWithoutUserInput, technical_supportUncheckedCreateWithoutUserInput>;
  };

  export type technical_supportCreateManyUserInputEnvelope = {
    data: technical_supportCreateManyUserInput | technical_supportCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
  };

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>;
  };

  export type cinemaUpsertWithWhereUniqueWithoutUserInput = {
    where: cinemaWhereUniqueInput;
    update: XOR<cinemaUpdateWithoutUserInput, cinemaUncheckedUpdateWithoutUserInput>;
    create: XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>;
  };

  export type cinemaUpdateWithWhereUniqueWithoutUserInput = {
    where: cinemaWhereUniqueInput;
    data: XOR<cinemaUpdateWithoutUserInput, cinemaUncheckedUpdateWithoutUserInput>;
  };

  export type cinemaUpdateManyWithWhereWithoutUserInput = {
    where: cinemaScalarWhereInput;
    data: XOR<cinemaUpdateManyMutationInput, cinemaUncheckedUpdateManyWithoutUserInput>;
  };

  export type cinemaScalarWhereInput = {
    AND?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
    OR?: cinemaScalarWhereInput[];
    NOT?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
    id?: UuidFilter<'cinema'> | string;
    description?: StringNullableFilter<'cinema'> | string | null;
    location?: StringNullableFilter<'cinema'> | string | null;
    opening_hours?: StringNullableFilter<'cinema'> | string | null;
    seating_capacity?: IntNullableFilter<'cinema'> | number | null;
    name?: StringFilter<'cinema'> | string;
    created_at?: DateTimeFilter<'cinema'> | Date | string;
    updated_at?: DateTimeFilter<'cinema'> | Date | string;
    user_id?: UuidFilter<'cinema'> | string;
    tenant_id?: StringFilter<'cinema'> | string;
  };

  export type technical_supportUpsertWithWhereUniqueWithoutUserInput = {
    where: technical_supportWhereUniqueInput;
    update: XOR<technical_supportUpdateWithoutUserInput, technical_supportUncheckedUpdateWithoutUserInput>;
    create: XOR<technical_supportCreateWithoutUserInput, technical_supportUncheckedCreateWithoutUserInput>;
  };

  export type technical_supportUpdateWithWhereUniqueWithoutUserInput = {
    where: technical_supportWhereUniqueInput;
    data: XOR<technical_supportUpdateWithoutUserInput, technical_supportUncheckedUpdateWithoutUserInput>;
  };

  export type technical_supportUpdateManyWithWhereWithoutUserInput = {
    where: technical_supportScalarWhereInput;
    data: XOR<technical_supportUpdateManyMutationInput, technical_supportUncheckedUpdateManyWithoutUserInput>;
  };

  export type technical_supportScalarWhereInput = {
    AND?: technical_supportScalarWhereInput | technical_supportScalarWhereInput[];
    OR?: technical_supportScalarWhereInput[];
    NOT?: technical_supportScalarWhereInput | technical_supportScalarWhereInput[];
    id?: UuidFilter<'technical_support'> | string;
    user_id?: UuidFilter<'technical_support'> | string;
    issue_reported?: StringNullableFilter<'technical_support'> | string | null;
    issue_status?: StringNullableFilter<'technical_support'> | string | null;
    reported_time?: DateTimeNullableFilter<'technical_support'> | Date | string | null;
    resolved_time?: DateTimeNullableFilter<'technical_support'> | Date | string | null;
    created_at?: DateTimeFilter<'technical_support'> | Date | string;
    updated_at?: DateTimeFilter<'technical_support'> | Date | string;
  };

  export type showingCreateManyCinemaInput = {
    id?: string;
    showing_time: Date | string;
    movie_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showingUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutShowingNestedInput;
    movie?: movieUpdateOneRequiredWithoutShowingNestedInput;
  };

  export type showingUncheckedUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutShowingNestedInput;
  };

  export type showingUncheckedUpdateManyWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type showingCreateManyMovieInput = {
    id?: string;
    showing_time: Date | string;
    cinema_id: string;
    available_seats?: number | null;
    price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type showingUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutShowingNestedInput;
    cinema?: cinemaUpdateOneRequiredWithoutShowingNestedInput;
  };

  export type showingUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutShowingNestedInput;
  };

  export type showingUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    available_seats?: NullableIntFieldUpdateOperationsInput | number | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyShowingInput = {
    id?: string;
    user_id: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutShowingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyUserInput = {
    id?: string;
    showing_id: string;
    booking_time: Date | string;
    number_of_tickets?: number | null;
    total_price?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type cinemaCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    seating_capacity?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type technical_supportCreateManyUserInput = {
    id?: string;
    issue_reported?: string | null;
    issue_status?: string | null;
    reported_time?: Date | string | null;
    resolved_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    showing?: showingUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    showing_id?: StringFieldUpdateOperationsInput | string;
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    number_of_tickets?: NullableIntFieldUpdateOperationsInput | number | null;
    total_price?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type cinemaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    showing?: showingUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    showing?: showingUncheckedUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type technical_supportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type technical_supportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type technical_supportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_reported?: NullableStringFieldUpdateOperationsInput | string | null;
    issue_status?: NullableStringFieldUpdateOperationsInput | string | null;
    reported_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolved_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CinemaCountOutputTypeDefaultArgs instead
   */
  export type CinemaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CinemaCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieCountOutputTypeDefaultArgs instead
   */
  export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    MovieCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ShowingCountOutputTypeDefaultArgs instead
   */
  export type ShowingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ShowingCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookingDefaultArgs instead
   */
  export type bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use cinemaDefaultArgs instead
   */
  export type cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    cinemaDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use movieDefaultArgs instead
   */
  export type movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use showingDefaultArgs instead
   */
  export type showingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    showingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use technical_supportDefaultArgs instead
   */
  export type technical_supportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    technical_supportDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
