import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";

export default function CurrencyWithFlags() {
  return (
    <Autocomplete className="max-w-xs" label="Select currency">
      <AutocompleteItem
        key="usd"
        startContent={<Avatar alt="USA" className="w-6 h-6" src="https://flagcdn.com/us.svg" />}
      >
        USD – ($)
      </AutocompleteItem>
      <AutocompleteItem
        key="eur"
        startContent={<Avatar alt="EU" className="w-6 h-6" src="https://flagcdn.com/eu.svg" />}
      >
        EUR – (€)
      </AutocompleteItem>
      <AutocompleteItem
        key="jpy"
        startContent={<Avatar alt="Japan" className="w-6 h-6" src="https://flagcdn.com/jp.svg" />}
      >
        JPY – (¥)
      </AutocompleteItem>
      <AutocompleteItem
        key="gbp"
        startContent={<Avatar alt="UK" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />}
      >
        GBP – (£)
      </AutocompleteItem>
      <AutocompleteItem
        key="inr"
        startContent={<Avatar alt="India" className="w-6 h-6" src="https://flagcdn.com/in.svg" />}
      >
        INR – (₹)
      </AutocompleteItem>
      <AutocompleteItem
        key="rub"
        startContent={<Avatar alt="Russia" className="w-6 h-6" src="https://flagcdn.com/ru.svg" />}
      >
        RUB – (₽)
      </AutocompleteItem>
      <AutocompleteItem
        key="aud"
        startContent={<Avatar alt="Australia" className="w-6 h-6" src="https://flagcdn.com/au.svg" />}
      >
        AUD – (A$)
      </AutocompleteItem>
      <AutocompleteItem
        key="cny"
        startContent={<Avatar alt="China" className="w-6 h-6" src="https://flagcdn.com/cn.svg" />}
      >
        CNY – (¥)
      </AutocompleteItem>
    </Autocomplete>
  );
}

