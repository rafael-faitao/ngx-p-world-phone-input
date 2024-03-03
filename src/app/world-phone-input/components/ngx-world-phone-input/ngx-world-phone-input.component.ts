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

  @Input()
  language:string = 'ptBr';

  @Output()
  ddiChange: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  phoneChange: EventEmitter<any> = new EventEmitter<any>();

  countries = [
    {
      "ddi": "93",
      "mask": "99 999 9999",
      "name": "Afghanistan (افغانستان)",
      "ptBr": "Afeganistão (افغانستان)",
      "code": "af"
    },
    {
      "ddi": "355",
      "mask": "99 999 999",
      "name": "Albania (Shqipëri)",
      "ptBr": "Albânia (Shqipëri)",
      "code": "al"
    },
    {
      "ddi": "213",
      "mask": "99 99 99 99",
      "name": "Algeria (الجزائر)",
      "ptBr": "Argélia (الجزائر)",
      "code": "dz"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "American Samoa",
      "ptBr": "Samoa Americana",
      "code": "as"
    },
    {
      "ddi": "376",
      "mask": "999 999",
      "name": "Andorra",
      "ptBr": "Andorra",
      "code": "ad"
    },
    {
      "ddi": "244",
      "mask": "999 999 999",
      "name": "Angola",
      "ptBr": "Angola",
      "code": "ao"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Anguilla",
      "ptBr": "Anguila",
      "code": "as"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Antigua and Barbuda",
      "ptBr": "Antígua e Barbuda",
      "code": "as"
    },
    {
      "ddi": "54",
      "mask": "99 9999-9999",
      "name": "Argentina",
      "ptBr": "Argentina",
      "code": "ar"
    },
    {
      "ddi": "374",
      "mask": "99 999999",
      "name": "Armenia (Հայաստան)",
      "ptBr": "Armênia (Հայաստան)",
      "code": "am"
    },
    {
      "ddi": "297",
      "mask": "999 9999",
      "name": "Aruba",
      "ptBr": "Aruba",
      "code": "aw"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Australia",
      "ptBr": "Austrália",
      "code": "au"
    },
    {
      "ddi": "43",
      "mask": "9 999999999",
      "name": "Austria (Österreich)",
      "ptBr": "Áustria (Österreich)",
      "code": "at"
    },
    {
      "ddi": "994",
      "mask": "99 999 99 99",
      "name": "Azerbaijan (Azərbaycan)",
      "ptBr": "Azerbaijão (Azərbaycan)",
      "code": "az"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Bahamas",
      "ptBr": "Bahamas",
      "code": "as"
    },
    {
      "ddi": "973",
      "mask": "9999 9999",
      "name": "Bahrain (البحرين)",
      "ptBr": "Bahrain (البحرين)",
      "code": "bh"
    },
    {
      "ddi": "880",
      "mask": "9-9999999",
      "name": "Bangladesh (বাংলাদেশ)",
      "ptBr": "Bangladesh (বাংলাদেশ)",
      "code": "bd"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Barbados",
      "ptBr": "Barbados",
      "code": "as"
    },
    {
      "ddi": "375",
      "mask": "999 99-99-99",
      "name": "Belarus (Беларусь)",
      "ptBr": "Bielorrússia (Беларусь)",
      "code": "by"
    },
    {
      "ddi": "32",
      "mask": "99 99 99 99",
      "name": "Belgium (België)",
      "ptBr": "Bélgica (België)",
      "code": "be"
    },
    {
      "ddi": "501",
      "mask": "999-9999",
      "name": "Belize",
      "ptBr": "Belize",
      "code": "bz"
    },
    {
      "ddi": "229",
      "mask": "99 99 99 99",
      "name": "Benin (Bénin)",
      "ptBr": "Benin (Bénin)",
      "code": "bj"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Bermuda",
      "ptBr": "Bermudas",
      "code": "as"
    },
    {
      "ddi": "975",
      "mask": "9 999 999",
      "name": "Bhutan (འབྲུག)",
      "ptBr": "Butão (འབྲུག)",
      "code": "bt"
    },
    {
      "ddi": "591",
      "mask": "9 9999999",
      "name": "Bolivia",
      "ptBr": "Bolívia",
      "code": "bo"
    },
    {
      "ddi": "387",
      "mask": "99 999-999",
      "name": "Bosnia and Herzegovina (Босна и Херцеговина)",
      "ptBr": "Bósnia e Herzegovina (Босна и Херцеговина)",
      "code": "ba"
    },
    {
      "ddi": "267",
      "mask": "999 9999",
      "name": "Botswana",
      "ptBr": "Botsuana",
      "code": "bw"
    },
    {
      "ddi": "55",
      "mask": "(99) 99999-9999",
      "name": "Brazil (Brasil)",
      "ptBr": "Brasil (Brasil)",
      "code": "br"
    },
    {
      "ddi": "246",
      "mask": "999 9999",
      "name": "British Indian Ocean Territory",
      "ptBr": "Território Britânico do Oceano Índico",
      "code": "io"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "British Virgin Islands",
      "ptBr": "Ilhas Virgens Britânicas",
      "code": "as"
    },
    {
      "ddi": "673",
      "mask": "999 9999",
      "name": "Brunei",
      "ptBr": "Brunei",
      "code": "bn"
    },
    {
      "ddi": "359",
      "mask": "9 999 999",
      "name": "Bulgaria (България)",
      "ptBr": "Bulgária (България)",
      "code": "bg"
    },
    {
      "ddi": "226",
      "mask": "99 99 99 99",
      "name": "Burkina Faso",
      "ptBr": "Burkina Faso",
      "code": "bf"
    },
    {
      "ddi": "257",
      "mask": "99 99 99 99",
      "name": "Burundi (Uburundi)",
      "ptBr": "Burundi (Uburundi)",
      "code": "bi"
    },
    {
      "ddi": "855",
      "mask": "99 999 999",
      "name": "Cambodia (កម្ពុជា)",
      "ptBr": "Camboja (កម្ពុជា)",
      "code": "kh"
    },
    {
      "ddi": "237",
      "mask": "9 99 99 99 99",
      "name": "Cameroon (Cameroun)",
      "ptBr": "Camarões (Cameroun)",
      "code": "cm"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Canada",
      "ptBr": "Canadá",
      "code": "as"
    },
    {
      "ddi": "238",
      "mask": "999 99 99",
      "name": "Cape Verde (Kabu Verdi)",
      "ptBr": "Cabo Verde (Kabu Verdi)",
      "code": "cv"
    },
    {
      "ddi": "599",
      "mask": "999 9999",
      "name": "Caribbean Netherlands",
      "ptBr": "Países Baixos Caribenhos",
      "code": "bq"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Cayman Islands",
      "ptBr": "Ilhas Cayman",
      "code": "as"
    },
    {
      "ddi": "236",
      "mask": "99 99 99 99",
      "name": "Central African Republic (République centrafricaine)",
      "ptBr": "República Centro-Africana (République centrafricaine)",
      "code": "cf"
    },
    {
      "ddi": "235",
      "mask": "99 99 99 99",
      "name": "Chad (Tchad)",
      "ptBr": "Chade (Tchad)",
      "code": "td"
    },
    {
      "ddi": "56",
      "mask": "9 9999 9999",
      "name": "Chile",
      "ptBr": "Chile",
      "code": "cl"
    },
    {
      "ddi": "86",
      "mask": "99 9999 9999",
      "name": "China (中国)",
      "ptBr": "China (中国)",
      "code": "cn"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Christmas Island",
      "ptBr": "Ilha Christmas",
      "code": "au"
    },
    {
      "ddi": "61",
      "mask": "9 9999 9999",
      "name": "Cocos (Keeling) Islands",
      "ptBr": "Ilhas Cocos (Keeling)",
      "code": "au"
    },
    {
      "ddi": "57",
      "mask": "999 9999999",
      "name": "Colombia",
      "ptBr": "Colômbia",
      "code": "co"
    },
    {
      "ddi": "269",
      "mask": "999 99 99",
      "name": "Comoros (جزر القمر)",
      "ptBr": "Comores (جزر القمر)",
      "code": "km"
    },
    {
      "ddi": "243",
      "mask": "99 99999",
      "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
      "ptBr": "Congo (RDC) (Jamhuri ya Kidemokrasia ya Kongo)",
      "code": "cd"
    },
    {
      "ddi": "242",
      "mask": "99 999 9999",
      "name": "Congo (Republic) (Congo-Brazzaville)",
      "ptBr": "Congo (República) (Congo-Brazzaville)",
      "code": "cg"
    },
    {
      "ddi": "682",
      "mask": "99 999",
      "name": "Cook Islands",
      "ptBr": "Ilhas Cook",
      "code": "ck"
    },
    {
      "ddi": "506",
      "mask": "9999 9999",
      "name": "Costa Rica",
      "ptBr": "Costa Rica",
      "code": "cr"
    },
    {
      "ddi": "225",
      "mask": "99 99 9 99999",
      "name": "Côte d’Ivoire",
      "ptBr": "Costa do Marfim",
      "code": "ci"
    },
    {
      "ddi": "385",
      "mask": "9 9999 999",
      "name": "Croatia (Hrvatska)",
      "ptBr": "Croácia (Hrvatska)",
      "code": "hr"
    },
    {
      "ddi": "53",
      "mask": "9 9999999",
      "name": "Cuba",
      "ptBr": "Cuba",
      "code": "cu"
    },
    {
      "ddi": "599",
      "mask": "9 999 9999",
      "name": "Curaçao",
      "ptBr": "Curaçao",
      "code": "bq"
    },
    {
      "ddi": "357",
      "mask": "99 999999",
      "name": "Cyprus (Κύπρος)",
      "ptBr": "Chipre (Κύπρος)",
      "code": "cy"
    },
    {
      "ddi": "420",
      "mask": "999 999 999",
      "name": "Czech Republic (Česká republika)",
      "ptBr": "República Tcheca (Česká republika)",
      "code": "cz"
    },
    {
      "ddi": "45",
      "mask": "99 99 99 99",
      "name": "Denmark (Danmark)",
      "ptBr": "Dinamarca (Danmark)",
      "code": "dk"
    },
    {
      "ddi": "253",
      "mask": "99 99 99 99",
      "name": "Djibouti",
      "ptBr": "Djibouti",
      "code": "dj"
    },
    {
      "ddi": "1767",
      "mask": "999-999-9999",
      "name": "Dominica",
      "ptBr": "Dominica",
      "code": "dm"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Dominican Republic (República Dominicana)",
      "ptBr": "República Dominicana (República Dominicana)",
      "code": "as"
    },
    {
      "ddi": "593",
      "mask": "9-999-9999",
      "name": "Ecuador",
      "ptBr": "Equador",
      "code": "ec"
    },
    {
      "ddi": "20",
      "mask": "9 99999999",
      "name": "Egypt (مصر)",
      "ptBr": "Egito (مصر)",
      "code": "eg"
    },
    {
      "ddi": "503",
      "mask": "9999 9999",
      "name": "El Salvador",
      "ptBr": "El Salvador",
      "code": "sv"
    },
    {
      "ddi": "240",
      "mask": "999 999 999",
      "name": "Equatorial Guinea (Guinea Ecuatorial)",
      "ptBr": "Guiné Equatorial (Guiné Equatorial)",
      "code": "gq"
    },
    {
      "ddi": "291",
      "mask": "9 999 999",
      "name": "Eritrea",
      "ptBr": "Eritreia",
      "code": "er"
    },
    {
      "ddi": "372",
      "mask": "999 9999",
      "name": "Estonia (Eesti)",
      "ptBr": "Estônia (Eesti)",
      "code": "ee"
    },
    {
      "ddi": "251",
      "mask": "99 999 9999",
      "name": "Ethiopia",
      "ptBr": "Etiópia",
      "code": "et"
    },
    {
      "ddi": "500",
      "mask": "99999",
      "name": "Falkland Islands (Islas Malvinas)",
      "ptBr": "Ilhas Malvinas (Islas Malvinas)",
      "code": "fk"
    },
    {
      "ddi": "298",
      "mask": "999999",
      "name": "Faroe Islands (Føroyar)",
      "ptBr": "Ilhas Faroé (Føroyar)",
      "code": "fo"
    },
    {
      "ddi": "679",
      "mask": "999 9999",
      "name": "Fiji",
      "ptBr": "Fiji",
      "code": "fj"
    },
    {
      "ddi": "358",
      "mask": "99 9999999",
      "name": "Finland (Suomi)",
      "ptBr": "Finlândia (Suomi)",
      "code": "fi"
    },
    {
      "ddi": "33",
      "mask": "9 99 99 99 99",
      "name": "France",
      "ptBr": "França",
      "code": "fr"
    },
    {
      "ddi": "594",
      "mask": "999 99 99 99",
      "name": "French Guiana (Guyane française)",
      "ptBr": "Guiana Francesa (Guyane française)",
      "code": "gf"
    },
    {
      "ddi": "689",
      "mask": "99 99 99 99",
      "name": "French Polynesia (Polynésie française)",
      "ptBr": "Polinésia Francesa (Polynésie française)",
      "code": "pf"
    },
    {
      "ddi": "241",
      "mask": "99 99 99 99",
      "name": "Gabon",
      "ptBr": "Gabão",
      "code": "ga"
    },
    {
      "ddi": "220",
      "mask": "999 9999",
      "name": "Gambia",
      "ptBr": "Gâmbia",
      "code": "gm"
    },
    {
      "ddi": "995",
      "mask": "99 999 99 99",
      "name": "Georgia (საქართველო)",
      "ptBr": "Geórgia (საქართველო)",
      "code": "ge"
    },
    {
      "ddi": "49",
      "mask": "99 999999",
      "name": "Germany (Deutschland)",
      "ptBr": "Alemanha (Deutschland)",
      "code": "de"
    },
    {
      "ddi": "233",
      "mask": "99 999 9999",
      "name": "Ghana (Gaana)",
      "ptBr": "Gana (Gaana)",
      "code": "gh"
    },
    {
      "ddi": "350",
      "mask": "999 99999",
      "name": "Gibraltar",
      "ptBr": "Gibraltar",
      "code": "gi"
    },
    {
      "ddi": "30",
      "mask": "99 9999 9999",
      "name": "Greece (Ελλάδα)",
      "ptBr": "Grécia (Ελλάδα)",
      "code": "gr"
    },
    {
      "ddi": "299",
      "mask": "99 99 99",
      "name": "Greenland (Kalaallit Nunaat)",
      "ptBr": "Groenlândia (Kalaallit Nunaat)",
      "code": "gl"
    },
    {
      "ddi": "1473",
      "mask": "999-999-9999",
      "name": "Grenada",
      "ptBr": "Granada",
      "code": "gd",
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Guadeloupe",
      "ptBr": "Guadalupe",
      "code": "gp"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Guam",
      "ptBr": "Guam",
      "code": "as"
    },
    {
      "ddi": "502",
      "mask": "9999 9999",
      "name": "Guatemala",
      "ptBr": "Guatemala",
      "code": "gt"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Guernsey",
      "ptBr": "Guernsey",
      "code": "gg"
    },
    {
      "ddi": "224",
      "mask": "99 99 99 99",
      "name": "Guinea (Guinée)",
      "ptBr": "Guiné (Guinée)",
      "code": "gn"
    },
    {
      "ddi": "245",
      "mask": "999 999 999",
      "name": "Guinea-Bissau (Guiné Bissau)",
      "ptBr": "Guiné-Bissau (Guiné Bissau)",
      "code": "gw"
    },
    {
      "ddi": "592",
      "mask": "999 9999",
      "name": "Guyana",
      "ptBr": "Guiana",
      "code": "gy"
    },
    {
      "ddi": "509",
      "mask": "99 99 9999",
      "name": "Haiti",
      "ptBr": "Haiti",
      "code": "ht"
    },
    {
      "ddi": "504",
      "mask": "9999-9999",
      "name": "Honduras",
      "ptBr": "Honduras",
      "code": "hn"
    },
    {
      "ddi": "852",
      "mask": "9999 9999",
      "name": "Hong Kong (香港)",
      "ptBr": "Hong Kong (香港)",
      "code": "hk"
    },
    {
      "ddi": "36",
      "mask": "9 999 9999",
      "name": "Hungary (Magyarország)",
      "ptBr": "Hungria (Magyarország)",
      "code": "hu"
    },
    {
      "ddi": "354",
      "mask": "999 9999",
      "name": "Iceland (Ísland)",
      "ptBr": "Islândia (Ísland)",
      "code": "is"
    },
    {
      "ddi": "91",
      "mask": "99999 99999",
      "name": "India (भारत)",
      "ptBr": "Índia (भारत)",
      "code": "in"
    },
    {
      "ddi": "62",
      "mask": "99 9999999",
      "name": "Indonesia",
      "ptBr": "Indonésia",
      "code": "id"
    },
    {
      "ddi": "98",
      "mask": "99 9999 9999",
      "name": "Iran (ایران)",
      "ptBr": "Irã (ایران)",
      "code": "ir"
    },
    {
      "ddi": "964",
      "mask": "9 999 9999",
      "name": "Iraq (العراق)",
      "ptBr": "Iraque (العراق)",
      "code": "iq"
    },
    {
      "ddi": "353",
      "mask": "99 99999",
      "name": "Ireland",
      "ptBr": "Irlanda",
      "code": "ie"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Isle of Man",
      "ptBr": "Ilha de Man",
      "code": "gg"
    },
    {
      "ddi": "972",
      "mask": "9-999-9999",
      "name": "Israel (ישראל)",
      "ptBr": "Israel (ישראל)",
      "code": "il"
    },
    {
      "ddi": "39",
      "mask": "99 9999 9999",
      "name": "Italy (Italia)",
      "ptBr": "Itália (Italia)",
      "code": "it"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Jamaica",
      "ptBr": "Jamaica",
      "code": "as"
    },
    {
      "ddi": "81",
      "mask": "9-9999-9999",
      "name": "Japan (日本)",
      "ptBr": "Japão (日本)",
      "code": "jp"
    },
    {
      "ddi": "44",
      "mask": "9999 999999",
      "name": "Jersey",
      "ptBr": "Jersey",
      "code": "gg"
    },
    {
      "ddi": "962",
      "mask": "9 999 9999",
      "name": "Jordan (الأردن)",
      "ptBr": "Jordânia (الأردن)",
      "code": "jo"
    },
    {
      "ddi": "7",
      "mask": "99999 9 99 99",
      "name": "Kazakhstan (Казахстан)",
      "ptBr": "Cazaquistão (Казахстан)",
      "code": "kz"
    },
    {
      "ddi": "254",
      "mask": "99 9999999",
      "name": "Kenya",
      "ptBr": "Quênia",
      "code": "ke"
    },
    {
      "ddi": "686",
      "mask": "99999",
      "name": "Kiribati",
      "ptBr": "Kiribati",
      "code": "ki"
    },
    {
      "ddi": "383",
      "mask": "99 999 999",
      "name": "Kosovo",
      "ptBr": "Kosovo",
      "code": "xk"
    },
    {
      "ddi": "965",
      "mask": "9999 9999",
      "name": "Kuwait (الكويت)",
      "ptBr": "Kuwait (الكويت)",
      "code": "kw"
    },
    {
      "ddi": "996",
      "mask": "999 999 999",
      "name": "Kyrgyzstan (Кыргызстан)",
      "ptBr": "Quirguistão (Кыргызстан)",
      "code": "kg"
    },
    {
      "ddi": "856",
      "mask": "99 999 999",
      "name": "Laos (ລາວ)",
      "ptBr": "Laos (ລາວ)",
      "code": "la"
    },
    {
      "ddi": "371",
      "mask": "99 999 999",
      "name": "Latvia (Latvija)",
      "ptBr": "Letônia (Latvija)",
      "code": "lv"
    },
    {
      "ddi": "961",
      "mask": "9 999 999",
      "name": "Lebanon (لبنان)",
      "ptBr": "Líbano (لبنان)",
      "code": "lb"
    },
    {
      "ddi": "266",
      "mask": "9999 9999",
      "name": "Lesotho",
      "ptBr": "Lesoto",
      "code": "ls"
    },
    {
      "ddi": "231",
      "mask": "99 999 999",
      "name": "Liberia",
      "ptBr": "Libéria",
      "code": "lr"
    },
    {
      "ddi": "218",
      "mask": "99-9999999",
      "name": "Libya (ليبيا)",
      "ptBr": "Líbia (ليبيا)",
      "code": "ly"
    },
    {
      "ddi": "423",
      "mask": "999 99 99",
      "name": "Liechtenstein",
      "ptBr": "Liechtenstein",
      "code": "li"
    },
    {
      "ddi": "370",
      "mask": "999 99999",
      "name": "Lithuania (Lietuva)",
      "ptBr": "Lituânia (Lietuva)",
      "code": "lt"
    },
    {
      "ddi": "352",
      "mask": "99 99 99 99",
      "name": "Luxembourg",
      "ptBr": "Luxemburgo",
      "code": "lu"
    },
    {
      "ddi": "853",
      "mask": "9999 9999",
      "name": "Macau (澳門)",
      "ptBr": "Macau (澳門)",
      "code": "mo"
    },
    {
      "ddi": "389",
      "mask": "9 999 9999",
      "name": "Macedonia (FYROM) (Македонија)",
      "ptBr": "Macedônia (ARJM) (Македонија)",
      "code": "mk"
    },
    {
      "ddi": "261",
      "mask": "99 99 999 99",
      "name": "Madagascar (Madagasikara)",
      "ptBr": "Madagascar (Madagasikara)",
      "code": "mg"
    },
    {
      "ddi": "265",
      "mask": "9 999 999",
      "name": "Malawi",
      "ptBr": "Malawi",
      "code": "mw"
    },
    {
      "ddi": "60",
      "mask": "9-9999 9999",
      "name": "Malaysia",
      "ptBr": "Malásia",
      "code": "my"
    },
    {
      "ddi": "960",
      "mask": "999-9999",
      "name": "Maldives",
      "ptBr": "Maldivas",
      "code": "mv"
    },
    {
      "ddi": "223",
      "mask": "99 99 99 99",
      "name": "Mali",
      "ptBr": "Mali",
      "code": "ml"
    },
    {
      "ddi": "356",
      "mask": "9999 9999",
      "name": "Malta",
      "ptBr": "Malta",
      "code": "mt"
    },
    {
      "ddi": "692",
      "mask": "999-9999",
      "name": "Marshall Islands",
      "ptBr": "Ilhas Marshall",
      "code": "mh"
    },
    {
      "ddi": "596",
      "mask": "999 99 99 99",
      "name": "Martinique",
      "ptBr": "Martinica",
      "code": "mq"
    },
    {
      "ddi": "222",
      "mask": "99 99 99 99",
      "name": "Mauritania (موريتانيا)",
      "ptBr": "Mauritânia (موريتانيا)",
      "code": "mr"
    },
    {
      "ddi": "230",
      "mask": "9999 9999",
      "name": "Mauritius (Moris)",
      "ptBr": "Maurício (Moris)",
      "code": "mu"
    },
    {
      "ddi": "262",
      "mask": "999 99 99 99",
      "name": "Mayotte",
      "ptBr": "Mayotte",
      "code": "yt"
    },
    {
      "ddi": "52",
      "mask": "999 999 9999",
      "name": "Mexico (México)",
      "ptBr": "México (México)",
      "code": "mx"
    },
    {
      "ddi": "691",
      "mask": "999 9999",
      "name": "Micronesia",
      "ptBr": "Micronésia",
      "code": "fm"
    },
    {
      "ddi": "373",
      "mask": "99 999 999",
      "name": "Moldova (Republica Moldova)",
      "ptBr": "Moldávia (República Moldova)",
      "code": "md"
    },
    {
      "ddi": "377",
      "mask": "99 99 99 99",
      "name": "Monaco",
      "ptBr": "Mônaco",
      "code": "mc"
    },
    {
      "ddi": "976",
      "mask": "9999 9999",
      "name": "Mongolia (Монгол)",
      "ptBr": "Mongólia (Монгол)",
      "code": "mn"
    },
    {
      "ddi": "382",
      "mask": "99 999 999",
      "name": "Montenegro (Crna Gora)",
      "ptBr": "Montenegro (Crna Gora)",
      "code": "me"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Montserrat",
      "ptBr": "Montserrat",
      "code": "as"
    },
    {
      "ddi": "212",
      "mask": "999-999999",
      "name": "Morocco (المغرب)",
      "ptBr": "Marrocos (المغرب)",
      "code": "ma"
    },
    {
      "ddi": "258",
      "mask": "99 999 999",
      "name": "Mozambique (Moçambique)",
      "ptBr": "Moçambique (Moçambique)",
      "code": "mz"
    },
    {
      "ddi": "95",
      "mask": "9 999 999",
      "name": "Myanmar (Burma) (မြန်မာ)",
      "ptBr": "Mianmar (Birmânia) (မြန်မာ)",
      "code": "mm"
    },
    {
      "ddi": "264",
      "mask": "99 999 999",
      "name": "Namibia (Namibië)",
      "ptBr": "Namíbia (Namibië)",
      "code": "na"
    },
    {
      "ddi": "674",
      "mask": "999 9999",
      "name": "Nauru",
      "ptBr": "Nauru",
      "code": "nr"
    },
    {
      "ddi": "977",
      "mask": "9-9999999",
      "name": "Nepal (नेपाल)",
      "ptBr": "Nepal (नेपाल)",
      "code": "np"
    },
    {
      "ddi": "31",
      "mask": "99 999 9999",
      "name": "Netherlands (Nederland)",
      "ptBr": "Países Baixos (Nederland)",
      "code": "nl"
    },
    {
      "ddi": "687",
      "mask": "99.99.99",
      "name": "New Caledonia (Nouvelle-Calédonie)",
      "ptBr": "Nova Caledônia (Nouvelle-Calédonie)",
      "code": "nc"
    },
    {
      "ddi": "64",
      "mask": "9 999 9999",
      "name": "New Zealand",
      "ptBr": "Nova Zelândia",
      "code": "nz"
    },
    {
      "ddi": "505",
      "mask": "9999 9999",
      "name": "Nicaragua",
      "ptBr": "Nicarágua",
      "code": "ni"
    },
    {
      "ddi": "227",
      "mask": "99 99 99 99",
      "name": "Niger (Nijar)",
      "ptBr": "Níger (Nijar)",
      "code": "ne"
    },
    {
      "ddi": "234",
      "mask": "9 999 9999",
      "name": "Nigeria",
      "ptBr": "Nigéria",
      "code": "ng"
    },
    {
      "ddi": "683",
      "mask": "9999",
      "name": "Niue",
      "ptBr": "Niue",
      "code": "nu"
    },
    {
      "ddi": "672",
      "mask": "99 9999",
      "name": "Norfolk Island",
      "ptBr": "Ilha Norfolk",
      "code": "nf"
    },
    {
      "ddi": "850",
      "mask": "9 999 9999",
      "name": "North Korea (조선 민주주의 인민 공화국)",
      "ptBr": "Coreia do Norte (조선 민주주의 인민 공화국)",
      "code": "kp"
    },
    {
      "ddi": "1670",
      "mask": "999-999-9999",
      "name": "Northern Mariana Islands",
      "ptBr": "Ilhas Marianas do Norte",
      "code": "mp"
    },
    {
      "ddi": "47",
      "mask": "99 99 99 99",
      "name": "Norway (Norge)",
      "ptBr": "Noruega (Norge)",
      "code": "no"
    },
    {
      "ddi": "968",
      "mask": "99 999999",
      "name": "Oman (عُمان)",
      "ptBr": "Omã (عُمان)",
      "code": "om"
    },
    {
      "ddi": "92",
      "mask": "99 99999999",
      "name": "Pakistan (پاکستان)",
      "ptBr": "Paquistão (پاکستان)",
      "code": "pk"
    },
    {
      "ddi": "680",
      "mask": "999 9999",
      "name": "Palau",
      "ptBr": "Palau",
      "code": "pw"
    },
    {
      "ddi": "970",
      "mask": "9 999 9999",
      "name": "Palestine (فلسطين)",
      "ptBr": "Palestina (فلسطين)",
      "code": "ps"
    },
    {
      "ddi": "507",
      "mask": "999-9999",
      "name": "Panama (Panamá)",
      "ptBr": "Panamá (Panamá)",
      "code": "pa"
    },
    {
      "ddi": "675",
      "mask": "999 9999",
      "name": "Papua New Guinea",
      "ptBr": "Papua Nova Guiné",
      "code": "pg"
    },
    {
      "ddi": "595",
      "mask": "99 999 9999",
      "name": "Paraguay",
      "ptBr": "Paraguai",
      "code": "py"
    },
    {
      "ddi": "51",
      "mask": "9 9999999",
      "name": "Peru (Perú)",
      "ptBr": "Peru (Perú)",
      "code": "pe"
    },
    {
      "ddi": "63",
      "mask": "9 9999 9999",
      "name": "Philippines",
      "ptBr": "Filipinas",
      "code": "ph"
    },
    {
      "ddi": "48",
      "mask": "99 999 99 99",
      "name": "Poland (Polska)",
      "ptBr": "Polônia (Polska)",
      "code": "pl"
    },
    {
      "ddi": "351",
      "mask": "99 999 9999",
      "name": "Portugal",
      "ptBr": "Portugal",
      "code": "pt"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Puerto Rico",
      "ptBr": "Porto Rico",
      "code": "as"
    },
    {
      "ddi": "974",
      "mask": "9999 9999",
      "name": "Qatar (قطر)",
      "ptBr": "Catar (قطر)",
      "code": "qa"
    },
    {
      "ddi": "262",
      "mask": "999 99 99 99",
      "name": "Réunion (La Réunion)",
      "ptBr": "Reunião (La Réunion)",
      "code": "yt"
    },
    {
      "ddi": "40",
      "mask": "99 999 9999",
      "name": "Romania (România)",
      "ptBr": "Romênia (România)",
      "code": "ro"
    },
    {
      "ddi": "7",
      "mask": "999 999-99-99",
      "name": "Russia (Россия)",
      "ptBr": "Rússia (Россия)",
      "code": "kz"
    },
    {
      "ddi": "250",
      "mask": "999 999 999",
      "name": "Rwanda",
      "ptBr": "Ruanda",
      "code": "rw"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Saint Barthélemy (Saint-Barthélemy)",
      "ptBr": "São Bartolomeu (Saint-Barthélemy)",
      "code": "gp"
    },
    {
      "ddi": "290",
      "mask": "99999",
      "name": "Saint Helena",
      "ptBr": "Santa Helena",
      "code": "sh"
    },
    {
      "ddi": "1869",
      "mask": "999-999-9999",
      "name": "Saint Kitts and Nevis",
      "ptBr": "São Cristóvão e Nevis",
      "code": "kn"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Saint Lucia",
      "ptBr": "Santa Lúcia",
      "code": "as"
    },
    {
      "ddi": "590",
      "mask": "999 99 99 99",
      "name": "Saint Martin (Saint-Martin (partie française))",
      "ptBr": "Saint Martin (Saint-Martin (partie française))",
      "code": "gp"
    },
    {
      "ddi": "508",
      "mask": "99 99 99",
      "name": "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
      "ptBr": "Saint Pierre e Miquelon (Saint-Pierre-et-Miquelon)",
      "code": "pm"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Saint Vincent and the Grenadines",
      "ptBr": "São Vicente e Granadinas",
      "code": "as"
    },
    {
      "ddi": "685",
      "mask": "99999",
      "name": "Samoa",
      "ptBr": "Samoa",
      "code": "ws"
    },
    {
      "ddi": "378",
      "mask": "9999 999999",
      "name": "San Marino",
      "ptBr": "San Marino",
      "code": "sm"
    },
    {
      "ddi": "239",
      "mask": "999 9999",
      "name": "São Tomé and Príncipe (São Tomé e Príncipe)",
      "ptBr": "São Tomé e Príncipe (São Tomé e Príncipe)",
      "code": "st"
    },
    {
      "ddi": "966",
      "mask": "99 999 9999",
      "name": "Saudi Arabia (المملكة العربية السعودية)",
      "ptBr": "Arábia Saudita (المملكة العربية السعودية)",
      "code": "sa"
    },
    {
      "ddi": "221",
      "mask": "99 999 99 99",
      "name": "Senegal (Sénégal)",
      "ptBr": "Senegal (Sénégal)",
      "code": "sn"
    },
    {
      "ddi": "381",
      "mask": "99 999999",
      "name": "Serbia (Србија)",
      "ptBr": "Sérvia (Србија)",
      "code": "rs"
    },
    {
      "ddi": "248",
      "mask": "9 999 999",
      "name": "Seychelles",
      "ptBr": "Seychelles",
      "code": "sc"
    },
    {
      "ddi": "232",
      "mask": "99 999999",
      "name": "Sierra Leone",
      "ptBr": "Serra Leoa",
      "code": "sl"
    },
    {
      "ddi": "65",
      "mask": "9999 9999",
      "name": "Singapore",
      "ptBr": "Singapura",
      "code": "sg"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Sint Maarten",
      "ptBr": "Sint Maarten",
      "code": "as"
    },
    {
      "ddi": "421",
      "mask": "9/999 999 99",
      "name": "Slovakia (Slovensko)",
      "ptBr": "Eslováquia (Slovensko)",
      "code": "sk"
    },
    {
      "ddi": "386",
      "mask": "9 999 99 99",
      "name": "Slovenia (Slovenija)",
      "ptBr": "Eslovênia (Slovenija)",
      "code": "si"
    },
    {
      "ddi": "677",
      "mask": "99999",
      "name": "Solomon Islands",
      "ptBr": "Ilhas Salomão",
      "code": "sb"
    },
    {
      "ddi": "252",
      "mask": "9 999999",
      "name": "Somalia (Soomaaliya)",
      "ptBr": "Somália (Soomaaliya)",
      "code": "so"
    },
    {
      "ddi": "27",
      "mask": "99 999 9999",
      "name": "South Africa",
      "ptBr": "África do Sul",
      "code": "za"
    },
    {
      "ddi": "82",
      "mask": "9-999-9999",
      "name": "South Korea (대한민국)",
      "ptBr": "Coreia do Sul (대한민국)",
      "code": "kr"
    },
    {
      "ddi": "211",
      "mask": "999 999 999",
      "name": "South Sudan (جنوب السودان)",
      "ptBr": "Sudão do Sul (جنوب السودان)",
      "code": "ss"
    },
    {
      "ddi": "34",
      "mask": "999 99 99 99",
      "name": "Spain (España)",
      "ptBr": "Espanha (España)",
      "code": "es"
    },
    {
      "ddi": "94",
      "mask": "999 999 999",
      "name": "Sri Lanka (ශ්‍රී ලංකාව)",
      "ptBr": "Sri Lanka (ශ්‍රී ලංකාව)",
      "code": "lk"
    },
    {
      "ddi": "249",
      "mask": "99 999 9999",
      "name": "Sudan (السودان)",
      "ptBr": "Sudão (السودان)",
      "code": "sd"
    },
    {
      "ddi": "597",
      "mask": "999-999",
      "name": "Suriname",
      "ptBr": "Suriname",
      "code": "sr"
    },
    {
      "ddi": "47",
      "mask": "99 99 99 99",
      "name": "Svalbard and Jan Mayen",
      "ptBr": "Svalbard e Jan Mayen",
      "code": "no"
    },
    {
      "ddi": "268",
      "mask": "9999 9999",
      "name": "Swaziland",
      "ptBr": "Suazilândia",
      "code": "sz"
    },
    {
      "ddi": "46",
      "mask": "9 99 99 99",
      "name": "Sweden (Sverige)",
      "ptBr": "Suécia (Sverige)",
      "code": "se"
    },
    {
      "ddi": "41",
      "mask": "99 999 99 99",
      "name": "Switzerland (Schweiz)",
      "ptBr": "Suíça (Schweiz)",
      "code": "ch"
    },
    {
      "ddi": "963",
      "mask": "99 999 9999",
      "name": "Syria (سوريا)",
      "ptBr": "Síria (سوريا)",
      "code": "sy"
    },
    {
      "ddi": "886",
      "mask": "9 9999 9999",
      "name": "Taiwan (台灣)",
      "ptBr": "Taiwan (台灣)",
      "code": "tw"
    },
    {
      "ddi": "992",
      "mask": "999 99 9999",
      "name": "Tajikistan",
      "ptBr": "Tajiquistão",
      "code": "tj"
    },
    {
      "ddi": "255",
      "mask": "99 999 9999",
      "name": "Tanzania",
      "ptBr": "Tanzânia",
      "code": "tz"
    },
    {
      "ddi": "66",
      "mask": "9 999 9999",
      "name": "Thailand (ไทย)",
      "ptBr": "Tailândia (ไทย)",
      "code": "th"
    },
    {
      "ddi": "670",
      "mask": "999 9999",
      "name": "Timor-Leste",
      "ptBr": "Timor-Leste",
      "code": "tl"
    },
    {
      "ddi": "228",
      "mask": "99 99 99 99",
      "name": "Togo",
      "ptBr": "Togo",
      "code": "tg"
    },
    {
      "ddi": "690",
      "mask": "9999",
      "name": "Tokelau",
      "ptBr": "Tokelau",
      "code": "tk"
    },
    {
      "ddi": "676",
      "mask": "99-999",
      "name": "Tonga",
      "ptBr": "Tonga",
      "code": "to"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "Trinidad and Tobago",
      "ptBr": "Trinidad e Tobago",
      "code": "as"
    },
    {
      "ddi": "216",
      "mask": "99 999 999",
      "name": "Tunisia (تونس)",
      "ptBr": "Tunísia (تونس)",
      "code": "tn"
    },
    {
      "ddi": "90",
      "mask": "999 999 99 99",
      "name": "Turkey (Türkiye)",
      "ptBr": "Turquia (Türkiye)",
      "code": "tr"
    },
    {
      "ddi": "993",
      "mask": "99 99-99-99",
      "name": "Turkmenistan",
      "ptBr": "Turcomenistão",
      "code": "tm"
    },
    {
      "ddi": "1649",
      "mask": "999-999-9999",
      "name": "Turks and Caicos Islands",
      "ptBr": "Ilhas Turks e Caicos",
      "code": "tc"
    },
    {
      "ddi": "688",
      "mask": "99 999",
      "name": "Tuvalu",
      "ptBr": "Tuvalu",
      "code": "tv"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "U.S. Virgin Islands",
      "ptBr": "Ilhas Virgens dos EUA",
      "code": "as"
    },
    {
      "ddi": "256",
      "mask": "99 9999999",
      "name": "Uganda",
      "ptBr": "Uganda",
      "code": "ug"
    },
    {
      "ddi": "380",
      "mask": "9999 99999",
      "name": "Ukraine (Україна)",
      "ptBr": "Ucrânia (Україна)",
      "code": "ua"
    },
    {
      "ddi": "971",
      "mask": "9 999 9999",
      "name": "United Arab Emirates (الإمارات العربية المتحدة)",
      "ptBr": "Emirados Árabes Unidos (الإمارات العربية المتحدة)",
      "code": "ae"
    },
    {
      "ddi": "44",
      "mask": "999 999 9999",
      "name": "United Kingdom",
      "ptBr": "Reino Unido",
      "code": "gg"
    },
    {
      "ddi": "1",
      "mask": "999-999-9999",
      "name": "United States",
      "ptBr": "Estados Unidos",
      "code": "as"
    },
    {
      "ddi": "598",
      "mask": "9999 9999",
      "name": "Uruguay",
      "ptBr": "Uruguai",
      "code": "uy"
    },
    {
      "ddi": "998",
      "mask": "99 999 99 99",
      "name": "Uzbekistan (Oʻzbekiston)",
      "ptBr": "Uzbequistão (Oʻzbekiston)",
      "code": "uz"
    },
    {
      "ddi": "678",
      "mask": "99999",
      "name": "Vanuatu",
      "ptBr": "Vanuatu",
      "code": "vu"
    },
    {
      "ddi": "39",
      "mask": "99 9999 9999",
      "name": "Vatican City (Città del Vaticano)",
      "ptBr": "Cidade do Vaticano (Città del Vaticano)",
      "code": "it"
    },
    {
      "ddi": "58",
      "mask": "999-9999999",
      "name": "Venezuela",
      "ptBr": "Venezuela",
      "code": "ve"
    },
    {
      "ddi": "84",
      "mask": "999 9999 999",
      "name": "Vietnam (Việt Nam)",
      "ptBr": "Vietnã (Việt Nam)",
      "code": "vn"
    },
    {
      "ddi": "681",
      "mask": "99 99 99",
      "name": "Wallis and Futuna",
      "ptBr": "Wallis e Futuna",
      "code": "wf"
    },
    {
      "ddi": "212",
      "mask": "9999-99999",
      "name": "Western Sahara (الصحراء الغربية)",
      "ptBr": "Saara Ocidental (الصحراء الغربية)",
      "code": "ma"
    },
    {
      "ddi": "967",
      "mask": "9 999 999",
      "name": "Yemen (اليمن)",
      "ptBr": "Iêmen (اليمن)",
      "code": "ye"
    },
    {
      "ddi": "260",
      "mask": "999 999 999",
      "name": "Zambia",
      "ptBr": "Zâmbia",
      "code": "zm"
    },
    {
      "ddi": "263",
      "mask": "99 99999",
      "name": "Zimbabwe",
      "ptBr": "Zimbábue",
      "code": "zw"
    },
    {
      "ddi": "358",
      "mask": "99 9999999",
      "name": "Åland Islands",
      "ptBr": "Ilhas Aland",
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
