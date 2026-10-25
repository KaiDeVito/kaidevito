
import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";
import { VideoViewer } from "../VideoViewer";
import { BlockMath, InlineMath } from "react-katex";

const imageRoot = "/projects/Robotic Pet";

// Replace this with the YouTube URL for your robotic pet.
// Leave empty until the video is available.
const robotVideoUrl = "";

function RobotFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption: string;
}) {
  return (
    <figure className="robot-figure">
      <ImageDisplay
        src={`${imageRoot}/${file}`}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}

export function RoboticPet() {
  return (
    <>
      {/* ===================================
          ESP32 ROBOTIC PET
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>ESP32 Robotic Pet</h2>

          <p>
            I managed an ESP32 sensors system that senses
            the environment to mimic the behavior of a
            house pet. This robotic toy changes emotional
            data from a light-dependent resistor (LDR),
            infrared and ultrasonic sensors, and a
            homemade touch sensor.
          </p>

          <p>
            While the LDR measures the brightness as a
            standalone sensor, the ultrasonic and infrared
            sensors both interpret distance with increased
            redundancy. In other words, if one sensor stops
            working, the robot can still gather distance
            data of nearby objects within its range.
          </p>

          <RobotFigure
            name="ESP32 Interactive Robotic Pet"
            file="Sensors Robot.png"
            caption="The ESP32-based interactive robotic pet."
          />
        </section>
      </Reveal>

      {/* ===================================
          SENSORS ROBOT BEHAVIOR
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Sensors Robot Behavior</h2>

          <p>
            The robot, also named the iCan2 Interactive
            Pet, is designed to measure short distances
            of 2cm-30cm and brightnesses of
            0lux-~2000lux. It is powered using a 9V
            battery connected to a DC-DC buck converter
            to supply a 5V power rail to the ESP32
            and its compatible sensor modules.
          </p>

          <RobotFigure
            name="Sensors Robot Behavior"
            file="Sensors Robot Behavior.png"
            caption="Diagram illustrating the environmental inputs and behavioral responses of the robotic pet."
          />
        </section>
      </Reveal>

      {/* ===================================
          LIGHT-DEPENDENT RESISTOR
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Light-Dependent Resistor (LDR)</h2>

          <p>
            The LDR decreases resistance with increasing
            brightness, which the program interprets as
            illuminance (with units lux). It is connected
            to a 3.3V voltage divider with an approximately
            10kΩ reference resistor and outputs a value
            within the acceptable voltage range of the
            ADC GPIO (0V-3.3V), which has a 12-bit
            resolution.
          </p>

          <p>
            The program “undoes” the approximated hardware
            signal processing by applying the inverse
            relationships of the sensor calibration and
            voltage-divider transfer functions.
          </p>
        </section>
      </Reveal>

      {/* ===================================
          SIGNAL PROCESSING MOUNTAIN
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Signal Processing Mountain</h2>

          <p>
            The signal is further processed through a
            one-dimensional Kalman filter with a prediction
            stage and a Kalman gain calculation.
            The uncertainty of the updated estimate is
            reduced according to:
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`
                P_k = (1-K_k)P_k^{-}
              `}
            />
          </div>

          <p>
            Where <InlineMath math="P_k" /> is the updated
            estimate uncertainty,{" "}
            <InlineMath math="K_k" /> is the Kalman gain,
            and <InlineMath math="P_k^{-}" /> is the
            predicted uncertainty before incorporating
            the new measurement.
          </p>

          <RobotFigure
            name="Signal Processing Mountain"
            file="Signal Processing Mountain.png"
            caption="Signal processing path from the LDR measurement through calibration, inverse transfer functions, and filtering."
          />
        </section>
      </Reveal>

      {/* ===================================
          DISTANCE SENSORS
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Distance Sensors</h2>

          <h3>Ultrasonic Sensor</h3>

          <p>
            The ultrasonic sensor emits a wave and
            measures the time required for its echo to
            return after reflecting from a target object.
            Distance is calculated using the approximate
            speed of sound at 20°C,
            <InlineMath
              math={String.raw`0.0343\ \mathrm{cm/\mu s}`}
            />:
          </p>

          <div className="toolbench-equation">
            <BlockMath
              math={String.raw`
                d =
                \frac{t \times 0.0343}{2}
                \ \mathrm{cm}
              `}
            />
          </div>

          <p>
            In this equation, <InlineMath math="t" /> is
            the measured round-trip echo duration
            in microseconds. Dividing by two accounts
            for the sound traveling to the object
            and returning to the sensor.
          </p>

          <h3>Infrared Sensor</h3>

          <p>
            The infrared sensor cannot calculate
            precise distances; however, it senses
            objects within approximately one-third
            of the measurement range, or 2cm-10cm,
            depending on the object's material
            properties.
          </p>

          <p>
            Through experimental data, it has been
            found that objects are sensed better in
            ambient light than in the dark, and
            solid-colored objects are detected within
            a particular range. This behavior may
            be applicable in automatic object sorting.
          </p>

          <RobotFigure
            name="Infrared Distance Sensor"
            file="Infrared Sensor.png"
            caption="Infrared sensor detection and experimental observations."
          />
        </section>
      </Reveal>

      {/* ===================================
          CAPACITIVE TOUCH SENSOR
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Capacitive Touch Sensor</h2>

          <p>
            The touch sensor is made from cut pieces
            of aluminum foil and a Ziploc bag, with
            a DuPont wire connected to the conductive
            material. The aluminum foil acts as
            a conductive electrode, while the plastic
            provides electrical insulation.
          </p>

          <p>
            When a person approaches or touches the
            sensor, their body changes the electrode's
            capacitance through capacitive coupling.
            The ESP32 can detect this change through
            its capacitive touch-sensing hardware.
          </p>

          <RobotFigure
            name="Homemade Capacitive Touch Sensor"
            file="Touch Sensor.png"
            caption="Homemade capacitive touch sensor using aluminum foil, a plastic insulating layer, and a DuPont connection."
          />

          <p>
            The ESP32 has dedicated touch-capable GPIO
            pins that convert changes in capacitance
            into raw sensor readings. The program
            interprets these values using a threshold
            to produce a binary result indicating
            whether a touch occurred.
          </p>
        </section>
      </Reveal>

      {/* ===================================
          ROBOT EMOTIONS AND SOFTWARE
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Robot Software and Emotional Behavior</h2>

          <p>
            Together, these sensors gather the data
            required for the go-beyond algorithm to
            calculate the emotional state of the pet.
            The robot responds to changes in brightness,
            distance, and touch, making it the user's
            responsibility to adjust the environment
            to soothe the robot.
          </p>

          <RobotFigure
            name="Robotic Pet Software"
            file="Sensors Robot Software.png"
            caption="Software architecture for processing sensor readings and determining the robot's emotional state."
          />
        </section>
      </Reveal>

      {/* ===================================
          VIDEO DEMONSTRATION
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Tool Bench Demonstration</h2>

          <VideoViewer
            src="https://www.youtube.com/watch?v=YzcO3se_b0A"
            title="Electronics Tool Bench Demonstration"
          />
        </section>
      </Reveal>


    </>
  );
}
