import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";

export default function CurrencyWithFlags() {
  return (
    <Autocomplete className="max-w-xs" label="Select currency">
      <AutocompleteItem key="usd" startContent={<Avatar alt="USA" className="w-6 h-6" src="https://flagcdn.com/us.svg" />}>
        USD – ($)
      </AutocompleteItem>
      <AutocompleteItem key="eur" startContent={<Avatar alt="EU" className="w-6 h-6" src="https://flagcdn.com/eu.svg" />}>
        EUR – (€)
      </AutocompleteItem>
      <AutocompleteItem key="jpy" startContent={<Avatar alt="Japan" className="w-6 h-6" src="https://flagcdn.com/jp.svg" />}>
        JPY – (¥)
      </AutocompleteItem>
      <AutocompleteItem key="gbp" textValue="GBP Pound UK United Kingdom England Britain Sterling" startContent={<Avatar alt="UK" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />}>
        GBP – (£)
      </AutocompleteItem>
      <AutocompleteItem key="inr" startContent={<Avatar alt="India" className="w-6 h-6" src="https://flagcdn.com/in.svg" />}>
        INR – (₹)
      </AutocompleteItem>
      <AutocompleteItem key="rub" startContent={<Avatar alt="Russia" className="w-6 h-6" src="https://flagcdn.com/ru.svg" />}>
        RUB – (₽)
      </AutocompleteItem>
      <AutocompleteItem key="aud" startContent={<Avatar alt="Australia" className="w-6 h-6" src="https://flagcdn.com/au.svg" />}>
        AUD – (A$)
      </AutocompleteItem>
      <AutocompleteItem key="cad" startContent={<Avatar alt="Canada" className="w-6 h-6" src="https://flagcdn.com/ca.svg" />}>
        CAD – (C$)
      </AutocompleteItem>
      <AutocompleteItem key="chf" startContent={<Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />}>
        CHF – (Fr)
      </AutocompleteItem>
      <AutocompleteItem key="cny" startContent={<Avatar alt="China" className="w-6 h-6" src="https://flagcdn.com/cn.svg" />}>
        CNY – (¥)
      </AutocompleteItem>
      <AutocompleteItem key="hkd" startContent={<Avatar alt="Hong Kong" className="w-6 h-6" src="https://flagcdn.com/hk.svg" />}>
        HKD – (HK$)
      </AutocompleteItem>
      <AutocompleteItem key="sek" startContent={<Avatar alt="Sweden" className="w-6 h-6" src="https://flagcdn.com/se.svg" />}>
        SEK – (kr)
      </AutocompleteItem>
      <AutocompleteItem key="nzd" startContent={<Avatar alt="New Zealand" className="w-6 h-6" src="https://flagcdn.com/nz.svg" />}>
        NZD – (NZ$)
      </AutocompleteItem>
      <AutocompleteItem key="krw" startContent={<Avatar alt="South Korea" className="w-6 h-6" src="https://flagcdn.com/kr.svg" />}>
        KRW – (₩)
      </AutocompleteItem>
      <AutocompleteItem key="sgd" startContent={<Avatar alt="Singapore" className="w-6 h-6" src="https://flagcdn.com/sg.svg" />}>
        SGD – (S$)
      </AutocompleteItem>
      <AutocompleteItem key="mxn" startContent={<Avatar alt="Mexico" className="w-6 h-6" src="https://flagcdn.com/mx.svg" />}>
        MXN – ($)
      </AutocompleteItem>
      <AutocompleteItem key="zar" startContent={<Avatar alt="South Africa" className="w-6 h-6" src="https://flagcdn.com/za.svg" />}>
        ZAR – (R)
      </AutocompleteItem>
      <AutocompleteItem key="brl" startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}>
        BRL – (R$)
      </AutocompleteItem>
      <AutocompleteItem key="try" startContent={<Avatar alt="Turkey" className="w-6 h-6" src="https://flagcdn.com/tr.svg" />}>
        TRY – (₺)
      </AutocompleteItem>
      <AutocompleteItem key="pln" startContent={<Avatar alt="Poland" className="w-6 h-6" src="https://flagcdn.com/pl.svg" />}>
        PLN – (zł)
      </AutocompleteItem>
      <AutocompleteItem key="nok" startContent={<Avatar alt="Norway" className="w-6 h-6" src="https://flagcdn.com/no.svg" />}>
        NOK – (kr)
      </AutocompleteItem>
      <AutocompleteItem key="dkk" startContent={<Avatar alt="Denmark" className="w-6 h-6" src="https://flagcdn.com/dk.svg" />}>
        DKK – (kr)
      </AutocompleteItem>
      <AutocompleteItem key="czk" startContent={<Avatar alt="Czech Republic" className="w-6 h-6" src="https://flagcdn.com/cz.svg" />}>
        CZK – (Kč)
      </AutocompleteItem>
      <AutocompleteItem key="huf" startContent={<Avatar alt="Hungary" className="w-6 h-6" src="https://flagcdn.com/hu.svg" />}>
        HUF – (Ft)
      </AutocompleteItem>
      <AutocompleteItem key="ils" startContent={<Avatar alt="Israel" className="w-6 h-6" src="https://flagcdn.com/il.svg" />}>
        ILS – (₪)
      </AutocompleteItem>
      <AutocompleteItem key="thb" startContent={<Avatar alt="Thailand" className="w-6 h-6" src="https://flagcdn.com/th.svg" />}>
        THB – (฿)
      </AutocompleteItem>
      <AutocompleteItem key="myr" startContent={<Avatar alt="Malaysia" className="w-6 h-6" src="https://flagcdn.com/my.svg" />}>
        MYR – (RM)
      </AutocompleteItem>
      <AutocompleteItem key="php" startContent={<Avatar alt="Philippines" className="w-6 h-6" src="https://flagcdn.com/ph.svg" />}>
        PHP – (₱)
      </AutocompleteItem>
      <AutocompleteItem key="idr" startContent={<Avatar alt="Indonesia" className="w-6 h-6" src="https://flagcdn.com/id.svg" />}>
        IDR – (Rp)
      </AutocompleteItem>
      <AutocompleteItem key="ron" startContent={<Avatar alt="Romania" className="w-6 h-6" src="https://flagcdn.com/ro.svg" />}>
        RON – (lei)
      </AutocompleteItem>
      <AutocompleteItem key="bgn" startContent={<Avatar alt="Bulgaria" className="w-6 h-6" src="https://flagcdn.com/bg.svg" />}>
        BGN – (лв)
      </AutocompleteItem>
    </Autocomplete>
  );
}
