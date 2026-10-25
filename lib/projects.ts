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
    slug: "raspberry-pi-instrumentation",
    title: "Raspberry Pi Instrumentation Platform",
    category: "Electronics & Embedded Systems",
    status: "Completed",
    summary: "A Raspberry Pi electronics workbench combining measurement tools, rotary controls, and an LCD interface.",
    overview: "I developed a Raspberry Pi 4 based electronics platform with measurement and signal-generation functions. The project connects Python control software to GPIO, SPI, and I²C hardware, with rotary encoders and an LCD for interacting with its modes.",
    tools: ["Raspberry Pi 4", "Python", "SPI", "I²C", "SAR ADC", "LCD"],
    highlights: ["Ohmmeter and voltmeter features", "Voltage reference and waveform generation", "Frequency measurement and hardware debugging"],
  },
  {
    slug: "esp32-robotic-pet",
    title: "ESP32 Robotic Pet",
    category: "Electronics & Embedded Systems",
    status: "Completed",
    summary: "Sensor-driven robot prototype connected to a web backend through WLAN and JSON.",
    overview: "I built a robotic pet prototype featuring light sensing, integrated-circuit sensors, and a homemade touch sensor. The software connected device input to a Node.js and MongoDB data flow.",
    tools: ["ESP32", "MicroPython", "WLAN", "JSON", "Node.js", "MongoDB"],
    highlights: ["Custom sensor integration", "Wireless communication", "Device-to-backend data pipeline"],
  },
  {
    slug: "seven-segment-clock",
    title: "Seven-Segment Digital Clock",
    category: "Electronics & Embedded Systems",
    status: "Completed",
    summary: "Digital clock with keypad entry, AM/PM indication, and display timing experiments.",
    overview: "This project combines keypad scanning, multiplexed seven-segment displays, time-setting behavior, and a PM indicator. I also explored how Python timing approaches affect the accuracy of the clock.",
    tools: ["Raspberry Pi", "Python", "GPIO", "Seven-segment display", "Timing"],
    highlights: ["Manual time setting", "12-hour display and PM indicator", "Timing drift investigation"],
  },
  {
    slug: "motor-controller",
    title: "PWM Motor Controller & RPM Measurement",
    category: "Electronics & Embedded Systems",
    status: "In progress",
    summary: "Opto-isolated MOSFET motor drive with rotary-encoder speed input and IR RPM feedback.",
    overview: "An ongoing hardware/software integration project for a 12 V motor. The electronics use an opto-isolator and MOSFET driver; the software goal is PWM control from a rotary encoder with RPM measured by an IR sensor.",
    tools: ["Raspberry Pi", "Python", "PWM", "MOSFET", "Rotary encoder", "IR sensor"],
    highlights: ["Compare low-frequency and 1 kHz PWM responses", "Read encoder changes", "Measure and report shaft RPM"],
  },
  {
    slug: "arm64-toolchain",
    title: "ARM64 Assembler & Processor Emulator",
    category: "Computer Architecture",
    status: "In progress",
    summary: "Python assembler and Rust processor emulator developed as part of computer architecture research.",
    overview: "Ongoing computer architecture research includes assembler development, processor emulation, and experimenting with instruction-set and register design. Details here are a starting point for a future research write-up.",
    tools: ["Python", "Rust", "ARM64", "ISA Design", "Computer Architecture"],
    highlights: ["Assembler pipeline", "Instruction execution and testing", "Register and stack-oriented ISA exploration"],
  },
  {
    slug: "generic-c-containers",
    title: "Generic Containers in C",
    category: "Computer Science & Software",
    status: "Exploration",
    summary: "Type-erased data structures using byte offsets, void pointers, and explicit element sizes.",
    overview: "A software exploration into implementing generic collections in C without C++ templates. The central techniques include byte-level pointer arithmetic and explicit storage metadata.",
    tools: ["C", "Pointers", "Memory Layout", "Data Structures"],
    highlights: ["Type erasure with void pointers", "Byte-wise addressing", "Capacity and allocation strategies"],
  },
];
export const categories = ["Electronics & Embedded Systems", "Computer Architecture", "Computer Science & Software"] as const;
