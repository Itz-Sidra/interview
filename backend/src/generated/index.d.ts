
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model InterviewConfig
 * 
 */
export type InterviewConfig = $Result.DefaultSelection<Prisma.$InterviewConfigPayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Transcript
 * 
 */
export type Transcript = $Result.DefaultSelection<Prisma.$TranscriptPayload>
/**
 * Model AnalysisReport
 * 
 */
export type AnalysisReport = $Result.DefaultSelection<Prisma.$AnalysisReportPayload>
/**
 * Model AnalysisCategoryScore
 * 
 */
export type AnalysisCategoryScore = $Result.DefaultSelection<Prisma.$AnalysisCategoryScorePayload>
/**
 * Model FlaggedIssue
 * 
 */
export type FlaggedIssue = $Result.DefaultSelection<Prisma.$FlaggedIssuePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Difficulty: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const InterviewType: {
  TECHNICAL: 'TECHNICAL',
  BEHAVIORAL: 'BEHAVIORAL',
  SYSTEM_DESIGN: 'SYSTEM_DESIGN'
};

export type InterviewType = (typeof InterviewType)[keyof typeof InterviewType]


export const MediaType: {
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO',
  OTHER: 'OTHER'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const AnalysisCategory: {
  COMMUNICATION: 'COMMUNICATION',
  GRAMMAR: 'GRAMMAR',
  FILLER_WORDS: 'FILLER_WORDS',
  CONFIDENCE: 'CONFIDENCE',
  TECHNICAL: 'TECHNICAL',
  VOCAL: 'VOCAL',
  EMOTIONAL: 'EMOTIONAL'
};

export type AnalysisCategory = (typeof AnalysisCategory)[keyof typeof AnalysisCategory]

}

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type InterviewType = $Enums.InterviewType

export const InterviewType: typeof $Enums.InterviewType

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type AnalysisCategory = $Enums.AnalysisCategory

export const AnalysisCategory: typeof $Enums.AnalysisCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewConfig`: Exposes CRUD operations for the **InterviewConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewConfigs
    * const interviewConfigs = await prisma.interviewConfig.findMany()
    * ```
    */
  get interviewConfig(): Prisma.InterviewConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcript`: Exposes CRUD operations for the **Transcript** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transcripts
    * const transcripts = await prisma.transcript.findMany()
    * ```
    */
  get transcript(): Prisma.TranscriptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisReport`: Exposes CRUD operations for the **AnalysisReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisReports
    * const analysisReports = await prisma.analysisReport.findMany()
    * ```
    */
  get analysisReport(): Prisma.AnalysisReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisCategoryScore`: Exposes CRUD operations for the **AnalysisCategoryScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisCategoryScores
    * const analysisCategoryScores = await prisma.analysisCategoryScore.findMany()
    * ```
    */
  get analysisCategoryScore(): Prisma.AnalysisCategoryScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flaggedIssue`: Exposes CRUD operations for the **FlaggedIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlaggedIssues
    * const flaggedIssues = await prisma.flaggedIssue.findMany()
    * ```
    */
  get flaggedIssue(): Prisma.FlaggedIssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resume: 'Resume',
    InterviewConfig: 'InterviewConfig',
    Interview: 'Interview',
    Media: 'Media',
    Transcript: 'Transcript',
    AnalysisReport: 'AnalysisReport',
    AnalysisCategoryScore: 'AnalysisCategoryScore',
    FlaggedIssue: 'FlaggedIssue',
    Question: 'Question',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resume" | "interviewConfig" | "interview" | "media" | "transcript" | "analysisReport" | "analysisCategoryScore" | "flaggedIssue" | "question" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      InterviewConfig: {
        payload: Prisma.$InterviewConfigPayload<ExtArgs>
        fields: Prisma.InterviewConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>
          }
          findFirst: {
            args: Prisma.InterviewConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>
          }
          findMany: {
            args: Prisma.InterviewConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>[]
          }
          create: {
            args: Prisma.InterviewConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>
          }
          createMany: {
            args: Prisma.InterviewConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>[]
          }
          delete: {
            args: Prisma.InterviewConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>
          }
          update: {
            args: Prisma.InterviewConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>
          }
          deleteMany: {
            args: Prisma.InterviewConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>[]
          }
          upsert: {
            args: Prisma.InterviewConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewConfigPayload>
          }
          aggregate: {
            args: Prisma.InterviewConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewConfig>
          }
          groupBy: {
            args: Prisma.InterviewConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewConfigCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewConfigCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Transcript: {
        payload: Prisma.$TranscriptPayload<ExtArgs>
        fields: Prisma.TranscriptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscriptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscriptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          findFirst: {
            args: Prisma.TranscriptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscriptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          findMany: {
            args: Prisma.TranscriptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>[]
          }
          create: {
            args: Prisma.TranscriptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          createMany: {
            args: Prisma.TranscriptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscriptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>[]
          }
          delete: {
            args: Prisma.TranscriptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          update: {
            args: Prisma.TranscriptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          deleteMany: {
            args: Prisma.TranscriptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscriptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranscriptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>[]
          }
          upsert: {
            args: Prisma.TranscriptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptPayload>
          }
          aggregate: {
            args: Prisma.TranscriptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscript>
          }
          groupBy: {
            args: Prisma.TranscriptGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscriptGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscriptCountArgs<ExtArgs>
            result: $Utils.Optional<TranscriptCountAggregateOutputType> | number
          }
        }
      }
      AnalysisReport: {
        payload: Prisma.$AnalysisReportPayload<ExtArgs>
        fields: Prisma.AnalysisReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          findFirst: {
            args: Prisma.AnalysisReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          findMany: {
            args: Prisma.AnalysisReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          create: {
            args: Prisma.AnalysisReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          createMany: {
            args: Prisma.AnalysisReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          delete: {
            args: Prisma.AnalysisReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          update: {
            args: Prisma.AnalysisReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisReportPayload>
          }
          aggregate: {
            args: Prisma.AnalysisReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisReport>
          }
          groupBy: {
            args: Prisma.AnalysisReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisReportCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisReportCountAggregateOutputType> | number
          }
        }
      }
      AnalysisCategoryScore: {
        payload: Prisma.$AnalysisCategoryScorePayload<ExtArgs>
        fields: Prisma.AnalysisCategoryScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisCategoryScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisCategoryScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>
          }
          findFirst: {
            args: Prisma.AnalysisCategoryScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisCategoryScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>
          }
          findMany: {
            args: Prisma.AnalysisCategoryScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>[]
          }
          create: {
            args: Prisma.AnalysisCategoryScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>
          }
          createMany: {
            args: Prisma.AnalysisCategoryScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisCategoryScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>[]
          }
          delete: {
            args: Prisma.AnalysisCategoryScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>
          }
          update: {
            args: Prisma.AnalysisCategoryScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>
          }
          deleteMany: {
            args: Prisma.AnalysisCategoryScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisCategoryScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisCategoryScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>[]
          }
          upsert: {
            args: Prisma.AnalysisCategoryScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCategoryScorePayload>
          }
          aggregate: {
            args: Prisma.AnalysisCategoryScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisCategoryScore>
          }
          groupBy: {
            args: Prisma.AnalysisCategoryScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCategoryScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisCategoryScoreCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCategoryScoreCountAggregateOutputType> | number
          }
        }
      }
      FlaggedIssue: {
        payload: Prisma.$FlaggedIssuePayload<ExtArgs>
        fields: Prisma.FlaggedIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlaggedIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlaggedIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>
          }
          findFirst: {
            args: Prisma.FlaggedIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlaggedIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>
          }
          findMany: {
            args: Prisma.FlaggedIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>[]
          }
          create: {
            args: Prisma.FlaggedIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>
          }
          createMany: {
            args: Prisma.FlaggedIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlaggedIssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>[]
          }
          delete: {
            args: Prisma.FlaggedIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>
          }
          update: {
            args: Prisma.FlaggedIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>
          }
          deleteMany: {
            args: Prisma.FlaggedIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlaggedIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlaggedIssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>[]
          }
          upsert: {
            args: Prisma.FlaggedIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlaggedIssuePayload>
          }
          aggregate: {
            args: Prisma.FlaggedIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlaggedIssue>
          }
          groupBy: {
            args: Prisma.FlaggedIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlaggedIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlaggedIssueCountArgs<ExtArgs>
            result: $Utils.Optional<FlaggedIssueCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resume?: ResumeOmit
    interviewConfig?: InterviewConfigOmit
    interview?: InterviewOmit
    media?: MediaOmit
    transcript?: TranscriptOmit
    analysisReport?: AnalysisReportOmit
    analysisCategoryScore?: AnalysisCategoryScoreOmit
    flaggedIssue?: FlaggedIssueOmit
    question?: QuestionOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resumes: number
    interviewConfigs: number
    interviews: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
    interviewConfigs?: boolean | UserCountOutputTypeCountInterviewConfigsArgs
    interviews?: boolean | UserCountOutputTypeCountInterviewsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterviewConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewConfigWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    interviewConfigs: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewConfigs?: boolean | ResumeCountOutputTypeCountInterviewConfigsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountInterviewConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewConfigWhereInput
  }


  /**
   * Count Type InterviewConfigCountOutputType
   */

  export type InterviewConfigCountOutputType = {
    interviews: number
  }

  export type InterviewConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviews?: boolean | InterviewConfigCountOutputTypeCountInterviewsArgs
  }

  // Custom InputTypes
  /**
   * InterviewConfigCountOutputType without action
   */
  export type InterviewConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfigCountOutputType
     */
    select?: InterviewConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewConfigCountOutputType without action
   */
  export type InterviewConfigCountOutputTypeCountInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }


  /**
   * Count Type InterviewCountOutputType
   */

  export type InterviewCountOutputType = {
    media: number
    transcripts: number
    issues: number
    questions: number
  }

  export type InterviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | InterviewCountOutputTypeCountMediaArgs
    transcripts?: boolean | InterviewCountOutputTypeCountTranscriptsArgs
    issues?: boolean | InterviewCountOutputTypeCountIssuesArgs
    questions?: boolean | InterviewCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewCountOutputType
     */
    select?: InterviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountTranscriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptWhereInput
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlaggedIssueWhereInput
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type AnalysisReportCountOutputType
   */

  export type AnalysisReportCountOutputType = {
    perCategory: number
  }

  export type AnalysisReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perCategory?: boolean | AnalysisReportCountOutputTypeCountPerCategoryArgs
  }

  // Custom InputTypes
  /**
   * AnalysisReportCountOutputType without action
   */
  export type AnalysisReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReportCountOutputType
     */
    select?: AnalysisReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisReportCountOutputType without action
   */
  export type AnalysisReportCountOutputTypeCountPerCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisCategoryScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumes?: boolean | User$resumesArgs<ExtArgs>
    interviewConfigs?: boolean | User$interviewConfigsArgs<ExtArgs>
    interviews?: boolean | User$interviewsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | User$resumesArgs<ExtArgs>
    interviewConfigs?: boolean | User$interviewConfigsArgs<ExtArgs>
    interviews?: boolean | User$interviewsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resumes: Prisma.$ResumePayload<ExtArgs>[]
      interviewConfigs: Prisma.$InterviewConfigPayload<ExtArgs>[]
      interviews: Prisma.$InterviewPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewConfigs<T extends User$interviewConfigsArgs<ExtArgs> = {}>(args?: Subset<T, User$interviewConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviews<T extends User$interviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User.interviewConfigs
   */
  export type User$interviewConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    where?: InterviewConfigWhereInput
    orderBy?: InterviewConfigOrderByWithRelationInput | InterviewConfigOrderByWithRelationInput[]
    cursor?: InterviewConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewConfigScalarFieldEnum | InterviewConfigScalarFieldEnum[]
  }

  /**
   * User.interviews
   */
  export type User$interviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    s3Key: string | null
    textExtract: string | null
    createdAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    s3Key: string | null
    textExtract: string | null
    createdAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    s3Key: number
    textExtract: number
    parsedJson: number
    createdAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    s3Key?: true
    textExtract?: true
    createdAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    s3Key?: true
    textExtract?: true
    createdAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    s3Key?: true
    textExtract?: true
    parsedJson?: true
    createdAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    s3Key: string
    textExtract: string
    parsedJson: JsonValue | null
    createdAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    s3Key?: boolean
    textExtract?: boolean
    parsedJson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interviewConfigs?: boolean | Resume$interviewConfigsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    s3Key?: boolean
    textExtract?: boolean
    parsedJson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    s3Key?: boolean
    textExtract?: boolean
    parsedJson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    s3Key?: boolean
    textExtract?: boolean
    parsedJson?: boolean
    createdAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "s3Key" | "textExtract" | "parsedJson" | "createdAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interviewConfigs?: boolean | Resume$interviewConfigsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      interviewConfigs: Prisma.$InterviewConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      s3Key: string
      textExtract: string
      parsedJson: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interviewConfigs<T extends Resume$interviewConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$interviewConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly s3Key: FieldRef<"Resume", 'String'>
    readonly textExtract: FieldRef<"Resume", 'String'>
    readonly parsedJson: FieldRef<"Resume", 'Json'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.interviewConfigs
   */
  export type Resume$interviewConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    where?: InterviewConfigWhereInput
    orderBy?: InterviewConfigOrderByWithRelationInput | InterviewConfigOrderByWithRelationInput[]
    cursor?: InterviewConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewConfigScalarFieldEnum | InterviewConfigScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model InterviewConfig
   */

  export type AggregateInterviewConfig = {
    _count: InterviewConfigCountAggregateOutputType | null
    _avg: InterviewConfigAvgAggregateOutputType | null
    _sum: InterviewConfigSumAggregateOutputType | null
    _min: InterviewConfigMinAggregateOutputType | null
    _max: InterviewConfigMaxAggregateOutputType | null
  }

  export type InterviewConfigAvgAggregateOutputType = {
    durationMinutes: number | null
  }

  export type InterviewConfigSumAggregateOutputType = {
    durationMinutes: number | null
  }

  export type InterviewConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    durationMinutes: number | null
    difficulty: $Enums.Difficulty | null
    type: $Enums.InterviewType | null
    createdAt: Date | null
    resumeId: string | null
  }

  export type InterviewConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    durationMinutes: number | null
    difficulty: $Enums.Difficulty | null
    type: $Enums.InterviewType | null
    createdAt: Date | null
    resumeId: string | null
  }

  export type InterviewConfigCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    skills: number
    durationMinutes: number
    difficulty: number
    type: number
    createdAt: number
    resumeId: number
    _all: number
  }


  export type InterviewConfigAvgAggregateInputType = {
    durationMinutes?: true
  }

  export type InterviewConfigSumAggregateInputType = {
    durationMinutes?: true
  }

  export type InterviewConfigMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    durationMinutes?: true
    difficulty?: true
    type?: true
    createdAt?: true
    resumeId?: true
  }

  export type InterviewConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    durationMinutes?: true
    difficulty?: true
    type?: true
    createdAt?: true
    resumeId?: true
  }

  export type InterviewConfigCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    skills?: true
    durationMinutes?: true
    difficulty?: true
    type?: true
    createdAt?: true
    resumeId?: true
    _all?: true
  }

  export type InterviewConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewConfig to aggregate.
     */
    where?: InterviewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewConfigs to fetch.
     */
    orderBy?: InterviewConfigOrderByWithRelationInput | InterviewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewConfigs
    **/
    _count?: true | InterviewConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewConfigMaxAggregateInputType
  }

  export type GetInterviewConfigAggregateType<T extends InterviewConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewConfig[P]>
      : GetScalarType<T[P], AggregateInterviewConfig[P]>
  }




  export type InterviewConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewConfigWhereInput
    orderBy?: InterviewConfigOrderByWithAggregationInput | InterviewConfigOrderByWithAggregationInput[]
    by: InterviewConfigScalarFieldEnum[] | InterviewConfigScalarFieldEnum
    having?: InterviewConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewConfigCountAggregateInputType | true
    _avg?: InterviewConfigAvgAggregateInputType
    _sum?: InterviewConfigSumAggregateInputType
    _min?: InterviewConfigMinAggregateInputType
    _max?: InterviewConfigMaxAggregateInputType
  }

  export type InterviewConfigGroupByOutputType = {
    id: string
    userId: string
    role: string
    skills: string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt: Date
    resumeId: string | null
    _count: InterviewConfigCountAggregateOutputType | null
    _avg: InterviewConfigAvgAggregateOutputType | null
    _sum: InterviewConfigSumAggregateOutputType | null
    _min: InterviewConfigMinAggregateOutputType | null
    _max: InterviewConfigMaxAggregateOutputType | null
  }

  type GetInterviewConfigGroupByPayload<T extends InterviewConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewConfigGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewConfigGroupByOutputType[P]>
        }
      >
    >


  export type InterviewConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    skills?: boolean
    durationMinutes?: boolean
    difficulty?: boolean
    type?: boolean
    createdAt?: boolean
    resumeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Resume?: boolean | InterviewConfig$ResumeArgs<ExtArgs>
    interviews?: boolean | InterviewConfig$interviewsArgs<ExtArgs>
    _count?: boolean | InterviewConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewConfig"]>

  export type InterviewConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    skills?: boolean
    durationMinutes?: boolean
    difficulty?: boolean
    type?: boolean
    createdAt?: boolean
    resumeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Resume?: boolean | InterviewConfig$ResumeArgs<ExtArgs>
  }, ExtArgs["result"]["interviewConfig"]>

  export type InterviewConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    skills?: boolean
    durationMinutes?: boolean
    difficulty?: boolean
    type?: boolean
    createdAt?: boolean
    resumeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Resume?: boolean | InterviewConfig$ResumeArgs<ExtArgs>
  }, ExtArgs["result"]["interviewConfig"]>

  export type InterviewConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    skills?: boolean
    durationMinutes?: boolean
    difficulty?: boolean
    type?: boolean
    createdAt?: boolean
    resumeId?: boolean
  }

  export type InterviewConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "skills" | "durationMinutes" | "difficulty" | "type" | "createdAt" | "resumeId", ExtArgs["result"]["interviewConfig"]>
  export type InterviewConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Resume?: boolean | InterviewConfig$ResumeArgs<ExtArgs>
    interviews?: boolean | InterviewConfig$interviewsArgs<ExtArgs>
    _count?: boolean | InterviewConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Resume?: boolean | InterviewConfig$ResumeArgs<ExtArgs>
  }
  export type InterviewConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Resume?: boolean | InterviewConfig$ResumeArgs<ExtArgs>
  }

  export type $InterviewConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Resume: Prisma.$ResumePayload<ExtArgs> | null
      interviews: Prisma.$InterviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: string
      skills: string[]
      durationMinutes: number
      difficulty: $Enums.Difficulty
      type: $Enums.InterviewType
      createdAt: Date
      resumeId: string | null
    }, ExtArgs["result"]["interviewConfig"]>
    composites: {}
  }

  type InterviewConfigGetPayload<S extends boolean | null | undefined | InterviewConfigDefaultArgs> = $Result.GetResult<Prisma.$InterviewConfigPayload, S>

  type InterviewConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewConfigCountAggregateInputType | true
    }

  export interface InterviewConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewConfig'], meta: { name: 'InterviewConfig' } }
    /**
     * Find zero or one InterviewConfig that matches the filter.
     * @param {InterviewConfigFindUniqueArgs} args - Arguments to find a InterviewConfig
     * @example
     * // Get one InterviewConfig
     * const interviewConfig = await prisma.interviewConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewConfigFindUniqueArgs>(args: SelectSubset<T, InterviewConfigFindUniqueArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewConfigFindUniqueOrThrowArgs} args - Arguments to find a InterviewConfig
     * @example
     * // Get one InterviewConfig
     * const interviewConfig = await prisma.interviewConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigFindFirstArgs} args - Arguments to find a InterviewConfig
     * @example
     * // Get one InterviewConfig
     * const interviewConfig = await prisma.interviewConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewConfigFindFirstArgs>(args?: SelectSubset<T, InterviewConfigFindFirstArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigFindFirstOrThrowArgs} args - Arguments to find a InterviewConfig
     * @example
     * // Get one InterviewConfig
     * const interviewConfig = await prisma.interviewConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewConfigs
     * const interviewConfigs = await prisma.interviewConfig.findMany()
     * 
     * // Get first 10 InterviewConfigs
     * const interviewConfigs = await prisma.interviewConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewConfigWithIdOnly = await prisma.interviewConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewConfigFindManyArgs>(args?: SelectSubset<T, InterviewConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewConfig.
     * @param {InterviewConfigCreateArgs} args - Arguments to create a InterviewConfig.
     * @example
     * // Create one InterviewConfig
     * const InterviewConfig = await prisma.interviewConfig.create({
     *   data: {
     *     // ... data to create a InterviewConfig
     *   }
     * })
     * 
     */
    create<T extends InterviewConfigCreateArgs>(args: SelectSubset<T, InterviewConfigCreateArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewConfigs.
     * @param {InterviewConfigCreateManyArgs} args - Arguments to create many InterviewConfigs.
     * @example
     * // Create many InterviewConfigs
     * const interviewConfig = await prisma.interviewConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewConfigCreateManyArgs>(args?: SelectSubset<T, InterviewConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewConfigs and returns the data saved in the database.
     * @param {InterviewConfigCreateManyAndReturnArgs} args - Arguments to create many InterviewConfigs.
     * @example
     * // Create many InterviewConfigs
     * const interviewConfig = await prisma.interviewConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewConfigs and only return the `id`
     * const interviewConfigWithIdOnly = await prisma.interviewConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewConfig.
     * @param {InterviewConfigDeleteArgs} args - Arguments to delete one InterviewConfig.
     * @example
     * // Delete one InterviewConfig
     * const InterviewConfig = await prisma.interviewConfig.delete({
     *   where: {
     *     // ... filter to delete one InterviewConfig
     *   }
     * })
     * 
     */
    delete<T extends InterviewConfigDeleteArgs>(args: SelectSubset<T, InterviewConfigDeleteArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewConfig.
     * @param {InterviewConfigUpdateArgs} args - Arguments to update one InterviewConfig.
     * @example
     * // Update one InterviewConfig
     * const interviewConfig = await prisma.interviewConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewConfigUpdateArgs>(args: SelectSubset<T, InterviewConfigUpdateArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewConfigs.
     * @param {InterviewConfigDeleteManyArgs} args - Arguments to filter InterviewConfigs to delete.
     * @example
     * // Delete a few InterviewConfigs
     * const { count } = await prisma.interviewConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewConfigDeleteManyArgs>(args?: SelectSubset<T, InterviewConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewConfigs
     * const interviewConfig = await prisma.interviewConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewConfigUpdateManyArgs>(args: SelectSubset<T, InterviewConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewConfigs and returns the data updated in the database.
     * @param {InterviewConfigUpdateManyAndReturnArgs} args - Arguments to update many InterviewConfigs.
     * @example
     * // Update many InterviewConfigs
     * const interviewConfig = await prisma.interviewConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewConfigs and only return the `id`
     * const interviewConfigWithIdOnly = await prisma.interviewConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewConfig.
     * @param {InterviewConfigUpsertArgs} args - Arguments to update or create a InterviewConfig.
     * @example
     * // Update or create a InterviewConfig
     * const interviewConfig = await prisma.interviewConfig.upsert({
     *   create: {
     *     // ... data to create a InterviewConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewConfig we want to update
     *   }
     * })
     */
    upsert<T extends InterviewConfigUpsertArgs>(args: SelectSubset<T, InterviewConfigUpsertArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigCountArgs} args - Arguments to filter InterviewConfigs to count.
     * @example
     * // Count the number of InterviewConfigs
     * const count = await prisma.interviewConfig.count({
     *   where: {
     *     // ... the filter for the InterviewConfigs we want to count
     *   }
     * })
    **/
    count<T extends InterviewConfigCountArgs>(
      args?: Subset<T, InterviewConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewConfigAggregateArgs>(args: Subset<T, InterviewConfigAggregateArgs>): Prisma.PrismaPromise<GetInterviewConfigAggregateType<T>>

    /**
     * Group by InterviewConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewConfigGroupByArgs} args - Group by arguments.
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
      T extends InterviewConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewConfigGroupByArgs['orderBy'] }
        : { orderBy?: InterviewConfigGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewConfig model
   */
  readonly fields: InterviewConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Resume<T extends InterviewConfig$ResumeArgs<ExtArgs> = {}>(args?: Subset<T, InterviewConfig$ResumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    interviews<T extends InterviewConfig$interviewsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewConfig$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewConfig model
   */
  interface InterviewConfigFieldRefs {
    readonly id: FieldRef<"InterviewConfig", 'String'>
    readonly userId: FieldRef<"InterviewConfig", 'String'>
    readonly role: FieldRef<"InterviewConfig", 'String'>
    readonly skills: FieldRef<"InterviewConfig", 'String[]'>
    readonly durationMinutes: FieldRef<"InterviewConfig", 'Int'>
    readonly difficulty: FieldRef<"InterviewConfig", 'Difficulty'>
    readonly type: FieldRef<"InterviewConfig", 'InterviewType'>
    readonly createdAt: FieldRef<"InterviewConfig", 'DateTime'>
    readonly resumeId: FieldRef<"InterviewConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InterviewConfig findUnique
   */
  export type InterviewConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * Filter, which InterviewConfig to fetch.
     */
    where: InterviewConfigWhereUniqueInput
  }

  /**
   * InterviewConfig findUniqueOrThrow
   */
  export type InterviewConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * Filter, which InterviewConfig to fetch.
     */
    where: InterviewConfigWhereUniqueInput
  }

  /**
   * InterviewConfig findFirst
   */
  export type InterviewConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * Filter, which InterviewConfig to fetch.
     */
    where?: InterviewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewConfigs to fetch.
     */
    orderBy?: InterviewConfigOrderByWithRelationInput | InterviewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewConfigs.
     */
    cursor?: InterviewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewConfigs.
     */
    distinct?: InterviewConfigScalarFieldEnum | InterviewConfigScalarFieldEnum[]
  }

  /**
   * InterviewConfig findFirstOrThrow
   */
  export type InterviewConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * Filter, which InterviewConfig to fetch.
     */
    where?: InterviewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewConfigs to fetch.
     */
    orderBy?: InterviewConfigOrderByWithRelationInput | InterviewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewConfigs.
     */
    cursor?: InterviewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewConfigs.
     */
    distinct?: InterviewConfigScalarFieldEnum | InterviewConfigScalarFieldEnum[]
  }

  /**
   * InterviewConfig findMany
   */
  export type InterviewConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * Filter, which InterviewConfigs to fetch.
     */
    where?: InterviewConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewConfigs to fetch.
     */
    orderBy?: InterviewConfigOrderByWithRelationInput | InterviewConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewConfigs.
     */
    cursor?: InterviewConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewConfigs.
     */
    skip?: number
    distinct?: InterviewConfigScalarFieldEnum | InterviewConfigScalarFieldEnum[]
  }

  /**
   * InterviewConfig create
   */
  export type InterviewConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewConfig.
     */
    data: XOR<InterviewConfigCreateInput, InterviewConfigUncheckedCreateInput>
  }

  /**
   * InterviewConfig createMany
   */
  export type InterviewConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewConfigs.
     */
    data: InterviewConfigCreateManyInput | InterviewConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewConfig createManyAndReturn
   */
  export type InterviewConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewConfigs.
     */
    data: InterviewConfigCreateManyInput | InterviewConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewConfig update
   */
  export type InterviewConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewConfig.
     */
    data: XOR<InterviewConfigUpdateInput, InterviewConfigUncheckedUpdateInput>
    /**
     * Choose, which InterviewConfig to update.
     */
    where: InterviewConfigWhereUniqueInput
  }

  /**
   * InterviewConfig updateMany
   */
  export type InterviewConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewConfigs.
     */
    data: XOR<InterviewConfigUpdateManyMutationInput, InterviewConfigUncheckedUpdateManyInput>
    /**
     * Filter which InterviewConfigs to update
     */
    where?: InterviewConfigWhereInput
    /**
     * Limit how many InterviewConfigs to update.
     */
    limit?: number
  }

  /**
   * InterviewConfig updateManyAndReturn
   */
  export type InterviewConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * The data used to update InterviewConfigs.
     */
    data: XOR<InterviewConfigUpdateManyMutationInput, InterviewConfigUncheckedUpdateManyInput>
    /**
     * Filter which InterviewConfigs to update
     */
    where?: InterviewConfigWhereInput
    /**
     * Limit how many InterviewConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewConfig upsert
   */
  export type InterviewConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewConfig to update in case it exists.
     */
    where: InterviewConfigWhereUniqueInput
    /**
     * In case the InterviewConfig found by the `where` argument doesn't exist, create a new InterviewConfig with this data.
     */
    create: XOR<InterviewConfigCreateInput, InterviewConfigUncheckedCreateInput>
    /**
     * In case the InterviewConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewConfigUpdateInput, InterviewConfigUncheckedUpdateInput>
  }

  /**
   * InterviewConfig delete
   */
  export type InterviewConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
    /**
     * Filter which InterviewConfig to delete.
     */
    where: InterviewConfigWhereUniqueInput
  }

  /**
   * InterviewConfig deleteMany
   */
  export type InterviewConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewConfigs to delete
     */
    where?: InterviewConfigWhereInput
    /**
     * Limit how many InterviewConfigs to delete.
     */
    limit?: number
  }

  /**
   * InterviewConfig.Resume
   */
  export type InterviewConfig$ResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * InterviewConfig.interviews
   */
  export type InterviewConfig$interviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * InterviewConfig without action
   */
  export type InterviewConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewConfig
     */
    select?: InterviewConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewConfig
     */
    omit?: InterviewConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewConfigInclude<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type InterviewSumAggregateOutputType = {
    overallScore: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    configId: string | null
    startedAt: Date | null
    endedAt: Date | null
    status: string | null
    overallScore: number | null
    createdAt: Date | null
    interviewerModel: string | null
    consentRecording: boolean | null
    region: string | null
    indexes: string | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    configId: string | null
    startedAt: Date | null
    endedAt: Date | null
    status: string | null
    overallScore: number | null
    createdAt: Date | null
    interviewerModel: string | null
    consentRecording: boolean | null
    region: string | null
    indexes: string | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    userId: number
    configId: number
    startedAt: number
    endedAt: number
    status: number
    overallScore: number
    createdAt: number
    interviewerModel: number
    consentRecording: number
    region: number
    indexes: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    overallScore?: true
  }

  export type InterviewSumAggregateInputType = {
    overallScore?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    userId?: true
    configId?: true
    startedAt?: true
    endedAt?: true
    status?: true
    overallScore?: true
    createdAt?: true
    interviewerModel?: true
    consentRecording?: true
    region?: true
    indexes?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    userId?: true
    configId?: true
    startedAt?: true
    endedAt?: true
    status?: true
    overallScore?: true
    createdAt?: true
    interviewerModel?: true
    consentRecording?: true
    region?: true
    indexes?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    userId?: true
    configId?: true
    startedAt?: true
    endedAt?: true
    status?: true
    overallScore?: true
    createdAt?: true
    interviewerModel?: true
    consentRecording?: true
    region?: true
    indexes?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: string
    userId: string
    configId: string
    startedAt: Date | null
    endedAt: Date | null
    status: string
    overallScore: number | null
    createdAt: Date
    interviewerModel: string | null
    consentRecording: boolean
    region: string | null
    indexes: string | null
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    configId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    overallScore?: boolean
    createdAt?: boolean
    interviewerModel?: boolean
    consentRecording?: boolean
    region?: boolean
    indexes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | InterviewConfigDefaultArgs<ExtArgs>
    media?: boolean | Interview$mediaArgs<ExtArgs>
    transcripts?: boolean | Interview$transcriptsArgs<ExtArgs>
    report?: boolean | Interview$reportArgs<ExtArgs>
    issues?: boolean | Interview$issuesArgs<ExtArgs>
    questions?: boolean | Interview$questionsArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    configId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    overallScore?: boolean
    createdAt?: boolean
    interviewerModel?: boolean
    consentRecording?: boolean
    region?: boolean
    indexes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | InterviewConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    configId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    overallScore?: boolean
    createdAt?: boolean
    interviewerModel?: boolean
    consentRecording?: boolean
    region?: boolean
    indexes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | InterviewConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    userId?: boolean
    configId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    overallScore?: boolean
    createdAt?: boolean
    interviewerModel?: boolean
    consentRecording?: boolean
    region?: boolean
    indexes?: boolean
  }

  export type InterviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "configId" | "startedAt" | "endedAt" | "status" | "overallScore" | "createdAt" | "interviewerModel" | "consentRecording" | "region" | "indexes", ExtArgs["result"]["interview"]>
  export type InterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | InterviewConfigDefaultArgs<ExtArgs>
    media?: boolean | Interview$mediaArgs<ExtArgs>
    transcripts?: boolean | Interview$transcriptsArgs<ExtArgs>
    report?: boolean | Interview$reportArgs<ExtArgs>
    issues?: boolean | Interview$issuesArgs<ExtArgs>
    questions?: boolean | Interview$questionsArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | InterviewConfigDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | InterviewConfigDefaultArgs<ExtArgs>
  }

  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      config: Prisma.$InterviewConfigPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
      transcripts: Prisma.$TranscriptPayload<ExtArgs>[]
      report: Prisma.$AnalysisReportPayload<ExtArgs> | null
      issues: Prisma.$FlaggedIssuePayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      configId: string
      startedAt: Date | null
      endedAt: Date | null
      status: string
      overallScore: number | null
      createdAt: Date
      interviewerModel: string | null
      consentRecording: boolean
      region: string | null
      indexes: string | null
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews and returns the data updated in the database.
     * @param {InterviewUpdateManyAndReturnArgs} args - Arguments to update many Interviews.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
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
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    config<T extends InterviewConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewConfigDefaultArgs<ExtArgs>>): Prisma__InterviewConfigClient<$Result.GetResult<Prisma.$InterviewConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Interview$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Interview$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transcripts<T extends Interview$transcriptsArgs<ExtArgs> = {}>(args?: Subset<T, Interview$transcriptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends Interview$reportArgs<ExtArgs> = {}>(args?: Subset<T, Interview$reportArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    issues<T extends Interview$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Interview$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Interview$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Interview$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interview model
   */
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'String'>
    readonly userId: FieldRef<"Interview", 'String'>
    readonly configId: FieldRef<"Interview", 'String'>
    readonly startedAt: FieldRef<"Interview", 'DateTime'>
    readonly endedAt: FieldRef<"Interview", 'DateTime'>
    readonly status: FieldRef<"Interview", 'String'>
    readonly overallScore: FieldRef<"Interview", 'Float'>
    readonly createdAt: FieldRef<"Interview", 'DateTime'>
    readonly interviewerModel: FieldRef<"Interview", 'String'>
    readonly consentRecording: FieldRef<"Interview", 'Boolean'>
    readonly region: FieldRef<"Interview", 'String'>
    readonly indexes: FieldRef<"Interview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
  }

  /**
   * Interview updateManyAndReturn
   */
  export type InterviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to delete.
     */
    limit?: number
  }

  /**
   * Interview.media
   */
  export type Interview$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Interview.transcripts
   */
  export type Interview$transcriptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    where?: TranscriptWhereInput
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    cursor?: TranscriptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Interview.report
   */
  export type Interview$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    where?: AnalysisReportWhereInput
  }

  /**
   * Interview.issues
   */
  export type Interview$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    where?: FlaggedIssueWhereInput
    orderBy?: FlaggedIssueOrderByWithRelationInput | FlaggedIssueOrderByWithRelationInput[]
    cursor?: FlaggedIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlaggedIssueScalarFieldEnum | FlaggedIssueScalarFieldEnum[]
  }

  /**
   * Interview.questions
   */
  export type Interview$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    durationMs: number | null
    sizeBytes: number | null
  }

  export type MediaSumAggregateOutputType = {
    durationMs: number | null
    sizeBytes: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    s3Key: string | null
    s3Url: string | null
    mediaType: $Enums.MediaType | null
    durationMs: number | null
    sizeBytes: number | null
    uploadedAt: Date | null
    processed: boolean | null
    notes: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    s3Key: string | null
    s3Url: string | null
    mediaType: $Enums.MediaType | null
    durationMs: number | null
    sizeBytes: number | null
    uploadedAt: Date | null
    processed: boolean | null
    notes: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    interviewId: number
    s3Key: number
    s3Url: number
    mediaType: number
    durationMs: number
    sizeBytes: number
    uploadedAt: number
    processed: number
    notes: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    durationMs?: true
    sizeBytes?: true
  }

  export type MediaSumAggregateInputType = {
    durationMs?: true
    sizeBytes?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    interviewId?: true
    s3Key?: true
    s3Url?: true
    mediaType?: true
    durationMs?: true
    sizeBytes?: true
    uploadedAt?: true
    processed?: true
    notes?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    interviewId?: true
    s3Key?: true
    s3Url?: true
    mediaType?: true
    durationMs?: true
    sizeBytes?: true
    uploadedAt?: true
    processed?: true
    notes?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    interviewId?: true
    s3Key?: true
    s3Url?: true
    mediaType?: true
    durationMs?: true
    sizeBytes?: true
    uploadedAt?: true
    processed?: true
    notes?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    interviewId: string
    s3Key: string
    s3Url: string | null
    mediaType: $Enums.MediaType
    durationMs: number | null
    sizeBytes: number | null
    uploadedAt: Date
    processed: boolean
    notes: string | null
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    s3Key?: boolean
    s3Url?: boolean
    mediaType?: boolean
    durationMs?: boolean
    sizeBytes?: boolean
    uploadedAt?: boolean
    processed?: boolean
    notes?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    s3Key?: boolean
    s3Url?: boolean
    mediaType?: boolean
    durationMs?: boolean
    sizeBytes?: boolean
    uploadedAt?: boolean
    processed?: boolean
    notes?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    s3Key?: boolean
    s3Url?: boolean
    mediaType?: boolean
    durationMs?: boolean
    sizeBytes?: boolean
    uploadedAt?: boolean
    processed?: boolean
    notes?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    interviewId?: boolean
    s3Key?: boolean
    s3Url?: boolean
    mediaType?: boolean
    durationMs?: boolean
    sizeBytes?: boolean
    uploadedAt?: boolean
    processed?: boolean
    notes?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "s3Key" | "s3Url" | "mediaType" | "durationMs" | "sizeBytes" | "uploadedAt" | "processed" | "notes", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string
      s3Key: string
      s3Url: string | null
      mediaType: $Enums.MediaType
      durationMs: number | null
      sizeBytes: number | null
      uploadedAt: Date
      processed: boolean
      notes: string | null
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly interviewId: FieldRef<"Media", 'String'>
    readonly s3Key: FieldRef<"Media", 'String'>
    readonly s3Url: FieldRef<"Media", 'String'>
    readonly mediaType: FieldRef<"Media", 'MediaType'>
    readonly durationMs: FieldRef<"Media", 'Int'>
    readonly sizeBytes: FieldRef<"Media", 'Int'>
    readonly uploadedAt: FieldRef<"Media", 'DateTime'>
    readonly processed: FieldRef<"Media", 'Boolean'>
    readonly notes: FieldRef<"Media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Transcript
   */

  export type AggregateTranscript = {
    _count: TranscriptCountAggregateOutputType | null
    _avg: TranscriptAvgAggregateOutputType | null
    _sum: TranscriptSumAggregateOutputType | null
    _min: TranscriptMinAggregateOutputType | null
    _max: TranscriptMaxAggregateOutputType | null
  }

  export type TranscriptAvgAggregateOutputType = {
    startTimeMs: number | null
    endTimeMs: number | null
  }

  export type TranscriptSumAggregateOutputType = {
    startTimeMs: number | null
    endTimeMs: number | null
  }

  export type TranscriptMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    speaker: string | null
    text: string | null
    startTimeMs: number | null
    endTimeMs: number | null
    createdAt: Date | null
  }

  export type TranscriptMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    speaker: string | null
    text: string | null
    startTimeMs: number | null
    endTimeMs: number | null
    createdAt: Date | null
  }

  export type TranscriptCountAggregateOutputType = {
    id: number
    interviewId: number
    speaker: number
    text: number
    startTimeMs: number
    endTimeMs: number
    createdAt: number
    embeddingJson: number
    tokensJson: number
    _all: number
  }


  export type TranscriptAvgAggregateInputType = {
    startTimeMs?: true
    endTimeMs?: true
  }

  export type TranscriptSumAggregateInputType = {
    startTimeMs?: true
    endTimeMs?: true
  }

  export type TranscriptMinAggregateInputType = {
    id?: true
    interviewId?: true
    speaker?: true
    text?: true
    startTimeMs?: true
    endTimeMs?: true
    createdAt?: true
  }

  export type TranscriptMaxAggregateInputType = {
    id?: true
    interviewId?: true
    speaker?: true
    text?: true
    startTimeMs?: true
    endTimeMs?: true
    createdAt?: true
  }

  export type TranscriptCountAggregateInputType = {
    id?: true
    interviewId?: true
    speaker?: true
    text?: true
    startTimeMs?: true
    endTimeMs?: true
    createdAt?: true
    embeddingJson?: true
    tokensJson?: true
    _all?: true
  }

  export type TranscriptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transcript to aggregate.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transcripts
    **/
    _count?: true | TranscriptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranscriptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranscriptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscriptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscriptMaxAggregateInputType
  }

  export type GetTranscriptAggregateType<T extends TranscriptAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscript]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscript[P]>
      : GetScalarType<T[P], AggregateTranscript[P]>
  }




  export type TranscriptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptWhereInput
    orderBy?: TranscriptOrderByWithAggregationInput | TranscriptOrderByWithAggregationInput[]
    by: TranscriptScalarFieldEnum[] | TranscriptScalarFieldEnum
    having?: TranscriptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscriptCountAggregateInputType | true
    _avg?: TranscriptAvgAggregateInputType
    _sum?: TranscriptSumAggregateInputType
    _min?: TranscriptMinAggregateInputType
    _max?: TranscriptMaxAggregateInputType
  }

  export type TranscriptGroupByOutputType = {
    id: string
    interviewId: string
    speaker: string
    text: string
    startTimeMs: number | null
    endTimeMs: number | null
    createdAt: Date
    embeddingJson: JsonValue | null
    tokensJson: JsonValue | null
    _count: TranscriptCountAggregateOutputType | null
    _avg: TranscriptAvgAggregateOutputType | null
    _sum: TranscriptSumAggregateOutputType | null
    _min: TranscriptMinAggregateOutputType | null
    _max: TranscriptMaxAggregateOutputType | null
  }

  type GetTranscriptGroupByPayload<T extends TranscriptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscriptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscriptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscriptGroupByOutputType[P]>
            : GetScalarType<T[P], TranscriptGroupByOutputType[P]>
        }
      >
    >


  export type TranscriptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    speaker?: boolean
    text?: boolean
    startTimeMs?: boolean
    endTimeMs?: boolean
    createdAt?: boolean
    embeddingJson?: boolean
    tokensJson?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcript"]>

  export type TranscriptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    speaker?: boolean
    text?: boolean
    startTimeMs?: boolean
    endTimeMs?: boolean
    createdAt?: boolean
    embeddingJson?: boolean
    tokensJson?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcript"]>

  export type TranscriptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    speaker?: boolean
    text?: boolean
    startTimeMs?: boolean
    endTimeMs?: boolean
    createdAt?: boolean
    embeddingJson?: boolean
    tokensJson?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcript"]>

  export type TranscriptSelectScalar = {
    id?: boolean
    interviewId?: boolean
    speaker?: boolean
    text?: boolean
    startTimeMs?: boolean
    endTimeMs?: boolean
    createdAt?: boolean
    embeddingJson?: boolean
    tokensJson?: boolean
  }

  export type TranscriptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "speaker" | "text" | "startTimeMs" | "endTimeMs" | "createdAt" | "embeddingJson" | "tokensJson", ExtArgs["result"]["transcript"]>
  export type TranscriptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type TranscriptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type TranscriptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $TranscriptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transcript"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string
      speaker: string
      text: string
      startTimeMs: number | null
      endTimeMs: number | null
      createdAt: Date
      embeddingJson: Prisma.JsonValue | null
      tokensJson: Prisma.JsonValue | null
    }, ExtArgs["result"]["transcript"]>
    composites: {}
  }

  type TranscriptGetPayload<S extends boolean | null | undefined | TranscriptDefaultArgs> = $Result.GetResult<Prisma.$TranscriptPayload, S>

  type TranscriptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranscriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscriptCountAggregateInputType | true
    }

  export interface TranscriptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transcript'], meta: { name: 'Transcript' } }
    /**
     * Find zero or one Transcript that matches the filter.
     * @param {TranscriptFindUniqueArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscriptFindUniqueArgs>(args: SelectSubset<T, TranscriptFindUniqueArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transcript that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranscriptFindUniqueOrThrowArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscriptFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transcript that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptFindFirstArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscriptFindFirstArgs>(args?: SelectSubset<T, TranscriptFindFirstArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transcript that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptFindFirstOrThrowArgs} args - Arguments to find a Transcript
     * @example
     * // Get one Transcript
     * const transcript = await prisma.transcript.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscriptFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscriptFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transcripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transcripts
     * const transcripts = await prisma.transcript.findMany()
     * 
     * // Get first 10 Transcripts
     * const transcripts = await prisma.transcript.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcriptWithIdOnly = await prisma.transcript.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscriptFindManyArgs>(args?: SelectSubset<T, TranscriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transcript.
     * @param {TranscriptCreateArgs} args - Arguments to create a Transcript.
     * @example
     * // Create one Transcript
     * const Transcript = await prisma.transcript.create({
     *   data: {
     *     // ... data to create a Transcript
     *   }
     * })
     * 
     */
    create<T extends TranscriptCreateArgs>(args: SelectSubset<T, TranscriptCreateArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transcripts.
     * @param {TranscriptCreateManyArgs} args - Arguments to create many Transcripts.
     * @example
     * // Create many Transcripts
     * const transcript = await prisma.transcript.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscriptCreateManyArgs>(args?: SelectSubset<T, TranscriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transcripts and returns the data saved in the database.
     * @param {TranscriptCreateManyAndReturnArgs} args - Arguments to create many Transcripts.
     * @example
     * // Create many Transcripts
     * const transcript = await prisma.transcript.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transcripts and only return the `id`
     * const transcriptWithIdOnly = await prisma.transcript.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscriptCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transcript.
     * @param {TranscriptDeleteArgs} args - Arguments to delete one Transcript.
     * @example
     * // Delete one Transcript
     * const Transcript = await prisma.transcript.delete({
     *   where: {
     *     // ... filter to delete one Transcript
     *   }
     * })
     * 
     */
    delete<T extends TranscriptDeleteArgs>(args: SelectSubset<T, TranscriptDeleteArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transcript.
     * @param {TranscriptUpdateArgs} args - Arguments to update one Transcript.
     * @example
     * // Update one Transcript
     * const transcript = await prisma.transcript.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscriptUpdateArgs>(args: SelectSubset<T, TranscriptUpdateArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transcripts.
     * @param {TranscriptDeleteManyArgs} args - Arguments to filter Transcripts to delete.
     * @example
     * // Delete a few Transcripts
     * const { count } = await prisma.transcript.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscriptDeleteManyArgs>(args?: SelectSubset<T, TranscriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transcripts
     * const transcript = await prisma.transcript.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscriptUpdateManyArgs>(args: SelectSubset<T, TranscriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcripts and returns the data updated in the database.
     * @param {TranscriptUpdateManyAndReturnArgs} args - Arguments to update many Transcripts.
     * @example
     * // Update many Transcripts
     * const transcript = await prisma.transcript.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transcripts and only return the `id`
     * const transcriptWithIdOnly = await prisma.transcript.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranscriptUpdateManyAndReturnArgs>(args: SelectSubset<T, TranscriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transcript.
     * @param {TranscriptUpsertArgs} args - Arguments to update or create a Transcript.
     * @example
     * // Update or create a Transcript
     * const transcript = await prisma.transcript.upsert({
     *   create: {
     *     // ... data to create a Transcript
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transcript we want to update
     *   }
     * })
     */
    upsert<T extends TranscriptUpsertArgs>(args: SelectSubset<T, TranscriptUpsertArgs<ExtArgs>>): Prisma__TranscriptClient<$Result.GetResult<Prisma.$TranscriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptCountArgs} args - Arguments to filter Transcripts to count.
     * @example
     * // Count the number of Transcripts
     * const count = await prisma.transcript.count({
     *   where: {
     *     // ... the filter for the Transcripts we want to count
     *   }
     * })
    **/
    count<T extends TranscriptCountArgs>(
      args?: Subset<T, TranscriptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscriptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transcript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranscriptAggregateArgs>(args: Subset<T, TranscriptAggregateArgs>): Prisma.PrismaPromise<GetTranscriptAggregateType<T>>

    /**
     * Group by Transcript.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptGroupByArgs} args - Group by arguments.
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
      T extends TranscriptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscriptGroupByArgs['orderBy'] }
        : { orderBy?: TranscriptGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TranscriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transcript model
   */
  readonly fields: TranscriptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transcript.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscriptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transcript model
   */
  interface TranscriptFieldRefs {
    readonly id: FieldRef<"Transcript", 'String'>
    readonly interviewId: FieldRef<"Transcript", 'String'>
    readonly speaker: FieldRef<"Transcript", 'String'>
    readonly text: FieldRef<"Transcript", 'String'>
    readonly startTimeMs: FieldRef<"Transcript", 'Int'>
    readonly endTimeMs: FieldRef<"Transcript", 'Int'>
    readonly createdAt: FieldRef<"Transcript", 'DateTime'>
    readonly embeddingJson: FieldRef<"Transcript", 'Json'>
    readonly tokensJson: FieldRef<"Transcript", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Transcript findUnique
   */
  export type TranscriptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript findUniqueOrThrow
   */
  export type TranscriptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript findFirst
   */
  export type TranscriptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transcripts.
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transcripts.
     */
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Transcript findFirstOrThrow
   */
  export type TranscriptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcript to fetch.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transcripts.
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transcripts.
     */
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Transcript findMany
   */
  export type TranscriptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter, which Transcripts to fetch.
     */
    where?: TranscriptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcripts to fetch.
     */
    orderBy?: TranscriptOrderByWithRelationInput | TranscriptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transcripts.
     */
    cursor?: TranscriptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcripts.
     */
    skip?: number
    distinct?: TranscriptScalarFieldEnum | TranscriptScalarFieldEnum[]
  }

  /**
   * Transcript create
   */
  export type TranscriptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * The data needed to create a Transcript.
     */
    data: XOR<TranscriptCreateInput, TranscriptUncheckedCreateInput>
  }

  /**
   * Transcript createMany
   */
  export type TranscriptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transcripts.
     */
    data: TranscriptCreateManyInput | TranscriptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transcript createManyAndReturn
   */
  export type TranscriptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * The data used to create many Transcripts.
     */
    data: TranscriptCreateManyInput | TranscriptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transcript update
   */
  export type TranscriptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * The data needed to update a Transcript.
     */
    data: XOR<TranscriptUpdateInput, TranscriptUncheckedUpdateInput>
    /**
     * Choose, which Transcript to update.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript updateMany
   */
  export type TranscriptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transcripts.
     */
    data: XOR<TranscriptUpdateManyMutationInput, TranscriptUncheckedUpdateManyInput>
    /**
     * Filter which Transcripts to update
     */
    where?: TranscriptWhereInput
    /**
     * Limit how many Transcripts to update.
     */
    limit?: number
  }

  /**
   * Transcript updateManyAndReturn
   */
  export type TranscriptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * The data used to update Transcripts.
     */
    data: XOR<TranscriptUpdateManyMutationInput, TranscriptUncheckedUpdateManyInput>
    /**
     * Filter which Transcripts to update
     */
    where?: TranscriptWhereInput
    /**
     * Limit how many Transcripts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transcript upsert
   */
  export type TranscriptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * The filter to search for the Transcript to update in case it exists.
     */
    where: TranscriptWhereUniqueInput
    /**
     * In case the Transcript found by the `where` argument doesn't exist, create a new Transcript with this data.
     */
    create: XOR<TranscriptCreateInput, TranscriptUncheckedCreateInput>
    /**
     * In case the Transcript was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscriptUpdateInput, TranscriptUncheckedUpdateInput>
  }

  /**
   * Transcript delete
   */
  export type TranscriptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
    /**
     * Filter which Transcript to delete.
     */
    where: TranscriptWhereUniqueInput
  }

  /**
   * Transcript deleteMany
   */
  export type TranscriptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transcripts to delete
     */
    where?: TranscriptWhereInput
    /**
     * Limit how many Transcripts to delete.
     */
    limit?: number
  }

  /**
   * Transcript without action
   */
  export type TranscriptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcript
     */
    select?: TranscriptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcript
     */
    omit?: TranscriptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisReport
   */

  export type AggregateAnalysisReport = {
    _count: AnalysisReportCountAggregateOutputType | null
    _avg: AnalysisReportAvgAggregateOutputType | null
    _sum: AnalysisReportSumAggregateOutputType | null
    _min: AnalysisReportMinAggregateOutputType | null
    _max: AnalysisReportMaxAggregateOutputType | null
  }

  export type AnalysisReportAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type AnalysisReportSumAggregateOutputType = {
    overallScore: number | null
  }

  export type AnalysisReportMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    overallScore: number | null
    generatedAt: Date | null
  }

  export type AnalysisReportMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    overallScore: number | null
    generatedAt: Date | null
  }

  export type AnalysisReportCountAggregateOutputType = {
    id: number
    interviewId: number
    overallScore: number
    metrics: number
    recommendations: number
    generatedAt: number
    _all: number
  }


  export type AnalysisReportAvgAggregateInputType = {
    overallScore?: true
  }

  export type AnalysisReportSumAggregateInputType = {
    overallScore?: true
  }

  export type AnalysisReportMinAggregateInputType = {
    id?: true
    interviewId?: true
    overallScore?: true
    generatedAt?: true
  }

  export type AnalysisReportMaxAggregateInputType = {
    id?: true
    interviewId?: true
    overallScore?: true
    generatedAt?: true
  }

  export type AnalysisReportCountAggregateInputType = {
    id?: true
    interviewId?: true
    overallScore?: true
    metrics?: true
    recommendations?: true
    generatedAt?: true
    _all?: true
  }

  export type AnalysisReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisReport to aggregate.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisReports
    **/
    _count?: true | AnalysisReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisReportMaxAggregateInputType
  }

  export type GetAnalysisReportAggregateType<T extends AnalysisReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisReport[P]>
      : GetScalarType<T[P], AggregateAnalysisReport[P]>
  }




  export type AnalysisReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisReportWhereInput
    orderBy?: AnalysisReportOrderByWithAggregationInput | AnalysisReportOrderByWithAggregationInput[]
    by: AnalysisReportScalarFieldEnum[] | AnalysisReportScalarFieldEnum
    having?: AnalysisReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisReportCountAggregateInputType | true
    _avg?: AnalysisReportAvgAggregateInputType
    _sum?: AnalysisReportSumAggregateInputType
    _min?: AnalysisReportMinAggregateInputType
    _max?: AnalysisReportMaxAggregateInputType
  }

  export type AnalysisReportGroupByOutputType = {
    id: string
    interviewId: string
    overallScore: number
    metrics: JsonValue
    recommendations: JsonValue | null
    generatedAt: Date
    _count: AnalysisReportCountAggregateOutputType | null
    _avg: AnalysisReportAvgAggregateOutputType | null
    _sum: AnalysisReportSumAggregateOutputType | null
    _min: AnalysisReportMinAggregateOutputType | null
    _max: AnalysisReportMaxAggregateOutputType | null
  }

  type GetAnalysisReportGroupByPayload<T extends AnalysisReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisReportGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisReportGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    overallScore?: boolean
    metrics?: boolean
    recommendations?: boolean
    generatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    perCategory?: boolean | AnalysisReport$perCategoryArgs<ExtArgs>
    _count?: boolean | AnalysisReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    overallScore?: boolean
    metrics?: boolean
    recommendations?: boolean
    generatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    overallScore?: boolean
    metrics?: boolean
    recommendations?: boolean
    generatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisReport"]>

  export type AnalysisReportSelectScalar = {
    id?: boolean
    interviewId?: boolean
    overallScore?: boolean
    metrics?: boolean
    recommendations?: boolean
    generatedAt?: boolean
  }

  export type AnalysisReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "overallScore" | "metrics" | "recommendations" | "generatedAt", ExtArgs["result"]["analysisReport"]>
  export type AnalysisReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    perCategory?: boolean | AnalysisReport$perCategoryArgs<ExtArgs>
    _count?: boolean | AnalysisReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type AnalysisReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $AnalysisReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisReport"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
      perCategory: Prisma.$AnalysisCategoryScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string
      overallScore: number
      metrics: Prisma.JsonValue
      recommendations: Prisma.JsonValue | null
      generatedAt: Date
    }, ExtArgs["result"]["analysisReport"]>
    composites: {}
  }

  type AnalysisReportGetPayload<S extends boolean | null | undefined | AnalysisReportDefaultArgs> = $Result.GetResult<Prisma.$AnalysisReportPayload, S>

  type AnalysisReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisReportCountAggregateInputType | true
    }

  export interface AnalysisReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisReport'], meta: { name: 'AnalysisReport' } }
    /**
     * Find zero or one AnalysisReport that matches the filter.
     * @param {AnalysisReportFindUniqueArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisReportFindUniqueArgs>(args: SelectSubset<T, AnalysisReportFindUniqueArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisReportFindUniqueOrThrowArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindFirstArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisReportFindFirstArgs>(args?: SelectSubset<T, AnalysisReportFindFirstArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindFirstOrThrowArgs} args - Arguments to find a AnalysisReport
     * @example
     * // Get one AnalysisReport
     * const analysisReport = await prisma.analysisReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisReports
     * const analysisReports = await prisma.analysisReport.findMany()
     * 
     * // Get first 10 AnalysisReports
     * const analysisReports = await prisma.analysisReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisReportFindManyArgs>(args?: SelectSubset<T, AnalysisReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisReport.
     * @param {AnalysisReportCreateArgs} args - Arguments to create a AnalysisReport.
     * @example
     * // Create one AnalysisReport
     * const AnalysisReport = await prisma.analysisReport.create({
     *   data: {
     *     // ... data to create a AnalysisReport
     *   }
     * })
     * 
     */
    create<T extends AnalysisReportCreateArgs>(args: SelectSubset<T, AnalysisReportCreateArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisReports.
     * @param {AnalysisReportCreateManyArgs} args - Arguments to create many AnalysisReports.
     * @example
     * // Create many AnalysisReports
     * const analysisReport = await prisma.analysisReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisReportCreateManyArgs>(args?: SelectSubset<T, AnalysisReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisReports and returns the data saved in the database.
     * @param {AnalysisReportCreateManyAndReturnArgs} args - Arguments to create many AnalysisReports.
     * @example
     * // Create many AnalysisReports
     * const analysisReport = await prisma.analysisReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisReports and only return the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisReport.
     * @param {AnalysisReportDeleteArgs} args - Arguments to delete one AnalysisReport.
     * @example
     * // Delete one AnalysisReport
     * const AnalysisReport = await prisma.analysisReport.delete({
     *   where: {
     *     // ... filter to delete one AnalysisReport
     *   }
     * })
     * 
     */
    delete<T extends AnalysisReportDeleteArgs>(args: SelectSubset<T, AnalysisReportDeleteArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisReport.
     * @param {AnalysisReportUpdateArgs} args - Arguments to update one AnalysisReport.
     * @example
     * // Update one AnalysisReport
     * const analysisReport = await prisma.analysisReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisReportUpdateArgs>(args: SelectSubset<T, AnalysisReportUpdateArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisReports.
     * @param {AnalysisReportDeleteManyArgs} args - Arguments to filter AnalysisReports to delete.
     * @example
     * // Delete a few AnalysisReports
     * const { count } = await prisma.analysisReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisReportDeleteManyArgs>(args?: SelectSubset<T, AnalysisReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisReports
     * const analysisReport = await prisma.analysisReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisReportUpdateManyArgs>(args: SelectSubset<T, AnalysisReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisReports and returns the data updated in the database.
     * @param {AnalysisReportUpdateManyAndReturnArgs} args - Arguments to update many AnalysisReports.
     * @example
     * // Update many AnalysisReports
     * const analysisReport = await prisma.analysisReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisReports and only return the `id`
     * const analysisReportWithIdOnly = await prisma.analysisReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisReportUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisReport.
     * @param {AnalysisReportUpsertArgs} args - Arguments to update or create a AnalysisReport.
     * @example
     * // Update or create a AnalysisReport
     * const analysisReport = await prisma.analysisReport.upsert({
     *   create: {
     *     // ... data to create a AnalysisReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisReport we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisReportUpsertArgs>(args: SelectSubset<T, AnalysisReportUpsertArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportCountArgs} args - Arguments to filter AnalysisReports to count.
     * @example
     * // Count the number of AnalysisReports
     * const count = await prisma.analysisReport.count({
     *   where: {
     *     // ... the filter for the AnalysisReports we want to count
     *   }
     * })
    **/
    count<T extends AnalysisReportCountArgs>(
      args?: Subset<T, AnalysisReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisReportAggregateArgs>(args: Subset<T, AnalysisReportAggregateArgs>): Prisma.PrismaPromise<GetAnalysisReportAggregateType<T>>

    /**
     * Group by AnalysisReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisReportGroupByArgs} args - Group by arguments.
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
      T extends AnalysisReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisReportGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisReportGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisReport model
   */
  readonly fields: AnalysisReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    perCategory<T extends AnalysisReport$perCategoryArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisReport$perCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisReport model
   */
  interface AnalysisReportFieldRefs {
    readonly id: FieldRef<"AnalysisReport", 'String'>
    readonly interviewId: FieldRef<"AnalysisReport", 'String'>
    readonly overallScore: FieldRef<"AnalysisReport", 'Float'>
    readonly metrics: FieldRef<"AnalysisReport", 'Json'>
    readonly recommendations: FieldRef<"AnalysisReport", 'Json'>
    readonly generatedAt: FieldRef<"AnalysisReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisReport findUnique
   */
  export type AnalysisReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport findUniqueOrThrow
   */
  export type AnalysisReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport findFirst
   */
  export type AnalysisReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisReports.
     */
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport findFirstOrThrow
   */
  export type AnalysisReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReport to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisReports.
     */
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport findMany
   */
  export type AnalysisReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisReports to fetch.
     */
    where?: AnalysisReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisReports to fetch.
     */
    orderBy?: AnalysisReportOrderByWithRelationInput | AnalysisReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisReports.
     */
    cursor?: AnalysisReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisReports.
     */
    skip?: number
    distinct?: AnalysisReportScalarFieldEnum | AnalysisReportScalarFieldEnum[]
  }

  /**
   * AnalysisReport create
   */
  export type AnalysisReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisReport.
     */
    data: XOR<AnalysisReportCreateInput, AnalysisReportUncheckedCreateInput>
  }

  /**
   * AnalysisReport createMany
   */
  export type AnalysisReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisReports.
     */
    data: AnalysisReportCreateManyInput | AnalysisReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisReport createManyAndReturn
   */
  export type AnalysisReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisReports.
     */
    data: AnalysisReportCreateManyInput | AnalysisReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisReport update
   */
  export type AnalysisReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisReport.
     */
    data: XOR<AnalysisReportUpdateInput, AnalysisReportUncheckedUpdateInput>
    /**
     * Choose, which AnalysisReport to update.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport updateMany
   */
  export type AnalysisReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisReports.
     */
    data: XOR<AnalysisReportUpdateManyMutationInput, AnalysisReportUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisReports to update
     */
    where?: AnalysisReportWhereInput
    /**
     * Limit how many AnalysisReports to update.
     */
    limit?: number
  }

  /**
   * AnalysisReport updateManyAndReturn
   */
  export type AnalysisReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisReports.
     */
    data: XOR<AnalysisReportUpdateManyMutationInput, AnalysisReportUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisReports to update
     */
    where?: AnalysisReportWhereInput
    /**
     * Limit how many AnalysisReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisReport upsert
   */
  export type AnalysisReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisReport to update in case it exists.
     */
    where: AnalysisReportWhereUniqueInput
    /**
     * In case the AnalysisReport found by the `where` argument doesn't exist, create a new AnalysisReport with this data.
     */
    create: XOR<AnalysisReportCreateInput, AnalysisReportUncheckedCreateInput>
    /**
     * In case the AnalysisReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisReportUpdateInput, AnalysisReportUncheckedUpdateInput>
  }

  /**
   * AnalysisReport delete
   */
  export type AnalysisReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
    /**
     * Filter which AnalysisReport to delete.
     */
    where: AnalysisReportWhereUniqueInput
  }

  /**
   * AnalysisReport deleteMany
   */
  export type AnalysisReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisReports to delete
     */
    where?: AnalysisReportWhereInput
    /**
     * Limit how many AnalysisReports to delete.
     */
    limit?: number
  }

  /**
   * AnalysisReport.perCategory
   */
  export type AnalysisReport$perCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    where?: AnalysisCategoryScoreWhereInput
    orderBy?: AnalysisCategoryScoreOrderByWithRelationInput | AnalysisCategoryScoreOrderByWithRelationInput[]
    cursor?: AnalysisCategoryScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisCategoryScoreScalarFieldEnum | AnalysisCategoryScoreScalarFieldEnum[]
  }

  /**
   * AnalysisReport without action
   */
  export type AnalysisReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisReport
     */
    select?: AnalysisReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisReport
     */
    omit?: AnalysisReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisReportInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisCategoryScore
   */

  export type AggregateAnalysisCategoryScore = {
    _count: AnalysisCategoryScoreCountAggregateOutputType | null
    _avg: AnalysisCategoryScoreAvgAggregateOutputType | null
    _sum: AnalysisCategoryScoreSumAggregateOutputType | null
    _min: AnalysisCategoryScoreMinAggregateOutputType | null
    _max: AnalysisCategoryScoreMaxAggregateOutputType | null
  }

  export type AnalysisCategoryScoreAvgAggregateOutputType = {
    score: number | null
  }

  export type AnalysisCategoryScoreSumAggregateOutputType = {
    score: number | null
  }

  export type AnalysisCategoryScoreMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    category: $Enums.AnalysisCategory | null
    score: number | null
  }

  export type AnalysisCategoryScoreMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    category: $Enums.AnalysisCategory | null
    score: number | null
  }

  export type AnalysisCategoryScoreCountAggregateOutputType = {
    id: number
    reportId: number
    category: number
    score: number
    details: number
    _all: number
  }


  export type AnalysisCategoryScoreAvgAggregateInputType = {
    score?: true
  }

  export type AnalysisCategoryScoreSumAggregateInputType = {
    score?: true
  }

  export type AnalysisCategoryScoreMinAggregateInputType = {
    id?: true
    reportId?: true
    category?: true
    score?: true
  }

  export type AnalysisCategoryScoreMaxAggregateInputType = {
    id?: true
    reportId?: true
    category?: true
    score?: true
  }

  export type AnalysisCategoryScoreCountAggregateInputType = {
    id?: true
    reportId?: true
    category?: true
    score?: true
    details?: true
    _all?: true
  }

  export type AnalysisCategoryScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisCategoryScore to aggregate.
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCategoryScores to fetch.
     */
    orderBy?: AnalysisCategoryScoreOrderByWithRelationInput | AnalysisCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCategoryScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisCategoryScores
    **/
    _count?: true | AnalysisCategoryScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisCategoryScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisCategoryScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisCategoryScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisCategoryScoreMaxAggregateInputType
  }

  export type GetAnalysisCategoryScoreAggregateType<T extends AnalysisCategoryScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisCategoryScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisCategoryScore[P]>
      : GetScalarType<T[P], AggregateAnalysisCategoryScore[P]>
  }




  export type AnalysisCategoryScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisCategoryScoreWhereInput
    orderBy?: AnalysisCategoryScoreOrderByWithAggregationInput | AnalysisCategoryScoreOrderByWithAggregationInput[]
    by: AnalysisCategoryScoreScalarFieldEnum[] | AnalysisCategoryScoreScalarFieldEnum
    having?: AnalysisCategoryScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisCategoryScoreCountAggregateInputType | true
    _avg?: AnalysisCategoryScoreAvgAggregateInputType
    _sum?: AnalysisCategoryScoreSumAggregateInputType
    _min?: AnalysisCategoryScoreMinAggregateInputType
    _max?: AnalysisCategoryScoreMaxAggregateInputType
  }

  export type AnalysisCategoryScoreGroupByOutputType = {
    id: string
    reportId: string
    category: $Enums.AnalysisCategory
    score: number
    details: JsonValue | null
    _count: AnalysisCategoryScoreCountAggregateOutputType | null
    _avg: AnalysisCategoryScoreAvgAggregateOutputType | null
    _sum: AnalysisCategoryScoreSumAggregateOutputType | null
    _min: AnalysisCategoryScoreMinAggregateOutputType | null
    _max: AnalysisCategoryScoreMaxAggregateOutputType | null
  }

  type GetAnalysisCategoryScoreGroupByPayload<T extends AnalysisCategoryScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisCategoryScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisCategoryScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisCategoryScoreGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisCategoryScoreGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisCategoryScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    category?: boolean
    score?: boolean
    details?: boolean
    report?: boolean | AnalysisReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisCategoryScore"]>

  export type AnalysisCategoryScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    category?: boolean
    score?: boolean
    details?: boolean
    report?: boolean | AnalysisReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisCategoryScore"]>

  export type AnalysisCategoryScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    category?: boolean
    score?: boolean
    details?: boolean
    report?: boolean | AnalysisReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisCategoryScore"]>

  export type AnalysisCategoryScoreSelectScalar = {
    id?: boolean
    reportId?: boolean
    category?: boolean
    score?: boolean
    details?: boolean
  }

  export type AnalysisCategoryScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "category" | "score" | "details", ExtArgs["result"]["analysisCategoryScore"]>
  export type AnalysisCategoryScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | AnalysisReportDefaultArgs<ExtArgs>
  }
  export type AnalysisCategoryScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | AnalysisReportDefaultArgs<ExtArgs>
  }
  export type AnalysisCategoryScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | AnalysisReportDefaultArgs<ExtArgs>
  }

  export type $AnalysisCategoryScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisCategoryScore"
    objects: {
      report: Prisma.$AnalysisReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      category: $Enums.AnalysisCategory
      score: number
      details: Prisma.JsonValue | null
    }, ExtArgs["result"]["analysisCategoryScore"]>
    composites: {}
  }

  type AnalysisCategoryScoreGetPayload<S extends boolean | null | undefined | AnalysisCategoryScoreDefaultArgs> = $Result.GetResult<Prisma.$AnalysisCategoryScorePayload, S>

  type AnalysisCategoryScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisCategoryScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisCategoryScoreCountAggregateInputType | true
    }

  export interface AnalysisCategoryScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisCategoryScore'], meta: { name: 'AnalysisCategoryScore' } }
    /**
     * Find zero or one AnalysisCategoryScore that matches the filter.
     * @param {AnalysisCategoryScoreFindUniqueArgs} args - Arguments to find a AnalysisCategoryScore
     * @example
     * // Get one AnalysisCategoryScore
     * const analysisCategoryScore = await prisma.analysisCategoryScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisCategoryScoreFindUniqueArgs>(args: SelectSubset<T, AnalysisCategoryScoreFindUniqueArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisCategoryScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisCategoryScoreFindUniqueOrThrowArgs} args - Arguments to find a AnalysisCategoryScore
     * @example
     * // Get one AnalysisCategoryScore
     * const analysisCategoryScore = await prisma.analysisCategoryScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisCategoryScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisCategoryScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisCategoryScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreFindFirstArgs} args - Arguments to find a AnalysisCategoryScore
     * @example
     * // Get one AnalysisCategoryScore
     * const analysisCategoryScore = await prisma.analysisCategoryScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisCategoryScoreFindFirstArgs>(args?: SelectSubset<T, AnalysisCategoryScoreFindFirstArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisCategoryScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreFindFirstOrThrowArgs} args - Arguments to find a AnalysisCategoryScore
     * @example
     * // Get one AnalysisCategoryScore
     * const analysisCategoryScore = await prisma.analysisCategoryScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisCategoryScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisCategoryScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisCategoryScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisCategoryScores
     * const analysisCategoryScores = await prisma.analysisCategoryScore.findMany()
     * 
     * // Get first 10 AnalysisCategoryScores
     * const analysisCategoryScores = await prisma.analysisCategoryScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisCategoryScoreWithIdOnly = await prisma.analysisCategoryScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisCategoryScoreFindManyArgs>(args?: SelectSubset<T, AnalysisCategoryScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisCategoryScore.
     * @param {AnalysisCategoryScoreCreateArgs} args - Arguments to create a AnalysisCategoryScore.
     * @example
     * // Create one AnalysisCategoryScore
     * const AnalysisCategoryScore = await prisma.analysisCategoryScore.create({
     *   data: {
     *     // ... data to create a AnalysisCategoryScore
     *   }
     * })
     * 
     */
    create<T extends AnalysisCategoryScoreCreateArgs>(args: SelectSubset<T, AnalysisCategoryScoreCreateArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisCategoryScores.
     * @param {AnalysisCategoryScoreCreateManyArgs} args - Arguments to create many AnalysisCategoryScores.
     * @example
     * // Create many AnalysisCategoryScores
     * const analysisCategoryScore = await prisma.analysisCategoryScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisCategoryScoreCreateManyArgs>(args?: SelectSubset<T, AnalysisCategoryScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisCategoryScores and returns the data saved in the database.
     * @param {AnalysisCategoryScoreCreateManyAndReturnArgs} args - Arguments to create many AnalysisCategoryScores.
     * @example
     * // Create many AnalysisCategoryScores
     * const analysisCategoryScore = await prisma.analysisCategoryScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisCategoryScores and only return the `id`
     * const analysisCategoryScoreWithIdOnly = await prisma.analysisCategoryScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisCategoryScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisCategoryScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisCategoryScore.
     * @param {AnalysisCategoryScoreDeleteArgs} args - Arguments to delete one AnalysisCategoryScore.
     * @example
     * // Delete one AnalysisCategoryScore
     * const AnalysisCategoryScore = await prisma.analysisCategoryScore.delete({
     *   where: {
     *     // ... filter to delete one AnalysisCategoryScore
     *   }
     * })
     * 
     */
    delete<T extends AnalysisCategoryScoreDeleteArgs>(args: SelectSubset<T, AnalysisCategoryScoreDeleteArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisCategoryScore.
     * @param {AnalysisCategoryScoreUpdateArgs} args - Arguments to update one AnalysisCategoryScore.
     * @example
     * // Update one AnalysisCategoryScore
     * const analysisCategoryScore = await prisma.analysisCategoryScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisCategoryScoreUpdateArgs>(args: SelectSubset<T, AnalysisCategoryScoreUpdateArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisCategoryScores.
     * @param {AnalysisCategoryScoreDeleteManyArgs} args - Arguments to filter AnalysisCategoryScores to delete.
     * @example
     * // Delete a few AnalysisCategoryScores
     * const { count } = await prisma.analysisCategoryScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisCategoryScoreDeleteManyArgs>(args?: SelectSubset<T, AnalysisCategoryScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisCategoryScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisCategoryScores
     * const analysisCategoryScore = await prisma.analysisCategoryScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisCategoryScoreUpdateManyArgs>(args: SelectSubset<T, AnalysisCategoryScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisCategoryScores and returns the data updated in the database.
     * @param {AnalysisCategoryScoreUpdateManyAndReturnArgs} args - Arguments to update many AnalysisCategoryScores.
     * @example
     * // Update many AnalysisCategoryScores
     * const analysisCategoryScore = await prisma.analysisCategoryScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisCategoryScores and only return the `id`
     * const analysisCategoryScoreWithIdOnly = await prisma.analysisCategoryScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisCategoryScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisCategoryScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisCategoryScore.
     * @param {AnalysisCategoryScoreUpsertArgs} args - Arguments to update or create a AnalysisCategoryScore.
     * @example
     * // Update or create a AnalysisCategoryScore
     * const analysisCategoryScore = await prisma.analysisCategoryScore.upsert({
     *   create: {
     *     // ... data to create a AnalysisCategoryScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisCategoryScore we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisCategoryScoreUpsertArgs>(args: SelectSubset<T, AnalysisCategoryScoreUpsertArgs<ExtArgs>>): Prisma__AnalysisCategoryScoreClient<$Result.GetResult<Prisma.$AnalysisCategoryScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisCategoryScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreCountArgs} args - Arguments to filter AnalysisCategoryScores to count.
     * @example
     * // Count the number of AnalysisCategoryScores
     * const count = await prisma.analysisCategoryScore.count({
     *   where: {
     *     // ... the filter for the AnalysisCategoryScores we want to count
     *   }
     * })
    **/
    count<T extends AnalysisCategoryScoreCountArgs>(
      args?: Subset<T, AnalysisCategoryScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCategoryScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisCategoryScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisCategoryScoreAggregateArgs>(args: Subset<T, AnalysisCategoryScoreAggregateArgs>): Prisma.PrismaPromise<GetAnalysisCategoryScoreAggregateType<T>>

    /**
     * Group by AnalysisCategoryScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCategoryScoreGroupByArgs} args - Group by arguments.
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
      T extends AnalysisCategoryScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisCategoryScoreGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisCategoryScoreGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisCategoryScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisCategoryScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisCategoryScore model
   */
  readonly fields: AnalysisCategoryScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisCategoryScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisCategoryScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends AnalysisReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisReportDefaultArgs<ExtArgs>>): Prisma__AnalysisReportClient<$Result.GetResult<Prisma.$AnalysisReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisCategoryScore model
   */
  interface AnalysisCategoryScoreFieldRefs {
    readonly id: FieldRef<"AnalysisCategoryScore", 'String'>
    readonly reportId: FieldRef<"AnalysisCategoryScore", 'String'>
    readonly category: FieldRef<"AnalysisCategoryScore", 'AnalysisCategory'>
    readonly score: FieldRef<"AnalysisCategoryScore", 'Float'>
    readonly details: FieldRef<"AnalysisCategoryScore", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisCategoryScore findUnique
   */
  export type AnalysisCategoryScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisCategoryScore to fetch.
     */
    where: AnalysisCategoryScoreWhereUniqueInput
  }

  /**
   * AnalysisCategoryScore findUniqueOrThrow
   */
  export type AnalysisCategoryScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisCategoryScore to fetch.
     */
    where: AnalysisCategoryScoreWhereUniqueInput
  }

  /**
   * AnalysisCategoryScore findFirst
   */
  export type AnalysisCategoryScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisCategoryScore to fetch.
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCategoryScores to fetch.
     */
    orderBy?: AnalysisCategoryScoreOrderByWithRelationInput | AnalysisCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisCategoryScores.
     */
    cursor?: AnalysisCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCategoryScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisCategoryScores.
     */
    distinct?: AnalysisCategoryScoreScalarFieldEnum | AnalysisCategoryScoreScalarFieldEnum[]
  }

  /**
   * AnalysisCategoryScore findFirstOrThrow
   */
  export type AnalysisCategoryScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisCategoryScore to fetch.
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCategoryScores to fetch.
     */
    orderBy?: AnalysisCategoryScoreOrderByWithRelationInput | AnalysisCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisCategoryScores.
     */
    cursor?: AnalysisCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCategoryScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisCategoryScores.
     */
    distinct?: AnalysisCategoryScoreScalarFieldEnum | AnalysisCategoryScoreScalarFieldEnum[]
  }

  /**
   * AnalysisCategoryScore findMany
   */
  export type AnalysisCategoryScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisCategoryScores to fetch.
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCategoryScores to fetch.
     */
    orderBy?: AnalysisCategoryScoreOrderByWithRelationInput | AnalysisCategoryScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisCategoryScores.
     */
    cursor?: AnalysisCategoryScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCategoryScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCategoryScores.
     */
    skip?: number
    distinct?: AnalysisCategoryScoreScalarFieldEnum | AnalysisCategoryScoreScalarFieldEnum[]
  }

  /**
   * AnalysisCategoryScore create
   */
  export type AnalysisCategoryScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisCategoryScore.
     */
    data: XOR<AnalysisCategoryScoreCreateInput, AnalysisCategoryScoreUncheckedCreateInput>
  }

  /**
   * AnalysisCategoryScore createMany
   */
  export type AnalysisCategoryScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisCategoryScores.
     */
    data: AnalysisCategoryScoreCreateManyInput | AnalysisCategoryScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisCategoryScore createManyAndReturn
   */
  export type AnalysisCategoryScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisCategoryScores.
     */
    data: AnalysisCategoryScoreCreateManyInput | AnalysisCategoryScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisCategoryScore update
   */
  export type AnalysisCategoryScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisCategoryScore.
     */
    data: XOR<AnalysisCategoryScoreUpdateInput, AnalysisCategoryScoreUncheckedUpdateInput>
    /**
     * Choose, which AnalysisCategoryScore to update.
     */
    where: AnalysisCategoryScoreWhereUniqueInput
  }

  /**
   * AnalysisCategoryScore updateMany
   */
  export type AnalysisCategoryScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisCategoryScores.
     */
    data: XOR<AnalysisCategoryScoreUpdateManyMutationInput, AnalysisCategoryScoreUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisCategoryScores to update
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * Limit how many AnalysisCategoryScores to update.
     */
    limit?: number
  }

  /**
   * AnalysisCategoryScore updateManyAndReturn
   */
  export type AnalysisCategoryScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisCategoryScores.
     */
    data: XOR<AnalysisCategoryScoreUpdateManyMutationInput, AnalysisCategoryScoreUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisCategoryScores to update
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * Limit how many AnalysisCategoryScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisCategoryScore upsert
   */
  export type AnalysisCategoryScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisCategoryScore to update in case it exists.
     */
    where: AnalysisCategoryScoreWhereUniqueInput
    /**
     * In case the AnalysisCategoryScore found by the `where` argument doesn't exist, create a new AnalysisCategoryScore with this data.
     */
    create: XOR<AnalysisCategoryScoreCreateInput, AnalysisCategoryScoreUncheckedCreateInput>
    /**
     * In case the AnalysisCategoryScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisCategoryScoreUpdateInput, AnalysisCategoryScoreUncheckedUpdateInput>
  }

  /**
   * AnalysisCategoryScore delete
   */
  export type AnalysisCategoryScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
    /**
     * Filter which AnalysisCategoryScore to delete.
     */
    where: AnalysisCategoryScoreWhereUniqueInput
  }

  /**
   * AnalysisCategoryScore deleteMany
   */
  export type AnalysisCategoryScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisCategoryScores to delete
     */
    where?: AnalysisCategoryScoreWhereInput
    /**
     * Limit how many AnalysisCategoryScores to delete.
     */
    limit?: number
  }

  /**
   * AnalysisCategoryScore without action
   */
  export type AnalysisCategoryScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCategoryScore
     */
    select?: AnalysisCategoryScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCategoryScore
     */
    omit?: AnalysisCategoryScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisCategoryScoreInclude<ExtArgs> | null
  }


  /**
   * Model FlaggedIssue
   */

  export type AggregateFlaggedIssue = {
    _count: FlaggedIssueCountAggregateOutputType | null
    _avg: FlaggedIssueAvgAggregateOutputType | null
    _sum: FlaggedIssueSumAggregateOutputType | null
    _min: FlaggedIssueMinAggregateOutputType | null
    _max: FlaggedIssueMaxAggregateOutputType | null
  }

  export type FlaggedIssueAvgAggregateOutputType = {
    timestampMs: number | null
    severity: number | null
  }

  export type FlaggedIssueSumAggregateOutputType = {
    timestampMs: number | null
    severity: number | null
  }

  export type FlaggedIssueMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    category: $Enums.AnalysisCategory | null
    timestampMs: number | null
    description: string | null
    severity: number | null
    createdAt: Date | null
  }

  export type FlaggedIssueMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    category: $Enums.AnalysisCategory | null
    timestampMs: number | null
    description: string | null
    severity: number | null
    createdAt: Date | null
  }

  export type FlaggedIssueCountAggregateOutputType = {
    id: number
    interviewId: number
    category: number
    timestampMs: number
    description: number
    severity: number
    createdAt: number
    _all: number
  }


  export type FlaggedIssueAvgAggregateInputType = {
    timestampMs?: true
    severity?: true
  }

  export type FlaggedIssueSumAggregateInputType = {
    timestampMs?: true
    severity?: true
  }

  export type FlaggedIssueMinAggregateInputType = {
    id?: true
    interviewId?: true
    category?: true
    timestampMs?: true
    description?: true
    severity?: true
    createdAt?: true
  }

  export type FlaggedIssueMaxAggregateInputType = {
    id?: true
    interviewId?: true
    category?: true
    timestampMs?: true
    description?: true
    severity?: true
    createdAt?: true
  }

  export type FlaggedIssueCountAggregateInputType = {
    id?: true
    interviewId?: true
    category?: true
    timestampMs?: true
    description?: true
    severity?: true
    createdAt?: true
    _all?: true
  }

  export type FlaggedIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlaggedIssue to aggregate.
     */
    where?: FlaggedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedIssues to fetch.
     */
    orderBy?: FlaggedIssueOrderByWithRelationInput | FlaggedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlaggedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlaggedIssues
    **/
    _count?: true | FlaggedIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlaggedIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlaggedIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlaggedIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlaggedIssueMaxAggregateInputType
  }

  export type GetFlaggedIssueAggregateType<T extends FlaggedIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateFlaggedIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlaggedIssue[P]>
      : GetScalarType<T[P], AggregateFlaggedIssue[P]>
  }




  export type FlaggedIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlaggedIssueWhereInput
    orderBy?: FlaggedIssueOrderByWithAggregationInput | FlaggedIssueOrderByWithAggregationInput[]
    by: FlaggedIssueScalarFieldEnum[] | FlaggedIssueScalarFieldEnum
    having?: FlaggedIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlaggedIssueCountAggregateInputType | true
    _avg?: FlaggedIssueAvgAggregateInputType
    _sum?: FlaggedIssueSumAggregateInputType
    _min?: FlaggedIssueMinAggregateInputType
    _max?: FlaggedIssueMaxAggregateInputType
  }

  export type FlaggedIssueGroupByOutputType = {
    id: string
    interviewId: string
    category: $Enums.AnalysisCategory
    timestampMs: number | null
    description: string
    severity: number
    createdAt: Date
    _count: FlaggedIssueCountAggregateOutputType | null
    _avg: FlaggedIssueAvgAggregateOutputType | null
    _sum: FlaggedIssueSumAggregateOutputType | null
    _min: FlaggedIssueMinAggregateOutputType | null
    _max: FlaggedIssueMaxAggregateOutputType | null
  }

  type GetFlaggedIssueGroupByPayload<T extends FlaggedIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlaggedIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlaggedIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlaggedIssueGroupByOutputType[P]>
            : GetScalarType<T[P], FlaggedIssueGroupByOutputType[P]>
        }
      >
    >


  export type FlaggedIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    category?: boolean
    timestampMs?: boolean
    description?: boolean
    severity?: boolean
    createdAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flaggedIssue"]>

  export type FlaggedIssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    category?: boolean
    timestampMs?: boolean
    description?: boolean
    severity?: boolean
    createdAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flaggedIssue"]>

  export type FlaggedIssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    category?: boolean
    timestampMs?: boolean
    description?: boolean
    severity?: boolean
    createdAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flaggedIssue"]>

  export type FlaggedIssueSelectScalar = {
    id?: boolean
    interviewId?: boolean
    category?: boolean
    timestampMs?: boolean
    description?: boolean
    severity?: boolean
    createdAt?: boolean
  }

  export type FlaggedIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "category" | "timestampMs" | "description" | "severity" | "createdAt", ExtArgs["result"]["flaggedIssue"]>
  export type FlaggedIssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type FlaggedIssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type FlaggedIssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $FlaggedIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlaggedIssue"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string
      category: $Enums.AnalysisCategory
      timestampMs: number | null
      description: string
      severity: number
      createdAt: Date
    }, ExtArgs["result"]["flaggedIssue"]>
    composites: {}
  }

  type FlaggedIssueGetPayload<S extends boolean | null | undefined | FlaggedIssueDefaultArgs> = $Result.GetResult<Prisma.$FlaggedIssuePayload, S>

  type FlaggedIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlaggedIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlaggedIssueCountAggregateInputType | true
    }

  export interface FlaggedIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlaggedIssue'], meta: { name: 'FlaggedIssue' } }
    /**
     * Find zero or one FlaggedIssue that matches the filter.
     * @param {FlaggedIssueFindUniqueArgs} args - Arguments to find a FlaggedIssue
     * @example
     * // Get one FlaggedIssue
     * const flaggedIssue = await prisma.flaggedIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlaggedIssueFindUniqueArgs>(args: SelectSubset<T, FlaggedIssueFindUniqueArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlaggedIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlaggedIssueFindUniqueOrThrowArgs} args - Arguments to find a FlaggedIssue
     * @example
     * // Get one FlaggedIssue
     * const flaggedIssue = await prisma.flaggedIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlaggedIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, FlaggedIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlaggedIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueFindFirstArgs} args - Arguments to find a FlaggedIssue
     * @example
     * // Get one FlaggedIssue
     * const flaggedIssue = await prisma.flaggedIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlaggedIssueFindFirstArgs>(args?: SelectSubset<T, FlaggedIssueFindFirstArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlaggedIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueFindFirstOrThrowArgs} args - Arguments to find a FlaggedIssue
     * @example
     * // Get one FlaggedIssue
     * const flaggedIssue = await prisma.flaggedIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlaggedIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, FlaggedIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlaggedIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlaggedIssues
     * const flaggedIssues = await prisma.flaggedIssue.findMany()
     * 
     * // Get first 10 FlaggedIssues
     * const flaggedIssues = await prisma.flaggedIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flaggedIssueWithIdOnly = await prisma.flaggedIssue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlaggedIssueFindManyArgs>(args?: SelectSubset<T, FlaggedIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlaggedIssue.
     * @param {FlaggedIssueCreateArgs} args - Arguments to create a FlaggedIssue.
     * @example
     * // Create one FlaggedIssue
     * const FlaggedIssue = await prisma.flaggedIssue.create({
     *   data: {
     *     // ... data to create a FlaggedIssue
     *   }
     * })
     * 
     */
    create<T extends FlaggedIssueCreateArgs>(args: SelectSubset<T, FlaggedIssueCreateArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlaggedIssues.
     * @param {FlaggedIssueCreateManyArgs} args - Arguments to create many FlaggedIssues.
     * @example
     * // Create many FlaggedIssues
     * const flaggedIssue = await prisma.flaggedIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlaggedIssueCreateManyArgs>(args?: SelectSubset<T, FlaggedIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlaggedIssues and returns the data saved in the database.
     * @param {FlaggedIssueCreateManyAndReturnArgs} args - Arguments to create many FlaggedIssues.
     * @example
     * // Create many FlaggedIssues
     * const flaggedIssue = await prisma.flaggedIssue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlaggedIssues and only return the `id`
     * const flaggedIssueWithIdOnly = await prisma.flaggedIssue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlaggedIssueCreateManyAndReturnArgs>(args?: SelectSubset<T, FlaggedIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlaggedIssue.
     * @param {FlaggedIssueDeleteArgs} args - Arguments to delete one FlaggedIssue.
     * @example
     * // Delete one FlaggedIssue
     * const FlaggedIssue = await prisma.flaggedIssue.delete({
     *   where: {
     *     // ... filter to delete one FlaggedIssue
     *   }
     * })
     * 
     */
    delete<T extends FlaggedIssueDeleteArgs>(args: SelectSubset<T, FlaggedIssueDeleteArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlaggedIssue.
     * @param {FlaggedIssueUpdateArgs} args - Arguments to update one FlaggedIssue.
     * @example
     * // Update one FlaggedIssue
     * const flaggedIssue = await prisma.flaggedIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlaggedIssueUpdateArgs>(args: SelectSubset<T, FlaggedIssueUpdateArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlaggedIssues.
     * @param {FlaggedIssueDeleteManyArgs} args - Arguments to filter FlaggedIssues to delete.
     * @example
     * // Delete a few FlaggedIssues
     * const { count } = await prisma.flaggedIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlaggedIssueDeleteManyArgs>(args?: SelectSubset<T, FlaggedIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlaggedIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlaggedIssues
     * const flaggedIssue = await prisma.flaggedIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlaggedIssueUpdateManyArgs>(args: SelectSubset<T, FlaggedIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlaggedIssues and returns the data updated in the database.
     * @param {FlaggedIssueUpdateManyAndReturnArgs} args - Arguments to update many FlaggedIssues.
     * @example
     * // Update many FlaggedIssues
     * const flaggedIssue = await prisma.flaggedIssue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlaggedIssues and only return the `id`
     * const flaggedIssueWithIdOnly = await prisma.flaggedIssue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlaggedIssueUpdateManyAndReturnArgs>(args: SelectSubset<T, FlaggedIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlaggedIssue.
     * @param {FlaggedIssueUpsertArgs} args - Arguments to update or create a FlaggedIssue.
     * @example
     * // Update or create a FlaggedIssue
     * const flaggedIssue = await prisma.flaggedIssue.upsert({
     *   create: {
     *     // ... data to create a FlaggedIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlaggedIssue we want to update
     *   }
     * })
     */
    upsert<T extends FlaggedIssueUpsertArgs>(args: SelectSubset<T, FlaggedIssueUpsertArgs<ExtArgs>>): Prisma__FlaggedIssueClient<$Result.GetResult<Prisma.$FlaggedIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlaggedIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueCountArgs} args - Arguments to filter FlaggedIssues to count.
     * @example
     * // Count the number of FlaggedIssues
     * const count = await prisma.flaggedIssue.count({
     *   where: {
     *     // ... the filter for the FlaggedIssues we want to count
     *   }
     * })
    **/
    count<T extends FlaggedIssueCountArgs>(
      args?: Subset<T, FlaggedIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlaggedIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlaggedIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlaggedIssueAggregateArgs>(args: Subset<T, FlaggedIssueAggregateArgs>): Prisma.PrismaPromise<GetFlaggedIssueAggregateType<T>>

    /**
     * Group by FlaggedIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlaggedIssueGroupByArgs} args - Group by arguments.
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
      T extends FlaggedIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlaggedIssueGroupByArgs['orderBy'] }
        : { orderBy?: FlaggedIssueGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlaggedIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlaggedIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlaggedIssue model
   */
  readonly fields: FlaggedIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlaggedIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlaggedIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlaggedIssue model
   */
  interface FlaggedIssueFieldRefs {
    readonly id: FieldRef<"FlaggedIssue", 'String'>
    readonly interviewId: FieldRef<"FlaggedIssue", 'String'>
    readonly category: FieldRef<"FlaggedIssue", 'AnalysisCategory'>
    readonly timestampMs: FieldRef<"FlaggedIssue", 'Int'>
    readonly description: FieldRef<"FlaggedIssue", 'String'>
    readonly severity: FieldRef<"FlaggedIssue", 'Int'>
    readonly createdAt: FieldRef<"FlaggedIssue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlaggedIssue findUnique
   */
  export type FlaggedIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedIssue to fetch.
     */
    where: FlaggedIssueWhereUniqueInput
  }

  /**
   * FlaggedIssue findUniqueOrThrow
   */
  export type FlaggedIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedIssue to fetch.
     */
    where: FlaggedIssueWhereUniqueInput
  }

  /**
   * FlaggedIssue findFirst
   */
  export type FlaggedIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedIssue to fetch.
     */
    where?: FlaggedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedIssues to fetch.
     */
    orderBy?: FlaggedIssueOrderByWithRelationInput | FlaggedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlaggedIssues.
     */
    cursor?: FlaggedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlaggedIssues.
     */
    distinct?: FlaggedIssueScalarFieldEnum | FlaggedIssueScalarFieldEnum[]
  }

  /**
   * FlaggedIssue findFirstOrThrow
   */
  export type FlaggedIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedIssue to fetch.
     */
    where?: FlaggedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedIssues to fetch.
     */
    orderBy?: FlaggedIssueOrderByWithRelationInput | FlaggedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlaggedIssues.
     */
    cursor?: FlaggedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlaggedIssues.
     */
    distinct?: FlaggedIssueScalarFieldEnum | FlaggedIssueScalarFieldEnum[]
  }

  /**
   * FlaggedIssue findMany
   */
  export type FlaggedIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * Filter, which FlaggedIssues to fetch.
     */
    where?: FlaggedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlaggedIssues to fetch.
     */
    orderBy?: FlaggedIssueOrderByWithRelationInput | FlaggedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlaggedIssues.
     */
    cursor?: FlaggedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlaggedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlaggedIssues.
     */
    skip?: number
    distinct?: FlaggedIssueScalarFieldEnum | FlaggedIssueScalarFieldEnum[]
  }

  /**
   * FlaggedIssue create
   */
  export type FlaggedIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * The data needed to create a FlaggedIssue.
     */
    data: XOR<FlaggedIssueCreateInput, FlaggedIssueUncheckedCreateInput>
  }

  /**
   * FlaggedIssue createMany
   */
  export type FlaggedIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlaggedIssues.
     */
    data: FlaggedIssueCreateManyInput | FlaggedIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlaggedIssue createManyAndReturn
   */
  export type FlaggedIssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * The data used to create many FlaggedIssues.
     */
    data: FlaggedIssueCreateManyInput | FlaggedIssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlaggedIssue update
   */
  export type FlaggedIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * The data needed to update a FlaggedIssue.
     */
    data: XOR<FlaggedIssueUpdateInput, FlaggedIssueUncheckedUpdateInput>
    /**
     * Choose, which FlaggedIssue to update.
     */
    where: FlaggedIssueWhereUniqueInput
  }

  /**
   * FlaggedIssue updateMany
   */
  export type FlaggedIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlaggedIssues.
     */
    data: XOR<FlaggedIssueUpdateManyMutationInput, FlaggedIssueUncheckedUpdateManyInput>
    /**
     * Filter which FlaggedIssues to update
     */
    where?: FlaggedIssueWhereInput
    /**
     * Limit how many FlaggedIssues to update.
     */
    limit?: number
  }

  /**
   * FlaggedIssue updateManyAndReturn
   */
  export type FlaggedIssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * The data used to update FlaggedIssues.
     */
    data: XOR<FlaggedIssueUpdateManyMutationInput, FlaggedIssueUncheckedUpdateManyInput>
    /**
     * Filter which FlaggedIssues to update
     */
    where?: FlaggedIssueWhereInput
    /**
     * Limit how many FlaggedIssues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlaggedIssue upsert
   */
  export type FlaggedIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * The filter to search for the FlaggedIssue to update in case it exists.
     */
    where: FlaggedIssueWhereUniqueInput
    /**
     * In case the FlaggedIssue found by the `where` argument doesn't exist, create a new FlaggedIssue with this data.
     */
    create: XOR<FlaggedIssueCreateInput, FlaggedIssueUncheckedCreateInput>
    /**
     * In case the FlaggedIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlaggedIssueUpdateInput, FlaggedIssueUncheckedUpdateInput>
  }

  /**
   * FlaggedIssue delete
   */
  export type FlaggedIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
    /**
     * Filter which FlaggedIssue to delete.
     */
    where: FlaggedIssueWhereUniqueInput
  }

  /**
   * FlaggedIssue deleteMany
   */
  export type FlaggedIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlaggedIssues to delete
     */
    where?: FlaggedIssueWhereInput
    /**
     * Limit how many FlaggedIssues to delete.
     */
    limit?: number
  }

  /**
   * FlaggedIssue without action
   */
  export type FlaggedIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlaggedIssue
     */
    select?: FlaggedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlaggedIssue
     */
    omit?: FlaggedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlaggedIssueInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    interviewId: string | null
    prompt: string | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    interviewId: string | null
    prompt: string | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    interviewId: number
    prompt: number
    expectedAnswer: number
    createdAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    interviewId?: true
    prompt?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    interviewId?: true
    prompt?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    interviewId?: true
    prompt?: true
    expectedAnswer?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    interviewId: string | null
    prompt: string
    expectedAnswer: JsonValue | null
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    prompt?: boolean
    expectedAnswer?: boolean
    createdAt?: boolean
    interview?: boolean | Question$interviewArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    prompt?: boolean
    expectedAnswer?: boolean
    createdAt?: boolean
    interview?: boolean | Question$interviewArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    prompt?: boolean
    expectedAnswer?: boolean
    createdAt?: boolean
    interview?: boolean | Question$interviewArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    interviewId?: boolean
    prompt?: boolean
    expectedAnswer?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "prompt" | "expectedAnswer" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | Question$interviewArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | Question$interviewArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | Question$interviewArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      interviewId: string | null
      prompt: string
      expectedAnswer: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends Question$interviewArgs<ExtArgs> = {}>(args?: Subset<T, Question$interviewArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly interviewId: FieldRef<"Question", 'String'>
    readonly prompt: FieldRef<"Question", 'String'>
    readonly expectedAnswer: FieldRef<"Question", 'Json'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.interview
   */
  export type Question$interviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    createdAt: number
    expiresAt: number
    revoked: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    revoked?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    revoked?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    revoked?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    createdAt: Date
    expiresAt: Date
    revoked: boolean
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    revoked?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "createdAt" | "expiresAt" | "revoked", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      createdAt: Date
      expiresAt: Date
      revoked: boolean
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    s3Key: 's3Key',
    textExtract: 'textExtract',
    parsedJson: 'parsedJson',
    createdAt: 'createdAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const InterviewConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    skills: 'skills',
    durationMinutes: 'durationMinutes',
    difficulty: 'difficulty',
    type: 'type',
    createdAt: 'createdAt',
    resumeId: 'resumeId'
  };

  export type InterviewConfigScalarFieldEnum = (typeof InterviewConfigScalarFieldEnum)[keyof typeof InterviewConfigScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    configId: 'configId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    status: 'status',
    overallScore: 'overallScore',
    createdAt: 'createdAt',
    interviewerModel: 'interviewerModel',
    consentRecording: 'consentRecording',
    region: 'region',
    indexes: 'indexes'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    s3Key: 's3Key',
    s3Url: 's3Url',
    mediaType: 'mediaType',
    durationMs: 'durationMs',
    sizeBytes: 'sizeBytes',
    uploadedAt: 'uploadedAt',
    processed: 'processed',
    notes: 'notes'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const TranscriptScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    speaker: 'speaker',
    text: 'text',
    startTimeMs: 'startTimeMs',
    endTimeMs: 'endTimeMs',
    createdAt: 'createdAt',
    embeddingJson: 'embeddingJson',
    tokensJson: 'tokensJson'
  };

  export type TranscriptScalarFieldEnum = (typeof TranscriptScalarFieldEnum)[keyof typeof TranscriptScalarFieldEnum]


  export const AnalysisReportScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    overallScore: 'overallScore',
    metrics: 'metrics',
    recommendations: 'recommendations',
    generatedAt: 'generatedAt'
  };

  export type AnalysisReportScalarFieldEnum = (typeof AnalysisReportScalarFieldEnum)[keyof typeof AnalysisReportScalarFieldEnum]


  export const AnalysisCategoryScoreScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    category: 'category',
    score: 'score',
    details: 'details'
  };

  export type AnalysisCategoryScoreScalarFieldEnum = (typeof AnalysisCategoryScoreScalarFieldEnum)[keyof typeof AnalysisCategoryScoreScalarFieldEnum]


  export const FlaggedIssueScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    category: 'category',
    timestampMs: 'timestampMs',
    description: 'description',
    severity: 'severity',
    createdAt: 'createdAt'
  };

  export type FlaggedIssueScalarFieldEnum = (typeof FlaggedIssueScalarFieldEnum)[keyof typeof FlaggedIssueScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    prompt: 'prompt',
    expectedAnswer: 'expectedAnswer',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    revoked: 'revoked'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'InterviewType'
   */
  export type EnumInterviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewType'>
    


  /**
   * Reference to a field of type 'InterviewType[]'
   */
  export type ListEnumInterviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'AnalysisCategory'
   */
  export type EnumAnalysisCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisCategory'>
    


  /**
   * Reference to a field of type 'AnalysisCategory[]'
   */
  export type ListEnumAnalysisCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisCategory[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
    interviewConfigs?: InterviewConfigListRelationFilter
    interviews?: InterviewListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
    interviewConfigs?: InterviewConfigOrderByRelationAggregateInput
    interviews?: InterviewOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resumes?: ResumeListRelationFilter
    interviewConfigs?: InterviewConfigListRelationFilter
    interviews?: InterviewListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    s3Key?: StringFilter<"Resume"> | string
    textExtract?: StringFilter<"Resume"> | string
    parsedJson?: JsonNullableFilter<"Resume">
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interviewConfigs?: InterviewConfigListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Key?: SortOrder
    textExtract?: SortOrder
    parsedJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    interviewConfigs?: InterviewConfigOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    userId?: StringFilter<"Resume"> | string
    s3Key?: StringFilter<"Resume"> | string
    textExtract?: StringFilter<"Resume"> | string
    parsedJson?: JsonNullableFilter<"Resume">
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interviewConfigs?: InterviewConfigListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Key?: SortOrder
    textExtract?: SortOrder
    parsedJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    s3Key?: StringWithAggregatesFilter<"Resume"> | string
    textExtract?: StringWithAggregatesFilter<"Resume"> | string
    parsedJson?: JsonNullableWithAggregatesFilter<"Resume">
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type InterviewConfigWhereInput = {
    AND?: InterviewConfigWhereInput | InterviewConfigWhereInput[]
    OR?: InterviewConfigWhereInput[]
    NOT?: InterviewConfigWhereInput | InterviewConfigWhereInput[]
    id?: StringFilter<"InterviewConfig"> | string
    userId?: StringFilter<"InterviewConfig"> | string
    role?: StringFilter<"InterviewConfig"> | string
    skills?: StringNullableListFilter<"InterviewConfig">
    durationMinutes?: IntFilter<"InterviewConfig"> | number
    difficulty?: EnumDifficultyFilter<"InterviewConfig"> | $Enums.Difficulty
    type?: EnumInterviewTypeFilter<"InterviewConfig"> | $Enums.InterviewType
    createdAt?: DateTimeFilter<"InterviewConfig"> | Date | string
    resumeId?: StringNullableFilter<"InterviewConfig"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    interviews?: InterviewListRelationFilter
  }

  export type InterviewConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    skills?: SortOrder
    durationMinutes?: SortOrder
    difficulty?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    resumeId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    Resume?: ResumeOrderByWithRelationInput
    interviews?: InterviewOrderByRelationAggregateInput
  }

  export type InterviewConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewConfigWhereInput | InterviewConfigWhereInput[]
    OR?: InterviewConfigWhereInput[]
    NOT?: InterviewConfigWhereInput | InterviewConfigWhereInput[]
    userId?: StringFilter<"InterviewConfig"> | string
    role?: StringFilter<"InterviewConfig"> | string
    skills?: StringNullableListFilter<"InterviewConfig">
    durationMinutes?: IntFilter<"InterviewConfig"> | number
    difficulty?: EnumDifficultyFilter<"InterviewConfig"> | $Enums.Difficulty
    type?: EnumInterviewTypeFilter<"InterviewConfig"> | $Enums.InterviewType
    createdAt?: DateTimeFilter<"InterviewConfig"> | Date | string
    resumeId?: StringNullableFilter<"InterviewConfig"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    interviews?: InterviewListRelationFilter
  }, "id">

  export type InterviewConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    skills?: SortOrder
    durationMinutes?: SortOrder
    difficulty?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    resumeId?: SortOrderInput | SortOrder
    _count?: InterviewConfigCountOrderByAggregateInput
    _avg?: InterviewConfigAvgOrderByAggregateInput
    _max?: InterviewConfigMaxOrderByAggregateInput
    _min?: InterviewConfigMinOrderByAggregateInput
    _sum?: InterviewConfigSumOrderByAggregateInput
  }

  export type InterviewConfigScalarWhereWithAggregatesInput = {
    AND?: InterviewConfigScalarWhereWithAggregatesInput | InterviewConfigScalarWhereWithAggregatesInput[]
    OR?: InterviewConfigScalarWhereWithAggregatesInput[]
    NOT?: InterviewConfigScalarWhereWithAggregatesInput | InterviewConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewConfig"> | string
    userId?: StringWithAggregatesFilter<"InterviewConfig"> | string
    role?: StringWithAggregatesFilter<"InterviewConfig"> | string
    skills?: StringNullableListFilter<"InterviewConfig">
    durationMinutes?: IntWithAggregatesFilter<"InterviewConfig"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"InterviewConfig"> | $Enums.Difficulty
    type?: EnumInterviewTypeWithAggregatesFilter<"InterviewConfig"> | $Enums.InterviewType
    createdAt?: DateTimeWithAggregatesFilter<"InterviewConfig"> | Date | string
    resumeId?: StringNullableWithAggregatesFilter<"InterviewConfig"> | string | null
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: StringFilter<"Interview"> | string
    userId?: StringFilter<"Interview"> | string
    configId?: StringFilter<"Interview"> | string
    startedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    status?: StringFilter<"Interview"> | string
    overallScore?: FloatNullableFilter<"Interview"> | number | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    interviewerModel?: StringNullableFilter<"Interview"> | string | null
    consentRecording?: BoolFilter<"Interview"> | boolean
    region?: StringNullableFilter<"Interview"> | string | null
    indexes?: StringNullableFilter<"Interview"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    config?: XOR<InterviewConfigScalarRelationFilter, InterviewConfigWhereInput>
    media?: MediaListRelationFilter
    transcripts?: TranscriptListRelationFilter
    report?: XOR<AnalysisReportNullableScalarRelationFilter, AnalysisReportWhereInput> | null
    issues?: FlaggedIssueListRelationFilter
    questions?: QuestionListRelationFilter
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    overallScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    interviewerModel?: SortOrderInput | SortOrder
    consentRecording?: SortOrder
    region?: SortOrderInput | SortOrder
    indexes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    config?: InterviewConfigOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    transcripts?: TranscriptOrderByRelationAggregateInput
    report?: AnalysisReportOrderByWithRelationInput
    issues?: FlaggedIssueOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    userId?: StringFilter<"Interview"> | string
    configId?: StringFilter<"Interview"> | string
    startedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    status?: StringFilter<"Interview"> | string
    overallScore?: FloatNullableFilter<"Interview"> | number | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    interviewerModel?: StringNullableFilter<"Interview"> | string | null
    consentRecording?: BoolFilter<"Interview"> | boolean
    region?: StringNullableFilter<"Interview"> | string | null
    indexes?: StringNullableFilter<"Interview"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    config?: XOR<InterviewConfigScalarRelationFilter, InterviewConfigWhereInput>
    media?: MediaListRelationFilter
    transcripts?: TranscriptListRelationFilter
    report?: XOR<AnalysisReportNullableScalarRelationFilter, AnalysisReportWhereInput> | null
    issues?: FlaggedIssueListRelationFilter
    questions?: QuestionListRelationFilter
  }, "id">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    overallScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    interviewerModel?: SortOrderInput | SortOrder
    consentRecording?: SortOrder
    region?: SortOrderInput | SortOrder
    indexes?: SortOrderInput | SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interview"> | string
    userId?: StringWithAggregatesFilter<"Interview"> | string
    configId?: StringWithAggregatesFilter<"Interview"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Interview"> | Date | string | null
    status?: StringWithAggregatesFilter<"Interview"> | string
    overallScore?: FloatNullableWithAggregatesFilter<"Interview"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    interviewerModel?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    consentRecording?: BoolWithAggregatesFilter<"Interview"> | boolean
    region?: StringNullableWithAggregatesFilter<"Interview"> | string | null
    indexes?: StringNullableWithAggregatesFilter<"Interview"> | string | null
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    interviewId?: StringFilter<"Media"> | string
    s3Key?: StringFilter<"Media"> | string
    s3Url?: StringNullableFilter<"Media"> | string | null
    mediaType?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    durationMs?: IntNullableFilter<"Media"> | number | null
    sizeBytes?: IntNullableFilter<"Media"> | number | null
    uploadedAt?: DateTimeFilter<"Media"> | Date | string
    processed?: BoolFilter<"Media"> | boolean
    notes?: StringNullableFilter<"Media"> | string | null
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    s3Key?: SortOrder
    s3Url?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    processed?: SortOrder
    notes?: SortOrderInput | SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    interviewId?: StringFilter<"Media"> | string
    s3Key?: StringFilter<"Media"> | string
    s3Url?: StringNullableFilter<"Media"> | string | null
    mediaType?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    durationMs?: IntNullableFilter<"Media"> | number | null
    sizeBytes?: IntNullableFilter<"Media"> | number | null
    uploadedAt?: DateTimeFilter<"Media"> | Date | string
    processed?: BoolFilter<"Media"> | boolean
    notes?: StringNullableFilter<"Media"> | string | null
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    s3Key?: SortOrder
    s3Url?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    processed?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    interviewId?: StringWithAggregatesFilter<"Media"> | string
    s3Key?: StringWithAggregatesFilter<"Media"> | string
    s3Url?: StringNullableWithAggregatesFilter<"Media"> | string | null
    mediaType?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    durationMs?: IntNullableWithAggregatesFilter<"Media"> | number | null
    sizeBytes?: IntNullableWithAggregatesFilter<"Media"> | number | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    processed?: BoolWithAggregatesFilter<"Media"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Media"> | string | null
  }

  export type TranscriptWhereInput = {
    AND?: TranscriptWhereInput | TranscriptWhereInput[]
    OR?: TranscriptWhereInput[]
    NOT?: TranscriptWhereInput | TranscriptWhereInput[]
    id?: StringFilter<"Transcript"> | string
    interviewId?: StringFilter<"Transcript"> | string
    speaker?: StringFilter<"Transcript"> | string
    text?: StringFilter<"Transcript"> | string
    startTimeMs?: IntNullableFilter<"Transcript"> | number | null
    endTimeMs?: IntNullableFilter<"Transcript"> | number | null
    createdAt?: DateTimeFilter<"Transcript"> | Date | string
    embeddingJson?: JsonNullableFilter<"Transcript">
    tokensJson?: JsonNullableFilter<"Transcript">
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }

  export type TranscriptOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startTimeMs?: SortOrderInput | SortOrder
    endTimeMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    embeddingJson?: SortOrderInput | SortOrder
    tokensJson?: SortOrderInput | SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type TranscriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranscriptWhereInput | TranscriptWhereInput[]
    OR?: TranscriptWhereInput[]
    NOT?: TranscriptWhereInput | TranscriptWhereInput[]
    interviewId?: StringFilter<"Transcript"> | string
    speaker?: StringFilter<"Transcript"> | string
    text?: StringFilter<"Transcript"> | string
    startTimeMs?: IntNullableFilter<"Transcript"> | number | null
    endTimeMs?: IntNullableFilter<"Transcript"> | number | null
    createdAt?: DateTimeFilter<"Transcript"> | Date | string
    embeddingJson?: JsonNullableFilter<"Transcript">
    tokensJson?: JsonNullableFilter<"Transcript">
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }, "id">

  export type TranscriptOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startTimeMs?: SortOrderInput | SortOrder
    endTimeMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    embeddingJson?: SortOrderInput | SortOrder
    tokensJson?: SortOrderInput | SortOrder
    _count?: TranscriptCountOrderByAggregateInput
    _avg?: TranscriptAvgOrderByAggregateInput
    _max?: TranscriptMaxOrderByAggregateInput
    _min?: TranscriptMinOrderByAggregateInput
    _sum?: TranscriptSumOrderByAggregateInput
  }

  export type TranscriptScalarWhereWithAggregatesInput = {
    AND?: TranscriptScalarWhereWithAggregatesInput | TranscriptScalarWhereWithAggregatesInput[]
    OR?: TranscriptScalarWhereWithAggregatesInput[]
    NOT?: TranscriptScalarWhereWithAggregatesInput | TranscriptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transcript"> | string
    interviewId?: StringWithAggregatesFilter<"Transcript"> | string
    speaker?: StringWithAggregatesFilter<"Transcript"> | string
    text?: StringWithAggregatesFilter<"Transcript"> | string
    startTimeMs?: IntNullableWithAggregatesFilter<"Transcript"> | number | null
    endTimeMs?: IntNullableWithAggregatesFilter<"Transcript"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Transcript"> | Date | string
    embeddingJson?: JsonNullableWithAggregatesFilter<"Transcript">
    tokensJson?: JsonNullableWithAggregatesFilter<"Transcript">
  }

  export type AnalysisReportWhereInput = {
    AND?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    OR?: AnalysisReportWhereInput[]
    NOT?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    id?: StringFilter<"AnalysisReport"> | string
    interviewId?: StringFilter<"AnalysisReport"> | string
    overallScore?: FloatFilter<"AnalysisReport"> | number
    metrics?: JsonFilter<"AnalysisReport">
    recommendations?: JsonNullableFilter<"AnalysisReport">
    generatedAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    perCategory?: AnalysisCategoryScoreListRelationFilter
  }

  export type AnalysisReportOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    overallScore?: SortOrder
    metrics?: SortOrder
    recommendations?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    interview?: InterviewOrderByWithRelationInput
    perCategory?: AnalysisCategoryScoreOrderByRelationAggregateInput
  }

  export type AnalysisReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    interviewId?: string
    AND?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    OR?: AnalysisReportWhereInput[]
    NOT?: AnalysisReportWhereInput | AnalysisReportWhereInput[]
    overallScore?: FloatFilter<"AnalysisReport"> | number
    metrics?: JsonFilter<"AnalysisReport">
    recommendations?: JsonNullableFilter<"AnalysisReport">
    generatedAt?: DateTimeFilter<"AnalysisReport"> | Date | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    perCategory?: AnalysisCategoryScoreListRelationFilter
  }, "id" | "interviewId">

  export type AnalysisReportOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    overallScore?: SortOrder
    metrics?: SortOrder
    recommendations?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    _count?: AnalysisReportCountOrderByAggregateInput
    _avg?: AnalysisReportAvgOrderByAggregateInput
    _max?: AnalysisReportMaxOrderByAggregateInput
    _min?: AnalysisReportMinOrderByAggregateInput
    _sum?: AnalysisReportSumOrderByAggregateInput
  }

  export type AnalysisReportScalarWhereWithAggregatesInput = {
    AND?: AnalysisReportScalarWhereWithAggregatesInput | AnalysisReportScalarWhereWithAggregatesInput[]
    OR?: AnalysisReportScalarWhereWithAggregatesInput[]
    NOT?: AnalysisReportScalarWhereWithAggregatesInput | AnalysisReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisReport"> | string
    interviewId?: StringWithAggregatesFilter<"AnalysisReport"> | string
    overallScore?: FloatWithAggregatesFilter<"AnalysisReport"> | number
    metrics?: JsonWithAggregatesFilter<"AnalysisReport">
    recommendations?: JsonNullableWithAggregatesFilter<"AnalysisReport">
    generatedAt?: DateTimeWithAggregatesFilter<"AnalysisReport"> | Date | string
  }

  export type AnalysisCategoryScoreWhereInput = {
    AND?: AnalysisCategoryScoreWhereInput | AnalysisCategoryScoreWhereInput[]
    OR?: AnalysisCategoryScoreWhereInput[]
    NOT?: AnalysisCategoryScoreWhereInput | AnalysisCategoryScoreWhereInput[]
    id?: StringFilter<"AnalysisCategoryScore"> | string
    reportId?: StringFilter<"AnalysisCategoryScore"> | string
    category?: EnumAnalysisCategoryFilter<"AnalysisCategoryScore"> | $Enums.AnalysisCategory
    score?: FloatFilter<"AnalysisCategoryScore"> | number
    details?: JsonNullableFilter<"AnalysisCategoryScore">
    report?: XOR<AnalysisReportScalarRelationFilter, AnalysisReportWhereInput>
  }

  export type AnalysisCategoryScoreOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    category?: SortOrder
    score?: SortOrder
    details?: SortOrderInput | SortOrder
    report?: AnalysisReportOrderByWithRelationInput
  }

  export type AnalysisCategoryScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisCategoryScoreWhereInput | AnalysisCategoryScoreWhereInput[]
    OR?: AnalysisCategoryScoreWhereInput[]
    NOT?: AnalysisCategoryScoreWhereInput | AnalysisCategoryScoreWhereInput[]
    reportId?: StringFilter<"AnalysisCategoryScore"> | string
    category?: EnumAnalysisCategoryFilter<"AnalysisCategoryScore"> | $Enums.AnalysisCategory
    score?: FloatFilter<"AnalysisCategoryScore"> | number
    details?: JsonNullableFilter<"AnalysisCategoryScore">
    report?: XOR<AnalysisReportScalarRelationFilter, AnalysisReportWhereInput>
  }, "id">

  export type AnalysisCategoryScoreOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    category?: SortOrder
    score?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: AnalysisCategoryScoreCountOrderByAggregateInput
    _avg?: AnalysisCategoryScoreAvgOrderByAggregateInput
    _max?: AnalysisCategoryScoreMaxOrderByAggregateInput
    _min?: AnalysisCategoryScoreMinOrderByAggregateInput
    _sum?: AnalysisCategoryScoreSumOrderByAggregateInput
  }

  export type AnalysisCategoryScoreScalarWhereWithAggregatesInput = {
    AND?: AnalysisCategoryScoreScalarWhereWithAggregatesInput | AnalysisCategoryScoreScalarWhereWithAggregatesInput[]
    OR?: AnalysisCategoryScoreScalarWhereWithAggregatesInput[]
    NOT?: AnalysisCategoryScoreScalarWhereWithAggregatesInput | AnalysisCategoryScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisCategoryScore"> | string
    reportId?: StringWithAggregatesFilter<"AnalysisCategoryScore"> | string
    category?: EnumAnalysisCategoryWithAggregatesFilter<"AnalysisCategoryScore"> | $Enums.AnalysisCategory
    score?: FloatWithAggregatesFilter<"AnalysisCategoryScore"> | number
    details?: JsonNullableWithAggregatesFilter<"AnalysisCategoryScore">
  }

  export type FlaggedIssueWhereInput = {
    AND?: FlaggedIssueWhereInput | FlaggedIssueWhereInput[]
    OR?: FlaggedIssueWhereInput[]
    NOT?: FlaggedIssueWhereInput | FlaggedIssueWhereInput[]
    id?: StringFilter<"FlaggedIssue"> | string
    interviewId?: StringFilter<"FlaggedIssue"> | string
    category?: EnumAnalysisCategoryFilter<"FlaggedIssue"> | $Enums.AnalysisCategory
    timestampMs?: IntNullableFilter<"FlaggedIssue"> | number | null
    description?: StringFilter<"FlaggedIssue"> | string
    severity?: IntFilter<"FlaggedIssue"> | number
    createdAt?: DateTimeFilter<"FlaggedIssue"> | Date | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }

  export type FlaggedIssueOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    category?: SortOrder
    timestampMs?: SortOrderInput | SortOrder
    description?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type FlaggedIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlaggedIssueWhereInput | FlaggedIssueWhereInput[]
    OR?: FlaggedIssueWhereInput[]
    NOT?: FlaggedIssueWhereInput | FlaggedIssueWhereInput[]
    interviewId?: StringFilter<"FlaggedIssue"> | string
    category?: EnumAnalysisCategoryFilter<"FlaggedIssue"> | $Enums.AnalysisCategory
    timestampMs?: IntNullableFilter<"FlaggedIssue"> | number | null
    description?: StringFilter<"FlaggedIssue"> | string
    severity?: IntFilter<"FlaggedIssue"> | number
    createdAt?: DateTimeFilter<"FlaggedIssue"> | Date | string
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }, "id">

  export type FlaggedIssueOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    category?: SortOrder
    timestampMs?: SortOrderInput | SortOrder
    description?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    _count?: FlaggedIssueCountOrderByAggregateInput
    _avg?: FlaggedIssueAvgOrderByAggregateInput
    _max?: FlaggedIssueMaxOrderByAggregateInput
    _min?: FlaggedIssueMinOrderByAggregateInput
    _sum?: FlaggedIssueSumOrderByAggregateInput
  }

  export type FlaggedIssueScalarWhereWithAggregatesInput = {
    AND?: FlaggedIssueScalarWhereWithAggregatesInput | FlaggedIssueScalarWhereWithAggregatesInput[]
    OR?: FlaggedIssueScalarWhereWithAggregatesInput[]
    NOT?: FlaggedIssueScalarWhereWithAggregatesInput | FlaggedIssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlaggedIssue"> | string
    interviewId?: StringWithAggregatesFilter<"FlaggedIssue"> | string
    category?: EnumAnalysisCategoryWithAggregatesFilter<"FlaggedIssue"> | $Enums.AnalysisCategory
    timestampMs?: IntNullableWithAggregatesFilter<"FlaggedIssue"> | number | null
    description?: StringWithAggregatesFilter<"FlaggedIssue"> | string
    severity?: IntWithAggregatesFilter<"FlaggedIssue"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FlaggedIssue"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    interviewId?: StringNullableFilter<"Question"> | string | null
    prompt?: StringFilter<"Question"> | string
    expectedAnswer?: JsonNullableFilter<"Question">
    createdAt?: DateTimeFilter<"Question"> | Date | string
    interview?: XOR<InterviewNullableScalarRelationFilter, InterviewWhereInput> | null
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    interviewId?: StringNullableFilter<"Question"> | string | null
    prompt?: StringFilter<"Question"> | string
    expectedAnswer?: JsonNullableFilter<"Question">
    createdAt?: DateTimeFilter<"Question"> | Date | string
    interview?: XOR<InterviewNullableScalarRelationFilter, InterviewWhereInput> | null
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    interviewId?: StringNullableWithAggregatesFilter<"Question"> | string | null
    prompt?: StringWithAggregatesFilter<"Question"> | string
    expectedAnswer?: JsonNullableWithAggregatesFilter<"Question">
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    interviewConfigs?: InterviewConfigCreateNestedManyWithoutUserInput
    interviews?: InterviewCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    interviewConfigs?: InterviewConfigUncheckedCreateNestedManyWithoutUserInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    interviewConfigs?: InterviewConfigUpdateManyWithoutUserNestedInput
    interviews?: InterviewUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    interviewConfigs?: InterviewConfigUncheckedUpdateManyWithoutUserNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    interviewConfigs?: InterviewConfigCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    interviewConfigs?: InterviewConfigUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    interviewConfigs?: InterviewConfigUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewConfigs?: InterviewConfigUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewConfigCreateInput = {
    id?: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInterviewConfigsInput
    Resume?: ResumeCreateNestedOneWithoutInterviewConfigsInput
    interviews?: InterviewCreateNestedManyWithoutConfigInput
  }

  export type InterviewConfigUncheckedCreateInput = {
    id?: string
    userId: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    resumeId?: string | null
    interviews?: InterviewUncheckedCreateNestedManyWithoutConfigInput
  }

  export type InterviewConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterviewConfigsNestedInput
    Resume?: ResumeUpdateOneWithoutInterviewConfigsNestedInput
    interviews?: InterviewUpdateManyWithoutConfigNestedInput
  }

  export type InterviewConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
    interviews?: InterviewUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type InterviewConfigCreateManyInput = {
    id?: string
    userId: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    resumeId?: string | null
  }

  export type InterviewConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewCreateInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateManyInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
  }

  export type InterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateInput = {
    id?: string
    s3Key: string
    s3Url?: string | null
    mediaType: $Enums.MediaType
    durationMs?: number | null
    sizeBytes?: number | null
    uploadedAt?: Date | string
    processed?: boolean
    notes?: string | null
    interview: InterviewCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    interviewId: string
    s3Key: string
    s3Url?: string | null
    mediaType: $Enums.MediaType
    durationMs?: number | null
    sizeBytes?: number | null
    uploadedAt?: Date | string
    processed?: boolean
    notes?: string | null
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    interview?: InterviewUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateManyInput = {
    id?: string
    interviewId: string
    s3Key: string
    s3Url?: string | null
    mediaType: $Enums.MediaType
    durationMs?: number | null
    sizeBytes?: number | null
    uploadedAt?: Date | string
    processed?: boolean
    notes?: string | null
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TranscriptCreateInput = {
    id?: string
    speaker: string
    text: string
    startTimeMs?: number | null
    endTimeMs?: number | null
    createdAt?: Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
    interview: InterviewCreateNestedOneWithoutTranscriptsInput
  }

  export type TranscriptUncheckedCreateInput = {
    id?: string
    interviewId: string
    speaker: string
    text: string
    startTimeMs?: number | null
    endTimeMs?: number | null
    createdAt?: Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
    interview?: InterviewUpdateOneRequiredWithoutTranscriptsNestedInput
  }

  export type TranscriptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptCreateManyInput = {
    id?: string
    interviewId: string
    speaker: string
    text: string
    startTimeMs?: number | null
    endTimeMs?: number | null
    createdAt?: Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisReportCreateInput = {
    id?: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutReportInput
    perCategory?: AnalysisCategoryScoreCreateNestedManyWithoutReportInput
  }

  export type AnalysisReportUncheckedCreateInput = {
    id?: string
    interviewId: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    perCategory?: AnalysisCategoryScoreUncheckedCreateNestedManyWithoutReportInput
  }

  export type AnalysisReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutReportNestedInput
    perCategory?: AnalysisCategoryScoreUpdateManyWithoutReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perCategory?: AnalysisCategoryScoreUncheckedUpdateManyWithoutReportNestedInput
  }

  export type AnalysisReportCreateManyInput = {
    id?: string
    interviewId: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
  }

  export type AnalysisReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCategoryScoreCreateInput = {
    id?: string
    category: $Enums.AnalysisCategory
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
    report: AnalysisReportCreateNestedOneWithoutPerCategoryInput
  }

  export type AnalysisCategoryScoreUncheckedCreateInput = {
    id?: string
    reportId: string
    category: $Enums.AnalysisCategory
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    report?: AnalysisReportUpdateOneRequiredWithoutPerCategoryNestedInput
  }

  export type AnalysisCategoryScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreCreateManyInput = {
    id?: string
    reportId: string
    category: $Enums.AnalysisCategory
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FlaggedIssueCreateInput = {
    id?: string
    category: $Enums.AnalysisCategory
    timestampMs?: number | null
    description: string
    severity: number
    createdAt?: Date | string
    interview: InterviewCreateNestedOneWithoutIssuesInput
  }

  export type FlaggedIssueUncheckedCreateInput = {
    id?: string
    interviewId: string
    category: $Enums.AnalysisCategory
    timestampMs?: number | null
    description: string
    severity: number
    createdAt?: Date | string
  }

  export type FlaggedIssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type FlaggedIssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedIssueCreateManyInput = {
    id?: string
    interviewId: string
    category: $Enums.AnalysisCategory
    timestampMs?: number | null
    description: string
    severity: number
    createdAt?: Date | string
  }

  export type FlaggedIssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedIssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    prompt: string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    interview?: InterviewCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    interviewId?: string | null
    prompt: string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    interviewId?: string | null
    prompt: string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type InterviewConfigListRelationFilter = {
    every?: InterviewConfigWhereInput
    some?: InterviewConfigWhereInput
    none?: InterviewConfigWhereInput
  }

  export type InterviewListRelationFilter = {
    every?: InterviewWhereInput
    some?: InterviewWhereInput
    none?: InterviewWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Key?: SortOrder
    textExtract?: SortOrder
    parsedJson?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Key?: SortOrder
    textExtract?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    s3Key?: SortOrder
    textExtract?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type EnumInterviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeFilter<$PrismaModel> | $Enums.InterviewType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type InterviewConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    skills?: SortOrder
    durationMinutes?: SortOrder
    difficulty?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    resumeId?: SortOrder
  }

  export type InterviewConfigAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type InterviewConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    durationMinutes?: SortOrder
    difficulty?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    resumeId?: SortOrder
  }

  export type InterviewConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    durationMinutes?: SortOrder
    difficulty?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    resumeId?: SortOrder
  }

  export type InterviewConfigSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type EnumInterviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewTypeFilter<$PrismaModel>
    _max?: NestedEnumInterviewTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InterviewConfigScalarRelationFilter = {
    is?: InterviewConfigWhereInput
    isNot?: InterviewConfigWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type TranscriptListRelationFilter = {
    every?: TranscriptWhereInput
    some?: TranscriptWhereInput
    none?: TranscriptWhereInput
  }

  export type AnalysisReportNullableScalarRelationFilter = {
    is?: AnalysisReportWhereInput | null
    isNot?: AnalysisReportWhereInput | null
  }

  export type FlaggedIssueListRelationFilter = {
    every?: FlaggedIssueWhereInput
    some?: FlaggedIssueWhereInput
    none?: FlaggedIssueWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TranscriptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlaggedIssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
    interviewerModel?: SortOrder
    consentRecording?: SortOrder
    region?: SortOrder
    indexes?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
    interviewerModel?: SortOrder
    consentRecording?: SortOrder
    region?: SortOrder
    indexes?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    configId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
    interviewerModel?: SortOrder
    consentRecording?: SortOrder
    region?: SortOrder
    indexes?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InterviewScalarRelationFilter = {
    is?: InterviewWhereInput
    isNot?: InterviewWhereInput
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    s3Key?: SortOrder
    s3Url?: SortOrder
    mediaType?: SortOrder
    durationMs?: SortOrder
    sizeBytes?: SortOrder
    uploadedAt?: SortOrder
    processed?: SortOrder
    notes?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    durationMs?: SortOrder
    sizeBytes?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    s3Key?: SortOrder
    s3Url?: SortOrder
    mediaType?: SortOrder
    durationMs?: SortOrder
    sizeBytes?: SortOrder
    uploadedAt?: SortOrder
    processed?: SortOrder
    notes?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    s3Key?: SortOrder
    s3Url?: SortOrder
    mediaType?: SortOrder
    durationMs?: SortOrder
    sizeBytes?: SortOrder
    uploadedAt?: SortOrder
    processed?: SortOrder
    notes?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    durationMs?: SortOrder
    sizeBytes?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TranscriptCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startTimeMs?: SortOrder
    endTimeMs?: SortOrder
    createdAt?: SortOrder
    embeddingJson?: SortOrder
    tokensJson?: SortOrder
  }

  export type TranscriptAvgOrderByAggregateInput = {
    startTimeMs?: SortOrder
    endTimeMs?: SortOrder
  }

  export type TranscriptMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startTimeMs?: SortOrder
    endTimeMs?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    speaker?: SortOrder
    text?: SortOrder
    startTimeMs?: SortOrder
    endTimeMs?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptSumOrderByAggregateInput = {
    startTimeMs?: SortOrder
    endTimeMs?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalysisCategoryScoreListRelationFilter = {
    every?: AnalysisCategoryScoreWhereInput
    some?: AnalysisCategoryScoreWhereInput
    none?: AnalysisCategoryScoreWhereInput
  }

  export type AnalysisCategoryScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisReportCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    overallScore?: SortOrder
    metrics?: SortOrder
    recommendations?: SortOrder
    generatedAt?: SortOrder
  }

  export type AnalysisReportAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type AnalysisReportMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    overallScore?: SortOrder
    generatedAt?: SortOrder
  }

  export type AnalysisReportMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    overallScore?: SortOrder
    generatedAt?: SortOrder
  }

  export type AnalysisReportSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumAnalysisCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisCategory | EnumAnalysisCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisCategoryFilter<$PrismaModel> | $Enums.AnalysisCategory
  }

  export type AnalysisReportScalarRelationFilter = {
    is?: AnalysisReportWhereInput
    isNot?: AnalysisReportWhereInput
  }

  export type AnalysisCategoryScoreCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    category?: SortOrder
    score?: SortOrder
    details?: SortOrder
  }

  export type AnalysisCategoryScoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AnalysisCategoryScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    category?: SortOrder
    score?: SortOrder
  }

  export type AnalysisCategoryScoreMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    category?: SortOrder
    score?: SortOrder
  }

  export type AnalysisCategoryScoreSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumAnalysisCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisCategory | EnumAnalysisCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisCategoryFilter<$PrismaModel>
    _max?: NestedEnumAnalysisCategoryFilter<$PrismaModel>
  }

  export type FlaggedIssueCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    category?: SortOrder
    timestampMs?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type FlaggedIssueAvgOrderByAggregateInput = {
    timestampMs?: SortOrder
    severity?: SortOrder
  }

  export type FlaggedIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    category?: SortOrder
    timestampMs?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type FlaggedIssueMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    category?: SortOrder
    timestampMs?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type FlaggedIssueSumOrderByAggregateInput = {
    timestampMs?: SortOrder
    severity?: SortOrder
  }

  export type InterviewNullableScalarRelationFilter = {
    is?: InterviewWhereInput | null
    isNot?: InterviewWhereInput | null
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    prompt?: SortOrder
    expectedAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    prompt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type InterviewConfigCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewConfigCreateWithoutUserInput, InterviewConfigUncheckedCreateWithoutUserInput> | InterviewConfigCreateWithoutUserInput[] | InterviewConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutUserInput | InterviewConfigCreateOrConnectWithoutUserInput[]
    createMany?: InterviewConfigCreateManyUserInputEnvelope
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
  }

  export type InterviewCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type InterviewConfigUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewConfigCreateWithoutUserInput, InterviewConfigUncheckedCreateWithoutUserInput> | InterviewConfigCreateWithoutUserInput[] | InterviewConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutUserInput | InterviewConfigCreateOrConnectWithoutUserInput[]
    createMany?: InterviewConfigCreateManyUserInputEnvelope
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type InterviewConfigUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewConfigCreateWithoutUserInput, InterviewConfigUncheckedCreateWithoutUserInput> | InterviewConfigCreateWithoutUserInput[] | InterviewConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutUserInput | InterviewConfigCreateOrConnectWithoutUserInput[]
    upsert?: InterviewConfigUpsertWithWhereUniqueWithoutUserInput | InterviewConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewConfigCreateManyUserInputEnvelope
    set?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    disconnect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    delete?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    update?: InterviewConfigUpdateWithWhereUniqueWithoutUserInput | InterviewConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewConfigUpdateManyWithWhereWithoutUserInput | InterviewConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewConfigScalarWhereInput | InterviewConfigScalarWhereInput[]
  }

  export type InterviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutUserInput | InterviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutUserInput | InterviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutUserInput | InterviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type InterviewConfigUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewConfigCreateWithoutUserInput, InterviewConfigUncheckedCreateWithoutUserInput> | InterviewConfigCreateWithoutUserInput[] | InterviewConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutUserInput | InterviewConfigCreateOrConnectWithoutUserInput[]
    upsert?: InterviewConfigUpsertWithWhereUniqueWithoutUserInput | InterviewConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewConfigCreateManyUserInputEnvelope
    set?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    disconnect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    delete?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    update?: InterviewConfigUpdateWithWhereUniqueWithoutUserInput | InterviewConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewConfigUpdateManyWithWhereWithoutUserInput | InterviewConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewConfigScalarWhereInput | InterviewConfigScalarWhereInput[]
  }

  export type InterviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput> | InterviewCreateWithoutUserInput[] | InterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutUserInput | InterviewCreateOrConnectWithoutUserInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutUserInput | InterviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewCreateManyUserInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutUserInput | InterviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutUserInput | InterviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type InterviewConfigCreateNestedManyWithoutResumeInput = {
    create?: XOR<InterviewConfigCreateWithoutResumeInput, InterviewConfigUncheckedCreateWithoutResumeInput> | InterviewConfigCreateWithoutResumeInput[] | InterviewConfigUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutResumeInput | InterviewConfigCreateOrConnectWithoutResumeInput[]
    createMany?: InterviewConfigCreateManyResumeInputEnvelope
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
  }

  export type InterviewConfigUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<InterviewConfigCreateWithoutResumeInput, InterviewConfigUncheckedCreateWithoutResumeInput> | InterviewConfigCreateWithoutResumeInput[] | InterviewConfigUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutResumeInput | InterviewConfigCreateOrConnectWithoutResumeInput[]
    createMany?: InterviewConfigCreateManyResumeInputEnvelope
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type InterviewConfigUpdateManyWithoutResumeNestedInput = {
    create?: XOR<InterviewConfigCreateWithoutResumeInput, InterviewConfigUncheckedCreateWithoutResumeInput> | InterviewConfigCreateWithoutResumeInput[] | InterviewConfigUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutResumeInput | InterviewConfigCreateOrConnectWithoutResumeInput[]
    upsert?: InterviewConfigUpsertWithWhereUniqueWithoutResumeInput | InterviewConfigUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: InterviewConfigCreateManyResumeInputEnvelope
    set?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    disconnect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    delete?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    update?: InterviewConfigUpdateWithWhereUniqueWithoutResumeInput | InterviewConfigUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: InterviewConfigUpdateManyWithWhereWithoutResumeInput | InterviewConfigUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: InterviewConfigScalarWhereInput | InterviewConfigScalarWhereInput[]
  }

  export type InterviewConfigUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<InterviewConfigCreateWithoutResumeInput, InterviewConfigUncheckedCreateWithoutResumeInput> | InterviewConfigCreateWithoutResumeInput[] | InterviewConfigUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutResumeInput | InterviewConfigCreateOrConnectWithoutResumeInput[]
    upsert?: InterviewConfigUpsertWithWhereUniqueWithoutResumeInput | InterviewConfigUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: InterviewConfigCreateManyResumeInputEnvelope
    set?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    disconnect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    delete?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    connect?: InterviewConfigWhereUniqueInput | InterviewConfigWhereUniqueInput[]
    update?: InterviewConfigUpdateWithWhereUniqueWithoutResumeInput | InterviewConfigUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: InterviewConfigUpdateManyWithWhereWithoutResumeInput | InterviewConfigUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: InterviewConfigScalarWhereInput | InterviewConfigScalarWhereInput[]
  }

  export type InterviewConfigCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutInterviewConfigsInput = {
    create?: XOR<UserCreateWithoutInterviewConfigsInput, UserUncheckedCreateWithoutInterviewConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewConfigsInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutInterviewConfigsInput = {
    create?: XOR<ResumeCreateWithoutInterviewConfigsInput, ResumeUncheckedCreateWithoutInterviewConfigsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutInterviewConfigsInput
    connect?: ResumeWhereUniqueInput
  }

  export type InterviewCreateNestedManyWithoutConfigInput = {
    create?: XOR<InterviewCreateWithoutConfigInput, InterviewUncheckedCreateWithoutConfigInput> | InterviewCreateWithoutConfigInput[] | InterviewUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutConfigInput | InterviewCreateOrConnectWithoutConfigInput[]
    createMany?: InterviewCreateManyConfigInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<InterviewCreateWithoutConfigInput, InterviewUncheckedCreateWithoutConfigInput> | InterviewCreateWithoutConfigInput[] | InterviewUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutConfigInput | InterviewCreateOrConnectWithoutConfigInput[]
    createMany?: InterviewCreateManyConfigInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type InterviewConfigUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type EnumInterviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.InterviewType
  }

  export type UserUpdateOneRequiredWithoutInterviewConfigsNestedInput = {
    create?: XOR<UserCreateWithoutInterviewConfigsInput, UserUncheckedCreateWithoutInterviewConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewConfigsInput
    upsert?: UserUpsertWithoutInterviewConfigsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterviewConfigsInput, UserUpdateWithoutInterviewConfigsInput>, UserUncheckedUpdateWithoutInterviewConfigsInput>
  }

  export type ResumeUpdateOneWithoutInterviewConfigsNestedInput = {
    create?: XOR<ResumeCreateWithoutInterviewConfigsInput, ResumeUncheckedCreateWithoutInterviewConfigsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutInterviewConfigsInput
    upsert?: ResumeUpsertWithoutInterviewConfigsInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutInterviewConfigsInput, ResumeUpdateWithoutInterviewConfigsInput>, ResumeUncheckedUpdateWithoutInterviewConfigsInput>
  }

  export type InterviewUpdateManyWithoutConfigNestedInput = {
    create?: XOR<InterviewCreateWithoutConfigInput, InterviewUncheckedCreateWithoutConfigInput> | InterviewCreateWithoutConfigInput[] | InterviewUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutConfigInput | InterviewCreateOrConnectWithoutConfigInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutConfigInput | InterviewUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: InterviewCreateManyConfigInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutConfigInput | InterviewUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutConfigInput | InterviewUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InterviewUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<InterviewCreateWithoutConfigInput, InterviewUncheckedCreateWithoutConfigInput> | InterviewCreateWithoutConfigInput[] | InterviewUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutConfigInput | InterviewCreateOrConnectWithoutConfigInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutConfigInput | InterviewUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: InterviewCreateManyConfigInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutConfigInput | InterviewUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutConfigInput | InterviewUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewsInput
    connect?: UserWhereUniqueInput
  }

  export type InterviewConfigCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<InterviewConfigCreateWithoutInterviewsInput, InterviewConfigUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutInterviewsInput
    connect?: InterviewConfigWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutInterviewInput = {
    create?: XOR<MediaCreateWithoutInterviewInput, MediaUncheckedCreateWithoutInterviewInput> | MediaCreateWithoutInterviewInput[] | MediaUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutInterviewInput | MediaCreateOrConnectWithoutInterviewInput[]
    createMany?: MediaCreateManyInterviewInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type TranscriptCreateNestedManyWithoutInterviewInput = {
    create?: XOR<TranscriptCreateWithoutInterviewInput, TranscriptUncheckedCreateWithoutInterviewInput> | TranscriptCreateWithoutInterviewInput[] | TranscriptUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: TranscriptCreateOrConnectWithoutInterviewInput | TranscriptCreateOrConnectWithoutInterviewInput[]
    createMany?: TranscriptCreateManyInterviewInputEnvelope
    connect?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
  }

  export type AnalysisReportCreateNestedOneWithoutInterviewInput = {
    create?: XOR<AnalysisReportCreateWithoutInterviewInput, AnalysisReportUncheckedCreateWithoutInterviewInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutInterviewInput
    connect?: AnalysisReportWhereUniqueInput
  }

  export type FlaggedIssueCreateNestedManyWithoutInterviewInput = {
    create?: XOR<FlaggedIssueCreateWithoutInterviewInput, FlaggedIssueUncheckedCreateWithoutInterviewInput> | FlaggedIssueCreateWithoutInterviewInput[] | FlaggedIssueUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FlaggedIssueCreateOrConnectWithoutInterviewInput | FlaggedIssueCreateOrConnectWithoutInterviewInput[]
    createMany?: FlaggedIssueCreateManyInterviewInputEnvelope
    connect?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutInterviewInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<MediaCreateWithoutInterviewInput, MediaUncheckedCreateWithoutInterviewInput> | MediaCreateWithoutInterviewInput[] | MediaUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutInterviewInput | MediaCreateOrConnectWithoutInterviewInput[]
    createMany?: MediaCreateManyInterviewInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type TranscriptUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<TranscriptCreateWithoutInterviewInput, TranscriptUncheckedCreateWithoutInterviewInput> | TranscriptCreateWithoutInterviewInput[] | TranscriptUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: TranscriptCreateOrConnectWithoutInterviewInput | TranscriptCreateOrConnectWithoutInterviewInput[]
    createMany?: TranscriptCreateManyInterviewInputEnvelope
    connect?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
  }

  export type AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput = {
    create?: XOR<AnalysisReportCreateWithoutInterviewInput, AnalysisReportUncheckedCreateWithoutInterviewInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutInterviewInput
    connect?: AnalysisReportWhereUniqueInput
  }

  export type FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<FlaggedIssueCreateWithoutInterviewInput, FlaggedIssueUncheckedCreateWithoutInterviewInput> | FlaggedIssueCreateWithoutInterviewInput[] | FlaggedIssueUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FlaggedIssueCreateOrConnectWithoutInterviewInput | FlaggedIssueCreateOrConnectWithoutInterviewInput[]
    createMany?: FlaggedIssueCreateManyInterviewInputEnvelope
    connect?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewsInput
    upsert?: UserUpsertWithoutInterviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterviewsInput, UserUpdateWithoutInterviewsInput>, UserUncheckedUpdateWithoutInterviewsInput>
  }

  export type InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: XOR<InterviewConfigCreateWithoutInterviewsInput, InterviewConfigUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: InterviewConfigCreateOrConnectWithoutInterviewsInput
    upsert?: InterviewConfigUpsertWithoutInterviewsInput
    connect?: InterviewConfigWhereUniqueInput
    update?: XOR<XOR<InterviewConfigUpdateToOneWithWhereWithoutInterviewsInput, InterviewConfigUpdateWithoutInterviewsInput>, InterviewConfigUncheckedUpdateWithoutInterviewsInput>
  }

  export type MediaUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<MediaCreateWithoutInterviewInput, MediaUncheckedCreateWithoutInterviewInput> | MediaCreateWithoutInterviewInput[] | MediaUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutInterviewInput | MediaCreateOrConnectWithoutInterviewInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutInterviewInput | MediaUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: MediaCreateManyInterviewInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutInterviewInput | MediaUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutInterviewInput | MediaUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type TranscriptUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<TranscriptCreateWithoutInterviewInput, TranscriptUncheckedCreateWithoutInterviewInput> | TranscriptCreateWithoutInterviewInput[] | TranscriptUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: TranscriptCreateOrConnectWithoutInterviewInput | TranscriptCreateOrConnectWithoutInterviewInput[]
    upsert?: TranscriptUpsertWithWhereUniqueWithoutInterviewInput | TranscriptUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: TranscriptCreateManyInterviewInputEnvelope
    set?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    disconnect?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    delete?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    connect?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    update?: TranscriptUpdateWithWhereUniqueWithoutInterviewInput | TranscriptUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: TranscriptUpdateManyWithWhereWithoutInterviewInput | TranscriptUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: TranscriptScalarWhereInput | TranscriptScalarWhereInput[]
  }

  export type AnalysisReportUpdateOneWithoutInterviewNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutInterviewInput, AnalysisReportUncheckedCreateWithoutInterviewInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutInterviewInput
    upsert?: AnalysisReportUpsertWithoutInterviewInput
    disconnect?: AnalysisReportWhereInput | boolean
    delete?: AnalysisReportWhereInput | boolean
    connect?: AnalysisReportWhereUniqueInput
    update?: XOR<XOR<AnalysisReportUpdateToOneWithWhereWithoutInterviewInput, AnalysisReportUpdateWithoutInterviewInput>, AnalysisReportUncheckedUpdateWithoutInterviewInput>
  }

  export type FlaggedIssueUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<FlaggedIssueCreateWithoutInterviewInput, FlaggedIssueUncheckedCreateWithoutInterviewInput> | FlaggedIssueCreateWithoutInterviewInput[] | FlaggedIssueUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FlaggedIssueCreateOrConnectWithoutInterviewInput | FlaggedIssueCreateOrConnectWithoutInterviewInput[]
    upsert?: FlaggedIssueUpsertWithWhereUniqueWithoutInterviewInput | FlaggedIssueUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: FlaggedIssueCreateManyInterviewInputEnvelope
    set?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    disconnect?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    delete?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    connect?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    update?: FlaggedIssueUpdateWithWhereUniqueWithoutInterviewInput | FlaggedIssueUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: FlaggedIssueUpdateManyWithWhereWithoutInterviewInput | FlaggedIssueUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: FlaggedIssueScalarWhereInput | FlaggedIssueScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutInterviewInput | QuestionUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutInterviewInput | QuestionUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutInterviewInput | QuestionUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<MediaCreateWithoutInterviewInput, MediaUncheckedCreateWithoutInterviewInput> | MediaCreateWithoutInterviewInput[] | MediaUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutInterviewInput | MediaCreateOrConnectWithoutInterviewInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutInterviewInput | MediaUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: MediaCreateManyInterviewInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutInterviewInput | MediaUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutInterviewInput | MediaUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type TranscriptUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<TranscriptCreateWithoutInterviewInput, TranscriptUncheckedCreateWithoutInterviewInput> | TranscriptCreateWithoutInterviewInput[] | TranscriptUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: TranscriptCreateOrConnectWithoutInterviewInput | TranscriptCreateOrConnectWithoutInterviewInput[]
    upsert?: TranscriptUpsertWithWhereUniqueWithoutInterviewInput | TranscriptUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: TranscriptCreateManyInterviewInputEnvelope
    set?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    disconnect?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    delete?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    connect?: TranscriptWhereUniqueInput | TranscriptWhereUniqueInput[]
    update?: TranscriptUpdateWithWhereUniqueWithoutInterviewInput | TranscriptUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: TranscriptUpdateManyWithWhereWithoutInterviewInput | TranscriptUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: TranscriptScalarWhereInput | TranscriptScalarWhereInput[]
  }

  export type AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutInterviewInput, AnalysisReportUncheckedCreateWithoutInterviewInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutInterviewInput
    upsert?: AnalysisReportUpsertWithoutInterviewInput
    disconnect?: AnalysisReportWhereInput | boolean
    delete?: AnalysisReportWhereInput | boolean
    connect?: AnalysisReportWhereUniqueInput
    update?: XOR<XOR<AnalysisReportUpdateToOneWithWhereWithoutInterviewInput, AnalysisReportUpdateWithoutInterviewInput>, AnalysisReportUncheckedUpdateWithoutInterviewInput>
  }

  export type FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<FlaggedIssueCreateWithoutInterviewInput, FlaggedIssueUncheckedCreateWithoutInterviewInput> | FlaggedIssueCreateWithoutInterviewInput[] | FlaggedIssueUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: FlaggedIssueCreateOrConnectWithoutInterviewInput | FlaggedIssueCreateOrConnectWithoutInterviewInput[]
    upsert?: FlaggedIssueUpsertWithWhereUniqueWithoutInterviewInput | FlaggedIssueUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: FlaggedIssueCreateManyInterviewInputEnvelope
    set?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    disconnect?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    delete?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    connect?: FlaggedIssueWhereUniqueInput | FlaggedIssueWhereUniqueInput[]
    update?: FlaggedIssueUpdateWithWhereUniqueWithoutInterviewInput | FlaggedIssueUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: FlaggedIssueUpdateManyWithWhereWithoutInterviewInput | FlaggedIssueUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: FlaggedIssueScalarWhereInput | FlaggedIssueScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput> | QuestionCreateWithoutInterviewInput[] | QuestionUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutInterviewInput | QuestionCreateOrConnectWithoutInterviewInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutInterviewInput | QuestionUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: QuestionCreateManyInterviewInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutInterviewInput | QuestionUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutInterviewInput | QuestionUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewCreateNestedOneWithoutMediaInput = {
    create?: XOR<InterviewCreateWithoutMediaInput, InterviewUncheckedCreateWithoutMediaInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutMediaInput
    connect?: InterviewWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<InterviewCreateWithoutMediaInput, InterviewUncheckedCreateWithoutMediaInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutMediaInput
    upsert?: InterviewUpsertWithoutMediaInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutMediaInput, InterviewUpdateWithoutMediaInput>, InterviewUncheckedUpdateWithoutMediaInput>
  }

  export type InterviewCreateNestedOneWithoutTranscriptsInput = {
    create?: XOR<InterviewCreateWithoutTranscriptsInput, InterviewUncheckedCreateWithoutTranscriptsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutTranscriptsInput
    connect?: InterviewWhereUniqueInput
  }

  export type InterviewUpdateOneRequiredWithoutTranscriptsNestedInput = {
    create?: XOR<InterviewCreateWithoutTranscriptsInput, InterviewUncheckedCreateWithoutTranscriptsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutTranscriptsInput
    upsert?: InterviewUpsertWithoutTranscriptsInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutTranscriptsInput, InterviewUpdateWithoutTranscriptsInput>, InterviewUncheckedUpdateWithoutTranscriptsInput>
  }

  export type InterviewCreateNestedOneWithoutReportInput = {
    create?: XOR<InterviewCreateWithoutReportInput, InterviewUncheckedCreateWithoutReportInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReportInput
    connect?: InterviewWhereUniqueInput
  }

  export type AnalysisCategoryScoreCreateNestedManyWithoutReportInput = {
    create?: XOR<AnalysisCategoryScoreCreateWithoutReportInput, AnalysisCategoryScoreUncheckedCreateWithoutReportInput> | AnalysisCategoryScoreCreateWithoutReportInput[] | AnalysisCategoryScoreUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AnalysisCategoryScoreCreateOrConnectWithoutReportInput | AnalysisCategoryScoreCreateOrConnectWithoutReportInput[]
    createMany?: AnalysisCategoryScoreCreateManyReportInputEnvelope
    connect?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
  }

  export type AnalysisCategoryScoreUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<AnalysisCategoryScoreCreateWithoutReportInput, AnalysisCategoryScoreUncheckedCreateWithoutReportInput> | AnalysisCategoryScoreCreateWithoutReportInput[] | AnalysisCategoryScoreUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AnalysisCategoryScoreCreateOrConnectWithoutReportInput | AnalysisCategoryScoreCreateOrConnectWithoutReportInput[]
    createMany?: AnalysisCategoryScoreCreateManyReportInputEnvelope
    connect?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<InterviewCreateWithoutReportInput, InterviewUncheckedCreateWithoutReportInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReportInput
    upsert?: InterviewUpsertWithoutReportInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutReportInput, InterviewUpdateWithoutReportInput>, InterviewUncheckedUpdateWithoutReportInput>
  }

  export type AnalysisCategoryScoreUpdateManyWithoutReportNestedInput = {
    create?: XOR<AnalysisCategoryScoreCreateWithoutReportInput, AnalysisCategoryScoreUncheckedCreateWithoutReportInput> | AnalysisCategoryScoreCreateWithoutReportInput[] | AnalysisCategoryScoreUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AnalysisCategoryScoreCreateOrConnectWithoutReportInput | AnalysisCategoryScoreCreateOrConnectWithoutReportInput[]
    upsert?: AnalysisCategoryScoreUpsertWithWhereUniqueWithoutReportInput | AnalysisCategoryScoreUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: AnalysisCategoryScoreCreateManyReportInputEnvelope
    set?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    disconnect?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    delete?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    connect?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    update?: AnalysisCategoryScoreUpdateWithWhereUniqueWithoutReportInput | AnalysisCategoryScoreUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: AnalysisCategoryScoreUpdateManyWithWhereWithoutReportInput | AnalysisCategoryScoreUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: AnalysisCategoryScoreScalarWhereInput | AnalysisCategoryScoreScalarWhereInput[]
  }

  export type AnalysisCategoryScoreUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<AnalysisCategoryScoreCreateWithoutReportInput, AnalysisCategoryScoreUncheckedCreateWithoutReportInput> | AnalysisCategoryScoreCreateWithoutReportInput[] | AnalysisCategoryScoreUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AnalysisCategoryScoreCreateOrConnectWithoutReportInput | AnalysisCategoryScoreCreateOrConnectWithoutReportInput[]
    upsert?: AnalysisCategoryScoreUpsertWithWhereUniqueWithoutReportInput | AnalysisCategoryScoreUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: AnalysisCategoryScoreCreateManyReportInputEnvelope
    set?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    disconnect?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    delete?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    connect?: AnalysisCategoryScoreWhereUniqueInput | AnalysisCategoryScoreWhereUniqueInput[]
    update?: AnalysisCategoryScoreUpdateWithWhereUniqueWithoutReportInput | AnalysisCategoryScoreUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: AnalysisCategoryScoreUpdateManyWithWhereWithoutReportInput | AnalysisCategoryScoreUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: AnalysisCategoryScoreScalarWhereInput | AnalysisCategoryScoreScalarWhereInput[]
  }

  export type AnalysisReportCreateNestedOneWithoutPerCategoryInput = {
    create?: XOR<AnalysisReportCreateWithoutPerCategoryInput, AnalysisReportUncheckedCreateWithoutPerCategoryInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutPerCategoryInput
    connect?: AnalysisReportWhereUniqueInput
  }

  export type EnumAnalysisCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisCategory
  }

  export type AnalysisReportUpdateOneRequiredWithoutPerCategoryNestedInput = {
    create?: XOR<AnalysisReportCreateWithoutPerCategoryInput, AnalysisReportUncheckedCreateWithoutPerCategoryInput>
    connectOrCreate?: AnalysisReportCreateOrConnectWithoutPerCategoryInput
    upsert?: AnalysisReportUpsertWithoutPerCategoryInput
    connect?: AnalysisReportWhereUniqueInput
    update?: XOR<XOR<AnalysisReportUpdateToOneWithWhereWithoutPerCategoryInput, AnalysisReportUpdateWithoutPerCategoryInput>, AnalysisReportUncheckedUpdateWithoutPerCategoryInput>
  }

  export type InterviewCreateNestedOneWithoutIssuesInput = {
    create?: XOR<InterviewCreateWithoutIssuesInput, InterviewUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutIssuesInput
    connect?: InterviewWhereUniqueInput
  }

  export type InterviewUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<InterviewCreateWithoutIssuesInput, InterviewUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutIssuesInput
    upsert?: InterviewUpsertWithoutIssuesInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutIssuesInput, InterviewUpdateWithoutIssuesInput>, InterviewUncheckedUpdateWithoutIssuesInput>
  }

  export type InterviewCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutQuestionsInput
    connect?: InterviewWhereUniqueInput
  }

  export type InterviewUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutQuestionsInput
    upsert?: InterviewUpsertWithoutQuestionsInput
    disconnect?: InterviewWhereInput | boolean
    delete?: InterviewWhereInput | boolean
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutQuestionsInput, InterviewUpdateWithoutQuestionsInput>, InterviewUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumInterviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeFilter<$PrismaModel> | $Enums.InterviewType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | EnumInterviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewType[] | ListEnumInterviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewTypeFilter<$PrismaModel>
    _max?: NestedEnumInterviewTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAnalysisCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisCategory | EnumAnalysisCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisCategoryFilter<$PrismaModel> | $Enums.AnalysisCategory
  }

  export type NestedEnumAnalysisCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisCategory | EnumAnalysisCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisCategory[] | ListEnumAnalysisCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisCategoryFilter<$PrismaModel>
    _max?: NestedEnumAnalysisCategoryFilter<$PrismaModel>
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    interviewConfigs?: InterviewConfigCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    interviewConfigs?: InterviewConfigUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterviewConfigCreateWithoutUserInput = {
    id?: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    Resume?: ResumeCreateNestedOneWithoutInterviewConfigsInput
    interviews?: InterviewCreateNestedManyWithoutConfigInput
  }

  export type InterviewConfigUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    resumeId?: string | null
    interviews?: InterviewUncheckedCreateNestedManyWithoutConfigInput
  }

  export type InterviewConfigCreateOrConnectWithoutUserInput = {
    where: InterviewConfigWhereUniqueInput
    create: XOR<InterviewConfigCreateWithoutUserInput, InterviewConfigUncheckedCreateWithoutUserInput>
  }

  export type InterviewConfigCreateManyUserInputEnvelope = {
    data: InterviewConfigCreateManyUserInput | InterviewConfigCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterviewCreateWithoutUserInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutUserInput = {
    id?: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutUserInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput>
  }

  export type InterviewCreateManyUserInputEnvelope = {
    data: InterviewCreateManyUserInput | InterviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    s3Key?: StringFilter<"Resume"> | string
    textExtract?: StringFilter<"Resume"> | string
    parsedJson?: JsonNullableFilter<"Resume">
    createdAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type InterviewConfigUpsertWithWhereUniqueWithoutUserInput = {
    where: InterviewConfigWhereUniqueInput
    update: XOR<InterviewConfigUpdateWithoutUserInput, InterviewConfigUncheckedUpdateWithoutUserInput>
    create: XOR<InterviewConfigCreateWithoutUserInput, InterviewConfigUncheckedCreateWithoutUserInput>
  }

  export type InterviewConfigUpdateWithWhereUniqueWithoutUserInput = {
    where: InterviewConfigWhereUniqueInput
    data: XOR<InterviewConfigUpdateWithoutUserInput, InterviewConfigUncheckedUpdateWithoutUserInput>
  }

  export type InterviewConfigUpdateManyWithWhereWithoutUserInput = {
    where: InterviewConfigScalarWhereInput
    data: XOR<InterviewConfigUpdateManyMutationInput, InterviewConfigUncheckedUpdateManyWithoutUserInput>
  }

  export type InterviewConfigScalarWhereInput = {
    AND?: InterviewConfigScalarWhereInput | InterviewConfigScalarWhereInput[]
    OR?: InterviewConfigScalarWhereInput[]
    NOT?: InterviewConfigScalarWhereInput | InterviewConfigScalarWhereInput[]
    id?: StringFilter<"InterviewConfig"> | string
    userId?: StringFilter<"InterviewConfig"> | string
    role?: StringFilter<"InterviewConfig"> | string
    skills?: StringNullableListFilter<"InterviewConfig">
    durationMinutes?: IntFilter<"InterviewConfig"> | number
    difficulty?: EnumDifficultyFilter<"InterviewConfig"> | $Enums.Difficulty
    type?: EnumInterviewTypeFilter<"InterviewConfig"> | $Enums.InterviewType
    createdAt?: DateTimeFilter<"InterviewConfig"> | Date | string
    resumeId?: StringNullableFilter<"InterviewConfig"> | string | null
  }

  export type InterviewUpsertWithWhereUniqueWithoutUserInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutUserInput, InterviewUncheckedUpdateWithoutUserInput>
    create: XOR<InterviewCreateWithoutUserInput, InterviewUncheckedCreateWithoutUserInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutUserInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutUserInput, InterviewUncheckedUpdateWithoutUserInput>
  }

  export type InterviewUpdateManyWithWhereWithoutUserInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutUserInput>
  }

  export type InterviewScalarWhereInput = {
    AND?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    OR?: InterviewScalarWhereInput[]
    NOT?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    id?: StringFilter<"Interview"> | string
    userId?: StringFilter<"Interview"> | string
    configId?: StringFilter<"Interview"> | string
    startedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Interview"> | Date | string | null
    status?: StringFilter<"Interview"> | string
    overallScore?: FloatNullableFilter<"Interview"> | number | null
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    interviewerModel?: StringNullableFilter<"Interview"> | string | null
    consentRecording?: BoolFilter<"Interview"> | boolean
    region?: StringNullableFilter<"Interview"> | string | null
    indexes?: StringNullableFilter<"Interview"> | string | null
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewConfigs?: InterviewConfigCreateNestedManyWithoutUserInput
    interviews?: InterviewCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewConfigs?: InterviewConfigUncheckedCreateNestedManyWithoutUserInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type InterviewConfigCreateWithoutResumeInput = {
    id?: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInterviewConfigsInput
    interviews?: InterviewCreateNestedManyWithoutConfigInput
  }

  export type InterviewConfigUncheckedCreateWithoutResumeInput = {
    id?: string
    userId: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    interviews?: InterviewUncheckedCreateNestedManyWithoutConfigInput
  }

  export type InterviewConfigCreateOrConnectWithoutResumeInput = {
    where: InterviewConfigWhereUniqueInput
    create: XOR<InterviewConfigCreateWithoutResumeInput, InterviewConfigUncheckedCreateWithoutResumeInput>
  }

  export type InterviewConfigCreateManyResumeInputEnvelope = {
    data: InterviewConfigCreateManyResumeInput | InterviewConfigCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewConfigs?: InterviewConfigUpdateManyWithoutUserNestedInput
    interviews?: InterviewUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewConfigs?: InterviewConfigUncheckedUpdateManyWithoutUserNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InterviewConfigUpsertWithWhereUniqueWithoutResumeInput = {
    where: InterviewConfigWhereUniqueInput
    update: XOR<InterviewConfigUpdateWithoutResumeInput, InterviewConfigUncheckedUpdateWithoutResumeInput>
    create: XOR<InterviewConfigCreateWithoutResumeInput, InterviewConfigUncheckedCreateWithoutResumeInput>
  }

  export type InterviewConfigUpdateWithWhereUniqueWithoutResumeInput = {
    where: InterviewConfigWhereUniqueInput
    data: XOR<InterviewConfigUpdateWithoutResumeInput, InterviewConfigUncheckedUpdateWithoutResumeInput>
  }

  export type InterviewConfigUpdateManyWithWhereWithoutResumeInput = {
    where: InterviewConfigScalarWhereInput
    data: XOR<InterviewConfigUpdateManyMutationInput, InterviewConfigUncheckedUpdateManyWithoutResumeInput>
  }

  export type UserCreateWithoutInterviewConfigsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    interviews?: InterviewCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterviewConfigsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterviewConfigsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterviewConfigsInput, UserUncheckedCreateWithoutInterviewConfigsInput>
  }

  export type ResumeCreateWithoutInterviewConfigsInput = {
    id?: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
  }

  export type ResumeUncheckedCreateWithoutInterviewConfigsInput = {
    id?: string
    userId: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutInterviewConfigsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutInterviewConfigsInput, ResumeUncheckedCreateWithoutInterviewConfigsInput>
  }

  export type InterviewCreateWithoutConfigInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutConfigInput = {
    id?: string
    userId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutConfigInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutConfigInput, InterviewUncheckedCreateWithoutConfigInput>
  }

  export type InterviewCreateManyConfigInputEnvelope = {
    data: InterviewCreateManyConfigInput | InterviewCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInterviewConfigsInput = {
    update: XOR<UserUpdateWithoutInterviewConfigsInput, UserUncheckedUpdateWithoutInterviewConfigsInput>
    create: XOR<UserCreateWithoutInterviewConfigsInput, UserUncheckedCreateWithoutInterviewConfigsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterviewConfigsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterviewConfigsInput, UserUncheckedUpdateWithoutInterviewConfigsInput>
  }

  export type UserUpdateWithoutInterviewConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    interviews?: InterviewUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterviewConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutInterviewConfigsInput = {
    update: XOR<ResumeUpdateWithoutInterviewConfigsInput, ResumeUncheckedUpdateWithoutInterviewConfigsInput>
    create: XOR<ResumeCreateWithoutInterviewConfigsInput, ResumeUncheckedCreateWithoutInterviewConfigsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutInterviewConfigsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutInterviewConfigsInput, ResumeUncheckedUpdateWithoutInterviewConfigsInput>
  }

  export type ResumeUpdateWithoutInterviewConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumeUncheckedUpdateWithoutInterviewConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUpsertWithWhereUniqueWithoutConfigInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutConfigInput, InterviewUncheckedUpdateWithoutConfigInput>
    create: XOR<InterviewCreateWithoutConfigInput, InterviewUncheckedCreateWithoutConfigInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutConfigInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutConfigInput, InterviewUncheckedUpdateWithoutConfigInput>
  }

  export type InterviewUpdateManyWithWhereWithoutConfigInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutConfigInput>
  }

  export type UserCreateWithoutInterviewsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    interviewConfigs?: InterviewConfigCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterviewsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    interviewConfigs?: InterviewConfigUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
  }

  export type InterviewConfigCreateWithoutInterviewsInput = {
    id?: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInterviewConfigsInput
    Resume?: ResumeCreateNestedOneWithoutInterviewConfigsInput
  }

  export type InterviewConfigUncheckedCreateWithoutInterviewsInput = {
    id?: string
    userId: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    resumeId?: string | null
  }

  export type InterviewConfigCreateOrConnectWithoutInterviewsInput = {
    where: InterviewConfigWhereUniqueInput
    create: XOR<InterviewConfigCreateWithoutInterviewsInput, InterviewConfigUncheckedCreateWithoutInterviewsInput>
  }

  export type MediaCreateWithoutInterviewInput = {
    id?: string
    s3Key: string
    s3Url?: string | null
    mediaType: $Enums.MediaType
    durationMs?: number | null
    sizeBytes?: number | null
    uploadedAt?: Date | string
    processed?: boolean
    notes?: string | null
  }

  export type MediaUncheckedCreateWithoutInterviewInput = {
    id?: string
    s3Key: string
    s3Url?: string | null
    mediaType: $Enums.MediaType
    durationMs?: number | null
    sizeBytes?: number | null
    uploadedAt?: Date | string
    processed?: boolean
    notes?: string | null
  }

  export type MediaCreateOrConnectWithoutInterviewInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutInterviewInput, MediaUncheckedCreateWithoutInterviewInput>
  }

  export type MediaCreateManyInterviewInputEnvelope = {
    data: MediaCreateManyInterviewInput | MediaCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type TranscriptCreateWithoutInterviewInput = {
    id?: string
    speaker: string
    text: string
    startTimeMs?: number | null
    endTimeMs?: number | null
    createdAt?: Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptUncheckedCreateWithoutInterviewInput = {
    id?: string
    speaker: string
    text: string
    startTimeMs?: number | null
    endTimeMs?: number | null
    createdAt?: Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptCreateOrConnectWithoutInterviewInput = {
    where: TranscriptWhereUniqueInput
    create: XOR<TranscriptCreateWithoutInterviewInput, TranscriptUncheckedCreateWithoutInterviewInput>
  }

  export type TranscriptCreateManyInterviewInputEnvelope = {
    data: TranscriptCreateManyInterviewInput | TranscriptCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisReportCreateWithoutInterviewInput = {
    id?: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    perCategory?: AnalysisCategoryScoreCreateNestedManyWithoutReportInput
  }

  export type AnalysisReportUncheckedCreateWithoutInterviewInput = {
    id?: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    perCategory?: AnalysisCategoryScoreUncheckedCreateNestedManyWithoutReportInput
  }

  export type AnalysisReportCreateOrConnectWithoutInterviewInput = {
    where: AnalysisReportWhereUniqueInput
    create: XOR<AnalysisReportCreateWithoutInterviewInput, AnalysisReportUncheckedCreateWithoutInterviewInput>
  }

  export type FlaggedIssueCreateWithoutInterviewInput = {
    id?: string
    category: $Enums.AnalysisCategory
    timestampMs?: number | null
    description: string
    severity: number
    createdAt?: Date | string
  }

  export type FlaggedIssueUncheckedCreateWithoutInterviewInput = {
    id?: string
    category: $Enums.AnalysisCategory
    timestampMs?: number | null
    description: string
    severity: number
    createdAt?: Date | string
  }

  export type FlaggedIssueCreateOrConnectWithoutInterviewInput = {
    where: FlaggedIssueWhereUniqueInput
    create: XOR<FlaggedIssueCreateWithoutInterviewInput, FlaggedIssueUncheckedCreateWithoutInterviewInput>
  }

  export type FlaggedIssueCreateManyInterviewInputEnvelope = {
    data: FlaggedIssueCreateManyInterviewInput | FlaggedIssueCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutInterviewInput = {
    id?: string
    prompt: string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutInterviewInput = {
    id?: string
    prompt: string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutInterviewInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput>
  }

  export type QuestionCreateManyInterviewInputEnvelope = {
    data: QuestionCreateManyInterviewInput | QuestionCreateManyInterviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInterviewsInput = {
    update: XOR<UserUpdateWithoutInterviewsInput, UserUncheckedUpdateWithoutInterviewsInput>
    create: XOR<UserCreateWithoutInterviewsInput, UserUncheckedCreateWithoutInterviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterviewsInput, UserUncheckedUpdateWithoutInterviewsInput>
  }

  export type UserUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    interviewConfigs?: InterviewConfigUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    interviewConfigs?: InterviewConfigUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InterviewConfigUpsertWithoutInterviewsInput = {
    update: XOR<InterviewConfigUpdateWithoutInterviewsInput, InterviewConfigUncheckedUpdateWithoutInterviewsInput>
    create: XOR<InterviewConfigCreateWithoutInterviewsInput, InterviewConfigUncheckedCreateWithoutInterviewsInput>
    where?: InterviewConfigWhereInput
  }

  export type InterviewConfigUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: InterviewConfigWhereInput
    data: XOR<InterviewConfigUpdateWithoutInterviewsInput, InterviewConfigUncheckedUpdateWithoutInterviewsInput>
  }

  export type InterviewConfigUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterviewConfigsNestedInput
    Resume?: ResumeUpdateOneWithoutInterviewConfigsNestedInput
  }

  export type InterviewConfigUncheckedUpdateWithoutInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUpsertWithWhereUniqueWithoutInterviewInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutInterviewInput, MediaUncheckedUpdateWithoutInterviewInput>
    create: XOR<MediaCreateWithoutInterviewInput, MediaUncheckedCreateWithoutInterviewInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutInterviewInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutInterviewInput, MediaUncheckedUpdateWithoutInterviewInput>
  }

  export type MediaUpdateManyWithWhereWithoutInterviewInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutInterviewInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    interviewId?: StringFilter<"Media"> | string
    s3Key?: StringFilter<"Media"> | string
    s3Url?: StringNullableFilter<"Media"> | string | null
    mediaType?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    durationMs?: IntNullableFilter<"Media"> | number | null
    sizeBytes?: IntNullableFilter<"Media"> | number | null
    uploadedAt?: DateTimeFilter<"Media"> | Date | string
    processed?: BoolFilter<"Media"> | boolean
    notes?: StringNullableFilter<"Media"> | string | null
  }

  export type TranscriptUpsertWithWhereUniqueWithoutInterviewInput = {
    where: TranscriptWhereUniqueInput
    update: XOR<TranscriptUpdateWithoutInterviewInput, TranscriptUncheckedUpdateWithoutInterviewInput>
    create: XOR<TranscriptCreateWithoutInterviewInput, TranscriptUncheckedCreateWithoutInterviewInput>
  }

  export type TranscriptUpdateWithWhereUniqueWithoutInterviewInput = {
    where: TranscriptWhereUniqueInput
    data: XOR<TranscriptUpdateWithoutInterviewInput, TranscriptUncheckedUpdateWithoutInterviewInput>
  }

  export type TranscriptUpdateManyWithWhereWithoutInterviewInput = {
    where: TranscriptScalarWhereInput
    data: XOR<TranscriptUpdateManyMutationInput, TranscriptUncheckedUpdateManyWithoutInterviewInput>
  }

  export type TranscriptScalarWhereInput = {
    AND?: TranscriptScalarWhereInput | TranscriptScalarWhereInput[]
    OR?: TranscriptScalarWhereInput[]
    NOT?: TranscriptScalarWhereInput | TranscriptScalarWhereInput[]
    id?: StringFilter<"Transcript"> | string
    interviewId?: StringFilter<"Transcript"> | string
    speaker?: StringFilter<"Transcript"> | string
    text?: StringFilter<"Transcript"> | string
    startTimeMs?: IntNullableFilter<"Transcript"> | number | null
    endTimeMs?: IntNullableFilter<"Transcript"> | number | null
    createdAt?: DateTimeFilter<"Transcript"> | Date | string
    embeddingJson?: JsonNullableFilter<"Transcript">
    tokensJson?: JsonNullableFilter<"Transcript">
  }

  export type AnalysisReportUpsertWithoutInterviewInput = {
    update: XOR<AnalysisReportUpdateWithoutInterviewInput, AnalysisReportUncheckedUpdateWithoutInterviewInput>
    create: XOR<AnalysisReportCreateWithoutInterviewInput, AnalysisReportUncheckedCreateWithoutInterviewInput>
    where?: AnalysisReportWhereInput
  }

  export type AnalysisReportUpdateToOneWithWhereWithoutInterviewInput = {
    where?: AnalysisReportWhereInput
    data: XOR<AnalysisReportUpdateWithoutInterviewInput, AnalysisReportUncheckedUpdateWithoutInterviewInput>
  }

  export type AnalysisReportUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perCategory?: AnalysisCategoryScoreUpdateManyWithoutReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perCategory?: AnalysisCategoryScoreUncheckedUpdateManyWithoutReportNestedInput
  }

  export type FlaggedIssueUpsertWithWhereUniqueWithoutInterviewInput = {
    where: FlaggedIssueWhereUniqueInput
    update: XOR<FlaggedIssueUpdateWithoutInterviewInput, FlaggedIssueUncheckedUpdateWithoutInterviewInput>
    create: XOR<FlaggedIssueCreateWithoutInterviewInput, FlaggedIssueUncheckedCreateWithoutInterviewInput>
  }

  export type FlaggedIssueUpdateWithWhereUniqueWithoutInterviewInput = {
    where: FlaggedIssueWhereUniqueInput
    data: XOR<FlaggedIssueUpdateWithoutInterviewInput, FlaggedIssueUncheckedUpdateWithoutInterviewInput>
  }

  export type FlaggedIssueUpdateManyWithWhereWithoutInterviewInput = {
    where: FlaggedIssueScalarWhereInput
    data: XOR<FlaggedIssueUpdateManyMutationInput, FlaggedIssueUncheckedUpdateManyWithoutInterviewInput>
  }

  export type FlaggedIssueScalarWhereInput = {
    AND?: FlaggedIssueScalarWhereInput | FlaggedIssueScalarWhereInput[]
    OR?: FlaggedIssueScalarWhereInput[]
    NOT?: FlaggedIssueScalarWhereInput | FlaggedIssueScalarWhereInput[]
    id?: StringFilter<"FlaggedIssue"> | string
    interviewId?: StringFilter<"FlaggedIssue"> | string
    category?: EnumAnalysisCategoryFilter<"FlaggedIssue"> | $Enums.AnalysisCategory
    timestampMs?: IntNullableFilter<"FlaggedIssue"> | number | null
    description?: StringFilter<"FlaggedIssue"> | string
    severity?: IntFilter<"FlaggedIssue"> | number
    createdAt?: DateTimeFilter<"FlaggedIssue"> | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutInterviewInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutInterviewInput, QuestionUncheckedUpdateWithoutInterviewInput>
    create: XOR<QuestionCreateWithoutInterviewInput, QuestionUncheckedCreateWithoutInterviewInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutInterviewInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutInterviewInput, QuestionUncheckedUpdateWithoutInterviewInput>
  }

  export type QuestionUpdateManyWithWhereWithoutInterviewInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutInterviewInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    interviewId?: StringNullableFilter<"Question"> | string | null
    prompt?: StringFilter<"Question"> | string
    expectedAnswer?: JsonNullableFilter<"Question">
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type InterviewCreateWithoutMediaInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutMediaInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutMediaInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutMediaInput, InterviewUncheckedCreateWithoutMediaInput>
  }

  export type InterviewUpsertWithoutMediaInput = {
    update: XOR<InterviewUpdateWithoutMediaInput, InterviewUncheckedUpdateWithoutMediaInput>
    create: XOR<InterviewCreateWithoutMediaInput, InterviewUncheckedCreateWithoutMediaInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutMediaInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutMediaInput, InterviewUncheckedUpdateWithoutMediaInput>
  }

  export type InterviewUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateWithoutTranscriptsInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutTranscriptsInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutTranscriptsInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutTranscriptsInput, InterviewUncheckedCreateWithoutTranscriptsInput>
  }

  export type InterviewUpsertWithoutTranscriptsInput = {
    update: XOR<InterviewUpdateWithoutTranscriptsInput, InterviewUncheckedUpdateWithoutTranscriptsInput>
    create: XOR<InterviewCreateWithoutTranscriptsInput, InterviewUncheckedCreateWithoutTranscriptsInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutTranscriptsInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutTranscriptsInput, InterviewUncheckedUpdateWithoutTranscriptsInput>
  }

  export type InterviewUpdateWithoutTranscriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutTranscriptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateWithoutReportInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutReportInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutReportInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutReportInput, InterviewUncheckedCreateWithoutReportInput>
  }

  export type AnalysisCategoryScoreCreateWithoutReportInput = {
    id?: string
    category: $Enums.AnalysisCategory
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUncheckedCreateWithoutReportInput = {
    id?: string
    category: $Enums.AnalysisCategory
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreCreateOrConnectWithoutReportInput = {
    where: AnalysisCategoryScoreWhereUniqueInput
    create: XOR<AnalysisCategoryScoreCreateWithoutReportInput, AnalysisCategoryScoreUncheckedCreateWithoutReportInput>
  }

  export type AnalysisCategoryScoreCreateManyReportInputEnvelope = {
    data: AnalysisCategoryScoreCreateManyReportInput | AnalysisCategoryScoreCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type InterviewUpsertWithoutReportInput = {
    update: XOR<InterviewUpdateWithoutReportInput, InterviewUncheckedUpdateWithoutReportInput>
    create: XOR<InterviewCreateWithoutReportInput, InterviewUncheckedCreateWithoutReportInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutReportInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutReportInput, InterviewUncheckedUpdateWithoutReportInput>
  }

  export type InterviewUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type AnalysisCategoryScoreUpsertWithWhereUniqueWithoutReportInput = {
    where: AnalysisCategoryScoreWhereUniqueInput
    update: XOR<AnalysisCategoryScoreUpdateWithoutReportInput, AnalysisCategoryScoreUncheckedUpdateWithoutReportInput>
    create: XOR<AnalysisCategoryScoreCreateWithoutReportInput, AnalysisCategoryScoreUncheckedCreateWithoutReportInput>
  }

  export type AnalysisCategoryScoreUpdateWithWhereUniqueWithoutReportInput = {
    where: AnalysisCategoryScoreWhereUniqueInput
    data: XOR<AnalysisCategoryScoreUpdateWithoutReportInput, AnalysisCategoryScoreUncheckedUpdateWithoutReportInput>
  }

  export type AnalysisCategoryScoreUpdateManyWithWhereWithoutReportInput = {
    where: AnalysisCategoryScoreScalarWhereInput
    data: XOR<AnalysisCategoryScoreUpdateManyMutationInput, AnalysisCategoryScoreUncheckedUpdateManyWithoutReportInput>
  }

  export type AnalysisCategoryScoreScalarWhereInput = {
    AND?: AnalysisCategoryScoreScalarWhereInput | AnalysisCategoryScoreScalarWhereInput[]
    OR?: AnalysisCategoryScoreScalarWhereInput[]
    NOT?: AnalysisCategoryScoreScalarWhereInput | AnalysisCategoryScoreScalarWhereInput[]
    id?: StringFilter<"AnalysisCategoryScore"> | string
    reportId?: StringFilter<"AnalysisCategoryScore"> | string
    category?: EnumAnalysisCategoryFilter<"AnalysisCategoryScore"> | $Enums.AnalysisCategory
    score?: FloatFilter<"AnalysisCategoryScore"> | number
    details?: JsonNullableFilter<"AnalysisCategoryScore">
  }

  export type AnalysisReportCreateWithoutPerCategoryInput = {
    id?: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutReportInput
  }

  export type AnalysisReportUncheckedCreateWithoutPerCategoryInput = {
    id?: string
    interviewId: string
    overallScore: number
    metrics: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
  }

  export type AnalysisReportCreateOrConnectWithoutPerCategoryInput = {
    where: AnalysisReportWhereUniqueInput
    create: XOR<AnalysisReportCreateWithoutPerCategoryInput, AnalysisReportUncheckedCreateWithoutPerCategoryInput>
  }

  export type AnalysisReportUpsertWithoutPerCategoryInput = {
    update: XOR<AnalysisReportUpdateWithoutPerCategoryInput, AnalysisReportUncheckedUpdateWithoutPerCategoryInput>
    create: XOR<AnalysisReportCreateWithoutPerCategoryInput, AnalysisReportUncheckedCreateWithoutPerCategoryInput>
    where?: AnalysisReportWhereInput
  }

  export type AnalysisReportUpdateToOneWithWhereWithoutPerCategoryInput = {
    where?: AnalysisReportWhereInput
    data: XOR<AnalysisReportUpdateWithoutPerCategoryInput, AnalysisReportUncheckedUpdateWithoutPerCategoryInput>
  }

  export type AnalysisReportUpdateWithoutPerCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutReportNestedInput
  }

  export type AnalysisReportUncheckedUpdateWithoutPerCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    interviewId?: StringFieldUpdateOperationsInput | string
    overallScore?: FloatFieldUpdateOperationsInput | number
    metrics?: JsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateWithoutIssuesInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    questions?: QuestionCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutIssuesInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    questions?: QuestionUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutIssuesInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutIssuesInput, InterviewUncheckedCreateWithoutIssuesInput>
  }

  export type InterviewUpsertWithoutIssuesInput = {
    update: XOR<InterviewUpdateWithoutIssuesInput, InterviewUncheckedUpdateWithoutIssuesInput>
    create: XOR<InterviewCreateWithoutIssuesInput, InterviewUncheckedCreateWithoutIssuesInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutIssuesInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutIssuesInput, InterviewUncheckedUpdateWithoutIssuesInput>
  }

  export type InterviewUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateWithoutQuestionsInput = {
    id?: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    user: UserCreateNestedOneWithoutInterviewsInput
    config: InterviewConfigCreateNestedOneWithoutInterviewsInput
    media?: MediaCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutQuestionsInput = {
    id?: string
    userId: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutInterviewInput
    transcripts?: TranscriptUncheckedCreateNestedManyWithoutInterviewInput
    report?: AnalysisReportUncheckedCreateNestedOneWithoutInterviewInput
    issues?: FlaggedIssueUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutQuestionsInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
  }

  export type InterviewUpsertWithoutQuestionsInput = {
    update: XOR<InterviewUpdateWithoutQuestionsInput, InterviewUncheckedUpdateWithoutQuestionsInput>
    create: XOR<InterviewCreateWithoutQuestionsInput, InterviewUncheckedCreateWithoutQuestionsInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutQuestionsInput, InterviewUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeCreateNestedManyWithoutUserInput
    interviewConfigs?: InterviewConfigCreateNestedManyWithoutUserInput
    interviews?: InterviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    interviewConfigs?: InterviewConfigUncheckedCreateNestedManyWithoutUserInput
    interviews?: InterviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    interviewConfigs?: InterviewConfigUpdateManyWithoutUserNestedInput
    interviews?: InterviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    interviewConfigs?: InterviewConfigUncheckedUpdateManyWithoutUserNestedInput
    interviews?: InterviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    s3Key: string
    textExtract: string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InterviewConfigCreateManyUserInput = {
    id?: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
    resumeId?: string | null
  }

  export type InterviewCreateManyUserInput = {
    id?: string
    configId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewConfigs?: InterviewConfigUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewConfigs?: InterviewConfigUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    textExtract?: StringFieldUpdateOperationsInput | string
    parsedJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewConfigUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resume?: ResumeUpdateOneWithoutInterviewConfigsNestedInput
    interviews?: InterviewUpdateManyWithoutConfigNestedInput
  }

  export type InterviewConfigUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
    interviews?: InterviewUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type InterviewConfigUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    config?: InterviewConfigUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InterviewConfigCreateManyResumeInput = {
    id?: string
    userId: string
    role: string
    skills?: InterviewConfigCreateskillsInput | string[]
    durationMinutes: number
    difficulty: $Enums.Difficulty
    type: $Enums.InterviewType
    createdAt?: Date | string
  }

  export type InterviewConfigUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterviewConfigsNestedInput
    interviews?: InterviewUpdateManyWithoutConfigNestedInput
  }

  export type InterviewConfigUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviews?: InterviewUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type InterviewConfigUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    skills?: InterviewConfigUpdateskillsInput | string[]
    durationMinutes?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    type?: EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateManyConfigInput = {
    id?: string
    userId: string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status: string
    overallScore?: number | null
    createdAt?: Date | string
    interviewerModel?: string | null
    consentRecording?: boolean
    region?: string | null
    indexes?: string | null
  }

  export type InterviewUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutInterviewsNestedInput
    media?: MediaUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutInterviewNestedInput
    transcripts?: TranscriptUncheckedUpdateManyWithoutInterviewNestedInput
    report?: AnalysisReportUncheckedUpdateOneWithoutInterviewNestedInput
    issues?: FlaggedIssueUncheckedUpdateManyWithoutInterviewNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewerModel?: NullableStringFieldUpdateOperationsInput | string | null
    consentRecording?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    indexes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateManyInterviewInput = {
    id?: string
    s3Key: string
    s3Url?: string | null
    mediaType: $Enums.MediaType
    durationMs?: number | null
    sizeBytes?: number | null
    uploadedAt?: Date | string
    processed?: boolean
    notes?: string | null
  }

  export type TranscriptCreateManyInterviewInput = {
    id?: string
    speaker: string
    text: string
    startTimeMs?: number | null
    endTimeMs?: number | null
    createdAt?: Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FlaggedIssueCreateManyInterviewInput = {
    id?: string
    category: $Enums.AnalysisCategory
    timestampMs?: number | null
    description: string
    severity: number
    createdAt?: Date | string
  }

  export type QuestionCreateManyInterviewInput = {
    id?: string
    prompt: string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MediaUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    s3Url?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TranscriptUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TranscriptUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    speaker?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    startTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    endTimeMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddingJson?: NullableJsonNullValueInput | InputJsonValue
    tokensJson?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FlaggedIssueUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedIssueUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlaggedIssueUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    timestampMs?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    expectedAnswer?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCategoryScoreCreateManyReportInput = {
    id?: string
    category: $Enums.AnalysisCategory
    score: number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AnalysisCategoryScoreUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumAnalysisCategoryFieldUpdateOperationsInput | $Enums.AnalysisCategory
    score?: FloatFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}