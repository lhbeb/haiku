export type Product = {
  slug: string;
  label: string;
  name: string;
  spec: string;
  use: string;
  description: string;
  image?: string;
  images?: string[];
  saleType?: 'digital-plan' | 'wholesale-product';
  price?: string;
  architecture?: string;
  deliverables?: string[];
  developmentPath?: { title: string; text: string }[];
  rightsNote?: string;
};

export const products: Product[] = [
  { slug: 'power-beast-rc1000', label: 'Portable power', name: 'Power Beast RC1000', spec: '999Wh · 1000W AC output', use: 'Camping, RV, emergency backup', description: 'A portable power concept for outdoor use, mobile work, and emergency backup applications.', image: '/power-concept.png' },
  {
    slug: 'balcony-solar-generator-2400w',
    saleType: 'wholesale-product',
    label: 'Home energy storage',
    name: 'Balcony Solar Generator 2400W',
    spec: '2400Wh LiFePO4 · 2400W pure sine wave inverter · 8000+ cycles',
    use: 'Balcony solar systems, home backup, off-grid living, emergency power',
    description: 'A complete home energy storage system engineered and manufactured in our Haikou facility. Features automotive-grade LiFePO4 battery rated for 8000+ cycles, built-in 2400W pure sine wave inverter, and triple charging flexibility (solar MPPT 1200W, AC wall outlet, 12-105V car charging). Operates reliably in extreme temperatures from -30°C to 50°C. Expandable to 19.2kWh with additional battery modules. Includes 8-layer protection system, hybrid inverter compatibility (Deye, Goodwe, Solax, SMA), and real-time monitoring via WiFi/Bluetooth app. Available for wholesale orders.',
    image: '/products/balcony-solar-generator-2400w/image-01.jpg',
    images: [
      '/products/balcony-solar-generator-2400w/image-01.jpg',
      '/products/balcony-solar-generator-2400w/image-02.jpg',
      '/products/balcony-solar-generator-2400w/image-03.jpg',
      '/products/balcony-solar-generator-2400w/image-04.jpg',
      '/products/balcony-solar-generator-2400w/image-05.jpg',
      '/products/balcony-solar-generator-2400w/image-06.jpg',
    ],
    architecture: 'LiFePO4 battery chemistry, 2400W pure sine wave inverter, MPPT solar charge controller, triple charging input (solar/AC/DC), 4x 230V AC outlets, multiple USB ports (12W/28W/100W), CAN/RS485 communication, 8-layer safety protection',
    deliverables: [
      'Complete manufactured unit ready for deployment',
      'Technical specifications and user manual',
      'Installation guide for balcony/patio mounting',
      'Hybrid inverter compatibility documentation',
      'Monitoring app setup instructions (WiFi/Bluetooth)',
      'Expansion battery connection guide (up to 7 additional B2400 units)',
      'Safety certification documents (CE, RoHS, IEC62619, VDE4105)',
      '10-year warranty documentation',
    ],
    developmentPath: [
      { title: 'Wholesale inquiry', text: 'Contact our team with volume requirements, shipping destination, and any customization needs (branding, packaging, specifications).' },
      { title: 'Quotation', text: 'Receive detailed pricing based on order quantity, customization scope, and delivery terms. Sample units available for evaluation.' },
      { title: 'Production', text: 'We manufacture to your specifications in our Haikou facility with quality control, safety testing, and on-time delivery to your logistics partner.' },
    ],
    rightsNote: 'This is a manufactured product available for wholesale purchase. Minimum order quantities, lead times, and customization options discussed per inquiry. Product certified to international safety standards. Haikou Yuyoukang Trading Co., Ltd retains design and manufacturing rights.',
  },
  {
    slug: 'ip5306-dual-output-power-bank-pcb-plan',
    label: 'PCB engineering plan',
    name: 'IP5306 Dual-Output Power Bank PCB Plan',
    spec: '12W bidirectional · USB-C input · dual USB-A output',
    use: 'Power banks, portable lighting, compact battery products',
    description: 'A production-minded engineering starter package for developing a compact single-cell power-bank board around the IP5306 or compatible IP5307 power-management architecture. Review the circuit, study the board strategy, adapt it to your enclosure and battery requirements, then bring the developed product back to us for design review and volume-production planning.',
    image: '/ip5306-power-bank-pcb-plan.png',
    price: '$520',
    architecture: 'IP5306 / IP5307-compatible power management, USB-C input, two USB-A outputs, LED charge indication, flashlight output, and charge/discharge protection',
    deliverables: [
      'System overview and functional block diagram',
      'Annotated schematic PDF for the power and protection architecture',
      'Editable schematic and PCB source package',
      'Production Gerber files and drill data',
      'Bill of materials with sourcing notes and component alternatives',
      'PCB assembly drawing and placement reference',
      'Design-review checklist for battery, thermal, port, and enclosure decisions',
      'Manufacturing handoff brief for DFM review, costing, and bulk production',
    ],
    developmentPath: [
      { title: 'Review', text: 'Inspect the architecture, schematic, PCB strategy, BOM, and production package before choosing what to retain.' },
      { title: 'Develop', text: 'Adapt battery capacity, connector placement, indicators, flashlight behavior, enclosure fit, and component sourcing to your product.' },
      { title: 'Produce', text: 'Return the adapted concept to our Haikou team for design review, prototyping, supplier costing, and mass-production planning.' },
    ],
    rightsNote: 'The purchase covers Haikou Yuyoukang Trading Co., Ltd preparation, organization, and commercial engineering support for this adaptation package. Buyers must complete their own electrical, battery-safety, EMC, thermal, regulatory, and production validation. Semiconductor names identify compatible architectures and do not imply manufacturer endorsement or transfer third-party intellectual property.',
  },
  {
    slug: 'ip5328p-usb-c-pd-power-bank-pcb-design-files',
    label: 'USB-C power bank design files',
    name: 'IP5328P USB-C PD Power Bank PCB Design Files & Engineering Documentation',
    spec: 'USB-C Power Delivery · bidirectional charging · IP5328P power management',
    use: 'DIY USB-C power banks, portable battery systems, prototyping, and PCB development',
    description: 'A digital engineering-file package for studying and adapting a compact USB-C power bank built around the IP5328P power-management IC. The design provides a starting point for a portable battery charging system with bidirectional USB-C Power Delivery and support for compatible fast-charging protocols. It is intended for electronics engineers, hardware developers, and DIY battery-project enthusiasts. This is a digital reference package, not a physical power bank or assembled PCB. The original IP5328P design has been marked obsolete by its author; verify component availability, review the design, and validate electrical safety before manufacturing or use. Battery cells, enclosure, and other physical components are not included unless explicitly specified.',
    image: '/ip5328p-usb-c-pd-power-bank-pcb.png',
    price: '$247',
    architecture: 'IP5328P power-management IC, USB-C Power Delivery charging and output, rechargeable battery power management, and support for compatible fast-charging protocols',
    deliverables: [
      'KiCad schematic files',
      'PCB layout and design source files',
      'Gerber files for PCB fabrication',
      'Bill of Materials (BOM)',
      'Manufacturing documentation, where available',
    ],
    rightsNote: 'Digital engineering files only. No power bank, assembled PCB, battery cells, enclosure, or other physical components are included unless explicitly specified. The source design is marked obsolete by its author. Buyers must verify component availability and licensing, then independently review and validate electrical, battery-safety, thermal, and regulatory requirements before manufacturing or use.',
  },
  {
    slug: 'smart-iot-power-bank-pd-edition-pcb-design-files',
    label: 'Smart IoT power bank design files',
    name: 'Smart IoT Power Bank PD Edition PCB Design Files & Engineering Documentation',
    spec: 'Bidirectional USB-C PD · up to 30W · 4S battery configuration',
    use: 'DIY USB-C PD power banks, smart portable power, battery-powered electronics, and PCB prototyping',
    description: 'A digital engineering-file package for developing and studying a smart portable power bank with USB-C Power Delivery. The Smart IoT Power Bank PD Edition uses a bidirectional USB-C PD charging architecture for battery-powered applications, with power delivery support up to 30W and a 4S battery configuration. It is intended for developers, electronics engineers, and makers interested in building or customizing a modern power bank system. This is a digital PCB design and documentation package, not a physical product or assembled circuit board. Battery cells, enclosure, and electronic components are not included. Verify available fabrication outputs, component specifications, battery compatibility, and protection requirements before manufacturing or powering the design.',
    image: '/smart-iot-power-bank-pd-edition-schematic.png',
    price: '$207',
    architecture: 'Bidirectional USB-C Power Delivery up to 30W, 4S battery configuration, and dedicated power-management architecture',
    deliverables: [
      'KiCad schematic files',
      'PCB layout and design source files',
      'PCB fabrication files, where available',
      'Bill of Materials (BOM), where available',
      'Hardware design documentation',
    ],
    rightsNote: 'Digital PCB design and engineering documentation only. No physical product, assembled circuit board, battery cells, enclosure, or electronic components are included. Verify the available fabrication outputs, component specifications, battery compatibility, protection requirements, and applicable licensing before manufacturing or powering the design.',
  },
  {
    slug: 'ip5358-bz-10000mah-power-bank-pcb-design-files',
    label: 'USB-C power bank PCB design files',
    name: 'IP5358-BZ 10,000mAh Power Bank PCB Design Files & Manufacturing Documentation',
    spec: '10,000mAh-class · IP5358-BZ · USB-C output up to 22.5W, as stated by the source project',
    use: 'DIY power banks, USB-C fast-charging development, battery-powered projects, and PCB prototyping',
    description: 'A digital engineering reference package for studying and customizing a compact, 10,000mAh-class power bank built around the IP5358-BZ power-management IC. The PCBWay source project describes USB-C charging and output up to 22.5W, bidirectional USB-C, and a USB-A port. Actual interfaces and supported charging protocols depend on the supplied board implementation. The source project describes the design as open source, but its specific license should be checked before commercial redistribution. The project author describes the shown PCB routing as preliminary and raises high-current and EMI concerns. This is a digital design project, not a physical power bank or assembled PCB. Battery cells, components, enclosure, and accessories are not included unless explicitly specified.',
    image: '/ip5358-bz-10000mah-power-bank-pcb.png',
    price: '$260',
    architecture: 'IP5358-BZ integrated power management, 10,000mAh-class battery configuration, bidirectional USB-C, and source-described USB-C output up to 22.5W; USB-A availability depends on the board implementation',
    deliverables: [
      'PCB design files and layout, as provided by the project',
      'Circuit design documentation, where available',
      'Bill of Materials (BOM), where available',
      'PCB fabrication files, where available',
      'Project reference materials',
    ],
    rightsNote: 'Digital engineering files only. No physical power bank, assembled PCB, battery cells, components, enclosure, or accessories are included unless explicitly specified. Confirm the actual files and their license terms before commercial redistribution. Verify circuit specifications, battery compatibility, protection, thermal performance, and electrical safety. The source project describes the shown PCB routing as preliminary and notes high-current and EMI concerns; do not treat it as production-validated.',
  },
  {
    slug: 'ip5318-multi-port-power-bank-pcb-design-files',
    label: 'Multi-port power bank design files',
    name: 'IP5318 Multi-Port Power Bank PCB Design Files & Engineering Documentation',
    spec: 'IP5318 power management · USB-C · USB-A · Micro-USB',
    use: 'DIY multi-port power banks, portable charging systems, USB power electronics, and PCB prototyping',
    description: 'A digital engineering reference package for studying and customizing a compact, multi-port power bank based on the IP5318 integrated power-management IC. The project covers a battery charging system with USB-C, USB-A, and Micro-USB interfaces, integrated charging and power-output management, and support for compatible fast-charging protocols. It is intended for electronics engineers, hardware developers, and DIY enthusiasts. This is a digital PCB design and documentation package, not a physical power bank or assembled circuit board. Battery cells, electronic components, enclosure, and accessories are not included. Check the source files for exact supported protocols, output ratings, battery configuration, and available manufacturing files before production, and validate protection, thermal performance, and electrical safety before use.',
    image: '/ip5318-multi-port-power-bank-pcb.png',
    price: '$589',
    architecture: 'IP5318-based power management, battery charging and output management, and USB-C, USB-A, and Micro-USB connectivity',
    deliverables: [
      'KiCad schematic files',
      'PCB layout and design source files',
      'Bill of Materials (BOM), where available',
      'PCB fabrication files, where available',
      'Hardware design reference materials',
    ],
    rightsNote: 'Digital PCB design and engineering documentation only. No physical power bank, assembled board, battery cells, electronic components, enclosure, or accessories are included. Confirm the available files and license terms before commercial redistribution. Verify exact charging protocols, output ratings, battery configuration, and protection requirements, then independently validate electrical safety and thermal performance before manufacturing or use.',
  },
  {
    slug: 'usb-c-pd-100w-battery-charger-plan',
    label: 'USB-C power engineering plan',
    name: '100W USB-C PD Battery Charger Module Plan',
    spec: '20V / 5A USB-C PD · 2-4 cell charging · source and sink modes',
    use: 'Power banks, portable power stations, smart speakers, field electronics, and battery-powered equipment',
    description: 'A commercial engineering starter package for a compact 100W USB-C Power Delivery module that manages charging for 2-to-4-cell battery systems. The architecture combines USB-C negotiation, bidirectional power flow, wide-input buck-boost charging, power-path management, and protection without requiring a separate application processor. Buyers can review the complete concept, adapt battery and enclosure requirements, and return the developed design to our Haikou team for prototype and volume-production planning.',
    image: '/usb-c-pd-100w-battery-charger-plan.png',
    price: '$680',
    architecture: 'USB-C Power Delivery controller, 20V / 5A negotiated input, 1-to-4-cell buck-boost charging stage, source/sink role support, I2C controller-to-charger coordination, surge protection, system power-path management, and configurable on-the-go output',
    deliverables: [
      'System requirements brief and functional power-flow diagram',
      'Annotated USB-C PD, charging, protection, and power-path schematic',
      'Editable schematic and PCB design source package',
      'Production Gerber, drill, stack-up, and fabrication notes',
      'Bill of materials with sourcing notes and practical alternatives',
      'Assembly drawing, placement reference, and connector definition',
      'Configuration guide for charging limits, power roles, and battery profiles',
      'Bring-up checklist and electrical validation test matrix',
      'Thermal, battery-safety, EMC, and enclosure integration review notes',
      'DFM handoff brief for prototype costing and bulk production',
    ],
    developmentPath: [
      { title: 'Study the system', text: 'Review the charging architecture, negotiated power modes, protection strategy, PCB package, and component plan before committing to hardware.' },
      { title: 'Adapt the product', text: 'Set the cell count, battery limits, connector arrangement, source/sink behavior, enclosure geometry, and thermal strategy for your application.' },
      { title: 'Validate and produce', text: 'Bring the adapted package back to our Haikou team for engineering review, prototype assembly, compliance planning, supplier costing, and volume production.' },
    ],
    rightsNote: 'This purchase provides an original Haikou Yuyoukang Trading Co., Ltd commercial adaptation and engineering-support package. It does not redistribute third-party reference-design files. Buyers are responsible for final electrical, USB-C compliance, battery-safety, thermal, EMC, regulatory, and production validation. Component families may be substituted during engineering review according to availability and project requirements.',
  },
];
