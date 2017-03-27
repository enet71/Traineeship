export class StaticMethods {
    static clearPushArray(clear,push){
        clear.splice(0);
        for(let item of push){
            clear.push(item);
        }
    }
}