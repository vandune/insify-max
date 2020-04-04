type InsuranceOption = 'bodilyInjury' | 'propertyDamage' | 'courtAndLegal' | 'companyVehicles' | 'injuries' | 'damagedEquipment' | 'productsToProduce';

export const insuranceOptions: { option: InsuranceOption, title: string }[] = [
  { option: 'bodilyInjury', title:  'Bodily Injury'},
  { option: 'propertyDamage', title:  'Property damage'},
  { option: 'courtAndLegal', title:  'Court and legal fees' },
  { option: 'companyVehicles', title: 'Company vehicles' },
  { option: 'injuries', title: 'Injuries to you or your employees' },
  { option: 'damagedEquipment', title: 'Damage to your equipement' },
  { option: 'productsToProduce', title: 'Products you produce' },
]

export type CompanyActivity = 'Beauty care' | 'Hairdressing';

export interface ScoreItem {
  option: InsuranceOption;
  points: number;
}

export interface ActivityScoreOption {
  value: CompanyActivity
  scoreItems: ScoreItem[]
}

export const companyActivityScores: ActivityScoreOption[] = [
  { value: 'Beauty care', scoreItems: [
      { option: 'bodilyInjury', points: 80 },
      { option: 'propertyDamage', points: 10 },
      { option: 'damagedEquipment', points: 40 },
      { option: 'companyVehicles', points: 20 },
    ]
  },
  { value: 'Hairdressing', scoreItems: [
      { option: 'bodilyInjury', points: 60 },
      { option: 'propertyDamage', points: 40 },
      { option: 'damagedEquipment', points: 40 },
      { option: 'companyVehicles', points: 30 },
    ]
  }
];

export const sizeMultiplier: Record<InsuranceOption, number> = {
  bodilyInjury: .1,
  propertyDamage: 0,
  courtAndLegal: .9,
  companyVehicles: .8,
  injuries: 1,
  damagedEquipment: .1,
  productsToProduce: 1,
}
