'use client'
import React, { useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { executeCode } from './api';
import { CODE_SNIPPETS } from './constants'; // Import CODE_SNIPPETS
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "php", label: "PHP" },
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "swift", label: "Swift" },
    { value: "rust", label: "Rust" },
    // { value: "r", label: "R" },
    { value: "ruby", label: "Ruby" },
    { value: "go", label: "Go" },
    {value:"kotlin",label:"Kotlin"}
];
const Comboselector = ({handlefunc,langu}) => {
       const [language, setLanguage] = useState("javascript");
        const [code, setCode] = useState(CODE_SNIPPETS[langu]); // Set initial code based on default language
        const [output, setOutput] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        const [open, setOpen] = useState(false); // State for Popover
    
        const handleLanguageChange = (newLanguage) => {
            setLanguage(newLanguage); // Update the selected language
            setCode(CODE_SNIPPETS[newLanguage]); // Set the starter code for the new language
        };
    
        const runCode = async () => {
            try {
                setIsLoading(true);
                const { run: result } = await executeCode(langu, code);
                setOutput(result.output.split("\n")); // Store output as array of strings
                result.stderr ? setIsError(true) : setIsError(false);
            } catch (error) {
                console.log(error);
                setIsError(true);
                setOutput(["An error occurred while executing the code."]);
            } finally {
                setIsLoading(false);
            }
        };
  return (
    <div>
         <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[140px] justify-between"
                    >
                        {langu
                            ? languages.find((lang) => lang.value === langu)?.label
                            : "Select a language"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                                {languages.map((lang) => (
                                    <CommandItem
                                        key={lang.value}
                                        onSelect={() => {
                                            handlefunc(lang.value);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={`mr-2 h-4 w-4 ${
                                                langu === lang.value ? "opacity-100" : "opacity-0"
                                            }`}
                                        />
                                        {lang.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
    </div>
  )
}

export default Comboselector