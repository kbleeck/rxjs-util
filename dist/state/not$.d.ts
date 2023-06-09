import { Observable } from "rxjs";
/**
 * Negates a boolean observable.
 *
 * @param {Observable<boolean>} observable The observable.
 * @returns {Observable<boolean>} An observable with negated values.
 */
export declare function not$(observable: Observable<boolean>): Observable<boolean>;
