'use client'
import { toast } from '@/hooks/use-toast';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ToastAction } from '@radix-ui/react-toast';
import { motion } from 'framer-motion'
export default function Contact() {
    const [result, setResult] = useState("");
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [email, setemail] = useState("");



    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "b7ce34ae-3dd2-4ca8-a76c-351bbca4bc08");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setText("");
            setemail('')
            setUsername('')
            toast({
                title: `Your feedback sent successfully, ${username}`,
                description: "Thankyou for your feedback. Happy Coding",
            }, {
                variant: "outline",

            });
        } else {
            console.error("Error:", data);
            setResult(data.message);
        }
    };

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleInputText = (e) => {
        const textarea = e.target;
        textarea.style.height = "auto"; // Reset height for dynamic resizing
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height dynamically
        setText(textarea.value);

    };
    const handleInputemail = (e) => {
        const textarea = e.target;

        setemail(textarea.value);
    };

    const maxLength = 280;
    const progress = (text.length / maxLength) * 100;

    return (
        <div className="flex items-center justify-center">
            <form className="w-[85%]" onSubmit={onSubmit}>
                {/* Input fields for name and email */}
                <div className="flex justify-center items-center m-2 flex-wrap">
                    <motion.div


                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}

                        className="inpname outline-none border-none ml-2 mr-2 mb-3 text-lg w-full">
                        <input
                            className={`placeholder-zinc-600 bg-transparent resize-none rounded-lg w-full p-2 border ${username ? "border-purple-500" : "border-zinc-700"
                                } outline-none text-white text-lg mt-3`}
                            type="text"
                            name="name"
                            required
                            placeholder="Fullname"
                            onChange={handleInputUsername}
                        />
                    </motion.div>
                    <motion.div

                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                        // viewport={{once:true,amount:0.5}}

                        className="inpemail outline-none border-none ml-2 mr-2  w-full">
                        <input
                            className={`placeholder-zinc-600 bg-transparent resize-none rounded-lg w-full p-2 border ${email ? "border-purple-500" : "border-zinc-700"
                                } outline-none text-white text-lg mt-3`}

                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                            onInput={handleInputemail}
                        />
                    </motion.div>
                </div>

                {/* Textarea with character progress */}
                <div className="mx-4 ">
                    {/* <textarea
                        className="bg-transparent text-white text-xl p-2 border border-white w-3/4 outline-none rounded-xl"
                        placeholder="Write your thoughts"
                        name="message"
                        required
                    ></textarea> */}

                    <motion.textarea

                        initial={{ y: -150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0.2 }}
                        // viewport={{once:true,amount:0.5}}


                        className={`placeholder-zinc-600 bg-transparent  resize-none rounded-lg w-full p-2  border ${text ? "border-purple-500" : "border-zinc-700"
                            } outline-none text-white text-lg mt-3`}
                        style={{ height: "auto", minHeight: "40px" }}
                        name="message"
                        placeholder="What is your Feedback?!"
                        maxLength={maxLength}
                        value={text}
                        required
                        onInput={handleInputText}
                    ></motion.textarea>

                    {/* Character counter and progress bar */}
                    {text && <div className="flex items-center justify-end w-full mt-2">
                        <div
                            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-600 transition-all duration-300"
                            style={{
                                background: `conic-gradient(
                  ${text.length >= 275 ? "red" : text.length >= 260 ? "#C7D13F" : "#a855f7"} ${progress}%,
                  #374151 ${progress}%
                )`,
                            }}
                        >
                            <div className="absolute bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center">

                                <p
                                    className={`${text.length >= 275
                                        ? "text-red-600"
                                        : text.length >= 260
                                            ? "text-yellow-600"
                                            : "text-white"
                                        } text-[15px] text-center`}
                                >
                                    {text.length}
                                </p>


                            </div>
                        </div>
                    </div>}
                </div>

                {/* Submit button */}
                <div className="subbut flex items-center justify-center w-full my-4">
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0.6 }}
                        // viewport={{once:true,amount:0.5}}

                        type="submit"
                        className="outline-none border text-white w-auto text-lg  border-zinc-600 rounded-md p-1 pl-5 pr-5 cursor-pointer transition-all duration-700 font-semibold select-none hover:bg-purple-700"
                    >
                        Submit
                    </motion.button>
                </div>
            </form>
        </div>
    );
}
