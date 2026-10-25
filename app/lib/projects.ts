export type Project = {
  slug: string;
  title: string;
  category: "Electronics & Embedded Systems" | "Computer Architecture" | "Computer Science & Software";
  status: "Completed" | "In progress" | "Exploration";
  summary: string;
  overview: string;
  tools: string[];
  highlights: string[];
};

// Starter descriptions: review facts, dates, photos, and results before publishing.
export const projects: Project[] = [
  {
    slug: "electronics-tool-bench",
    title: "Electronics Tool Bench",
    category: "Electronics & Embedded Systems",
    status: "Completed",
    summary: "A Raspberry Pi electronics workbench combining measurement tools, rotary controls, and an LCD interface.",
    overview: "I developed a Raspberry Pi 4 based electronics platform with measurement and signal-generation functions. The project connects Python control software to GPIO, SPI, and I²C hardware, with rotary encoders and an LCD for interacting with its modes.",
    tools: ["Raspberry Pi 4", "Python", "MultiSim",  "SPI", "I²C", "PWM", "SAR ADC", "LCD"],
    highlights: ["Ohmmeter and voltmeter features", "Voltage reference and waveform generation", "Frequency measurement and hardware debugging"],
  },
  {
    slug: "robotic-pet",
    title: "ESP32 Robotic Pet",
    category: "Electronics & Embedded Systems",
    status: "Completed",
    summary: "Sensor-driven robot prototype connected to a web backend through WLAN and JSON.",
    overview: "I built a robotic pet prototype featuring light sensing, integrated-circuit sensors, and a homemade touch sensor. The software connected device input to a Node.js and MongoDB data flow.",
    tools: ["ESP32", "MicroPython", "WLAN", "JSON", "Node.js", "MongoDB"],
    highlights: ["Custom sensor integration", "Wireless communication", "Device-to-backend data pipeline"],
  },
  {
    slug: "usbc-phone-charger",
    title: "USB-C Phone Charger",
    category: "Electronics & Embedded Systems",
    status: "Completed",
    summary: "Analog charging block compatible with USB-C phone devices.",
    overview: "I designed a multistage AC-DC phone charger comprised of a step-down transformer, full-wave rectifier and a voltage regulator.",
    tools: ["MultiSim", "Circuit Analysis", "Hardware Testing", "Analog Signaling"],
    highlights: ["Charging mechanism", "Mobile device power constraints", "Full-wave rectification through a diode bridge"],
  },
  // {
  //   slug: "chinese-english-dictionary-app",
  //   title: "Chinese-English Dictionary App",
  //   category: "Computer Science & Software",
  //   status: "Completed",
  //   summary: "A JavaFX application for translating Chinese sentences and searching Chinese characters.",
  //   overview: "I programmed a Chinese-English dictionary app featuring sentence translation and Chinese character search. It is compatible with both traditional and simplified characters.",
  //   tools: ["Java", "JavaFX", "Web APIs", "Maven", "OOP", "JSON", "GSON", "Multi-threading"],
  //   highlights: ["Construct and send HTTP requests to receive JSON responses", "Fetch a character's alternate versions from a database"],
  // },
  {
    slug: "c-diagonal-sums",
    title: "C Diagonal Sums Finder",
    category: "Computer Science & Software",
    status: "Completed",
    summary: "A C program that finds all diagonal sums from a text file using multi-threading.",
    overview: "I wrote a C program that computes the diagonal sums of any-sized square grid stored in a text file with a user-specified number of threads to compare execution times.",
    tools: ["C", "Pointers", "Makefile", "Valgrind", "Dynamic Memory Allocation", "Multi-threading", "System calls"],
    highlights: ["Patching memory leaks", "Concurrent programming", "Read and write text files without library calls"],
  },
  {
    slug: "kanji-onyomi-game",
    title: "Japanese Kanji Onyomi Game",
    category: "Computer Science & Software",
    status: "Completed",
    summary: "A game quizzing the Japanese onyomi readings for studying kanji characters.",
    overview: "I coordinated a quiz on Japanese kanji characters' onyomi readings which are organized inside a custom linked list data structure.",
    tools: ["Java", "Maven", "Data Structures", "Japanese Kanji"],
    highlights: ["Converting a list of kanji to a data structure", "Search multiple answers for a kanji", "Queue correctly answered items"],
  },
  {
    slug: "c-client-server",
    title: "C Client-to-Server",
    category: "Computer Science & Software",
    status: "Completed",
    summary: "A client to server data transmission implemented in C using system calls.",
    overview: "I built a client program that sends short messages to a server program under an IPv4 protocol socket stream.",
    tools: ["C", "Makefile", "Socket Programming", "IPv4", "System calls", "TCP Ports"],
    highlights: ["Server admin chooses a port number for connecting clients", "Shared IPv4 addresses", "Opening and closing a socket"],
  },
  {
    slug: "cache-simulator",
    title: "Single-Cycle Computer Cache Simulator",
    category: "Computer Architecture",
    status: "In progress",
    summary: "Cache simulator that measures performance metrics from data and instruction caches.",
    overview: "I am developing a C-programmed cache simulator that reads address traces and outputs execution data for quick comparison. I am also planning a cache replacement policy for more efficient cache optimization.",
    tools: ["C", "Icarus Verilog", "Assembly", "LEGv8", "RISC ISA", "Java", "Processor Datapaths", "Microcode", "Pipelining", "Memory-Management Units"],
    highlights: ["Assembler pipeline", "Instruction execution and testing", "Register and stack-oriented ISA exploration"],
  },
];
export const categories = ["Electronics & Embedded Systems", "Computer Architecture", "Computer Science & Software"] as const;
