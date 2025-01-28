export function hexToRgb(hex: string): { r: number; g: number; b: number } {
    // source: https://stackoverflow.com/a/39077686
    const rgb = hex
        .replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => "#" + r + r + g + g + b + b
        )
        .substring(1)
        .match(/.{2}/g)
        ?.map((x) => parseInt(x, 16));

    return {
        r: rgb ? rgb[0] : 0,
        g: rgb ? rgb[1] : 0,
        b: rgb ? rgb[2] : 0,
    };
}

export function parseHexColor (hex: string): { r: number; g: number; b: number; h: number; s: number; l: number } {
    let { r, g, b } = hexToRgb(hex);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number, s: number, l: number;
    l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                h = 0;
        }
        h /= 6;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
}

export function stringToId (string: string) {
    return string.replace(' ', '-').toLowerCase();
}