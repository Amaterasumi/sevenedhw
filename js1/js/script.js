document.write('<h3>Прямоугольник</h3>');

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 40; j++) {
        if (i === 0 || i === 9) {
            document.write('*');
        } else if (j === 0 || j === 39) {
            document.write('*');
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}

document.write('<h3 class="color-1">Прямоугольный треугольник</h3>');
let max = 10;
for (let i = 0; i < max; i++) {
    for (let j = 0; j <= i; j++) {
        if (i === 0 || i === (max - 1)) {
            document.write('*&nbsp;&nbsp;');
        } else if (j === 0 || j === i) {
            document.write('*&nbsp;&nbsp;');
        } else {
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;');
        }

    }
    document.write('<br>');
}

document.write('<h3 class="color-2">Равностороний треугольник</h3>');
let maxR = 21;
for (let i = 0; i < maxR / 2; i++) {
    let countBsp = (maxR - maxR % 2) - i;
    for (let j = 0; j < maxR; j++) {
        if (j < countBsp) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write('*&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}

document.write('<h3 class="color-3">Ромб</h3>');
let maxD = 21;
for (let i = 0; i < maxD / 2; i++) {
    let countBsp = (maxD - maxD % 2) - i;
    for (let j = 0; j < maxD; j++) {
        if (j < countBsp) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write('*&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}

for (let i = maxD / 2 - 1; i > 0; i--) {
    let countBsp = (maxD - maxD % 2) - i;
    for (let j = 0; j < maxD; j++) {
        if (j < countBsp) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write('*&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}