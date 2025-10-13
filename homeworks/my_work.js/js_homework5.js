var services = {
    "Стрижка": "60 грн",
    "Голиння": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн"
};

var stats = {
    price() {
        let total = 0;
        for (let key in services) total += parseInt(services[key]);
        return total + " грн";
    },

    minPrice() {
        let min = Infinity;
        for (let key in services) {
            let p = parseInt(services[key]);
            if (p < min) min = p;
        }
        return min + " грн";
    },

    maxPrice() {
        let max = -Infinity;
        for (let key in services) {
            let p = parseInt(services[key]);
            if (p > max) max = p;
        }
        return max + " грн";
    }
};

console.log("Загальна вартість:", stats.price());
console.log("Мінімальна ціна:", stats.minPrice());
console.log("Максимальна ціна:", stats.maxPrice());