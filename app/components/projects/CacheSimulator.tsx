
import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";

const imageRoot = "/projects/Cache Simulator";

function CacheFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption: string;
}) {
  return (
    <figure className="cache-figure">
      <ImageDisplay
        src={`${imageRoot}/${file}`}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}

export function CacheSimulator() {
  return (
    <>
      {/* ===================================
          CACHE SIMULATOR
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Cache Simulator</h2>

          <p>
            I am conceptualizing a C cache simulator
            and an LRU (least recently used) replacement
            policy for modeling cache behavior while
            processing address traces containing millions
            of load and store instructions.
          </p>

          <p>
            The goal is to understand how caches behave
            when the requested memory block is not
            present in the cache, requiring data to
            be retrieved from a lower level of the
            memory hierarchy.
          </p>

          <CacheFigure
            name="Cache Memory Architecture and Access Flow"
            file="Cache Flowchart.png"
            caption="Conceptual cache-memory architecture illustrating cache hits, cache misses, memory access, and block replacement using an LRU policy."
          />
        </section>
      </Reveal>

      {/* ===================================
          PERFORMANCE METRICS
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Performance Metrics</h2>

          <p>
            Because caches exist to improve CPU
            performance by reducing the time required
            to access frequently used instructions
            and data, the simulator will collect
            performance metrics from the processed
            memory-access traces.
          </p>

          <p>
            These metrics will include cycles per
            instruction (CPI), load and store hits
            and misses, memory accesses, and average
            memory access time (AMAT).
          </p>
        </section>
      </Reveal>

      {/* ===================================
          CACHE CONFIGURATION
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Cache Configuration and Design</h2>

          <p>
            The simulator will support experiments
            with different cache capacities and
            block sizes to investigate how cache
            organization affects memory-access
            performance.
          </p>

          <p>
            It is also intended to support multiple
            cache designs, including direct-mapped,
            set-associative, fully associative,
            and multilevel cache configurations.
          </p>

          <p>
            The LRU replacement policy will be used
            in associative configurations to select
            which cache block should be replaced
            when a cache miss requires a new block
            and the corresponding set is full.
          </p>
        </section>
      </Reveal>
    </>
  );
}
