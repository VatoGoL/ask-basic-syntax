export function romanToInteger(str) {
    let result = 0;
    let lastChar = '';
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    for (let i = 0; i < str.length; i++) {
        switch (str.substr(i, 1)) {
            case 'I':
                result += 1;
                lastChar = 'I';

                break;
            case 'V':
                result += 5;

                if (lastChar === 'I') {
                    result -= 1 * 2;
                    lastChar = '';
                }

                break;
            case 'X':
                result += 10;

                if (lastChar === 'I') {
                    result -= 1 * 2;
                    lastChar = '';
                }

                lastChar = 'X';
                break;
            case 'L':
                result += 50;

                if (lastChar === 'X') {
                    result -= 10 * 2;
                    lastChar = '';
                }

                break;
            case 'C':
                result += 100;

                if (lastChar === 'X') {
                    result -= 10 * 2;
                    lastChar = '';
                }

                lastChar = 'C';
                break;
            case 'D':
                result += 500;

                if (lastChar === 'C') {
                    result -= 100 * 2;
                    lastChar = '';
                }

                break;
            case 'M':
                result += 1000;

                if (lastChar === 'C') {
                    result -= 100 * 2;
                    lastChar = '';
                }

                break;
        }
    }
    return result;
}
