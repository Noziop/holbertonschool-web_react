// Déclaration des interfaces avec marqueurs nominaux
export interface MajorCredits {
    credits: number;
    _majorCreditBrand: void; // Marqueur nominal unique
}

export interface MinorCredits {
    credits: number;
    _minorCreditBrand: void; // Marqueur nominal unique
}

// Implémentation des fonctions de somme
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorCreditBrand: undefined
    } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorCreditBrand: undefined
    } as MinorCredits;
}
