'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { executeCode } from './api';
import { CODE_SNIPPETS } from './constants'; // Import CODE_SNIPPETS
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Navbar from './Navbar';
import Comboselector from './Comboselector';
import Footer from './Footer';

// Dynamically import Monaco Editor
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

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
    { value: "perl", label: "Perl" },
    { value: "jelly", label: "Jelly" },
    { value: "dart", label: "Dart" },

];

const CodeEditor = ({ selectedlangi }) => {
    const [language, setLanguage] = useState(selectedlangi || 'javascript');
    const [code, setCode] = useState(CODE_SNIPPETS[language]); // Set initial code based on default language
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [open, setOpen] = useState(false); // State for Popover
    const [parent, setparent] = useState(null)
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage); // Update the selected language
        setCode(CODE_SNIPPETS[newLanguage]); // Set the starter code for the new language
    };

    const runCode = async () => {
        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, code);
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
    // console.log(parent)
    return (
        <div>
            <Navbar runnerfunc={runCode} stateisloading={isLoading} handlefunc={handleLanguageChange} langu={language} ste={setparent} />

            <div className='md:hidden flex items-center justify-center flex-col w-full'>
                <div className='w-full'>
                    {/* Monaco Editor component */}
                    <MonacoEditor
                        height="80vh"
                        language={language}
                        value={code}
                        onChange={(value) => setCode(value || "")}
                        theme={`vs-${parent}`}
                        options={{
                            wordWrap: "on", // Enable word wrap
                            automaticLayout: true, // Adjust layout automatically
                            // Optional: Disable scrolling beyond the last line
                        }}
                    />
                </div>
                <div className='md:hidden flex justify-end mr-7 w-full my-3 gap-x-5'>
                    <Drawer>
                        <DrawerTrigger>
                            {/* Replace the inner Button with a div or span */}
                            <h2 className='font-semibold select-none dark:bg-white dark:text-black px-4 rounded-md py-[2px] bg-[#171717] text-white'>Output</h2>
                            {/* <Button className='font-bold select-none'></Button> */}
                            {/* <div className="font-bold cursor-pointer select-none">Output</div> */}
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Output</DrawerTitle>
                                <div className='overflow-y-auto h-[50vh]'>
                                    {/* Output display */}
                                    <div className="whitespace-pre dark:text-white text-wrap text-left select-text text-black">
                                        {output ? output.join("\n") : ""}
                                    </div>
                                    {isError && <div style={{ color: "red" }}>An error occurred while executing the code.</div>}
                                </div>
                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>
                    <Button className='transition-all duration-500' onClick={runCode} disabled={isLoading}>
                        <h2 className='font-bold'>{isLoading ? "Running..." : "Run"}</h2>
                    </Button>
                </div>


                {/* <div className='w-full flex items-start pl-5'>
                    <div className='w-full '>
                      
                        <h3 className='font-semibold'>Output:</h3>
                        <div className="whitespace-pre overflow-y-auto max-h-96 w-full">{output ? output.join("\n") : ""}</div>
                        {isError && <div style={{ color: "red" }}>An error occurred while executing the code.</div>}
                    </div>
                </div> */}
            </div>

            <div className='w-[95%] m-auto my-5 md:block hidden'>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel minSize={40} maxSize={80}>
                        <div>
                            {/* Monaco Editor component */}
                            <MonacoEditor
                                height="80vh"
                                language={language}
                                value={code}
                                onChange={(value) => setCode(value || "")}
                                theme={`vs-${parent}`}
                                options={{
                                    wordWrap: "on", // Enable word wrap
                                    automaticLayout: true, // Adjust layout automatically
                                    // Optional: Disable scrolling beyond the last line
                                }}
                            />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel>
                        <div className='overflow-y-auto h-[80vh]'>
                            {/* Output display */}
                            <h3 className='font-semibold ml-3'>Output:</h3>
                            <div className="whitespace-pre ml-3 text-wrap text-left">{output ? output.join("\n") : ""}</div>
                            {isError && <div style={{ color: "red" }}>An error occurred while executing the code.</div>}
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>

            <div className='w-full flex items-center justify-center'>
                <Footer />
            </div>


        </div>
    );
};

export default CodeEditor;
