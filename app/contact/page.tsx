"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "+91 8850858769",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone(UAE)",
    content: "+971 5820508037",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "fahadhawaldar@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    content: "Al Ghubaiba, Dubai, UAE",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Fill in the form to start a conversation
              </p>
              {/* inputd  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="mobile-app">
                      Mobile App Development
                    </SelectItem>

                    <SelectItem value="Ui-ux">UI/UX</SelectItem>

                    <SelectItem value="api">API Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              ></Textarea>
              <Button size={"sm"} className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div
            className="flex flex-1 items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0 "
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] text-accent xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] flex items-center justify-center">
                    <div className="text-[28px]"> {item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3>{item.content}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
