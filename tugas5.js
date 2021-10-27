let angka = 20
let total = ''
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        total += i
        total += ','
    }
} console.log(total)