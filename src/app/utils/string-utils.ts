export class StringUtils {

    public static isBlank(str: string): boolean {
        return str === null || str === undefined || str.trim() === '';
    }

    public static isNotBlank(str: string): boolean {
        return !this.isBlank(str);
    }
}
