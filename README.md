# Angular/PrimeNG World Phone Number Input (NgxPWorldPhoneInput)

[![npm version](https://badge.fury.io/js/ngx-p-world-phone-input.svg)](https://badge.fury.io/js/ngx-p-world-phone-input) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/ngx-p-world-phone-input)

An Angular package designed to help international phone number inputting in angular applications.It uses PrimeNG (https://primeng.org/) components as base and FlagCDN (https://flagcdn.com/) as flag image provider.


![image](https://github.com/rafael-faitao/ngx-p-world-phone-input/assets/14910850/4a78d361-448d-498a-aa6e-e2ab982e3359)

### Version Compatibility

| Library/Framework |  Angular | PrimeNG
|--------------------|-------------|-------------|
| ngx-p-world-phone-input| 16.2.0 | 16.9.1 

## Installation

#### Install Command
```shell
# npm i ngx-p-world-phone-input
```

## Usage

#### Importing

Import the `WorldPhoneInputModule` from this package into your app.module or the desired module

```angular
import { WorldPhoneInputModule } from 'ngx-p-world-phone-input';
```


#### Use Example

```typescript
<ngx-world-phone-input>

</ngx-world-phone-input>
```

## Api

#### Properties 
Name | Type | Default | Description
|---|---|---|---
| [ddi] | string | "55" | The ddi / phone code for the selected country. 
| [phone] | any | null | The modeled phone number (without ddi)

#### Events
Name | Type | Description
|---|---|---
| (ddiChange) | EventEmitter<any> | Fires when ddi selection changes
| (phoneChange) | EventEmitter<any> | Fires when phoneNumber changes 

## Library Contributions

- Fork repo.
- Update ./projects/ngx-intl-tel-input
- Build / test library.
- Update ./src/app with new functionality.
- Update README.md
- Pull request.


## Special Thanks

FlagCDN for flag package
[https://flagcdn.com/]

@Webcat12345 for original idea / inspiration ([ngx-int-tel-input](https://github.com/webcat12345/ngx-intl-tel-input#readme))
