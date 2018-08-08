import { AbstractSimpleType } from "../Abstract/AbstractSimpleType";

/**
 * This attribute specifies the human language in which the document the element
 * refers to is expressed. Values are taken from the RFC 4646.
 */
export class Language extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^('af|af-ZA|ar|ar-AE|ar-BH|ar-DZ|ar-EG|ar-IQ|ar-JO|ar-KW|ar-LB|ar-LY|ar-MA|ar-OM|ar-QA|ar-SA|ar-SY|ar-TN|ar-YE|az|az-AZ|az-AZ-Latn|be|be-BY|bg|bg-BG|ca|ca-ES|cs|cs-CZ|da|da-DK|de|de-AT|de-CH|de-DE|de-LI|de-LU|div|div-MV|el|el-GR|en|en-AU|en-BZ|en-CA|en-CB|en-GB|en-IE|en-JM|en-NZ|en-PH|en-TT|en-US|en-ZA `|en-ZW|es|es-AR|es-BO|es-CLe|es-CO|es-CR|es-DO|es-EC|es-ES|es-GT|es-HN|es-MX|es-NI Spanish|es-PA|es-PE|es-PR|es-PY|es-SV|es-UY|es-VE|et|et-EE|eu|eu-ES|fa|fa-IR|fi|fi-FI|fo|fo-FO|fr|fr-BE|fr-CA|fr-CH|fr-FR|fr-LU|fr-MC|gl|gl-ES|gu|gu-IN|he|he-IL|hi|hi-IN|hr|hr-HR|hu|hu-HU|hy|hy-AM|id|id-ID|is|is-IS|it|it-CH Italian|it-IT|ja|ja-JP|ka|ka-GE|kk|kk-KZ|kn|kn-IN|ko|kok|kok-IN|ko-KR|ky|ky-KG|lt|lt-LT|lv|lv-LV|mk|mk-MK|mn|mn-MN|mr|mr-IN|ms|ms-BN|ms-MY|nb-NO|nl|nl-BE|nl-NL|nn-NO|no|pa|pa-IN|pl|pl-PL|pt|pt-BR|pt-PT|ro|ro-RO|ru|ru-RU|sa|sa-IN|sk|sk-SK|sl|sl-SI|sq|sq-AL|sr-SP-Cyrl|sr-SP-Latn|sv|sv-FI|sv-SE|sw|sw-KE|syr|syr-SY|ta|ta-IN|te|te-IN|th|th-TH|tr|tr-TR|tt|tt-RU|uk|uk-UA|ur|ur-PK|uz|uz-UZ-Cyrl|uz-UZ-Latn|vi|zh-CHT|zh-CHS|zh-CN|zh-HK|zh-MO|zh-SG|zh-TW')$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'language accepts only valid RFC 4646 languages';
}
