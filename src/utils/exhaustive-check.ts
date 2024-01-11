/**
 * A compile-time safety function to ensure exhaustive checking in switch statements.
 *
 * This function should be used in a switch statement with a discriminated union type (e.g., enums or tagged unions).
 * It throws an error if an unhandled case is encountered at compile time, helping to catch potential bugs.
 *
 * @param param - The value that should represent all possible cases in the switch statement.
 * @throws An error with the unexpected case if not all cases are handled.
 */
export const exhaustiveCheck = (param: never) => {
  throw new Error("Unhandled case: " + param);
};
