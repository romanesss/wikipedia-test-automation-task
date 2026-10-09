import { faker } from '@faker-js/faker';
import { LANGUAGE_CODES, type LanguageCode } from '../../data/language-codes';
import { TestUser } from '../../models/test-user';

export class AcceptanceHelpers {
    public getRandomDifferentLanguage(currentLanguage: string): LanguageCode {
        return faker.helpers.arrayElement(LANGUAGE_CODES.filter(code => code !== currentLanguage));
    }
}
