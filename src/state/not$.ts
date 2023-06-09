import { Observable, map } from "rxjs";

/**
 * Negates a boolean observable.
 *
 * @param {Observable<boolean>} observable The observable.
 * @returns {Observable<boolean>} An observable with negated values.
 */
export function not$(observable: Observable<boolean>): Observable<boolean> {
  return observable.pipe(map((value) => !value));
}
