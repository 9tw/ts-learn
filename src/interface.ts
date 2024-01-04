// Interface

interface Processor {
    brand: string;
    nama: string;
    speed: number;
    core: string | number;
}

interface Processor {
    fan: boolean;
}

interface Intel extends Processor {
    turboBoost: boolean;
}

interface AMD extends Processor {
    precisionBoost: boolean;
}

function createProcessor(processor: Processor): void {
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

function processorIntel(processor: Intel): void {
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

function processorAMD(processor: AMD): void {
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