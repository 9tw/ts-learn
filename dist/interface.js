"use strict";
// Interface
function createProcessor(processor) {
    console.log(`Anda telah membuat processor ${processor.nama} dengan fan ${processor.fan}`);
}
const ryzen3 = {
    brand: "AMD",
    nama: "Ryzen 3",
    speed: 4,
    core: "OctaCore",
    fan: true,
};
createProcessor(ryzen3);
function processorIntel(processor) {
    console.log(`Anda telah membuat processor ${processor.nama} dengan boost ${processor.turboBoost}`);
}
const i3 = {
    brand: "Intel",
    nama: "i3",
    speed: 4,
    core: "OctaCore",
    fan: true,
    turboBoost: true,
};
processorIntel(i3);
function processorAMD(processor) {
    console.log(`Anda telah membuat processor ${processor.nama} dengan boost ${processor.precisionBoost}`);
}
const ryzen4 = {
    brand: "AMD",
    nama: "Ryzen 4",
    speed: 4,
    core: "OctaCore",
    fan: true,
    precisionBoost: false,
};
processorAMD(ryzen4);
