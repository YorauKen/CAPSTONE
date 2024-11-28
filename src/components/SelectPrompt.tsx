import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select";



  


const SelectPrompt = ({setPrompt}:{setPrompt: React.Dispatch<React.SetStateAction<string>> }) => {
	
	const handleSelectChange = (value: string) => {
		setPrompt(value);
	};

	
	const placeholders = [
		"Blush Peach Silk Sherwani with Intricate Embroidery",
		"Golden Colour Designer Men's Indowestern,Golden Brocade Embroidery",
		"Yellow Solid Cotton Kurta with black pants",
		"Woven Satin Silk Jacquard Nehru Jacket in Maroon Red Jacquard Buttons",
	  ]

  return (
	<Select onValueChange={handleSelectChange}>
      <SelectTrigger >
        <SelectValue placeholder="Select a prompt" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
			<SelectLabel>Possible Prompts</SelectLabel>
		  {placeholders.map((value,index)=>(
			<SelectItem  key={index} value={value} >{value}</SelectItem>
		  ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectPrompt