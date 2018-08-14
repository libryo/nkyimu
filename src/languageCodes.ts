import { languages } from 'country-data';

export const langs: string[] = languages.all.map((e: { alpha3: string }) => e.alpha3);
