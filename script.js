document.addEventListener('DOMContentLoaded', function() {
    // Данные товаров (можно заменить на загрузку с сервера)
    const products = [
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
        {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        },
         {
            image: "images/holodolnik.png",
            alt: "Холодильник (Side-by-Side) Gorenje NRR9185EABXL",
            title: "Холодильник",
            description: "(Side-by-Side) Gorenje NRR9185EABXL",
            oldPrice: "133 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/pylesos.png",
            alt: "Xiaomi Robot Vacuum X10 EU",
            title: "Робот-пылесос с базой очистки",
            description: "Xiaomi Robot Vacuum X10 EU",
            oldPrice: "37 999 ₽",
            price: "88 999 ₽"
        },
        {
            image: "images/nout.png",
            alt: "ASUS E1504GA-BQ562",
            title: "Ноутбук",
            description: "ASUS E1504GA-BQ562/15.6\"/Intel Core i3 N305/8/256/NoOS/Black",
            oldPrice: "39 999 ₽",
            price: "31 999 ₽"
        },
        {
            image: "images/sushilkostiralko.png",
            alt: "Стирально-сушильная машина Casarte",
            title: "Стирально-сушильная машина",
            description: "Casarte CASWD129C1CU",
            oldPrice: "",
            price: "399 999 ₽"
        }
    ];

    // Элементы DOM
    const loadMoreBtn = document.getElementById('button2');
    const container = document.getElementById('container');
    const itemsPerLoad = 7; // Количество товаров за одну загрузку
    let currentIndex = 0;

    // Функция создания карточки товара
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'tovar';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <span>
                <h1>${product.title}</h1><br>
                ${product.description}<br>
                ${product.oldPrice ? `<div class="lastprice">${product.oldPrice}</div>` : ''}
                <h2>${product.price}</h2>
                <button class="button">Купить</button>
            </span>
        `;
        
        return productCard;
    }

    // Функция загрузки товаров
    function loadProducts() {
        const endIndex = Math.min(currentIndex + itemsPerLoad, products.length);
        
        for (let i = currentIndex; i < endIndex; i++) {
            const productCard = createProductCard(products[i]);
            container.appendChild(productCard);
            
            
        }
        
        currentIndex = endIndex;
        
        // Скрываем кнопку если товары закончились
        if (currentIndex >= products.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Инициализация
    if (loadMoreBtn && container) {
        // Загружаем первые товары
        loadProducts();
        
        // Обработчик клика на кнопку
        loadMoreBtn.addEventListener('click', loadProducts);
        
        // Обработчик для кнопок "Купить"
        container.addEventListener('click', function(e) {
            if (e.target.classList.contains('button')) {
                const productCard = e.target.closest('.tovar');
                const productName = productCard.querySelector('h1').textContent;
                alert(`Товар "${productName}" добавлен в корзину!`);
                // Здесь можно добавить логику добавления в корзину
            }
        });
    } else {
        console.error('Не найдены необходимые элементы DOM');
    }
});