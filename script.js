let ceki = prompt("cekinizi daxil edin")
let hundurluk = prompt("hundurluyunuzu daxil edin")

let bmi = ceki / (hundurluk * hundurluk)
let netice = ''

if (bmi < 18) {
    netice = "Siz, çəki azlığından əziyyət çəkirsiniz"
} else if (bmi < 20) {
    netice = "Sizin çəkiniz azdır. Lakin sağlamlıq üçün zərəli deyil."
} else if (bmi < 26) {
    netice = "Sizin çəkiniz normaldır. Təbriklər III"
} else if (bmi < 28) {
    netice = "Sizin artıq çəkiniz var"
} else if (bmi < 31) {
    netice = "Siz, 1-ci dərəcəli artıq çəkidən əziyyət çəkirsini"
} else if (bmi < 36) {
    netice = "Siz, 2-ci dərəcəli artıq çəkidən əziyyət çəkirsiniz"
} else if (bmi < 41) {
    netice = "Siz, 3-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz"
} else if (41 < bmi) {
    netice = "Siz, 4-cü dərəcəli artıq çəkidən əziyyət çəkirsiniz"
} else{
    netice = "Sizin başınızda problem var"
} 


document.getElementById('netice').innerHTML = netice