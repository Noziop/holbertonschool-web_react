// Brand pour différencier les types de crédits
interface MajorCredits {
    credits: number;
    readonly brand: "MajorCredits";  // Brand property
}

interface MinorCredits {
    credits: number;
    readonly brand: "MinorCredits";  // Brand property
}

// Fonctions pour sommer les crédits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}
