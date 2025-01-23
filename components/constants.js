export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
    c: "10.2.0",
    cpp: "10.2.0",
    swift: "5.3.3",
    rust: "1.68.2",
    r: "4.2.3",
    ruby: "3.0.1", // Added Ruby
    go: "1.16.2",
    kotlin:"1.8.20"
};

  
export const CODE_SNIPPETS = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Krishna");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Krishna" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Krishna")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp: `using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n`,
    php: "<?php\n\n$name = 'Krishna';\necho $name;\n",
    c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello, World!\\n");\n\treturn 0;\n}\n`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, World!" << endl;\n\treturn 0;\n}\n`,
    swift: `print("Hello, World!")\n`,
    rust: `fn main() {\n\tprintln!("Hello, World!");\n}\n`,
    r: `\ncat("Hello, World!")\n`,
    ruby: `\ndef greet(name)\n\tputs "Hello, #{name}!"\nend\n\ngreet("Krishna")\n`,
    go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}\n`,
    kotlin: `fun main() {\n\tprintln("Hello, World!")\n}\n`,
};