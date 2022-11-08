export class KeyboardUtils {
    public static getKeyCode(key: string): string {
        let code = '';
        switch(key) {
            case 'Alt':
            case 'AltGraph':
                code = 'Alt';
                break;
            case 'Control':
                code = 'Ctrl';
                break;
            case 'Meta':
                code = 'Win';
                break;
            case 'Shift':
                code = 'Shift';
                break;
            case ' ':
                code = 'Space';
                break;
            case 'CapsLock':
            case 'Tab':
            case 'Escape':
                break;
            default:
                code = key.toUpperCase();
                break;
        }
        return code;
    }

    public static isBackSpaceKey(key: string) {
        return key === 'Backspace'
    }

    public static isDeleteKey(key: string) {
        return key === 'Delete'
    }
}
