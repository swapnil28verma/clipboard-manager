export class KeyboardUtils {
    public static readonly SHORTCUT_SEPERATOR = ' + ';
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
            case 'Command':
                code = 'Cmd';
                break;
            case 'Option':
                code = 'Option';
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
            case 'Enter':
                code = 'Enter';
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
