import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-world-phone-input',
  templateUrl: './world-phone-input.component.html',
  styleUrls: ['./world-phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WorldPhoneInputComponent),
      multi: true
    }
  ]
})
export class WorldPhoneInputComponent implements OnInit  {

  @Input()
  ddi: any = "55";

  @Input()
  phone: any = '';

  @Input()
  language:string = 'pt-BR';

  emptyFilterMessage = 'Nenhum país encontrado';

  @Input()
  applyStyle = false;

  @Output()
  ddiChange: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  phoneChange: EventEmitter<any> = new EventEmitter<any>();

  countries = [
    {
      "ddi": "93",
      "mask": "99 999 9999",
      "name": "Afghanistan (افغانستان)",
      "pt-BR": "Afeganistão (افغانستان)",
      "code": "af",
      "en-US": "Afghanistan (افغانستان)"
    },
    {
      "ddi": "355",
      "mask": "99 999 999",
      "name": "Albania (Shqipëri)",
      "pt-BR": "Albânia (Shqipëri)",
      "code": "al",
      "en-US": "Albania (Shqipëri)"
    },
    {
      "ddi": "213",
      "mask": "99 99 99 99",
      "name": "Algeria (الجزائر)",
      "pt-BR": "Argélia (الجزائر)",
      "code": "dz",
      "en-US": "Algeria (الجزائر)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "American Samoa",
      "pt-BR": "Samoa Americana",
      "code": "as",
      "en-US": "American Samoa"
    },
    {
      "ddi": "376",
      "mask": "999 999",
      "name": "Andorra",
      "pt-BR": "Andorra",
      "code": "ad",
      "en-US": "Andorra"
    },
    {
      "ddi": "244",
      "mask": "999 999 999",
      "name": "Angola",
      "pt-BR": "Angola",
      "code": "ao",
      "en-US": "Angola"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Anguilla",
      "pt-BR": "Anguila",
      "code": "ai",
      "en-US": "Anguilla"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Antigua and Barbuda",
      "pt-BR": "Antígua e Barbuda",
      "code": "ag",
      "en-US": "Antigua and Barbuda"
    },
    {
      "ddi": "54",
      "mask": "99 9999-9999",
      "name": "Argentina",
      "pt-BR": "Argentina",
      "code": "ar",
      "en-US": "Argentina"
    },
    {
      "ddi": "374",
      "mask": "99 999999",
      "name": "Armenia (Հայաստան)",
      "pt-BR": "Armênia (Հայաստան)",
      "code": "am",
      "en-US": "Armenia (Հայաստան)"
    },
    {
      "ddi": "297",
      "mask": "999 9999",
      "name": "Aruba",
      "pt-BR": "Aruba",
      "code": "aw",
      "en-US": "Aruba"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Australia",
      "pt-BR": "Austrália",
      "code": "au",
      "en-US": "Australia"
    },
    {
      "ddi": "43",
      "mask": "9 999999999",
      "name": "Austria (Österreich)",
      "pt-BR": "Áustria (Österreich)",
      "code": "at",
      "en-US": "Austria (Österreich)"
    },
    {
      "ddi": "994",
      "mask": "99 999 99 99",
      "name": "Azerbaijan (Azərbaycan)",
      "pt-BR": "Azerbaijão (Azərbaycan)",
      "code": "az",
      "en-US": "Azerbaijan (Azərbaycan)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Bahamas",
      "pt-BR": "Bahamas",
      "code": "bs",
      "en-US": "Bahamas"
    },
    {
      "ddi": "973",
      "mask": "9999 9999",
      "name": "Bahrain (البحرين)",
      "pt-BR": "Bahrain (البحرين)",
      "code": "bh",
      "en-US": "Bahrain (البحرين)"
    },
    {
      "ddi": "880",
      "mask": "9-9999999",
      "name": "Bangladesh (বাংলাদেশ)",
      "pt-BR": "Bangladesh (বাংলাদেশ)",
      "code": "bd",
      "en-US": "Bangladesh (বাংলাদেশ)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Barbados",
      "pt-BR": "Barbados",
      "code": "as",
      "en-US": "Barbados"
    },
    {
      "ddi": "375",
      "mask": "999 99-99-99",
      "name": "Belarus (Беларусь)",
      "pt-BR": "Bielorrússia (Беларусь)",
      "code": "by",
      "en-US": "Belarus (Беларусь)"
    },
    {
      "ddi": "32",
      "mask": "99 99 99 99",
      "name": "Belgium (België)",
      "pt-BR": "Bélgica (België)",
      "code": "be",
      "en-US": "Belgium (België)"
    },
    {
      "ddi": "501",
      "mask": "999-9999",
      "name": "Belize",
      "pt-BR": "Belize",
      "code": "bz",
      "en-US": "Belize"
    },
    {
      "ddi": "229",
      "mask": "99 99 99 99",
      "name": "Benin (Bénin)",
      "pt-BR": "Benin (Bénin)",
      "code": "bj",
      "en-US": "Benin (Bénin)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Bermuda",
      "pt-BR": "Bermudas",
      "code": "bm",
      "en-US": "Bermuda"
    },
    {
      "ddi": "975",
      "mask": "9 999 999",
      "name": "Bhutan (འབྲུག)",
      "pt-BR": "Butão (འབྲུག)",
      "code": "bt",
      "en-US": "Bhutan (འབྲུག)"
    },
    {
      "ddi": "591",
      "mask": "9 9999999",
      "name": "Bolivia",
      "pt-BR": "Bolívia",
      "code": "bo",
      "en-US": "Bolivia"
    },
    {
      "ddi": "387",
      "mask": "99 999-999",
      "name": "Bosnia and Herzegovina (Босна и Херцеговина)",
      "pt-BR": "Bósnia e Herzegovina (Босна и Херцеговина)",
      "code": "ba",
      "en-US": "Bosnia and Herzegovina (Босна и Херцеговина)"
    },
    {
      "ddi": "267",
      "mask": "999 9999",
      "name": "Botswana",
      "pt-BR": "Botsuana",
      "code": "bw",
      "en-US": "Botswana"
    },
    {
      "ddi": "55",
      "mask": "(99) 99999-9999",
      "name": "Brazil (Brasil)",
      "pt-BR": "Brasil (Brasil)",
      "code": "br",
      "en-US": "Brazil (Brasil)"
    },
    {
      "ddi": "246",
      "mask": "999 9999",
      "name": "British Indian Ocean Territory",
      "pt-BR": "Território Britânico do Oceano Índico",
      "code": "io",
      "en-US": "British Indian Ocean Territory"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "British Virgin Islands",
      "pt-BR": "Ilhas Virgens Britânicas",
      "code": "as",
      "en-US": "British Virgin Islands"
    },
    {
      "ddi": "673",
      "mask": "999 9999",
      "name": "Brunei",
      "pt-BR": "Brunei",
      "code": "bn",
      "en-US": "Brunei"
    },
    {
      "ddi": "359",
      "mask": "9 999 999",
      "name": "Bulgaria (България)",
      "pt-BR": "Bulgária (България)",
      "code": "bg",
      "en-US": "Bulgaria (България)"
    },
    {
      "ddi": "226",
      "mask": "99 99 99 99",
      "name": "Burkina Faso",
      "pt-BR": "Burkina Faso",
      "code": "bf",
      "en-US": "Burkina Faso"
    },
    {
      "ddi": "257",
      "mask": "99 99 99 99",
      "name": "Burundi (Uburundi)",
      "pt-BR": "Burundi (Uburundi)",
      "code": "bi",
      "en-US": "Burundi (Uburundi)"
    },
    {
      "ddi": "855",
      "mask": "99 999 999",
      "name": "Cambodia (កម្ពុជា)",
      "pt-BR": "Camboja (កម្ពុជា)",
      "code": "kh",
      "en-US": "Cambodia (កម្ពុជា)"
    },
    {
      "ddi": "237",
      "mask": "9 99 99 99 99",
      "name": "Cameroon (Cameroun)",
      "pt-BR": "Camarões (Cameroun)",
      "code": "cm",
      "en-US": "Cameroon (Cameroun)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Canada",
      "pt-BR": "Canadá",
      "code": "as",
      "en-US": "Canada"
    },
    {
      "ddi": "238",
      "mask": "999 99 99",
      "name": "Cape Verde (Kabu Verdi)",
      "pt-BR": "Cabo Verde (Kabu Verdi)",
      "code": "cv",
      "en-US": "Cape Verde (Kabu Verdi)"
    },
    {
      "ddi": "599",
      "mask": "999 9999",
      "name": "Caribbean Netherlands",
      "pt-BR": "Países Baixos Caribenhos",
      "code": "bq",
      "en-US": "Caribbean Netherlands"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Cayman Islands",
      "pt-BR": "Ilhas Cayman",
      "code": "as",
      "en-US": "Cayman Islands"
    },
    {
      "ddi": "236",
      "mask": "99 99 99 99",
      "name": "Central African Republic (République centrafricaine)",
      "pt-BR": "República Centro-Africana (République centrafricaine)",
      "code": "cf",
      "en-US": "Central African Republic (République centrafricaine)"
    },
    {
      "ddi": "235",
      "mask": "99 99 99 99",
      "name": "Chad (Tchad)",
      "pt-BR": "Chade (Tchad)",
      "code": "td",
      "en-US": "Chad (Tchad)"
    },
    {
      "ddi": "56",
      "mask": "9 9999 9999",
      "name": "Chile",
      "pt-BR": "Chile",
      "code": "cl",
      "en-US": "Chile"
    },
    {
      "ddi": "86",
      "mask": "99 9999 9999",
      "name": "China (中国)",
      "pt-BR": "China (中国)",
      "code": "cn",
      "en-US": "China (中国)"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Christmas Island",
      "pt-BR": "Ilha Christmas",
      "code": "au",
      "en-US": "Christmas Island"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Cocos (Keeling) Islands",
      "pt-BR": "Ilhas Cocos (Keeling)",
      "code": "cc",
      "en-US": "Cocos (Keeling) Islands"
    },
    {
      "ddi": "57",
      "mask": "999 9999999",
      "name": "Colombia",
      "pt-BR": "Colômbia",
      "code": "co",
      "en-US": "Colombia"
    },
    {
      "ddi": "269",
      "mask": "999 99 99",
      "name": "Comoros (جزر القمر)",
      "pt-BR": "Comores (جزر القمر)",
      "code": "km",
      "en-US": "Comoros (جزر القمر)"
    },
    {
      "ddi": "243",
      "mask": "99 99999",
      "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
      "pt-BR": "Congo (RDC) (Jamhuri ya Kidemokrasia ya Kongo)",
      "code": "cd",
      "en-US": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)"
    },
    {
      "ddi": "242",
      "mask": "99 999 9999",
      "name": "Congo (Republic) (Congo-Brazzaville)",
      "pt-BR": "Congo (República) (Congo-Brazzaville)",
      "code": "cg",
      "en-US": "Congo (Republic) (Congo-Brazzaville)"
    },
    {
      "ddi": "682",
      "mask": "99 999",
      "name": "Cook Islands",
      "pt-BR": "Ilhas Cook",
      "code": "ck",
      "en-US": "Cook Islands"
    },
    {
      "ddi": "506",
      "mask": "9999 9999",
      "name": "Costa Rica",
      "pt-BR": "Costa Rica",
      "code": "cr",
      "en-US": "Costa Rica"
    },
    {
      "ddi": "225",
      "mask": "99 99 9 99999",
      "name": "Côte d’Ivoire",
      "pt-BR": "Costa do Marfim",
      "code": "ci",
      "en-US": "Côte d’Ivoire"
    },
    {
      "ddi": "385",
      "mask": "9 9999 999",
      "name": "Croatia (Hrvatska)",
      "pt-BR": "Croácia (Hrvatska)",
      "code": "hr",
      "en-US": "Croatia (Hrvatska)"
    },
    {
      "ddi": "53",
      "mask": "9 9999999",
      "name": "Cuba",
      "pt-BR": "Cuba",
      "code": "cu",
      "en-US": "Cuba"
    },
    {
      "ddi": "599",
      "mask": "9 999 9999",
      "name": "Curaçao",
      "pt-BR": "Curaçao",
      "code": "bq",
      "en-US": "Curaçao"
    },
    {
      "ddi": "357",
      "mask": "99 999999",
      "name": "Cyprus (Κύπρος)",
      "pt-BR": "Chipre (Κύπρος)",
      "code": "cy",
      "en-US": "Cyprus (Κύπρος)"
    },
    {
      "ddi": "420",
      "mask": "999 999 999",
      "name": "Czech Republic (Česká republika)",
      "pt-BR": "República Tcheca (Česká republika)",
      "code": "cz",
      "en-US": "Czech Republic (Česká republika)"
    },
    {
      "ddi": "45",
      "mask": "99 99 99 99",
      "name": "Denmark (Danmark)",
      "pt-BR": "Dinamarca (Danmark)",
      "code": "dk",
      "en-US": "Denmark (Danmark)"
    },
    {
      "ddi": "253",
      "mask": "99 99 99 99",
      "name": "Djibouti",
      "pt-BR": "Djibouti",
      "code": "dj",
      "en-US": "Djibouti"
    },
    {
      "ddi": "1767",
      "mask": "999-999-9999",
      "name": "Dominica",
      "pt-BR": "Dominica",
      "code": "dm",
      "en-US": "Dominica"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Dominican Republic (República Dominicana)",
      "pt-BR": "República Dominicana (República Dominicana)",
      "code": "as",
      "en-US": "Dominican Republic (República Dominicana)"
    },
    {
      "ddi": "593",
      "mask": "9-999-9999",
      "name": "Ecuador",
      "pt-BR": "Equador",
      "code": "ec",
      "en-US": "Ecuador"
    },
    {
      "ddi": "20",
      "mask": "9 99999999",
      "name": "Egypt (مصر)",
      "pt-BR": "Egito (مصر)",
      "code": "eg",
      "en-US": "Egypt (مصر)"
    },
    {
      "ddi": "503",
      "mask": "9999 9999",
      "name": "El Salvador",
      "pt-BR": "El Salvador",
      "code": "sv",
      "en-US": "El Salvador"
    },
    {
      "ddi": "240",
      "mask": "999 999 999",
      "name": "Equatorial Guinea (Guinea Ecuatorial)",
      "pt-BR": "Guiné Equatorial (Guiné Equatorial)",
      "code": "gq",
      "en-US": "Equatorial Guinea (Guinea Ecuatorial)"
    },
    {
      "ddi": "291",
      "mask": "9 999 999",
      "name": "Eritrea",
      "pt-BR": "Eritreia",
      "code": "er",
      "en-US": "Eritrea"
    },
    {
      "ddi": "372",
      "mask": "999 9999",
      "name": "Estonia (Eesti)",
      "pt-BR": "Estônia (Eesti)",
      "code": "ee",
      "en-US": "Estonia (Eesti)"
    },
    {
      "ddi": "251",
      "mask": "99 999 9999",
      "name": "Ethiopia",
      "pt-BR": "Etiópia",
      "code": "et",
      "en-US": "Ethiopia"
    },
    {
      "ddi": "500",
      "mask": "99999",
      "name": "Falkland Islands (Islas Malvinas)",
      "pt-BR": "Ilhas Malvinas (Islas Malvinas)",
      "code": "fk",
      "en-US": "Falkland Islands (Islas Malvinas)"
    },
    {
      "ddi": "298",
      "mask": "999999",
      "name": "Faroe Islands (Føroyar)",
      "pt-BR": "Ilhas Faroé (Føroyar)",
      "code": "fo",
      "en-US": "Faroe Islands (Føroyar)"
    },
    {
      "ddi": "679",
      "mask": "999 9999",
      "name": "Fiji",
      "pt-BR": "Fiji",
      "code": "fj",
      "en-US": "Fiji"
    },
    {
      "ddi": "358",
      "mask": "99 9999999",
      "name": "Finland (Suomi)",
      "pt-BR": "Finlândia (Suomi)",
      "code": "fi",
      "en-US": "Finland (Suomi)"
    },
    {
      "ddi": "33",
      "mask": "9 99 99 99 99",
      "name": "France",
      "pt-BR": "França",
      "code": "fr",
      "en-US": "France"
    },
    {
      "ddi": "594",
      "mask": "999 99 99 99",
      "name": "French Guiana (Guyane française)",
      "pt-BR": "Guiana Francesa (Guyane française)",
      "code": "gf",
      "en-US": "French Guiana (Guyane française)"
    },
    {
      "ddi": "689",
      "mask": "99 99 99 99",
      "name": "French Polynesia (Polynésie française)",
      "pt-BR": "Polinésia Francesa (Polynésie française)",
      "code": "pf",
      "en-US": "French Polynesia (Polynésie française)"
    },
    {
      "ddi": "241",
      "mask": "99 99 99 99",
      "name": "Gabon",
      "pt-BR": "Gabão",
      "code": "ga",
      "en-US": "Gabon"
    },
    {
      "ddi": "220",
      "mask": "999 9999",
      "name": "Gambia",
      "pt-BR": "Gâmbia",
      "code": "gm",
      "en-US": "Gambia"
    },
    {
      "ddi": "995",
      "mask": "99 999 99 99",
      "name": "Georgia (საქართველო)",
      "pt-BR": "Geórgia (საქართველო)",
      "code": "ge",
      "en-US": "Georgia (საქართველო)"
    },
    {
      "ddi": "49",
      "mask": "99 999999",
      "name": "Germany (Deutschland)",
      "pt-BR": "Alemanha (Deutschland)",
      "code": "de",
      "en-US": "Germany (Deutschland)"
    },
    {
      "ddi": "233",
      "mask": "99 999 9999",
      "name": "Ghana (Gaana)",
      "pt-BR": "Gana (Gaana)",
      "code": "gh",
      "en-US": "Ghana (Gaana)"
    },
    {
      "ddi": "350",
      "mask": "999 99999",
      "name": "Gibraltar",
      "pt-BR": "Gibraltar",
      "code": "gi",
      "en-US": "Gibraltar"
    },
    {
      "ddi": "30",
      "mask": "99 9999 9999",
      "name": "Greece (Ελλάδα)",
      "pt-BR": "Grécia (Ελλάδα)",
      "code": "gr",
      "en-US": "Greece (Ελλάδα)"
    },
    {
      "ddi": "299",
      "mask": "99 99 99",
      "name": "Greenland (Kalaallit Nunaat)",
      "pt-BR": "Groenlândia (Kalaallit Nunaat)",
      "code": "gl",
      "en-US": "Greenland (Kalaallit Nunaat)"
    },
    {
      "ddi": "1473",
      "mask": "999-999-9999",
      "name": "Grenada",
      "pt-BR": "Granada",
      "code": "gd",
      "en-US": "Grenada"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Guadeloupe",
      "pt-BR": "Guadalupe",
      "code": "gp",
      "en-US": "Guadeloupe"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Guam",
      "pt-BR": "Guam",
      "code": "as",
      "en-US": "Guam"
    },
    {
      "ddi": "502",
      "mask": "9999 9999",
      "name": "Guatemala",
      "pt-BR": "Guatemala",
      "code": "gt",
      "en-US": "Guatemala"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Guernsey",
      "pt-BR": "Guernsey",
      "code": "gg",
      "en-US": "Guernsey"
    },
    {
      "ddi": "224",
      "mask": "99 99 99 99",
      "name": "Guinea (Guinée)",
      "pt-BR": "Guiné (Guinée)",
      "code": "gn",
      "en-US": "Guinea (Guinée)"
    },
    {
      "ddi": "245",
      "mask": "999 999 999",
      "name": "Guinea-Bissau (Guiné Bissau)",
      "pt-BR": "Guiné-Bissau (Guiné Bissau)",
      "code": "gw",
      "en-US": "Guinea-Bissau (Guiné Bissau)"
    },
    {
      "ddi": "592",
      "mask": "999 9999",
      "name": "Guyana",
      "pt-BR": "Guiana",
      "code": "gy",
      "en-US": "Guyana"
    },
    {
      "ddi": "509",
      "mask": "99 99 9999",
      "name": "Haiti",
      "pt-BR": "Haiti",
      "code": "ht",
      "en-US": "Haiti"
    },
    {
      "ddi": "504",
      "mask": "9999-9999",
      "name": "Honduras",
      "pt-BR": "Honduras",
      "code": "hn",
      "en-US": "Honduras"
    },
    {
      "ddi": "852",
      "mask": "9999 9999",
      "name": "Hong Kong (香港)",
      "pt-BR": "Hong Kong (香港)",
      "code": "hk",
      "en-US": "Hong Kong (香港)"
    },
    {
      "ddi": "36",
      "mask": "9 999 9999",
      "name": "Hungary (Magyarország)",
      "pt-BR": "Hungria (Magyarország)",
      "code": "hu",
      "en-US": "Hungary (Magyarország)"
    },
    {
      "ddi": "354",
      "mask": "999 9999",
      "name": "Iceland (Ísland)",
      "pt-BR": "Islândia (Ísland)",
      "code": "is",
      "en-US": "Iceland (Ísland)"
    },
    {
      "ddi": "91",
      "mask": "99999 99999",
      "name": "India (भारत)",
      "pt-BR": "Índia (भारत)",
      "code": "in",
      "en-US": "India (भारत)"
    },
    {
      "ddi": "62",
      "mask": "99 9999999",
      "name": "Indonesia",
      "pt-BR": "Indonésia",
      "code": "id",
      "en-US": "Indonesia"
    },
    {
      "ddi": "98",
      "mask": "99 9999 9999",
      "name": "Iran (ایران)",
      "pt-BR": "Irã (ایران)",
      "code": "ir",
      "en-US": "Iran (ایران)"
    },
    {
      "ddi": "964",
      "mask": "9 999 9999",
      "name": "Iraq (العراق)",
      "pt-BR": "Iraque (العراق)",
      "code": "iq",
      "en-US": "Iraq (العراق)"
    },
    {
      "ddi": "353",
      "mask": "99 99999",
      "name": "Ireland",
      "pt-BR": "Irlanda",
      "code": "ie",
      "en-US": "Ireland"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Isle of Man",
      "pt-BR": "Ilha de Man",
      "code": "gg",
      "en-US": "Isle of Man"
    },
    {
      "ddi": "972",
      "mask": "9-999-9999",
      "name": "Israel (ישראל)",
      "pt-BR": "Israel (ישראל)",
      "code": "il",
      "en-US": "Israel (ישראל)"
    },
    {
      "ddi": "39",
      "mask": "99 9999 9999",
      "name": "Italy (Italia)",
      "pt-BR": "Itália (Italia)",
      "code": "it",
      "en-US": "Italy (Italia)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Jamaica",
      "pt-BR": "Jamaica",
      "code": "as",
      "en-US": "Jamaica"
    },
    {
      "ddi": "81",
      "mask": "9-9999-9999",
      "name": "Japan (日本)",
      "pt-BR": "Japão (日本)",
      "code": "jp",
      "en-US": "Japan (日本)"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Jersey",
      "pt-BR": "Jersey",
      "code": "gg",
      "en-US": "Jersey"
    },
    {
      "ddi": "962",
      "mask": "9 999 9999",
      "name": "Jordan (الأردن)",
      "pt-BR": "Jordânia (الأردن)",
      "code": "jo",
      "en-US": "Jordan (الأردن)"
    },
    {
      "ddi": "7",
      "mask": "99999 9 99 99",
      "name": "Kazakhstan (Казахстан)",
      "pt-BR": "Cazaquistão (Казахстан)",
      "code": "kz",
      "en-US": "Kazakhstan (Казахстан)"
    },
    {
      "ddi": "254",
      "mask": "99 9999999",
      "name": "Kenya",
      "pt-BR": "Quênia",
      "code": "ke",
      "en-US": "Kenya"
    },
    {
      "ddi": "686",
      "mask": "99999",
      "name": "Kiribati",
      "pt-BR": "Kiribati",
      "code": "ki",
      "en-US": "Kiribati"
    },
    {
      "ddi": "383",
      "mask": "99 999 999",
      "name": "Kosovo",
      "pt-BR": "Kosovo",
      "code": "xk",
      "en-US": "Kosovo"
    },
    {
      "ddi": "965",
      "mask": "9999 9999",
      "name": "Kuwait (الكويت)",
      "pt-BR": "Kuwait (الكويت)",
      "code": "kw",
      "en-US": "Kuwait (الكويت)"
    },
    {
      "ddi": "996",
      "mask": "999 999 999",
      "name": "Kyrgyzstan (Кыргызстан)",
      "pt-BR": "Quirguistão (Кыргызстан)",
      "code": "kg",
      "en-US": "Kyrgyzstan (Кыргызстан)"
    },
    {
      "ddi": "856",
      "mask": "99 999 999",
      "name": "Laos (ລາວ)",
      "pt-BR": "Laos (ລາວ)",
      "code": "la",
      "en-US": "Laos (ລາວ)"
    },
    {
      "ddi": "371",
      "mask": "99 999 999",
      "name": "Latvia (Latvija)",
      "pt-BR": "Letônia (Latvija)",
      "code": "lv",
      "en-US": "Latvia (Latvija)"
    },
    {
      "ddi": "961",
      "mask": "9 999 999",
      "name": "Lebanon (لبنان)",
      "pt-BR": "Líbano (لبنان)",
      "code": "lb",
      "en-US": "Lebanon (لبنان)"
    },
    {
      "ddi": "266",
      "mask": "9999 9999",
      "name": "Lesotho",
      "pt-BR": "Lesoto",
      "code": "ls",
      "en-US": "Lesotho"
    },
    {
      "ddi": "231",
      "mask": "99 999 999",
      "name": "Liberia",
      "pt-BR": "Libéria",
      "code": "lr",
      "en-US": "Liberia"
    },
    {
      "ddi": "218",
      "mask": "99-9999999",
      "name": "Libya (ليبيا)",
      "pt-BR": "Líbia (ليبيا)",
      "code": "ly",
      "en-US": "Libya (ليبيا)"
    },
    {
      "ddi": "423",
      "mask": "999 99 99",
      "name": "Liechtenstein",
      "pt-BR": "Liechtenstein",
      "code": "li",
      "en-US": "Liechtenstein"
    },
    {
      "ddi": "370",
      "mask": "999 99999",
      "name": "Lithuania (Lietuva)",
      "pt-BR": "Lituânia (Lietuva)",
      "code": "lt",
      "en-US": "Lithuania (Lietuva)"
    },
    {
      "ddi": "352",
      "mask": "99 99 99 99",
      "name": "Luxembourg",
      "pt-BR": "Luxemburgo",
      "code": "lu",
      "en-US": "Luxembourg"
    },
    {
      "ddi": "853",
      "mask": "9999 9999",
      "name": "Macau (澳門)",
      "pt-BR": "Macau (澳門)",
      "code": "mo",
      "en-US": "Macau (澳門)"
    },
    {
      "ddi": "389",
      "mask": "9 999 9999",
      "name": "Macedonia (FYROM) (Македонија)",
      "pt-BR": "Macedônia (ARJM) (Македонија)",
      "code": "mk",
      "en-US": "Macedonia (FYROM) (Македонија)"
    },
    {
      "ddi": "261",
      "mask": "99 99 999 99",
      "name": "Madagascar (Madagasikara)",
      "pt-BR": "Madagascar (Madagasikara)",
      "code": "mg",
      "en-US": "Madagascar (Madagasikara)"
    },
    {
      "ddi": "265",
      "mask": "9 999 999",
      "name": "Malawi",
      "pt-BR": "Malawi",
      "code": "mw",
      "en-US": "Malawi"
    },
    {
      "ddi": "60",
      "mask": "9-9999 9999",
      "name": "Malaysia",
      "pt-BR": "Malásia",
      "code": "my",
      "en-US": "Malaysia"
    },
    {
      "ddi": "960",
      "mask": "999-9999",
      "name": "Maldives",
      "pt-BR": "Maldivas",
      "code": "mv",
      "en-US": "Maldives"
    },
    {
      "ddi": "223",
      "mask": "99 99 99 99",
      "name": "Mali",
      "pt-BR": "Mali",
      "code": "ml",
      "en-US": "Mali"
    },
    {
      "ddi": "356",
      "mask": "9999 9999",
      "name": "Malta",
      "pt-BR": "Malta",
      "code": "mt",
      "en-US": "Malta"
    },
    {
      "ddi": "692",
      "mask": "999-9999",
      "name": "Marshall Islands",
      "pt-BR": "Ilhas Marshall",
      "code": "mh",
      "en-US": "Marshall Islands"
    },
    {
      "ddi": "596",
      "mask": "999 99 99 99",
      "name": "Martinique",
      "pt-BR": "Martinica",
      "code": "mq",
      "en-US": "Martinique"
    },
    {
      "ddi": "222",
      "mask": "99 99 99 99",
      "name": "Mauritania (موريتانيا)",
      "pt-BR": "Mauritânia (موريتانيا)",
      "code": "mr",
      "en-US": "Mauritania (موريتانيا)"
    },
    {
      "ddi": "230",
      "mask": "9999 9999",
      "name": "Mauritius (Moris)",
      "pt-BR": "Maurício (Moris)",
      "code": "mu",
      "en-US": "Mauritius (Moris)"
    },
    {
      "ddi": "262",
      "mask": "999 99 99 99",
      "name": "Mayotte",
      "pt-BR": "Mayotte",
      "code": "yt",
      "en-US": "Mayotte"
    },
    {
      "ddi": "52",
      "mask": "999 999 9999",
      "name": "Mexico (México)",
      "pt-BR": "México (México)",
      "code": "mx",
      "en-US": "Mexico (México)"
    },
    {
      "ddi": "691",
      "mask": "999 9999",
      "name": "Micronesia",
      "pt-BR": "Micronésia",
      "code": "fm",
      "en-US": "Micronesia"
    },
    {
      "ddi": "373",
      "mask": "99 999 999",
      "name": "Moldova (Republica Moldova)",
      "pt-BR": "Moldávia (República Moldova)",
      "code": "md",
      "en-US": "Moldova (Republica Moldova)"
    },
    {
      "ddi": "377",
      "mask": "99 99 99 99",
      "name": "Monaco",
      "pt-BR": "Mônaco",
      "code": "mc",
      "en-US": "Monaco"
    },
    {
      "ddi": "976",
      "mask": "9999 9999",
      "name": "Mongolia (Монгол)",
      "pt-BR": "Mongólia (Монгол)",
      "code": "mn",
      "en-US": "Mongolia (Монгол)"
    },
    {
      "ddi": "382",
      "mask": "99 999 999",
      "name": "Montenegro (Crna Gora)",
      "pt-BR": "Montenegro (Crna Gora)",
      "code": "me",
      "en-US": "Montenegro (Crna Gora)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Montserrat",
      "pt-BR": "Montserrat",
      "code": "as",
      "en-US": "Montserrat"
    },
    {
      "ddi": "212",
      "mask": "999-999999",
      "name": "Morocco (المغرب)",
      "pt-BR": "Marrocos (المغرب)",
      "code": "ma",
      "en-US": "Morocco (المغرب)"
    },
    {
      "ddi": "258",
      "mask": "99 999 999",
      "name": "Mozambique (Moçambique)",
      "pt-BR": "Moçambique (Moçambique)",
      "code": "mz",
      "en-US": "Mozambique (Moçambique)"
    },
    {
      "ddi": "95",
      "mask": "9 999 999",
      "name": "Myanmar (Burma) (မြန်မာ)",
      "pt-BR": "Mianmar (Birmânia) (မြန်မာ)",
      "code": "mm",
      "en-US": "Myanmar (Burma) (မြန်မာ)"
    },
    {
      "ddi": "264",
      "mask": "99 999 999",
      "name": "Namibia (Namibië)",
      "pt-BR": "Namíbia (Namibië)",
      "code": "na",
      "en-US": "Namibia (Namibië)"
    },
    {
      "ddi": "674",
      "mask": "999 9999",
      "name": "Nauru",
      "pt-BR": "Nauru",
      "code": "nr",
      "en-US": "Nauru"
    },
    {
      "ddi": "977",
      "mask": "9-9999999",
      "name": "Nepal (नेपाल)",
      "pt-BR": "Nepal (नेपाल)",
      "code": "np",
      "en-US": "Nepal (नेपाल)"
    },
    {
      "ddi": "31",
      "mask": "99 999 9999",
      "name": "Netherlands (Nederland)",
      "pt-BR": "Países Baixos (Nederland)",
      "code": "nl",
      "en-US": "Netherlands (Nederland)"
    },
    {
      "ddi": "687",
      "mask": "99.99.99",
      "name": "New Caledonia (Nouvelle-Calédonie)",
      "pt-BR": "Nova Caledônia (Nouvelle-Calédonie)",
      "code": "nc",
      "en-US": "New Caledonia (Nouvelle-Calédonie)"
    },
    {
      "ddi": "64",
      "mask": "9 999 9999",
      "name": "New Zealand",
      "pt-BR": "Nova Zelândia",
      "code": "nz",
      "en-US": "New Zealand"
    },
    {
      "ddi": "505",
      "mask": "9999 9999",
      "name": "Nicaragua",
      "pt-BR": "Nicarágua",
      "code": "ni",
      "en-US": "Nicaragua"
    },
    {
      "ddi": "227",
      "mask": "99 99 99 99",
      "name": "Niger (Nijar)",
      "pt-BR": "Níger (Nijar)",
      "code": "ne",
      "en-US": "Niger (Nijar)"
    },
    {
      "ddi": "234",
      "mask": "9 999 9999",
      "name": "Nigeria",
      "pt-BR": "Nigéria",
      "code": "ng",
      "en-US": "Nigeria"
    },
    {
      "ddi": "683",
      "mask": "9999",
      "name": "Niue",
      "pt-BR": "Niue",
      "code": "nu",
      "en-US": "Niue"
    },
    {
      "ddi": "672",
      "mask": "99 9999",
      "name": "Norfolk Island",
      "pt-BR": "Ilha Norfolk",
      "code": "nf",
      "en-US": "Norfolk Island"
    },
    {
      "ddi": "850",
      "mask": "9 999 9999",
      "name": "North Korea (조선 민주주의 인민 공화국)",
      "pt-BR": "Coreia do Norte (조선 민주주의 인민 공화국)",
      "code": "kp",
      "en-US": "North Korea (조선 민주주의 인민 공화국)"
    },
    {
      "ddi": "1670",
      "mask": "999-999-9999",
      "name": "Northern Mariana Islands",
      "pt-BR": "Ilhas Marianas do Norte",
      "code": "mp",
      "en-US": "Northern Mariana Islands"
    },
    {
      "ddi": "47",
      "mask": "99 99 99 99",
      "name": "Norway (Norge)",
      "pt-BR": "Noruega (Norge)",
      "code": "no",
      "en-US": "Norway (Norge)"
    },
    {
      "ddi": "968",
      "mask": "99 999999",
      "name": "Oman (عُمان)",
      "pt-BR": "Omã (عُمان)",
      "code": "om",
      "en-US": "Oman (عُمان)"
    },
    {
      "ddi": "92",
      "mask": "99 99999999",
      "name": "Pakistan (پاکستان)",
      "pt-BR": "Paquistão (پاکستان)",
      "code": "pk",
      "en-US": "Pakistan (پاکستان)"
    },
    {
      "ddi": "680",
      "mask": "999 9999",
      "name": "Palau",
      "pt-BR": "Palau",
      "code": "pw",
      "en-US": "Palau"
    },
    {
      "ddi": "970",
      "mask": "9 999 9999",
      "name": "Palestine (فلسطين)",
      "pt-BR": "Palestina (فلسطين)",
      "code": "ps",
      "en-US": "Palestine (فلسطين)"
    },
    {
      "ddi": "507",
      "mask": "999-9999",
      "name": "Panama (Panamá)",
      "pt-BR": "Panamá (Panamá)",
      "code": "pa",
      "en-US": "Panama (Panamá)"
    },
    {
      "ddi": "675",
      "mask": "999 9999",
      "name": "Papua New Guinea",
      "pt-BR": "Papua Nova Guiné",
      "code": "pg",
      "en-US": "Papua New Guinea"
    },
    {
      "ddi": "595",
      "mask": "99 999 9999",
      "name": "Paraguay",
      "pt-BR": "Paraguai",
      "code": "py",
      "en-US": "Paraguay"
    },
    {
      "ddi": "51",
      "mask": "9 9999999",
      "name": "Peru (Perú)",
      "pt-BR": "Peru (Perú)",
      "code": "pe",
      "en-US": "Peru (Perú)"
    },
    {
      "ddi": "63",
      "mask": "9 9999 9999",
      "name": "Philippines",
      "pt-BR": "Filipinas",
      "code": "ph",
      "en-US": "Philippines"
    },
    {
      "ddi": "48",
      "mask": "99 999 99 99",
      "name": "Poland (Polska)",
      "pt-BR": "Polônia (Polska)",
      "code": "pl",
      "en-US": "Poland (Polska)"
    },
    {
      "ddi": "351",
      "mask": "99 999 9999",
      "name": "Portugal",
      "pt-BR": "Portugal",
      "code": "pt",
      "en-US": "Portugal"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Puerto Rico",
      "pt-BR": "Porto Rico",
      "code": "as",
      "en-US": "Puerto Rico"
    },
    {
      "ddi": "974",
      "mask": "9999 9999",
      "name": "Qatar (قطر)",
      "pt-BR": "Catar (قطر)",
      "code": "qa",
      "en-US": "Qatar (قطر)"
    },
    {
      "ddi": "262",
      "mask": "999 99 99 99",
      "name": "Réunion (La Réunion)",
      "pt-BR": "Reunião (La Réunion)",
      "code": "yt",
      "en-US": "Réunion (La Réunion)"
    },
    {
      "ddi": "40",
      "mask": "99 999 9999",
      "name": "Romania (România)",
      "pt-BR": "Romênia (România)",
      "code": "ro",
      "en-US": "Romania (România)"
    },
    {
      "ddi": "7",
      "mask": "999 999-99-99",
      "name": "Russia (Россия)",
      "pt-BR": "Rússia (Россия)",
      "code": "kz",
      "en-US": "Russia (Россия)"
    },
    {
      "ddi": "250",
      "mask": "999 999 999",
      "name": "Rwanda",
      "pt-BR": "Ruanda",
      "code": "rw",
      "en-US": "Rwanda"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Saint Barthélemy (Saint-Barthélemy)",
      "pt-BR": "São Bartolomeu (Saint-Barthélemy)",
      "code": "gp",
      "en-US": "Saint Barthélemy (Saint-Barthélemy)"
    },
    {
      "ddi": "290",
      "mask": "99999",
      "name": "Saint Helena",
      "pt-BR": "Santa Helena",
      "code": "sh",
      "en-US": "Saint Helena"
    },
    {
      "ddi": "1869",
      "mask": "999-999-9999",
      "name": "Saint Kitts and Nevis",
      "pt-BR": "São Cristóvão e Nevis",
      "code": "kn",
      "en-US": "Saint Kitts and Nevis"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Saint Lucia",
      "pt-BR": "Santa Lúcia",
      "code": "as",
      "en-US": "Saint Lucia"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Saint Martin (Saint-Martin (partie française))",
      "pt-BR": "Saint Martin (Saint-Martin (partie française))",
      "code": "gp",
      "en-US": "Saint Martin (Saint-Martin (partie française))"
    },
    {
      "ddi": "508",
      "mask": "99 99 99",
      "name": "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
      "pt-BR": "Saint Pierre e Miquelon (Saint-Pierre-et-Miquelon)",
      "code": "pm",
      "en-US": "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Saint Vincent and the Grenadines",
      "pt-BR": "São Vicente e Granadinas",
      "code": "as",
      "en-US": "Saint Vincent and the Grenadines"
    },
    {
      "ddi": "685",
      "mask": "99999",
      "name": "Samoa",
      "pt-BR": "Samoa",
      "code": "ws",
      "en-US": "Samoa"
    },
    {
      "ddi": "378",
      "mask": "9999 999999",
      "name": "San Marino",
      "pt-BR": "San Marino",
      "code": "sm",
      "en-US": "San Marino"
    },
    {
      "ddi": "239",
      "mask": "999 9999",
      "name": "São Tomé and Príncipe (São Tomé e Príncipe)",
      "pt-BR": "São Tomé e Príncipe (São Tomé e Príncipe)",
      "code": "st",
      "en-US": "São Tomé and Príncipe (São Tomé e Príncipe)"
    },
    {
      "ddi": "966",
      "mask": "99 999 9999",
      "name": "Saudi Arabia (المملكة العربية السعودية)",
      "pt-BR": "Arábia Saudita (المملكة العربية السعودية)",
      "code": "sa",
      "en-US": "Saudi Arabia (المملكة العربية السعودية)"
    },
    {
      "ddi": "221",
      "mask": "99 999 99 99",
      "name": "Senegal (Sénégal)",
      "pt-BR": "Senegal (Sénégal)",
      "code": "sn",
      "en-US": "Senegal (Sénégal)"
    },
    {
      "ddi": "381",
      "mask": "99 999999",
      "name": "Serbia (Србија)",
      "pt-BR": "Sérvia (Србија)",
      "code": "rs",
      "en-US": "Serbia (Србија)"
    },
    {
      "ddi": "248",
      "mask": "9 999 999",
      "name": "Seychelles",
      "pt-BR": "Seychelles",
      "code": "sc",
      "en-US": "Seychelles"
    },
    {
      "ddi": "232",
      "mask": "99 999999",
      "name": "Sierra Leone",
      "pt-BR": "Serra Leoa",
      "code": "sl",
      "en-US": "Sierra Leone"
    },
    {
      "ddi": "65",
      "mask": "9999 9999",
      "name": "Singapore",
      "pt-BR": "Singapura",
      "code": "sg",
      "en-US": "Singapore"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Sint Maarten",
      "pt-BR": "Sint Maarten",
      "code": "as",
      "en-US": "Sint Maarten"
    },
    {
      "ddi": "421",
      "mask": "9/999 999 99",
      "name": "Slovakia (Slovensko)",
      "pt-BR": "Eslováquia (Slovensko)",
      "code": "sk",
      "en-US": "Slovakia (Slovensko)"
    },
    {
      "ddi": "386",
      "mask": "9 999 99 99",
      "name": "Slovenia (Slovenija)",
      "pt-BR": "Eslovênia (Slovenija)",
      "code": "si",
      "en-US": "Slovenia (Slovenija)"
    },
    {
      "ddi": "677",
      "mask": "99999",
      "name": "Solomon Islands",
      "pt-BR": "Ilhas Salomão",
      "code": "sb",
      "en-US": "Solomon Islands"
    },
    {
      "ddi": "252",
      "mask": "9 999999",
      "name": "Somalia (Soomaaliya)",
      "pt-BR": "Somália (Soomaaliya)",
      "code": "so",
      "en-US": "Somalia (Soomaaliya)"
    },
    {
      "ddi": "27",
      "mask": "99 999 9999",
      "name": "South Africa",
      "pt-BR": "África do Sul",
      "code": "za",
      "en-US": "South Africa"
    },
    {
      "ddi": "82",
      "mask": "9-999-9999",
      "name": "South Korea (대한민국)",
      "pt-BR": "Coreia do Sul (대한민국)",
      "code": "kr",
      "en-US": "South Korea (대한민국)"
    },
    {
      "ddi": "211",
      "mask": "999 999 999",
      "name": "South Sudan (جنوب السودان)",
      "pt-BR": "Sudão do Sul (جنوب السودان)",
      "code": "ss",
      "en-US": "South Sudan (جنوب السودان)"
    },
    {
      "ddi": "34",
      "mask": "999 99 99 99",
      "name": "Spain (España)",
      "pt-BR": "Espanha (España)",
      "code": "es",
      "en-US": "Spain (España)"
    },
    {
      "ddi": "94",
      "mask": "999 999 999",
      "name": "Sri Lanka (ශ්‍රී ලංකාව)",
      "pt-BR": "Sri Lanka (ශ්‍රී ලංකාව)",
      "code": "lk",
      "en-US": "Sri Lanka (ශ්‍රී ලංකාව)"
    },
    {
      "ddi": "249",
      "mask": "99 999 9999",
      "name": "Sudan (السودان)",
      "pt-BR": "Sudão (السودان)",
      "code": "sd",
      "en-US": "Sudan (السودان)"
    },
    {
      "ddi": "597",
      "mask": "999-999",
      "name": "Suriname",
      "pt-BR": "Suriname",
      "code": "sr",
      "en-US": "Suriname"
    },
    {
      "ddi": "47",
      "mask": "99 99 99 99",
      "name": "Svalbard and Jan Mayen",
      "pt-BR": "Svalbard e Jan Mayen",
      "code": "no",
      "en-US": "Svalbard and Jan Mayen"
    },
    {
      "ddi": "268",
      "mask": "9999 9999",
      "name": "Swaziland",
      "pt-BR": "Suazilândia",
      "code": "sz",
      "en-US": "Swaziland"
    },
    {
      "ddi": "46",
      "mask": "9 99 99 99",
      "name": "Sweden (Sverige)",
      "pt-BR": "Suécia (Sverige)",
      "code": "se",
      "en-US": "Sweden (Sverige)"
    },
    {
      "ddi": "41",
      "mask": "99 999 99 99",
      "name": "Switzerland (Schweiz)",
      "pt-BR": "Suíça (Schweiz)",
      "code": "ch",
      "en-US": "Switzerland (Schweiz)"
    },
    {
      "ddi": "963",
      "mask": "99 999 9999",
      "name": "Syria (سوريا)",
      "pt-BR": "Síria (سوريا)",
      "code": "sy",
      "en-US": "Syria (سوريا)"
    },
    {
      "ddi": "886",
      "mask": "9 9999 9999",
      "name": "Taiwan (台灣)",
      "pt-BR": "Taiwan (台灣)",
      "code": "tw",
      "en-US": "Taiwan (台灣)"
    },
    {
      "ddi": "992",
      "mask": "999 99 9999",
      "name": "Tajikistan",
      "pt-BR": "Tajiquistão",
      "code": "tj",
      "en-US": "Tajikistan"
    },
    {
      "ddi": "255",
      "mask": "99 999 9999",
      "name": "Tanzania",
      "pt-BR": "Tanzânia",
      "code": "tz",
      "en-US": "Tanzania"
    },
    {
      "ddi": "66",
      "mask": "9 999 9999",
      "name": "Thailand (ไทย)",
      "pt-BR": "Tailândia (ไทย)",
      "code": "th",
      "en-US": "Thailand (ไทย)"
    },
    {
      "ddi": "670",
      "mask": "999 9999",
      "name": "Timor-Leste",
      "pt-BR": "Timor-Leste",
      "code": "tl",
      "en-US": "Timor-Leste"
    },
    {
      "ddi": "228",
      "mask": "99 99 99 99",
      "name": "Togo",
      "pt-BR": "Togo",
      "code": "tg",
      "en-US": "Togo"
    },
    {
      "ddi": "690",
      "mask": "9999",
      "name": "Tokelau",
      "pt-BR": "Tokelau",
      "code": "tk",
      "en-US": "Tokelau"
    },
    {
      "ddi": "676",
      "mask": "99-999",
      "name": "Tonga",
      "pt-BR": "Tonga",
      "code": "to",
      "en-US": "Tonga"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Trinidad and Tobago",
      "pt-BR": "Trinidad e Tobago",
      "code": "as",
      "en-US": "Trinidad and Tobago"
    },
    {
      "ddi": "216",
      "mask": "99 999 999",
      "name": "Tunisia (تونس)",
      "pt-BR": "Tunísia (تونس)",
      "code": "tn",
      "en-US": "Tunisia (تونس)"
    },
    {
      "ddi": "90",
      "mask": "999 999 99 99",
      "name": "Turkey (Türkiye)",
      "pt-BR": "Turquia (Türkiye)",
      "code": "tr",
      "en-US": "Turkey (Türkiye)"
    },
    {
      "ddi": "993",
      "mask": "99 99-99-99",
      "name": "Turkmenistan",
      "pt-BR": "Turcomenistão",
      "code": "tm",
      "en-US": "Turkmenistan"
    },
    {
      "ddi": "1649",
      "mask": "999-999-9999",
      "name": "Turks and Caicos Islands",
      "pt-BR": "Ilhas Turks e Caicos",
      "code": "tc",
      "en-US": "Turks and Caicos Islands"
    },
    {
      "ddi": "688",
      "mask": "99 999",
      "name": "Tuvalu",
      "pt-BR": "Tuvalu",
      "code": "tv",
      "en-US": "Tuvalu"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "U.S. Virgin Islands",
      "pt-BR": "Ilhas Virgens dos EUA",
      "code": "as",
      "en-US": "U.S. Virgin Islands"
    },
    {
      "ddi": "256",
      "mask": "99 9999999",
      "name": "Uganda",
      "pt-BR": "Uganda",
      "code": "ug",
      "en-US": "Uganda"
    },
    {
      "ddi": "380",
      "mask": "9999 99999",
      "name": "Ukraine (Україна)",
      "pt-BR": "Ucrânia (Україна)",
      "code": "ua",
      "en-US": "Ukraine (Україна)"
    },
    {
      "ddi": "971",
      "mask": "9 999 9999",
      "name": "United Arab Emirates (الإمارات العربية المتحدة)",
      "pt-BR": "Emirados Árabes Unidos (الإمارات العربية المتحدة)",
      "code": "ae",
      "en-US": "United Arab Emirates (الإمارات العربية المتحدة)"
    },
    {
      "ddi": "44",
      "mask": "999 999 9999",
      "name": "United Kingdom",
      "pt-BR": "Reino Unido",
      "code": "gg",
      "en-US": "United Kingdom"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "United States",
      "pt-BR": "Estados Unidos",
      "code": "us",
      "en-US": "United States"
    },
    {
      "ddi": "598",
      "mask": "9999 9999",
      "name": "Uruguay",
      "pt-BR": "Uruguai",
      "code": "uy",
      "en-US": "Uruguay"
    },
    {
      "ddi": "998",
      "mask": "99 999 99 99",
      "name": "Uzbekistan (Oʻzbekiston)",
      "pt-BR": "Uzbequistão (Oʻzbekiston)",
      "code": "uz",
      "en-US": "Uzbekistan (Oʻzbekiston)"
    },
    {
      "ddi": "678",
      "mask": "99999",
      "name": "Vanuatu",
      "pt-BR": "Vanuatu",
      "code": "vu",
      "en-US": "Vanuatu"
    },
    {
      "ddi": "39",
      "mask": "99 9999 9999",
      "name": "Vatican City (Città del Vaticano)",
      "pt-BR": "Cidade do Vaticano (Città del Vaticano)",
      "code": "va",
      "en-US": "Vatican City (Città del Vaticano)"
    },
    {
      "ddi": "58",
      "mask": "999-9999999",
      "name": "Venezuela",
      "pt-BR": "Venezuela",
      "code": "ve",
      "en-US": "Venezuela"
    },
    {
      "ddi": "84",
      "mask": "999 9999 999",
      "name": "Vietnam (Việt Nam)",
      "pt-BR": "Vietnã (Việt Nam)",
      "code": "vn",
      "en-US": "Vietnam (Việt Nam)"
    },
    {
      "ddi": "681",
      "mask": "99 99 99",
      "name": "Wallis and Futuna",
      "pt-BR": "Wallis e Futuna",
      "code": "wf",
      "en-US": "Wallis and Futuna"
    },
    {
      "ddi": "212",
      "mask": "9999-99999",
      "name": "Western Sahara (الصحراء الغربية)",
      "pt-BR": "Saara Ocidental (الصحراء الغربية)",
      "code": "ma",
      "en-US": "Western Sahara (الصحراء الغربية)"
    },
    {
      "ddi": "967",
      "mask": "9 999 999",
      "name": "Yemen (اليمن)",
      "pt-BR": "Iêmen (اليمن)",
      "code": "ye",
      "en-US": "Yemen (اليمن)"
    },
    {
      "ddi": "260",
      "mask": "999 999 999",
      "name": "Zambia",
      "pt-BR": "Zâmbia",
      "code": "zm",
      "en-US": "Zambia"
    },
    {
      "ddi": "263",
      "mask": "99 99999",
      "name": "Zimbabwe",
      "pt-BR": "Zimbábue",
      "code": "zw",
      "en-US": "Zimbabwe"
    },
    {
      "ddi": "358",
      "mask": "99 9999999",
      "name": "Åland Islands",
      "pt-BR": "Ilhas Aland",
      "code": "fi",
      "en-US": "Åland Islands"
    }
  ]

  currentCountry: any = '';
  currentMask: string = '(00) 00000-0000'
  enteredPhone: string = '';

  value: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  @Output()
  onBlur: EventEmitter<any> = new EventEmitter();
  constructor(private cdr:ChangeDetectorRef) {
    this.currentCountry = this.countries.find((country: any) => country.code == 'br');
   }

  checkPhoneOnBlur(ev: any) {
    const input = ev.target.value;
    this.phoneChange.next(ev.target.value);
    this.onBlur.next(input);
  }

  ngOnInit(): void {
    if (!this.ddi) {
      this.ddi = '55'
      this.ddiChange.next("55");
    }
    if (this.phone) {
      this.currentCountry = this.countries.find((country: any) => country.ddi == this.ddi);
      this.enteredPhone = this.phone.toString()
      this.cdr.detectChanges();
    }
    else if (!this.currentCountry) {
      this.ddiChange.next("55");
    }

    if (this.language !== 'pt-BR') {
      this.emptyFilterMessage = 'No country found';
    }
  }

}
