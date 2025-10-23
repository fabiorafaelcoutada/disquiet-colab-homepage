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
  phone: "+351 937 991 354"
links:
  linkedin: "https://www.linkedin.com/in/fabiorafaelcoutada/" # Use your actual link
  github: "https://github.com/fabiorafaelcoutada"
  gitlab: "https://gitlab.com/fabiorafaelcoutada"

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

  processors:
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
  containerization & virtualization:
      - Docker
      - Podman
      - Kubernetes
      - QEMU
      - VirtualBox
      - KVM
      - PANDA
  buildSystems:
    - Make
    - CMake
    - Ninja
    - Meson
    - Bazel

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
    description:
      - "Helping companies build connected, secure and integrated IoT products, by providing expertise in wireless, embedded and cloud development."
      - "Leading the technical development and strategic vision for innovative Embedded Systems projects."
      - "Conducting comprehensive penetration tests on IoT ecosystems, including hardware, firmware, communication protocols (BLE, Zigbee, MQTT), mobile applications, and cloud APIs."
      - "Employing hardware hacking techniques (JTAG, UART, SPI) to interface with device internals, extract firmware, and identify physical vulnerabilities."
      - "Performing firmware reverse engineering to discover hardcoded credentials, insecure data storage, and exploitable software flaws."
      - "Developing and implementing security solutions for resource-constrained embedded systems to protect against remote exploits and physical tampering."
      - "Designing and testing countermeasures against hardware attacks, including side-channel analysis (SCA) and fault injection (FI)."
      - "Integrating secure boot mechanisms and Trusted Execution Environments to ensure firmware integrity and protect critical hardware and data."
      - "Architecting and securing robust over-the-air (OTA) update mechanisms to deploy patches and mitigate vulnerabilities on fielded devices."
      - "Developing and deploying machine learning models directly on edge devices for on-device inference."
      - "Optimizing complex neural networks using techniques like quantization and pruning to run efficiently on resource-constrained hardware."
      - "Leveraging Edge ML to build low-latency, low-bandwidth, and privacy-preserving solutions for real-time applications like object detection and predictive maintenance."
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
      - "Created custom Linux distributions for a Microchip RISC-V SoC (Icicle Kit) using Buildroot and Yocto."
      - "Developed a C/C++ user-space application to control a matrix processor for running ML algorithms from frameworks like TensorFlow, PyTorch, and ONNX."
      - "Engineered an inference application for the matrix processor, designed to aggregate and process data from multiple sources, including cameras and sensors."
      - "Architected the application to run either as a standalone Docker container on the RISC-V SoC or as a client/server application."
      - "Developed the Python-based client application to send image data to the server, receive processed artifacts, and display the merged results."
    location: "Porto, Portugal"
  - role: "Embedded Systems Engineer"
    company: "ispace Inc."
    period: "September 2022 - May 2023"
    description:
      - "Managed responsibilities across Embedded Software, FPGA design, Embedded Linux, and Kernel driver development."
      - "Generated firmware for Xilinx Zynq-7000 boards using Yocto, U-Boot, and the latest Linux kernel."
      - "Implemented the real-time (PREEMPT_RT) patch for the Linux kernel."
      - "Designed, developed, and tested kernel drivers for interfacing with USB cameras, I2C sensors, and SPI sensors."
      - "Developed flight software in C, integrating Xilinx image processing libraries for FPGA optimization and performance."
      - "Utilized GitLab for version control and implemented CI/CD pipelines to automate build and test processes."
      - "Contributed to successful project evaluation phases by the European Space Agency (ESA) through expertise in FPGA, kernel, and flight software development."
    location: "Luxembourg, Luxembourg"
  - role: "Embedded Systems Engineer and Tester"
    company: "DSR Corporation"
    period: "August 2018 - August 2022"
    description:
      - "Contributed to the certification of a commercial, safety-critical hard real-time operating system (RTOS) / Type 1 Hypervisor for applications in Aerospace, Defense, Automotive, and Medical fields."
      - "Developed and tested embedded software to ensure strict adherence to project specifications, certification standards, and software requirements."
      - "Implemented Continuous Integration (CI) development and runtime testing for the Hypervisor, configuring Virtual Machines (VMs), device drivers, and communication systems."
      - "Authored and executed automated tests, unit tests, and hardware-in-the-loop (HIL) tests using a dedicated Test Framework."
      - "Utilized C, Python, and Bash for software development and workload automation on a Linux host environment."
      - "Managed development lifecycle using GitLab (version control, code review) and Jira (issue/task tracking)."
      - "Maintained requirement traceability and documentation using IBM Rational DOORS and SVN."
      - "Gained hands-on experience with key development tools including QEMU, GCC, GDB, and Make."
    location: "Porto, Portugal"
  - role: "Embedded Systems Engineer"
    company: "Altice Labs"
    period: "January 2018 - August 2018"
    description:
      - "Engineered a custom Linux Kernel driver in C to manage the PCI-express interface between an ARM Cortex-A53 processor and an FPGA."
      - "Enabled high-speed communication between the PCIe device and a user-space application responsible for managing fiber optic network flow control."
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
  - "Successfully led the complete research and development lifecycle of a Radio-Frequency (RF) Jammer."
# 5. Hobbies and Interests (Now in Frontmatter)
hobbies:
  - Scuba Diving
  - Trekking
  - Camping
  - Hiking
interests:
  - Writing (Technical & Creative)
  - Analog Photography
  - Vinyl Collection

# 6. NEW ABOUT ME SECTION
aboutMe: |
  As an Electronics Engineer specializing in Embedded Systems and Power Electronics, I heavily prioritize research, believing that complex modern systems require building upon existing knowledge.

  My experience spans both microcontrollers and high-level embedded Linux. I'm proficient with Arm Cortex-M MCUs (like STM32, Nordic, and NXP) using mbed OS, vendor HALs, and FreeRTOS, and I am currently exploring Zephyr.

  I am also confident in creating custom Linux systems using Yocto and Buildroot for Arm Cortex-A devices, including Xilinx Zynq and Altera SoCs. My interests are expanding into Android (AOSP) development, with a goal of mastering Lineage OS.

  Currently, my focus is on implementing neural networks using OpenVINO on Microchip PolarFire RISC-V SoCs, utilizing their built-in FPGA and CNN accelerators. I operate on the principle that nothing is impossible given the time to read the documentation.

  Nothing is impossible, if I have the time to read the documentation.
---