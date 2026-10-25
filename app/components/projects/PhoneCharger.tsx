
import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";
import { BlockMath, InlineMath } from "react-katex";

const imageRoot = "/projects/Phone Charger";

function ChargerFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption: string;
}) {
  return (
    <figure className="charger-figure">
      <ImageDisplay
        src={`${imageRoot}/${file}`}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}

export function PhoneCharger() {
  return (
    <>
      {/* ===================================
          USB-C PHONE CHARGER
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>USB-C Phone Charger</h2>

          <p>
            I worked on a charging brick that transforms
            wall outlet power into a regulated DC output
            intended for mobile devices with USB-C.
            It uses a 10:1 step-down transformer to
            reduce the incoming AC voltage and a
            full-wave rectifier to convert the AC
            waveform into pulsating DC before
            voltage regulation.
          </p>

          <p>
            The design uses a step-down transformer,
            full-wave bridge rectifier, and smoothing
            capacitor for AC-to-DC conversion.
            A voltage regulator provides a lower,
            more stable output voltage, while a
            heat sink helps dissipate excess heat
            produced by the power-conditioning
            circuitry.
          </p>

          <ChargerFigure
            name="Bridge Rectifier with Smoothing Capacitor"
            file="Bridge Rectifier with Smoothing Capacitor.png"
            caption="AC-to-DC conversion using a full-wave bridge rectifier and smoothing capacitor before voltage regulation."
          />
        </section>
      </Reveal>

      {/* ===================================
          ORIGINAL DESIGN
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Original Design and Power Output</h2>

          <p>
            Impedance testing, performed by comparing
            the device against a known resistance,
            suggested an effective resistance of
            approximately 0.5Ω. A 1Ω approximation
            was selected for the initial circuit
            analysis.
          </p>

          <p>
            The original design produced a calculated
            maximum power rating of approximately
            60W when modeled using a 1Ω load.
            This value represents the power
            dissipated by the modeled resistance
            rather than a verified charging-power
            requirement of a mobile device.
          </p>

          <p>
            The relationship between voltage,
            resistance, and power can be represented
            using:
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`
                P = \frac{V^2}{R}
              `}
            />
          </div>

          <p>
            Where <InlineMath math="P" /> is power,{" "}
            <InlineMath math="V" /> is the voltage
            across the load, and{" "}
            <InlineMath math="R" /> is the load
            resistance.
          </p>
        </section>
      </Reveal>

      {/* ===================================
          FINAL DESIGN
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Voltage Regulation and Load Testing</h2>

          <p>
            The final design uses a voltage regulator
            to reduce and stabilize the output voltage,
            thereby limiting the power delivered to
            the modeled resistive load.
          </p>

          <p>
            For the 1Ω load model, the calculated
            power decreased from approximately
            60.9W to 5.76W after incorporating
            the regulator.
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`
                P_{load}
                = \frac{(2.4\ \mathrm{V})^2}
                {1\ \Omega}
                = 5.76\ \mathrm{W}
              `}
            />
          </div>

          <p>
            With approximately constant output
            voltage, increasing the load resistance
            decreases the current and the power
            dissipated by the load. This behavior
            was examined by comparing 1Ω and
            47Ω resistive-load configurations.
          </p>

          <h3>1Ω Load</h3>

          <ChargerFigure
            name="Full-Wave Rectifier with 1 Ohm Load"
            file="Full-Wave Rectifier and 1Ohm.png"
            caption="Circuit simulation with a 1Ω load, representing a relatively high-current condition."
          />

          <h3>47Ω Load</h3>

          <ChargerFigure
            name="Full-Wave Rectifier with 47 Ohm Load"
            file="Full-Wave Rectifier and 47Ohms.png"
            caption="Circuit simulation with a 47Ω load. At the same regulated output voltage, the higher resistance results in lower current and power dissipation."
          />
        </section>
      </Reveal>

      {/* ===================================
          THERMAL MANAGEMENT AND DEMONSTRATION
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Thermal Management and Demonstration</h2>

          <p>
            The final design included a heat sink
            to help prevent the voltage regulator
            and surrounding circuitry from
            overheating during operation.
            This helps protect the circuit
            against excessive temperature rise
            caused by power dissipation.
          </p>

          <p>
            The circuit demonstrated the
            intended AC-to-DC conversion and
            voltage-regulation behavior.
            Additional electrical and safety
            verification would be required
            before treating the prototype
            as a certified USB-C mobile charger.
          </p>

          <ChargerFigure
            name="USB-C Phone Charger Demonstration"
            file="Charger Demo.png"
            caption="Physical demonstration of the phone charger prototype."
          />
        </section>
      </Reveal>
    </>
  );
}
