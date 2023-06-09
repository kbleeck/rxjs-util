import { Observable, combineLatest, distinctUntilChanged, map } from "rxjs";

/**
 * Takes a list of boolean observables and returns an observables
 * that combines them using AND-logic.
 *
 * @param {...Observable<boolean>[]} observables List of observables.
 * @returns {Observable<boolean>} The created observable.
 */
export function and$(
  ...observables: Observable<boolean>[]
): Observable<boolean> {
  return combineLatest(observables).pipe(
    map((values) => values.every((value) => !!value)),
    distinctUntilChanged()
  );
}
