export type CompanyActivity = 'beauty care' | 'hairdressing';
type InsuranceOptions = 'bodilyInjury' | 'propertyDamage' | 'courtAndLegal' | 'companyVehicles' | 'injuries' | 'damagedEquipment' | 'productsToProduce';

interface ScoreItem {
  option: InsuranceOptions;
  points: number;
}

export interface CompanyActivityOption {
  value: CompanyActivity
  scoreItems: ScoreItem[]
}

export const companyActivities: CompanyActivityOption[] = [
  { value: 'beauty care', scoreItems: [
      { option: 'bodilyInjury', points: 80 },
      { option: 'propertyDamage', points: 10 },
      { option: 'damagedEquipment', points: 40 },
      { option: 'companyVehicles', points: 20 },
    ]
  },
  { value: 'hairdressing', scoreItems: [
      { option: 'bodilyInjury', points: 60 },
      { option: 'propertyDamage', points: 40 },
      { option: 'damagedEquipment', points: 40 },
      { option: 'companyVehicles', points: 30 },
    ]
  }
];

export const sizeMultiplier: Record<InsuranceOptions, number> = {
  bodilyInjury: 1.01,
  propertyDamage: 1.01,
  courtAndLegal: 1.01,
  companyVehicles: 1.03,
  injuries: 1,
  damagedEquipment: 1,
  productsToProduce: 1,
}


