// Tipe data custom

type ItemType = {
    nama: string;
    price: number;
    stock?: boolean;
}

let item: ItemType;

item = {
    nama: "Eiger",
    price: 300_000,
}

console.log({item});