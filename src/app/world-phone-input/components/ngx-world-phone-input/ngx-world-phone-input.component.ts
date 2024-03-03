import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-world-phone-input',
  templateUrl: './ngx-world-phone-input.component.html',
  styleUrls: ['./ngx-world-phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxWorldPhoneInputComponent),
      multi: true
    }
  ]
})
export class NgxWorldPhoneInputComponent implements OnInit  {

  @Input()
  ddi: any = "55";

  @Input()
  phone: any = '';

  @Output()
  ddiChange: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  phoneChange: EventEmitter<any> = new EventEmitter<any>();

  countries = [
    {
      "ddi": "93",
      "mask": "99 999 9999",
      "name": "Afghanistan (افغانستان)",
      "ptName": "Afeganistão (افغانستان)",
      "code": "af"
    },
    {
      "ddi": "355",
      "mask": "99 999 999",
      "name": "Albania (Shqipëri)",
      "ptName": "Albânia (Shqipëri)",
      "code": "al"
    },
    {
      "ddi": "213",
      "mask": "99 99 99 99",
      "name": "Algeria (الجزائر)",
      "ptName": "Argélia (الجزائر)",
      "code": "dz"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "American Samoa",
      "ptName": "Samoa Americana",
      "code": "as"
    },
    {
      "ddi": "376",
      "mask": "999 999",
      "name": "Andorra",
      "ptName": "Andorra",
      "code": "ad"
    },
    {
      "ddi": "244",
      "mask": "999 999 999",
      "name": "Angola",
      "ptName": "Angola",
      "code": "ao"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Anguilla",
      "ptName": "Anguila",
      "code": "as"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Antigua and Barbuda",
      "ptName": "Antígua e Barbuda",
      "code": "as"
    },
    {
      "ddi": "54",
      "mask": "99 9999-9999",
      "name": "Argentina",
      "ptName": "Argentina",
      "code": "ar"
    },
    {
      "ddi": "374",
      "mask": "99 999999",
      "name": "Armenia (Հայաստան)",
      "ptName": "Armênia (Հայաստան)",
      "code": "am"
    },
    {
      "ddi": "297",
      "mask": "999 9999",
      "name": "Aruba",
      "ptName": "Aruba",
      "code": "aw"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Australia",
      "ptName": "Austrália",
      "code": "au"
    },
    {
      "ddi": "43",
      "mask": "9 999999999",
      "name": "Austria (Österreich)",
      "ptName": "Áustria (Österreich)",
      "code": "at"
    },
    {
      "ddi": "994",
      "mask": "99 999 99 99",
      "name": "Azerbaijan (Azərbaycan)",
      "ptName": "Azerbaijão (Azərbaycan)",
      "code": "az"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Bahamas",
      "ptName": "Bahamas",
      "code": "as"
    },
    {
      "ddi": "973",
      "mask": "9999 9999",
      "name": "Bahrain (البحرين)",
      "ptName": "Bahrain (البحرين)",
      "code": "bh"
    },
    {
      "ddi": "880",
      "mask": "9-9999999",
      "name": "Bangladesh (বাংলাদেশ)",
      "ptName": "Bangladesh (বাংলাদেশ)",
      "code": "bd"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Barbados",
      "ptName": "Barbados",
      "code": "as"
    },
    {
      "ddi": "375",
      "mask": "999 99-99-99",
      "name": "Belarus (Беларусь)",
      "ptName": "Bielorrússia (Беларусь)",
      "code": "by"
    },
    {
      "ddi": "32",
      "mask": "99 99 99 99",
      "name": "Belgium (België)",
      "ptName": "Bélgica (België)",
      "code": "be"
    },
    {
      "ddi": "501",
      "mask": "999-9999",
      "name": "Belize",
      "ptName": "Belize",
      "code": "bz"
    },
    {
      "ddi": "229",
      "mask": "99 99 99 99",
      "name": "Benin (Bénin)",
      "ptName": "Benin (Bénin)",
      "code": "bj"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Bermuda",
      "ptName": "Bermudas",
      "code": "as"
    },
    {
      "ddi": "975",
      "mask": "9 999 999",
      "name": "Bhutan (འབྲུག)",
      "ptName": "Butão (འབྲུག)",
      "code": "bt"
    },
    {
      "ddi": "591",
      "mask": "9 9999999",
      "name": "Bolivia",
      "ptName": "Bolívia",
      "code": "bo"
    },
    {
      "ddi": "387",
      "mask": "99 999-999",
      "name": "Bosnia and Herzegovina (Босна и Херцеговина)",
      "ptName": "Bósnia e Herzegovina (Босна и Херцеговина)",
      "code": "ba"
    },
    {
      "ddi": "267",
      "mask": "999 9999",
      "name": "Botswana",
      "ptName": "Botsuana",
      "code": "bw"
    },
    {
      "ddi": "55",
      "mask": "(99) 99999-9999",
      "name": "Brazil (Brasil)",
      "ptName": "Brasil (Brasil)",
      "code": "br"
    },
    {
      "ddi": "246",
      "mask": "999 9999",
      "name": "British Indian Ocean Territory",
      "ptName": "Território Britânico do Oceano Índico",
      "code": "io"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "British Virgin Islands",
      "ptName": "Ilhas Virgens Britânicas",
      "code": "as"
    },
    {
      "ddi": "673",
      "mask": "999 9999",
      "name": "Brunei",
      "ptName": "Brunei",
      "code": "bn"
    },
    {
      "ddi": "359",
      "mask": "9 999 999",
      "name": "Bulgaria (България)",
      "ptName": "Bulgária (България)",
      "code": "bg"
    },
    {
      "ddi": "226",
      "mask": "99 99 99 99",
      "name": "Burkina Faso",
      "ptName": "Burkina Faso",
      "code": "bf"
    },
    {
      "ddi": "257",
      "mask": "99 99 99 99",
      "name": "Burundi (Uburundi)",
      "ptName": "Burundi (Uburundi)",
      "code": "bi"
    },
    {
      "ddi": "855",
      "mask": "99 999 999",
      "name": "Cambodia (កម្ពុជា)",
      "ptName": "Camboja (កម្ពុជា)",
      "code": "kh"
    },
    {
      "ddi": "237",
      "mask": "9 99 99 99 99",
      "name": "Cameroon (Cameroun)",
      "ptName": "Camarões (Cameroun)",
      "code": "cm"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Canada",
      "ptName": "Canadá",
      "code": "as"
    },
    {
      "ddi": "238",
      "mask": "999 99 99",
      "name": "Cape Verde (Kabu Verdi)",
      "ptName": "Cabo Verde (Kabu Verdi)",
      "code": "cv"
    },
    {
      "ddi": "599",
      "mask": "999 9999",
      "name": "Caribbean Netherlands",
      "ptName": "Países Baixos Caribenhos",
      "code": "bq"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Cayman Islands",
      "ptName": "Ilhas Cayman",
      "code": "as"
    },
    {
      "ddi": "236",
      "mask": "99 99 99 99",
      "name": "Central African Republic (République centrafricaine)",
      "ptName": "República Centro-Africana (République centrafricaine)",
      "code": "cf"
    },
    {
      "ddi": "235",
      "mask": "99 99 99 99",
      "name": "Chad (Tchad)",
      "ptName": "Chade (Tchad)",
      "code": "td"
    },
    {
      "ddi": "56",
      "mask": "9 9999 9999",
      "name": "Chile",
      "ptName": "Chile",
      "code": "cl"
    },
    {
      "ddi": "86",
      "mask": "99 9999 9999",
      "name": "China (中国)",
      "ptName": "China (中国)",
      "code": "cn"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Christmas Island",
      "ptName": "Ilha Christmas",
      "code": "au"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Cocos (Keeling) Islands",
      "ptName": "Ilhas Cocos (Keeling)",
      "code": "au"
    },
    {
      "ddi": "57",
      "mask": "999 9999999",
      "name": "Colombia",
      "ptName": "Colômbia",
      "code": "co"
    },
    {
      "ddi": "269",
      "mask": "999 99 99",
      "name": "Comoros (جزر القمر)",
      "ptName": "Comores (جزر القمر)",
      "code": "km"
    },
    {
      "ddi": "243",
      "mask": "99 99999",
      "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
      "ptName": "Congo (RDC) (Jamhuri ya Kidemokrasia ya Kongo)",
      "code": "cd"
    },
    {
      "ddi": "242",
      "mask": "99 999 9999",
      "name": "Congo (Republic) (Congo-Brazzaville)",
      "ptName": "Congo (República) (Congo-Brazzaville)",
      "code": "cg"
    },
    {
      "ddi": "682",
      "mask": "99 999",
      "name": "Cook Islands",
      "ptName": "Ilhas Cook",
      "code": "ck"
    },
    {
      "ddi": "506",
      "mask": "9999 9999",
      "name": "Costa Rica",
      "ptName": "Costa Rica",
      "code": "cr"
    },
    {
      "ddi": "225",
      "mask": "99 99 9 99999",
      "name": "Côte d’Ivoire",
      "ptName": "Costa do Marfim",
      "code": "ci"
    },
    {
      "ddi": "385",
      "mask": "9 9999 999",
      "name": "Croatia (Hrvatska)",
      "ptName": "Croácia (Hrvatska)",
      "code": "hr"
    },
    {
      "ddi": "53",
      "mask": "9 9999999",
      "name": "Cuba",
      "ptName": "Cuba",
      "code": "cu"
    },
    {
      "ddi": "599",
      "mask": "9 999 9999",
      "name": "Curaçao",
      "ptName": "Curaçao",
      "code": "bq"
    },
    {
      "ddi": "357",
      "mask": "99 999999",
      "name": "Cyprus (Κύπρος)",
      "ptName": "Chipre (Κύπρος)",
      "code": "cy"
    },
    {
      "ddi": "420",
      "mask": "999 999 999",
      "name": "Czech Republic (Česká republika)",
      "ptName": "República Tcheca (Česká republika)",
      "code": "cz"
    },
    {
      "ddi": "45",
      "mask": "99 99 99 99",
      "name": "Denmark (Danmark)",
      "ptName": "Dinamarca (Danmark)",
      "code": "dk"
    },
    {
      "ddi": "253",
      "mask": "99 99 99 99",
      "name": "Djibouti",
      "ptName": "Djibouti",
      "code": "dj"
    },
    {
      "ddi": "1767",
      "mask": "999-999-9999",
      "name": "Dominica",
      "ptName": "Dominica",
      "code": "dm"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Dominican Republic (República Dominicana)",
      "ptName": "República Dominicana (República Dominicana)",
      "code": "as"
    },
    {
      "ddi": "593",
      "mask": "9-999-9999",
      "name": "Ecuador",
      "ptName": "Equador",
      "code": "ec"
    },
    {
      "ddi": "20",
      "mask": "9 99999999",
      "name": "Egypt (مصر)",
      "ptName": "Egito (مصر)",
      "code": "eg"
    },
    {
      "ddi": "503",
      "mask": "9999 9999",
      "name": "El Salvador",
      "ptName": "El Salvador",
      "code": "sv"
    },
    {
      "ddi": "240",
      "mask": "999 999 999",
      "name": "Equatorial Guinea (Guinea Ecuatorial)",
      "ptName": "Guiné Equatorial (Guiné Equatorial)",
      "code": "gq"
    },
    {
      "ddi": "291",
      "mask": "9 999 999",
      "name": "Eritrea",
      "ptName": "Eritreia",
      "code": "er"
    },
    {
      "ddi": "372",
      "mask": "999 9999",
      "name": "Estonia (Eesti)",
      "ptName": "Estônia (Eesti)",
      "code": "ee"
    },
    {
      "ddi": "251",
      "mask": "99 999 9999",
      "name": "Ethiopia",
      "ptName": "Etiópia",
      "code": "et"
    },
    {
      "ddi": "500",
      "mask": "99999",
      "name": "Falkland Islands (Islas Malvinas)",
      "ptName": "Ilhas Malvinas (Islas Malvinas)",
      "code": "fk"
    },
    {
      "ddi": "298",
      "mask": "999999",
      "name": "Faroe Islands (Føroyar)",
      "ptName": "Ilhas Faroé (Føroyar)",
      "code": "fo"
    },
    {
      "ddi": "679",
      "mask": "999 9999",
      "name": "Fiji",
      "ptName": "Fiji",
      "code": "fj"
    },
    {
      "ddi": "358",
      "mask": "99 9999999",
      "name": "Finland (Suomi)",
      "ptName": "Finlândia (Suomi)",
      "code": "fi"
    },
    {
      "ddi": "33",
      "mask": "9 99 99 99 99",
      "name": "France",
      "ptName": "França",
      "code": "fr"
    },
    {
      "ddi": "594",
      "mask": "999 99 99 99",
      "name": "French Guiana (Guyane française)",
      "ptName": "Guiana Francesa (Guyane française)",
      "code": "gf"
    },
    {
      "ddi": "689",
      "mask": "99 99 99 99",
      "name": "French Polynesia (Polynésie française)",
      "ptName": "Polinésia Francesa (Polynésie française)",
      "code": "pf"
    },
    {
      "ddi": "241",
      "mask": "99 99 99 99",
      "name": "Gabon",
      "ptName": "Gabão",
      "code": "ga"
    },
    {
      "ddi": "220",
      "mask": "999 9999",
      "name": "Gambia",
      "ptName": "Gâmbia",
      "code": "gm"
    },
    {
      "ddi": "995",
      "mask": "99 999 99 99",
      "name": "Georgia (საქართველო)",
      "ptName": "Geórgia (საქართველო)",
      "code": "ge"
    },
    {
      "ddi": "49",
      "mask": "99 999999",
      "name": "Germany (Deutschland)",
      "ptName": "Alemanha (Deutschland)",
      "code": "de"
    },
    {
      "ddi": "233",
      "mask": "99 999 9999",
      "name": "Ghana (Gaana)",
      "ptName": "Gana (Gaana)",
      "code": "gh"
    },
    {
      "ddi": "350",
      "mask": "999 99999",
      "name": "Gibraltar",
      "ptName": "Gibraltar",
      "code": "gi"
    },
    {
      "ddi": "30",
      "mask": "99 9999 9999",
      "name": "Greece (Ελλάδα)",
      "ptName": "Grécia (Ελλάδα)",
      "code": "gr"
    },
    {
      "ddi": "299",
      "mask": "99 99 99",
      "name": "Greenland (Kalaallit Nunaat)",
      "ptName": "Groenlândia (Kalaallit Nunaat)",
      "code": "gl"
    },
    {
      "ddi": "1473",
      "mask": "999-999-9999",
      "name": "Grenada",
      "ptName": "Granada",
      "code": "gd",
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Guadeloupe",
      "ptName": "Guadalupe",
      "code": "gp"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Guam",
      "ptName": "Guam",
      "code": "as"
    },
    {
      "ddi": "502",
      "mask": "9999 9999",
      "name": "Guatemala",
      "ptName": "Guatemala",
      "code": "gt"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Guernsey",
      "ptName": "Guernsey",
      "code": "gg"
    },
    {
      "ddi": "224",
      "mask": "99 99 99 99",
      "name": "Guinea (Guinée)",
      "ptName": "Guiné (Guinée)",
      "code": "gn"
    },
    {
      "ddi": "245",
      "mask": "999 999 999",
      "name": "Guinea-Bissau (Guiné Bissau)",
      "ptName": "Guiné-Bissau (Guiné Bissau)",
      "code": "gw"
    },
    {
      "ddi": "592",
      "mask": "999 9999",
      "name": "Guyana",
      "ptName": "Guiana",
      "code": "gy"
    },
    {
      "ddi": "509",
      "mask": "99 99 9999",
      "name": "Haiti",
      "ptName": "Haiti",
      "code": "ht"
    },
    {
      "ddi": "504",
      "mask": "9999-9999",
      "name": "Honduras",
      "ptName": "Honduras",
      "code": "hn"
    },
    {
      "ddi": "852",
      "mask": "9999 9999",
      "name": "Hong Kong (香港)",
      "ptName": "Hong Kong (香港)",
      "code": "hk"
    },
    {
      "ddi": "36",
      "mask": "9 999 9999",
      "name": "Hungary (Magyarország)",
      "ptName": "Hungria (Magyarország)",
      "code": "hu"
    },
    {
      "ddi": "354",
      "mask": "999 9999",
      "name": "Iceland (Ísland)",
      "ptName": "Islândia (Ísland)",
      "code": "is"
    },
    {
      "ddi": "91",
      "mask": "99999 99999",
      "name": "India (भारत)",
      "ptName": "Índia (भारत)",
      "code": "in"
    },
    {
      "ddi": "62",
      "mask": "99 9999999",
      "name": "Indonesia",
      "ptName": "Indonésia",
      "code": "id"
    },
    {
      "ddi": "98",
      "mask": "99 9999 9999",
      "name": "Iran (ایران)",
      "ptName": "Irã (ایران)",
      "code": "ir"
    },
    {
      "ddi": "964",
      "mask": "9 999 9999",
      "name": "Iraq (العراق)",
      "ptName": "Iraque (العراق)",
      "code": "iq"
    },
    {
      "ddi": "353",
      "mask": "99 99999",
      "name": "Ireland",
      "ptName": "Irlanda",
      "code": "ie"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Isle of Man",
      "ptName": "Ilha de Man",
      "code": "gg"
    },
    {
      "ddi": "972",
      "mask": "9-999-9999",
      "name": "Israel (ישראל)",
      "ptName": "Israel (ישראל)",
      "code": "il"
    },
    {
      "ddi": "39",
      "mask": "99 9999 9999",
      "name": "Italy (Italia)",
      "ptName": "Itália (Italia)",
      "code": "it"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Jamaica",
      "ptName": "Jamaica",
      "code": "as"
    },
    {
      "ddi": "81",
      "mask": "9-9999-9999",
      "name": "Japan (日本)",
      "ptName": "Japão (日本)",
      "code": "jp"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Jersey",
      "ptName": "Jersey",
      "code": "gg"
    },
    {
      "ddi": "962",
      "mask": "9 999 9999",
      "name": "Jordan (الأردن)",
      "ptName": "Jordânia (الأردن)",
      "code": "jo"
    },
    {
      "ddi": "7",
      "mask": "99999 9 99 99",
      "name": "Kazakhstan (Казахстан)",
      "ptName": "Cazaquistão (Казахстан)",
      "code": "kz"
    },
    {
      "ddi": "254",
      "mask": "99 9999999",
      "name": "Kenya",
      "ptName": "Quênia",
      "code": "ke"
    },
    {
      "ddi": "686",
      "mask": "99999",
      "name": "Kiribati",
      "ptName": "Kiribati",
      "code": "ki"
    },
    {
      "ddi": "383",
      "mask": "99 999 999",
      "name": "Kosovo",
      "ptName": "Kosovo",
      "code": "xk"
    },
    {
      "ddi": "965",
      "mask": "9999 9999",
      "name": "Kuwait (الكويت)",
      "ptName": "Kuwait (الكويت)",
      "code": "kw"
    },
    {
      "ddi": "996",
      "mask": "999 999 999",
      "name": "Kyrgyzstan (Кыргызстан)",
      "ptName": "Quirguistão (Кыргызстан)",
      "code": "kg"
    },
    {
      "ddi": "856",
      "mask": "99 999 999",
      "name": "Laos (ລາວ)",
      "ptName": "Laos (ລາວ)",
      "code": "la"
    },
    {
      "ddi": "371",
      "mask": "99 999 999",
      "name": "Latvia (Latvija)",
      "ptName": "Letônia (Latvija)",
      "code": "lv"
    },
    {
      "ddi": "961",
      "mask": "9 999 999",
      "name": "Lebanon (لبنان)",
      "ptName": "Líbano (لبنان)",
      "code": "lb"
    },
    {
      "ddi": "266",
      "mask": "9999 9999",
      "name": "Lesotho",
      "ptName": "Lesoto",
      "code": "ls"
    },
    {
      "ddi": "231",
      "mask": "99 999 999",
      "name": "Liberia",
      "ptName": "Libéria",
      "code": "lr"
    },
    {
      "ddi": "218",
      "mask": "99-9999999",
      "name": "Libya (ليبيا)",
      "ptName": "Líbia (ليبيا)",
      "code": "ly"
    },
    {
      "ddi": "423",
      "mask": "999 99 99",
      "name": "Liechtenstein",
      "ptName": "Liechtenstein",
      "code": "li"
    },
    {
      "ddi": "370",
      "mask": "999 99999",
      "name": "Lithuania (Lietuva)",
      "ptName": "Lituânia (Lietuva)",
      "code": "lt"
    },
    {
      "ddi": "352",
      "mask": "99 99 99 99",
      "name": "Luxembourg",
      "ptName": "Luxemburgo",
      "code": "lu"
    },
    {
      "ddi": "853",
      "mask": "9999 9999",
      "name": "Macau (澳門)",
      "ptName": "Macau (澳門)",
      "code": "mo"
    },
    {
      "ddi": "389",
      "mask": "9 999 9999",
      "name": "Macedonia (FYROM) (Македонија)",
      "ptName": "Macedônia (ARJM) (Македонија)",
      "code": "mk"
    },
    {
      "ddi": "261",
      "mask": "99 99 999 99",
      "name": "Madagascar (Madagasikara)",
      "ptName": "Madagascar (Madagasikara)",
      "code": "mg"
    },
    {
      "ddi": "265",
      "mask": "9 999 999",
      "name": "Malawi",
      "ptName": "Malawi",
      "code": "mw"
    },
    {
      "ddi": "60",
      "mask": "9-9999 9999",
      "name": "Malaysia",
      "ptName": "Malásia",
      "code": "my"
    },
    {
      "ddi": "960",
      "mask": "999-9999",
      "name": "Maldives",
      "ptName": "Maldivas",
      "code": "mv"
    },
    {
      "ddi": "223",
      "mask": "99 99 99 99",
      "name": "Mali",
      "ptName": "Mali",
      "code": "ml"
    },
    {
      "ddi": "356",
      "mask": "9999 9999",
      "name": "Malta",
      "ptName": "Malta",
      "code": "mt"
    },
    {
      "ddi": "692",
      "mask": "999-9999",
      "name": "Marshall Islands",
      "ptName": "Ilhas Marshall",
      "code": "mh"
    },
    {
      "ddi": "596",
      "mask": "999 99 99 99",
      "name": "Martinique",
      "ptName": "Martinica",
      "code": "mq"
    },
    {
      "ddi": "222",
      "mask": "99 99 99 99",
      "name": "Mauritania (موريتانيا)",
      "ptName": "Mauritânia (موريتانيا)",
      "code": "mr"
    },
    {
      "ddi": "230",
      "mask": "9999 9999",
      "name": "Mauritius (Moris)",
      "ptName": "Maurício (Moris)",
      "code": "mu"
    },
    {
      "ddi": "262",
      "mask": "999 99 99 99",
      "name": "Mayotte",
      "ptName": "Mayotte",
      "code": "yt"
    },
    {
      "ddi": "52",
      "mask": "999 999 9999",
      "name": "Mexico (México)",
      "ptName": "México (México)",
      "code": "mx"
    },
    {
      "ddi": "691",
      "mask": "999 9999",
      "name": "Micronesia",
      "ptName": "Micronésia",
      "code": "fm"
    },
    {
      "ddi": "373",
      "mask": "99 999 999",
      "name": "Moldova (Republica Moldova)",
      "ptName": "Moldávia (República Moldova)",
      "code": "md"
    },
    {
      "ddi": "377",
      "mask": "99 99 99 99",
      "name": "Monaco",
      "ptName": "Mônaco",
      "code": "mc"
    },
    {
      "ddi": "976",
      "mask": "9999 9999",
      "name": "Mongolia (Монгол)",
      "ptName": "Mongólia (Монгол)",
      "code": "mn"
    },
    {
      "ddi": "382",
      "mask": "99 999 999",
      "name": "Montenegro (Crna Gora)",
      "ptName": "Montenegro (Crna Gora)",
      "code": "me"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Montserrat",
      "ptName": "Montserrat",
      "code": "as"
    },
    {
      "ddi": "212",
      "mask": "999-999999",
      "name": "Morocco (المغرب)",
      "ptName": "Marrocos (المغرب)",
      "code": "ma"
    },
    {
      "ddi": "258",
      "mask": "99 999 999",
      "name": "Mozambique (Moçambique)",
      "ptName": "Moçambique (Moçambique)",
      "code": "mz"
    },
    {
      "ddi": "95",
      "mask": "9 999 999",
      "name": "Myanmar (Burma) (မြန်မာ)",
      "ptName": "Mianmar (Birmânia) (မြန်မာ)",
      "code": "mm"
    },
    {
      "ddi": "264",
      "mask": "99 999 999",
      "name": "Namibia (Namibië)",
      "ptName": "Namíbia (Namibië)",
      "code": "na"
    },
    {
      "ddi": "674",
      "mask": "999 9999",
      "name": "Nauru",
      "ptName": "Nauru",
      "code": "nr"
    },
    {
      "ddi": "977",
      "mask": "9-9999999",
      "name": "Nepal (नेपाल)",
      "ptName": "Nepal (नेपाल)",
      "code": "np"
    },
    {
      "ddi": "31",
      "mask": "99 999 9999",
      "name": "Netherlands (Nederland)",
      "ptName": "Países Baixos (Nederland)",
      "code": "nl"
    },
    {
      "ddi": "687",
      "mask": "99.99.99",
      "name": "New Caledonia (Nouvelle-Calédonie)",
      "ptName": "Nova Caledônia (Nouvelle-Calédonie)",
      "code": "nc"
    },
    {
      "ddi": "64",
      "mask": "9 999 9999",
      "name": "New Zealand",
      "ptName": "Nova Zelândia",
      "code": "nz"
    },
    {
      "ddi": "505",
      "mask": "9999 9999",
      "name": "Nicaragua",
      "ptName": "Nicarágua",
      "code": "ni"
    },
    {
      "ddi": "227",
      "mask": "99 99 99 99",
      "name": "Niger (Nijar)",
      "ptName": "Níger (Nijar)",
      "code": "ne"
    },
    {
      "ddi": "234",
      "mask": "9 999 9999",
      "name": "Nigeria",
      "ptName": "Nigéria",
      "code": "ng"
    },
    {
      "ddi": "683",
      "mask": "9999",
      "name": "Niue",
      "ptName": "Niue",
      "code": "nu"
    },
    {
      "ddi": "672",
      "mask": "99 9999",
      "name": "Norfolk Island",
      "ptName": "Ilha Norfolk",
      "code": "nf"
    },
    {
      "ddi": "850",
      "mask": "9 999 9999",
      "name": "North Korea (조선 민주주의 인민 공화국)",
      "ptName": "Coreia do Norte (조선 민주주의 인민 공화국)",
      "code": "kp"
    },
    {
      "ddi": "1670",
      "mask": "999-999-9999",
      "name": "Northern Mariana Islands",
      "ptName": "Ilhas Marianas do Norte",
      "code": "mp"
    },
    {
      "ddi": "47",
      "mask": "99 99 99 99",
      "name": "Norway (Norge)",
      "ptName": "Noruega (Norge)",
      "code": "no"
    },
    {
      "ddi": "968",
      "mask": "99 999999",
      "name": "Oman (عُمان)",
      "ptName": "Omã (عُمان)",
      "code": "om"
    },
    {
      "ddi": "92",
      "mask": "99 99999999",
      "name": "Pakistan (پاکستان)",
      "ptName": "Paquistão (پاکستان)",
      "code": "pk"
    },
    {
      "ddi": "680",
      "mask": "999 9999",
      "name": "Palau",
      "ptName": "Palau",
      "code": "pw"
    },
    {
      "ddi": "970",
      "mask": "9 999 9999",
      "name": "Palestine (فلسطين)",
      "ptName": "Palestina (فلسطين)",
      "code": "ps"
    },
    {
      "ddi": "507",
      "mask": "999-9999",
      "name": "Panama (Panamá)",
      "ptName": "Panamá (Panamá)",
      "code": "pa"
    },
    {
      "ddi": "675",
      "mask": "999 9999",
      "name": "Papua New Guinea",
      "ptName": "Papua Nova Guiné",
      "code": "pg"
    },
    {
      "ddi": "595",
      "mask": "99 999 9999",
      "name": "Paraguay",
      "ptName": "Paraguai",
      "code": "py"
    },
    {
      "ddi": "51",
      "mask": "9 9999999",
      "name": "Peru (Perú)",
      "ptName": "Peru (Perú)",
      "code": "pe"
    },
    {
      "ddi": "63",
      "mask": "9 9999 9999",
      "name": "Philippines",
      "ptName": "Filipinas",
      "code": "ph"
    },
    {
      "ddi": "48",
      "mask": "99 999 99 99",
      "name": "Poland (Polska)",
      "ptName": "Polônia (Polska)",
      "code": "pl"
    },
    {
      "ddi": "351",
      "mask": "99 999 9999",
      "name": "Portugal",
      "ptName": "Portugal",
      "code": "pt"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Puerto Rico",
      "ptName": "Porto Rico",
      "code": "as"
    },
    {
      "ddi": "974",
      "mask": "9999 9999",
      "name": "Qatar (قطر)",
      "ptName": "Catar (قطر)",
      "code": "qa"
    },
    {
      "ddi": "262",
      "mask": "999 99 99 99",
      "name": "Réunion (La Réunion)",
      "ptName": "Reunião (La Réunion)",
      "code": "yt"
    },
    {
      "ddi": "40",
      "mask": "99 999 9999",
      "name": "Romania (România)",
      "ptName": "Romênia (România)",
      "code": "ro"
    },
    {
      "ddi": "7",
      "mask": "999 999-99-99",
      "name": "Russia (Россия)",
      "ptName": "Rússia (Россия)",
      "code": "kz"
    },
    {
      "ddi": "250",
      "mask": "999 999 999",
      "name": "Rwanda",
      "ptName": "Ruanda",
      "code": "rw"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Saint Barthélemy (Saint-Barthélemy)",
      "ptName": "São Bartolomeu (Saint-Barthélemy)",
      "code": "gp"
    },
    {
      "ddi": "290",
      "mask": "99999",
      "name": "Saint Helena",
      "ptName": "Santa Helena",
      "code": "sh"
    },
    {
      "ddi": "1869",
      "mask": "999-999-9999",
      "name": "Saint Kitts and Nevis",
      "ptName": "São Cristóvão e Nevis",
      "code": "kn"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Saint Lucia",
      "ptName": "Santa Lúcia",
      "code": "as"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Saint Martin (Saint-Martin (partie française))",
      "ptName": "Saint Martin (Saint-Martin (partie française))",
      "code": "gp"
    },
    {
      "ddi": "508",
      "mask": "99 99 99",
      "name": "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
      "ptName": "Saint Pierre e Miquelon (Saint-Pierre-et-Miquelon)",
      "code": "pm"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Saint Vincent and the Grenadines",
      "ptName": "São Vicente e Granadinas",
      "code": "as"
    },
    {
      "ddi": "685",
      "mask": "99999",
      "name": "Samoa",
      "ptName": "Samoa",
      "code": "ws"
    },
    {
      "ddi": "378",
      "mask": "9999 999999",
      "name": "San Marino",
      "ptName": "San Marino",
      "code": "sm"
    },
    {
      "ddi": "239",
      "mask": "999 9999",
      "name": "São Tomé and Príncipe (São Tomé e Príncipe)",
      "ptName": "São Tomé e Príncipe (São Tomé e Príncipe)",
      "code": "st"
    },
    {
      "ddi": "966",
      "mask": "99 999 9999",
      "name": "Saudi Arabia (المملكة العربية السعودية)",
      "ptName": "Arábia Saudita (المملكة العربية السعودية)",
      "code": "sa"
    },
    {
      "ddi": "221",
      "mask": "99 999 99 99",
      "name": "Senegal (Sénégal)",
      "ptName": "Senegal (Sénégal)",
      "code": "sn"
    },
    {
      "ddi": "381",
      "mask": "99 999999",
      "name": "Serbia (Србија)",
      "ptName": "Sérvia (Србија)",
      "code": "rs"
    },
    {
      "ddi": "248",
      "mask": "9 999 999",
      "name": "Seychelles",
      "ptName": "Seychelles",
      "code": "sc"
    },
    {
      "ddi": "232",
      "mask": "99 999999",
      "name": "Sierra Leone",
      "ptName": "Serra Leoa",
      "code": "sl"
    },
    {
      "ddi": "65",
      "mask": "9999 9999",
      "name": "Singapore",
      "ptName": "Singapura",
      "code": "sg"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Sint Maarten",
      "ptName": "Sint Maarten",
      "code": "as"
    },
    {
      "ddi": "421",
      "mask": "9/999 999 99",
      "name": "Slovakia (Slovensko)",
      "ptName": "Eslováquia (Slovensko)",
      "code": "sk"
    },
    {
      "ddi": "386",
      "mask": "9 999 99 99",
      "name": "Slovenia (Slovenija)",
      "ptName": "Eslovênia (Slovenija)",
      "code": "si"
    },
    {
      "ddi": "677",
      "mask": "99999",
      "name": "Solomon Islands",
      "ptName": "Ilhas Salomão",
      "code": "sb"
    },
    {
      "ddi": "252",
      "mask": "9 999999",
      "name": "Somalia (Soomaaliya)",
      "ptName": "Somália (Soomaaliya)",
      "code": "so"
    },
    {
      "ddi": "27",
      "mask": "99 999 9999",
      "name": "South Africa",
      "ptName": "África do Sul",
      "code": "za"
    },
    {
      "ddi": "82",
      "mask": "9-999-9999",
      "name": "South Korea (대한민국)",
      "ptName": "Coreia do Sul (대한민국)",
      "code": "kr"
    },
    {
      "ddi": "211",
      "mask": "999 999 999",
      "name": "South Sudan (جنوب السودان)",
      "ptName": "Sudão do Sul (جنوب السودان)",
      "code": "ss"
    },
    {
      "ddi": "34",
      "mask": "999 99 99 99",
      "name": "Spain (España)",
      "ptName": "Espanha (España)",
      "code": "es"
    },
    {
      "ddi": "94",
      "mask": "999 999 999",
      "name": "Sri Lanka (ශ්‍රී ලංකාව)",
      "ptName": "Sri Lanka (ශ්‍රී ලංකාව)",
      "code": "lk"
    },
    {
      "ddi": "249",
      "mask": "99 999 9999",
      "name": "Sudan (السودان)",
      "ptName": "Sudão (السودان)",
      "code": "sd"
    },
    {
      "ddi": "597",
      "mask": "999-999",
      "name": "Suriname",
      "ptName": "Suriname",
      "code": "sr"
    },
    {
      "ddi": "47",
      "mask": "99 99 99 99",
      "name": "Svalbard and Jan Mayen",
      "ptName": "Svalbard e Jan Mayen",
      "code": "no"
    },
    {
      "ddi": "268",
      "mask": "9999 9999",
      "name": "Swaziland",
      "ptName": "Suazilândia",
      "code": "sz"
    },
    {
      "ddi": "46",
      "mask": "9 99 99 99",
      "name": "Sweden (Sverige)",
      "ptName": "Suécia (Sverige)",
      "code": "se"
    },
    {
      "ddi": "41",
      "mask": "99 999 99 99",
      "name": "Switzerland (Schweiz)",
      "ptName": "Suíça (Schweiz)",
      "code": "ch"
    },
    {
      "ddi": "963",
      "mask": "99 999 9999",
      "name": "Syria (سوريا)",
      "ptName": "Síria (سوريا)",
      "code": "sy"
    },
    {
      "ddi": "886",
      "mask": "9 9999 9999",
      "name": "Taiwan (台灣)",
      "ptName": "Taiwan (台灣)",
      "code": "tw"
    },
    {
      "ddi": "992",
      "mask": "999 99 9999",
      "name": "Tajikistan",
      "ptName": "Tajiquistão",
      "code": "tj"
    },
    {
      "ddi": "255",
      "mask": "99 999 9999",
      "name": "Tanzania",
      "ptName": "Tanzânia",
      "code": "tz"
    },
    {
      "ddi": "66",
      "mask": "9 999 9999",
      "name": "Thailand (ไทย)",
      "ptName": "Tailândia (ไทย)",
      "code": "th"
    },
    {
      "ddi": "670",
      "mask": "999 9999",
      "name": "Timor-Leste",
      "ptName": "Timor-Leste",
      "code": "tl"
    },
    {
      "ddi": "228",
      "mask": "99 99 99 99",
      "name": "Togo",
      "ptName": "Togo",
      "code": "tg"
    },
    {
      "ddi": "690",
      "mask": "9999",
      "name": "Tokelau",
      "ptName": "Tokelau",
      "code": "tk"
    },
    {
      "ddi": "676",
      "mask": "99-999",
      "name": "Tonga",
      "ptName": "Tonga",
      "code": "to"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Trinidad and Tobago",
      "ptName": "Trinidad e Tobago",
      "code": "as"
    },
    {
      "ddi": "216",
      "mask": "99 999 999",
      "name": "Tunisia (تونس)",
      "ptName": "Tunísia (تونس)",
      "code": "tn"
    },
    {
      "ddi": "90",
      "mask": "999 999 99 99",
      "name": "Turkey (Türkiye)",
      "ptName": "Turquia (Türkiye)",
      "code": "tr"
    },
    {
      "ddi": "993",
      "mask": "99 99-99-99",
      "name": "Turkmenistan",
      "ptName": "Turcomenistão",
      "code": "tm"
    },
    {
      "ddi": "1649",
      "mask": "999-999-9999",
      "name": "Turks and Caicos Islands",
      "ptName": "Ilhas Turks e Caicos",
      "code": "tc"
    },
    {
      "ddi": "688",
      "mask": "99 999",
      "name": "Tuvalu",
      "ptName": "Tuvalu",
      "code": "tv"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "U.S. Virgin Islands",
      "ptName": "Ilhas Virgens dos EUA",
      "code": "as"
    },
    {
      "ddi": "256",
      "mask": "99 9999999",
      "name": "Uganda",
      "ptName": "Uganda",
      "code": "ug"
    },
    {
      "ddi": "380",
      "mask": "9999 99999",
      "name": "Ukraine (Україна)",
      "ptName": "Ucrânia (Україна)",
      "code": "ua"
    },
    {
      "ddi": "971",
      "mask": "9 999 9999",
      "name": "United Arab Emirates (الإمارات العربية المتحدة)",
      "ptName": "Emirados Árabes Unidos (الإمارات العربية المتحدة)",
      "code": "ae"
    },
    {
      "ddi": "44",
      "mask": "999 999 9999",
      "name": "United Kingdom",
      "ptName": "Reino Unido",
      "code": "gg"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "United States",
      "ptName": "Estados Unidos",
      "code": "as"
    },
    {
      "ddi": "598",
      "mask": "9999 9999",
      "name": "Uruguay",
      "ptName": "Uruguai",
      "code": "uy"
    },
    {
      "ddi": "998",
      "mask": "99 999 99 99",
      "name": "Uzbekistan (Oʻzbekiston)",
      "ptName": "Uzbequistão (Oʻzbekiston)",
      "code": "uz"
    },
    {
      "ddi": "678",
      "mask": "99999",
      "name": "Vanuatu",
      "ptName": "Vanuatu",
      "code": "vu"
    },
    {
      "ddi": "39",
      "mask": "99 9999 9999",
      "name": "Vatican City (Città del Vaticano)",
      "ptName": "Cidade do Vaticano (Città del Vaticano)",
      "code": "it"
    },
    {
      "ddi": "58",
      "mask": "999-9999999",
      "name": "Venezuela",
      "ptName": "Venezuela",
      "code": "ve"
    },
    {
      "ddi": "84",
      "mask": "999 9999 999",
      "name": "Vietnam (Việt Nam)",
      "ptName": "Vietnã (Việt Nam)",
      "code": "vn"
    },
    {
      "ddi": "681",
      "mask": "99 99 99",
      "name": "Wallis and Futuna",
      "ptName": "Wallis e Futuna",
      "code": "wf"
    },
    {
      "ddi": "212",
      "mask": "9999-99999",
      "name": "Western Sahara (الصحراء الغربية)",
      "ptName": "Saara Ocidental (الصحراء الغربية)",
      "code": "ma"
    },
    {
      "ddi": "967",
      "mask": "9 999 999",
      "name": "Yemen (اليمن)",
      "ptName": "Iêmen (اليمن)",
      "code": "ye"
    },
    {
      "ddi": "260",
      "mask": "999 999 999",
      "name": "Zambia",
      "ptName": "Zâmbia",
      "code": "zm"
    },
    {
      "ddi": "263",
      "mask": "99 99999",
      "name": "Zimbabwe",
      "ptName": "Zimbábue",
      "code": "zw"
    },
    {
      "ddi": "358",
      "mask": "99 9999999",
      "name": "Åland Islands",
      "ptName": "Ilhas Aland",
      "code": "fi"
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
  }

}
