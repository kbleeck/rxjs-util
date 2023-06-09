import { Observable, combineLatest, distinctUntilChanged, map } from "rxjs";

/**
 * Takes a list of boolean observables and returns an observables
 * that combines them using OR-logic.
 *
 * @param {...Observable<boolean>[]} observables List of observables.
 * @returns {Observable<boolean>} The created observable.
 */
export function or$(
  ...observables: Observable<boolean>[]
): Observable<boolean> {
  return combineLatest(observables).pipe(
    map((values) => values.some((value) => !!value)),
    distinctUntilChanged()
  );
}
