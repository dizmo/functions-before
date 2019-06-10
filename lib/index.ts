import { before as _before } from "./before";
import { decorator as _decorator } from "./decorator";

export interface IBeforeFunction {
    (fn: Function, callback: Function): Function;
}
export interface IBeforeFunction {
    decorator: Function;
}
export const before: IBeforeFunction = (() => {
    (_before as any).decorator = _decorator;
    return _before as any;
})();
export default before;
