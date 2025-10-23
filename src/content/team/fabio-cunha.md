---
# 1. Personal Information
slug: "fabio-cunha"
firstName: "Fábio"
lastName: "Cunha"
position: "Lead Developer & Founder"
image: "/images/team/fabio.jpg"
dateOfBirth: "1990-12-21" # Optional
contact:
  email: "fabiorafaelcoutada@disquiet-colab.com"
  # phone: "+351 123 456 789"
links:
  linkedin: "https://www.linkedin.com/in/fabiorafaelcoutada/" # Use your actual link
  github: "https://github.com/fabiorafaelcoutada"
  gitlab: "https://gitlab.com/fabiorafaelcoutada"
  # portfolio: "https://yourportfolio.com"

# 2. Skills (Categorized)
skills:
  programmingLanguages:
    - C
    - C++
    - Bash
    - SystemVerilog
    - VHDL
    - SystemC
    - Assembly
    - Python
    - Rust
    - TCL
    - C#
    - TypeScript
  operatingSystems:
    embeddedLinux:
      - Linux Kernel
      - Yocto
      - Buildroot
      - U-Boot
      - Device Drivers
      - IPC
    RTOS:
      - FreeRTOS
      - Zephyr
      - PikeOS
  Interfaces & Protocols:
    Basic:
      - SPI
      - I2C
      - UART
    Wireless & Cellular:
      - Bluetooth
      - LoRa
      - Zigbee
      - Wi-Fi
      - NB-IoT
    Automotive & Industrial:
      - MQTT
      - Modbus
      - CAN
      - LIN
  arm-cortex-a:
    - Zynq UltraScale+ (Cortex-A53)
    - i.MX 8M Plus (Cortex-A53)
    - STM32MP2 (Cortex-A35)
    - Zynq 7000 (Cortex-A9)
  arm-cortex-m:
    - NUCLEO-F746ZG (Cortex-M7)
    - NUCLEO-F446RE (Cortex-M4)
    - nRF52840 (Cortex-M4)
    - nRF5340 (Cortex-M33)
    - LPCXpresso55S69 (Cortex-M33)
    - STM32MP2 (Cortex-M33)
  risc-v:
    - RV64IMAC E51
    - RV64GC U54
    - MicroBlaze V
  buildSystems:
    - Make
    - CMake
    - Ninja
    - Meson
    - Bazel
  containerization:
    - Docker
    - Podman
    - Kubernetes
  virtualization:
    - QEMU
    - VirtualBox
    - KVM
    - PANDA
  electronicsSimulation:
    - LTspice
    - PSIM
    - MATLAB
    - Simulink
  pcb:
    - Altium Designer
    - Kicad
  ci/cd:
    - GitLab CI
    - GitHub Actions
    - Jenkins
    - Gitea Actions
  databases:
    - MySQL
    - PostgreSQL
    - MongoDB

# 3. Professional Experiences (Array of Objects)
experiences:
  - role: "Lead Developer & Founder"
    company: "Disquiet CoLab"
    period: "January 2023 - Present"
    description: "Leading the technical development and strategic vision for innovative Embedded Systems projects."
    location: "Braga, Portugal"
  - role: "Embedded System Engineer"
    company: "KCS IT (EFACEC)"
    period: "January 2025 - Present"
    description:
      - "Using Yocto to create a custom Linux distribution for i.MX 8M Plus SoC."
      - "Development of Linux Device Driver to implement Inter-Process Communication between the Linux Kernel, running on Arm Cortex-A53, and FreeRTOS, running on Arm Cortex-M7"
      - "Development of a Linux Device Driver to implement Communication with a memory IC, using SPI protocol"
    location: "Porto, Portugal"
  - role: "Embedded Systems Research Engineer"
    company: "Vortex CoLab"
    period: "June 2023 - June 2024"
    description: 
     - "Used Buildroot and Yocto to create custom Linux distributions for a RISC‑V SoC for Microchip’s Icicle Kit."
     - "Developed a user space application in C and C++ to control a matrix processor, responsible for running Machine Learning algorithms, from all the most popular frameworks, like TensorFlow, PyTorch, and ONNX."
     - "The main focus of the project was to develop an inference application that would be able to run on the matrix processor, and to be able to receive data from multiple sources, like cameras, sensors, and other devices."
     - "The application could run as a standalone application inside a docker container, running inside the RISC‑V SoC, or as a client/server application, where the server would be running on the RISC‑V SoC, and the client would be running on a PC."
     - "The client application was developed in Python, and was responsible for sending the image data to the server, and to receive the artifacts from the server, merging them into a single image, and displaying it to the user."
    location: "Porto, Portugal"
  - role: "Embedded Systems Engineer"
    company: "ispace Inc."
    period: "September 2022 - May 2023"
    description:
      - "This was a position with a lot of responsibilities, ranging from Embedded Software development and FPGA design to Embedded Linux and Kernel drivers development."
      - "As an Embedded Linux Engineer at ispace‑inc, I was responsible for generating firmware for a Xilinx Zynq‑7000 development board. To achieve this, I utilized several key tools and technologies, including Yocto, U‑Boot, and the latest version of the Linux kernel. I also implemented the real‑time patch for the Linux kernel, similar to the one used on NASA’s Perseverance rover."
      - "My responsibilities included developing all kernel drivers to manage USB cameras, IIC sensors, and SPI sensors. This involved designing, developing, and testing the drivers to ensure they were fully functional and met project requirements. Another key focus was the development of the flight software for the project. For this task, I used the C programming language and integrated image processing libraries from Xilinx to be included on the FPGA, ensuring the flight software was fully optimized and met performance specifications."
      - "To manage the development process, I used GitLab to track changes and collaborate with team members. Additionally, I employed CI/CD with GitLab to automate the build and test process, ensuring the software was always up to date and met quality standards."
      - "Overall, my role at ispace‑inc was crucial to the project’s constant change requests. By leveraging my expertise in key tools and technologies and focusing on FPGA development, kernel development, driver development, and flight software development, I contributed to the project’s evaluation phases by ESA, and helped ensure it met the required specifications."
    location: "Luxembourg, Luxembourg"
  - role: "Embedded Systems Engineer and Tester"
    company: "DSR Corporation"
    period: "August 2018 - August 2022"
    description:
      - "This position was a mix between Embedded Software development and Software tester."
      - "During this work placement, I served as an Embedded Software Engineer on the Embedded Systems team, where we were responsible for the certification of a commercial hard real‑time operating system, developed for safety and security‑critical applications."
      - "These applications spanned various fields, including Aerospace and Defense, Automotive and Transportation, Industrial Automation and Medical, Network Infrastructures, and Consumer Electronics."
      - "The core concept of this RTOS was its ability to safely execute applications with different safety levels concurrently on the same platform. This was achieved by hosting one or more applications inside Virtual Machines, each with specific memory, CPU time, and I/O access rights. These applications ranged from simple control loops to complete paravirtualized guest operating systems like Linux. Essentially, this RTOS functioned as a Type 1 Hypervisor."
      - "The project required Continuous Integration development to ensure that all software requirements for the Hypervisor were completely satisfied during runtime testing of the RTOS. This involved correctly configuring the necessary Virtual Machines, Device Drivers, and Communication systems."
      - "My responsibilities included developing and testing the software, ensuring it met the required specifications and standards. I also worked on the development of the software architecture, ensuring it was scalable and maintainable."
      - "The successful development of the certification work packages relied on several key aspects, including C language development, Linux Host development, and the use of tools such as qemu, gcc, gdb, make, and bash. We used Jira for issue reporting and task tracking, and GitLab for version control and code review. A Test Framework was utilized for all certification tests, which included automated tests, unit tests, and hardware‑in‑loop tests."
      - "Additionally, we used SVN for document and planning documentation, and IBM Rational DOORS for requirement creation and traceability. Python and bash were employed for workload automation."
      - "Overall, my role at DSR Corp was crucial to the project’s success. By leveraging my expertise in key tools and technologies and focusing on software development and testing, I contributed to the project’s evaluation phases by the certification authority, and helped ensure it met the required specifications."
    location: "Porto, Portugal"
  - role: "Embedded Systems Engineer"
    company: "Altice Labs"
    period: "January 2018 - August 2018"
    description:
      - "This was a freelancer position."
      - "I was responsible for developing a custom Linux Kernel driver for a PCIe device, that was used by an application responsible with the flow controls of a fiber optic network."
      - "The driver was developed in C and was responsible for the communication between the PCIe device and the user space application."
      - "The Device Driver was for a PCI‑express interface between a Cortex‑A53 processor and the FPGA area present in the development board."
    location: "Aveiro, Portugal"
  - role: "Embedded Systems Engineer"
    company: "CTAG (Renault-Nissan)"
    period: "January 2017 - December 2017"
    description:
      - "The objective was the automation of door handles and ADAS cameras for a Renault‑Nissan electric vehicle."
      - "The project was developed in C and C++ and was responsible for the communication between the door handles and the ADAS cameras with the vehicle’s main computer."
      - "The firmware was using a bare‑metal approach, the microprocessor was a Cortex‑M4, and the HAL used IIC, UART, CAN bus, and LIN protocol."
    location: "Pontevedra, Spain"

# 4. Achievements (Simple List)
achievements:
  - "Successfully launched the Disquiet CoLab official website."
# 5. Hobbies and Interests (Now in Frontmatter)
hobbies:
  - Scuba Diving 🤿
  - Trekking
  - Camping 🏕️
  - Hiking ⛰️
interests:
  - Writing (Technical & Creative) ✍️
  - Analog Photography 📷
  - Vinyl Collection 🎶
---
I'm an Electronics Engineer with focus in Embedded Systems and Power Electronics.

It's rare for me to make a decision without confirming what was already done before, by the engineers that prepared the world we live in at the moment: right now one brain isn't enough for all the complexity expected in cyber-physical systems, so I do research beforehand, whenever there's information.

I've been working with Arm MCUs (STM32 - mostly Cortex-M4 and Cortex-M7, Nordic nRF52840, and the Cortex-M33 with trustzone capabilities from NXP) using either mbed OS (mostly with Keil RTX RTOS profile), the HAL given by the vendors, or the open-source library libopncm3.

I've also used FreeRTOS for personal projects (but I need to improve that experience to focus on Amazon IoT stack). I'm also actively testing the new world that appeared in front of my eyes that is Zephyr. For an engineer that uses Yocto it's amazing to generate development environments seamlessly for both worlds.

I can also say with confidence that I can create custom Linux-based systems for ARM Cortex-A devices using Yocto and buildroot, and that includes AMD Xilinx Zynq SoCs (that's my main development board for personal projects), Atmel chips, and Altera Stratix SoCs.

I'm also venturing in Android custom ROM development using AOSP and, after absorbing the knowledge needed to be fully independent (HAL and kernel), Lineage OS somewhere in the not-so-distant future.

At the moment, I'm focused in the usage of neural networks and openvino framework, inside of Microchip’s Polarfore SoC, that incorporates RISCV64 cores interfaced with the FPGA area, using a custom buildroot sdk that includes modules to access CNN vector processors, that accelerate all the most used CNN networks and framework’s available.

All I can say is that nothing is impossible if I have the time to read the documentation.