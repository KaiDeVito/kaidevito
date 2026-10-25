
import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";
import { DocumentCard } from "../DocumentCard";
import { BlockMath, InlineMath } from "react-katex";
import {
  AnnotatedDiagram,
  type DiagramPin,
} from "../AnnotatedDiagram";

const imageRoot = "/projects/Electronics Tool Bench";

function CircuitFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption: string;
}) {
  return (
    <figure className="toolbench-figure">
      <ImageDisplay
        src={`${imageRoot}/${file}`}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}


const toolBenchPins: DiagramPin[] = [
  {
    id: "lcd",
    x: 89,
    y: 10,
    label: "LCD Interface",
    description:
      "Displays measurement results and allows users to navigate between instrument functions.",
  },
  {
    id: "rotary_encoder",
    x: 89,
    y: 23,
    label: "Rotary Encoder",
    description:
      "Provides menu navigation and adjustment of instrument parameters.",
  },
  {
    id: "ohmmeter",
    x: 18,
    y: 65,
    label: "Ohmmeter",
    description:
      "Measures resistor values from 500Ω to 10kΩ.",
  },
  {
    id: "voltmeter",
    x: 33,
    y: 62,
    label: "Voltmeter",
    description:
      "Measures voltages within a range of +/-5V.",
  },
  {
    id: "function_generator",
    x: 57,
    y: 45,
    label: "Function Generator",
    description:
      "Produces square waves and sine waves in 0V-10V.",
  },
  {
    id: "dc_reference",
    x: 51,
    y: 65,
    label: "DC Voltage Reference",
    description:
      "Outputs +/-5V externally or internally with 0.625V increments.",
  },
  {
    id: "frequency_measurement",
    x: 94,
    y: 67,
    label: "Frequency Measurement",
    description:
      "Measures frequencies of pulsating waves from 100Hz to 10kHz.",
  },
  {
    id: "power_supply",
    x: 17,
    y: 92,
    label: "Power Supply",
    description:
      "Converts a 24V DC input to +/-12V, 5V, and 3.3V rails.",
  },
];

export function ElectronicsToolBench() {
  return (
    <>
      {/* ===================================
          ELECTRONICS TOOL BENCH / SAR ADC
          =================================== */}

          <Reveal>
            <section className="showcase-section">
              <h2>Tool Bench Architecture</h2>

              <AnnotatedDiagram
                src="/projects/Electronics Tool Bench/Electronics Tool Bench.png"
                alt="Electronics Tool Bench hardware"
                pins={toolBenchPins}
                caption="Select a blue pin to learn more about the corresponding component."
              />
            </section>
          </Reveal>

          <Reveal>
            <section className="showcase-section">
              <h2>SAR ADC</h2>
              <p>
                I formulated the analog-to-digital conversion
                (ADC) method for quantizing measurements within
                a predetermined bit resolution and demonstrated
                it working by designing an ohmmeter. What I
                chose for the ADC was a successive approximation
                register (SAR) because it is inexpensive in
                hardware and it is suitable for low resolution
                DACs such as the MCP4131, which was required
                for the circuit.
              </p>

              <p>
                The 5-bit SAR ADC is used by the ohmmeter,
                voltmeter, and DC reference to match closely
                to the node being measured against the
                reference voltage.
              </p>

              <p>
                An input analog signal undergoes a sample-and-hold
                (S/H) circuit to hold a constant voltage
                (<InlineMath math="V_{in}" />). Then, it enters
                the LM339 to be compared with a result of the
                DAC (<InlineMath math="V_{DAC}" />).
                With the input voltage connected to the
                non-inverting terminal and the DAC reference
                connected to the inverting terminal, the
                comparator determines the digital output
                in this manner:
              </p>
              <div className="toolbench-equation">
                <BlockMath
                  math={String.raw`
                    \begin{aligned}
                    V_{in} > V_{DAC}
                    &\Rightarrow V_{out}=\mathrm{HIGH}
                    \quad (1;\ \text{keep bit})\\[8pt]
                    V_{in} < V_{DAC}
                    &\Rightarrow V_{out}=\mathrm{LOW}
                    \quad (0;\ \text{delete bit})
                    \end{aligned}
                  `}
                />
              </div>

              <p>
                Because the SAR is implemented in software,
                its purpose is to test a 5-bit step value
                from left to right, starting from the MSB
                (<InlineMath math="2^4" />), keeping the
                added bit only if the comparator outputs HIGH.
                Although the DAC is a 7-bit device, the
                SAR performs a 5-bit approximation using
                DAC-generated reference levels.
                The output of the DAC is then compared again
                with the same input signal until the SAR
                reaches the largest representable reference
                voltage that does not exceed the measured
                voltage.
              </p>

              <CircuitFigure
                name="SAR ADC circuit"
                file="SAR.png"
                caption="SAR ADC circuit."
              />
            </section>
          </Reveal>

      {/* ===================================
          POWER SUPPLY
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Power Supply</h2>

          <p>
            The power supply uses a 24V DC input to
            establish +12V and -12V rails relative to
            a common ground reference. A complementary
            MOSFET arrangement, supported by resistor
            and diode biasing networks, helps establish
            the midpoint between the supply rails.
            Filtering capacitors help stabilize the
            supply voltages and reduce fluctuations.
          </p>

          <p>
            The resulting positive and negative rails
            provide the supply voltages required by
            the operational amplifiers and other analog
            circuitry. A separate voltage-regulation
            stage provides the lower 5V and 3.3V
            supplies used by the digital electronics.
          </p>

          <CircuitFigure
            name="Positive and negative 12 V power supply"
            file="12V Power Supply.png"
            caption="±12 V rail-splitting power supply circuit."
          />
        </section>
      </Reveal>

      {/* ===================================
          DC VOLTAGE REFERENCE
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>DC Voltage Reference</h2>

          <p>
            The tool bench must generate within -5-+5V
            in steps of +-0.625V under high impedance
            and low current draw. However, since the
            digipot that controls the voltage reference
            could only produce 0V-3.3V, it had to be
            amplified by *3 to result in an approximately
            0V-10V range, and shifted by 5V through
            a difference amplifier for the range to
            become approximately -5V-+5V.
          </p>

          <CircuitFigure
            name="DC voltage reference circuit"
            file="DC Reference.png"
            caption="DC voltage reference circuit."
          />

          <p>
            This circuit is the hardware equivalent
            of the transfer function:
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`V_{out}=3V_{in}-5`}
            />
          </div>
        </section>
      </Reveal>

      {/* ===================================
          OHMMETER
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Ohmmeter</h2>

          <p>
            The ohmmeter is constrained between
            resistances 500Ω to 10kΩ with 2% margin
            of error. An unknown resistor would be
            connected to a voltage dividing circuit
            with a reference resistor and a voltage
            supply:
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`
                V_{div}
                =
                V_{supply}
                \frac{R_{unknown}}
                {R_{unknown}+R_{reference}}
              `}
            />
          </div>

          <CircuitFigure
            name="Voltage divider for the ohmmeter"
            file="Voltage Divider.png"
            caption="Voltage divider used to relate the unknown resistance to a measurable voltage."
          />

          <p>
            The divided voltage is buffered to minimize
            loading of the voltage divider by subsequent
            circuitry. Finally, the SAR ADC converts
            this into a 5-bit step value and the
            program calibrates it as a resistance value.
          </p>

          <CircuitFigure
            name="Ohmmeter circuit"
            file="Ohmmeter.png"
            caption="Ohmmeter circuit."
          />
        </section>
      </Reveal>

      {/* ===================================
          VOLTMETER
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Voltmeter</h2>

          <p>
            The voltmeter must measure within -5-+5V
            in steps of +-0.625V under high impedance
            and low current draw.
          </p>

          <p>
            First, the constrained signal is scaled
            between 0V-3.3V through a resistor network
            before it undergoes signal conditioning
            through an operational amplifier.
            This helps isolate the measurement network
            from subsequent circuitry and minimizes
            loading effects. Finally, it is converted
            into a digital step measurement through
            the SAR ADC and is calibrated using a
            conversion table of steps to +-0.625
            voltage values.
          </p>

          <CircuitFigure
            name="Voltmeter circuit"
            file="Voltmeter.png"
            caption="Voltmeter circuit."
          />
        </section>
      </Reveal>

      {/* ===================================
          FUNCTION GENERATOR
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Function Generator</h2>

          <p>
            The function generator produces waves of
            a specified frequency, amplitude, and
            reference voltage using pulse-width
            modulation (PWM) to create square waves
            and sine waves. The frequency is
            constrained to a range of 100Hz-10kHz.
          </p>

          <p>
            The PWM pin can directly output a wave
            at a certain frequency. However, since
            the GPIO can only output 0V-3.3V, the
            signal must be conditioned to up to
            +/-10V peaks.
          </p>

          <p>
            The PWM signal is buffered and amplified
            to the +/-10V range to maintain the
            desired waveform while operating within
            the +/-12V power rails from the supply.
            The result is a square wave that can be
            modified without stopping the tool
            bench program.
          </p>

          <p>
            The sine wave generator converts the
            original 0-3.3V PWM signal using
            additional analog conditioning and
            filtering. A symmetric square wave
            can be represented as a sum of a
            fundamental sine wave and higher-order
            odd harmonics:
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`
                v(t)=
                \frac{4A}{\pi}
                \left[
                \sin(\omega t)
                +\frac{1}{3}\sin(3\omega t)
                +\frac{1}{5}\sin(5\omega t)
                +\cdots
                \right]
              `}
            />
          </div>

          <p>
            Here, <InlineMath math="A" /> represents
            the peak amplitude of a symmetric square
            wave and <InlineMath math="\omega" /> its
            fundamental angular frequency.
          </p>

          <p>
            The higher-order harmonics are attenuated
            through several RC low-pass networks
            that can be placed in successive stages
            for stronger filtering, at the expense
            of additional signal attenuation and
            phase shift. Past this stage, the signal
            is buffered and amplified to produce
            an approximation of a sine wave.
          </p>

          <CircuitFigure
            name="Function generator circuit for square and sine waves"
            file="Function Generator.png"
            caption="Function generator circuit."
          />
        </section>
      </Reveal>

      {/* ===================================
          FREQUENCY MEASUREMENT
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Frequency Measurement</h2>

          <p>
            The frequency measurement tool measures
            the generated wave function. Once the
            analog signal is converted into a digital
            signal using a comparator, the GPIO uses
            edge detection to time the wave period
            to then convert into frequency.
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`f=\frac{1}{T}`}
            />
          </div>
        </section>
      </Reveal>

      {/* ===================================
          TECHNICAL DOCUMENTATION
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>
            Technical Document and User Manual Files
          </h2>

          <div className="toolbench-document-grid">
            <DocumentCard
              title="Technical Documentation"
              description="A detailed analysis of the tool bench's hardware and software specs."
              file="Electronics_Tool_Bench_Technical_Documentation.pdf"
            />

            <DocumentCard
              title="User Manual"
              description="A casual, slapstick-styled look into using the tool bench."
              file="Electronics_Tool_Bench_User_Manual.pdf"
            />
          </div>
        </section>
      </Reveal>
    </>
  );
}
