'use client'
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import "react-resizable/css/styles.css"; // Import default styles
import HomeNavbar from "./HomeNavbar";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { ResizableBox } from "react-resizable";

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const Compiler = () => {
    const [htmlCode, setHtmlCode] = useState("<h1>Hello World!</h1>");
    const [cssCode, setCssCode] = useState("h1 { color: red; }");
    const [jsCode, setJsCode] = useState("console.log('Hello, World!');");
    const [output, setOutput] = useState("");
    const [iframeSize, setIframeSize] = useState({ width: 500, height: 400 });
    const [themi, setThemi] = useState('vs-dark'); 
    const [isact, setisact] = useState('HTML')
    useEffect(() => {
        updatePreview();
    }, [htmlCode, cssCode, jsCode]);

    const updatePreview = () => {
        const completeCode = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>
          ${jsCode}
        </script>
      </body>
      </html>
    `;
        setOutput(completeCode);
    };

    const handleResize = (event, { size }) => {
        setIframeSize(size); // Update iframe size on resize
    };
    useEffect(() => {
        // Ensure code runs only in the browser
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          setThemi(storedTheme);
        }
      }, []);
    return (
        <div className="w-full flex items-center flex-col justify-center">
            <div className='sticky top-0 z-50 w-full'>
                <HomeNavbar />
            </div>
            <div className="flex items-center justify-center gap-x-1" >
                <Button className={`${isact === 'HTML' && 'dark:bg-[#262626] bg-[#e5e5e5]'}`} variant='outline' onClick={() => setisact('HTML')}> <h3>HTML</h3></Button>
                <Button className={`${isact === 'CSS' && 'dark:bg-[#262626] bg-[#e5e5e5]'}`} variant='outline' onClick={() => setisact('CSS')}> <h3>CSS</h3></Button>
                <Button className={`${isact === 'JS' && 'dark:bg-[#262626] bg-[#e5e5e5]'}`} variant='outline' onClick={() => setisact('JS')}> <h3>JS</h3></Button>
                <Button className={`${isact === 'Preview' && 'dark:bg-[#262626] bg-[#e5e5e5]'} flex md:hidden`} variant='outline' onClick={() => setisact('Preview')}> <h3>Preview</h3></Button>
            </div>

            <div className="w-full block md:hidden">
                {/* Monaco Editor component */}
                {
                    isact === 'HTML' ?
                        <MonacoEditor
                            height="80vh"
                            language="html"
                            theme={themi ? (themi === 'system' ? 'vs-dark' : `vs-${themi}`) : 'vs-dark'}
                            value={htmlCode}
                            onChange={(newValue) => setHtmlCode(newValue)}
                            options={{
                                wordWrap: "on", // Enable word wrap
                                automaticLayout: true, // Adjust layout automatically
                                // Optional: Disable scrolling beyond the last line
                                fontSize: '14px'
                            }}
                        />
                        :
                        isact === 'CSS' ?
                            <MonacoEditor
                                height="80vh"
                                language="css"
                                theme={themi ? (themi === 'system' ? 'vs-dark' : `vs-${themi}`) : 'vs-dark'}
                                value={cssCode}
                                onChange={(newValue) => setCssCode(newValue)}
                                options={{
                                    wordWrap: "on", // Enable word wrap
                                    automaticLayout: true, // Adjust layout automatically
                                    // Optional: Disable scrolling beyond the last line
                                    fontSize: '14px'
                                }}
                            />
                            :
                            isact === 'JS' ?
                                <MonacoEditor
                                    height="80vh"
                                    language="javascript"
                                    theme={themi ? (themi === 'system' ? 'vs-dark' : `vs-${themi}`) : 'vs-dark'}
                                    value={jsCode}
                                    onChange={(newValue) => setJsCode(newValue)}
                                    options={{
                                        wordWrap: "on", // Enable word wrap
                                        automaticLayout: true, // Adjust layout automatically
                                        // Optional: Disable scrolling beyond the last line
                                        fontSize: '14px'
                                    }}
                                />
                                :

                                <ResizablePanelGroup direction="horizontal">
                                    <ResizablePanel className="" >

                                    </ResizablePanel>

                                    <ResizableHandle withHandle />
                                    <ResizablePanel minSize={70} maxSize={100}>
                                        <div className='overflow-y-auto h-[80vh]'>
                                            {/* Output display */}

                                            <iframe

                                                srcDoc={output}
                                                sandbox="allow-scripts"
                                                frameBorder="0"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "8px",
                                                }}
                                            ></iframe>
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                    // <ResizableBox
                    //     width={iframeSize.width}
                    //     height={iframeSize.height}
                    //     minConstraints={[300, 300]}
                    //     maxConstraints={[1024, 768]}
                    //     resizeHandles={["se", "e", "s"]}
                    //     onResize={handleResize}
                    // >

                    //     <iframe

                    //         srcDoc={output}
                    //         sandbox="allow-scripts"
                    //         frameBorder="0"
                    //         style={{
                    //             width: "100%",
                    //             height: "80vh",
                    //             border: "1px solid #ccc",
                    //             borderRadius: "8px",
                    //         }}
                    //     ></iframe>
                    // </ResizableBox>

                }



            </div>

            <div className='w-[95%] m-auto my-5 md:block hidden'>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel className="" minSize={30} maxSize={80}>
                        <div>
                            {/* Monaco Editor component */}
                            {
                                isact === 'HTML' ?
                                    <MonacoEditor
                                        height="80vh"
                                        language="html"
                                        theme={themi ? (themi === 'system' ? 'vs-dark' : `vs-${themi}`) : 'vs-dark'}
                                        value={htmlCode}
                                        onChange={(newValue) => setHtmlCode(newValue)}
                                        options={{
                                            wordWrap: "on", // Enable word wrap
                                            automaticLayout: true, // Adjust layout automatically
                                            // Optional: Disable scrolling beyond the last line
                                            fontSize: '14px'
                                        }}
                                    />
                                    :
                                    isact === 'CSS' ?
                                        <MonacoEditor
                                            height="80vh"
                                            language="css"
                                            theme={themi ? (themi === 'system' ? 'vs-dark' : `vs-${themi}`) : 'vs-dark'}
                                            value={cssCode}
                                            onChange={(newValue) => setCssCode(newValue)}
                                            options={{
                                                wordWrap: "on", // Enable word wrap
                                                automaticLayout: true, // Adjust layout automatically
                                                // Optional: Disable scrolling beyond the last line
                                                fontSize: '14px'
                                            }}
                                        />
                                        :
                                        <MonacoEditor
                                            height="80vh"
                                            language="javascript"
                                            theme={themi ? (themi === 'system' ? 'vs-dark' : `vs-${themi}`) : 'vs-dark'}
                                            value={jsCode}
                                            onChange={(newValue) => setJsCode(newValue)}
                                            options={{
                                                wordWrap: "on", // Enable word wrap
                                                automaticLayout: true, // Adjust layout automatically
                                                // Optional: Disable scrolling beyond the last line
                                                fontSize: '14px'
                                            }}
                                        />
                            }



                        </div>
                    </ResizablePanel>

                    <ResizableHandle withHandle />
                    <ResizablePanel>
                        <div className='overflow-y-auto h-[80vh]'>
                            {/* Output display */}

                            <iframe

                                srcDoc={output}
                                sandbox="allow-scripts"
                                frameBorder="0"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                }}
                            ></iframe>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            {/* <div className="editors">
                <div className="editor">
                    <h3>HTML</h3>
                    <MonacoEditor
                        height="200px"
                        language="html"
                        theme="vs-dark"
                        value={htmlCode}
                        onChange={(newValue) => setHtmlCode(newValue)}
                        options={{ fontSize: 14 }}
                    />
                </div>
                <div className="editor">
                    <h3>CSS</h3>
                    <MonacoEditor
                        height="200px"
                        language="css"
                        theme="vs-dark"
                        value={cssCode}
                        onChange={(newValue) => setCssCode(newValue)}
                        options={{ fontSize: 14 }}
                    />
                </div>
                <div className="editor">
                    <h3>JavaScript</h3>
                    <MonacoEditor
                        height="200px"
                        language="javascript"
                        theme="vs-dark"
                        value={jsCode}
                        onChange={(newValue) => setJsCode(newValue)}
                        options={{ fontSize: 14 }}
                    />
                </div>
            </div> */}

            {/* <div className="preview">
                <h3>Preview </h3>


                <iframe

                    srcDoc={output}
                    sandbox="allow-scripts"
                    frameBorder="0"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                    }}
                ></iframe>

            </div> */}
            <div className="w-full flex items-center justify-center">
                <Footer />
            </div>

        </div>
    );
};

export default Compiler;
