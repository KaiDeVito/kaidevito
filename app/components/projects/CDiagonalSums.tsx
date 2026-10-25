
import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";
import { CTerminal } from "../terminals/CTerminal";

const imageRoot = "/projects/C Diagonal Sums";

function DiagonalFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption: string;
}) {
  return (
    <figure className="diagonal-figure">
      <ImageDisplay
        src={`${imageRoot}/${file}`}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}

/* ===================================
   PROGRAM EXECUTION DATA
   =================================== */

const command =
  "./diagonalsums.out in2.txt out2.txt 54 2 && echo \\ && cat in2.txt && echo \\ && cat out2.txt";

const programOutput = `Computing the diagonal sums equal to 54 in a 17-by-17 grid using 2 thread(s).
Elapsed time for computing the diagonal sums using 2 thread(s): 0.000085 seconds.
Writing the diagonal sums equal to 54 to the file out2.txt.
Program is complete. Goodbye!`;

const inputGrid = `84588421453683582
84977911161394116
69989231783962592
34834685856752328
12919489422823138
15567383922137825
91851959649467312
67357966964888584
76225552899198751
99836787363736565
42993669638176754
91967229723986375
97857383338871559
19816529493765444
91651658438955754
71697189535666342
74739936678322136`;

const outputGrid = `00000000000000000
00070000000004100
00089200000062000
30004680000750320
02009489002803100
00500383922137000
00050959649460300
60007006964808080
06020552899190700
00800787363736000
02093669608076000
90067229720906300
00807300338070550
09016029093005040
00650058000000704
01600000500000040
00000000000000000`;

/*
 * This is precomputed output displayed by CTerminal.
 * No C code is executed in the browser.
 */
const terminalOutput = `${programOutput}

--- in2.txt (Input Grid) ---
${inputGrid}

--- out2.txt (Output Grid) ---
${outputGrid}`;

export function CDiagonalSums() {
  return (
    <>
      {/* ===================================
          DATA PARALLELISM
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Data Parallelism with POSIX Threads</h2>

          <p>
            I implemented data parallelism using POSIX
            threads to distribute diagonal-sum
            computations across up to three concurrent
            threads. Each thread processes alternating
            grid rows based on its starting index and
            the total thread count, distributing the
            search workload across concurrent workers.
          </p>

          <p>
            The program utilizes the main thread for
            computation in the diagonalSums() function
            and uses pthread_join() to synchronize
            worker completion.
          </p>

          <p>
            To pass multiple parameters to each thread,
            I used a structure containing the required
            computation arguments. Each thread receives
            a pointer to its own parameter structure,
            allowing it to access the shared input and
            output grids while maintaining its own
            thread-specific information.
          </p>

          <p>
            Additional worker threads are created
            using pthread_create(), and their thread
            identifiers are stored in an array.
            This allows the main thread to wait for
            each worker to finish before the completed
            results are written to the output file.
          </p>

          <DiagonalFigure
            name="POSIX Thread Data Parallelism"
            file="Data Parallelism.png"
            caption="Data parallelism distributes grid rows among concurrent threads based on their starting indices and the total thread count."
          />
        </section>
      </Reveal>

      {/* ===================================
          PERFORMANCE BENCHMARKS
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Performance Benchmarks</h2>

          <p>
            I measured the execution time required
            to find all diagonal sums matching a
            specified target value. The benchmarks
            compare different grid dimensions and
            thread counts to evaluate the effect
            of data parallelism on execution time.
          </p>

          <p>
            The following tables show the elapsed
            computation time, measured in seconds,
            for one, two, and three threads.
          </p>

          <h3>Target Diagonal Sum: 10</h3>

          <DiagonalFigure
            name="Execution Times for Diagonal Sum 10"
            file="Diagonal Sum 10 Table.png"
            caption="Execution times for target sum 10 across 5×5, 672×672, and 3567×3567 grids using one, two, or three threads."
          />

          <h3>Target Diagonal Sum: 543</h3>

          <DiagonalFigure
            name="Execution Times for Diagonal Sum 543"
            file="Diagonal Sum 543 Table.png"
            caption="Execution times for target sum 543 across the same grid sizes and thread counts."
          />

          <p>
            The results demonstrate that additional
            threads reduce computation time for the
            larger input grids, particularly when
            the search requires more processing.
            However, the smallest 5×5 grid executes
            faster with a single thread because
            the overhead of creating and synchronizing
            additional threads outweighs the benefit
            of parallel execution.
          </p>
        </section>
      </Reveal>

      {/* ===================================
          PROGRAM EXECUTION
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Program Execution</h2>

          <p>
            The following example searches a 17×17
            grid for diagonal sums equal to 54
            using two threads. The program accepts
            the input filename, output filename,
            target sum, and thread count as
            command-line arguments.
          </p>

          <CTerminal
            
source={`#include "proj4.h"

/* ... */

struct threadParams {
    grid *input;
    grid *diagonalSumsOutput;
    unsigned int gridDimension;
    unsigned int startRow;
    unsigned long s;
    int threadNumber;
};

/* ... */

void *threadDiagonalSums(void *arg) {
    struct threadParams *params = arg;

    grid *input = params->input;
    grid *output = params->diagonalSumsOutput;

    unsigned int i = params->startRow;

    /* ... Diagonal-sum computations ... */

    while (i < params->gridDimension) {
        /* ... Process row i ... */

        // Advance by the total number of threads.
        i += params->threadNumber;
    }

    return NULL;
}

/* ... */

void diagonalSums(grid *input, unsigned long s,
                  grid *output, int t) {

    /* ... Initialize output grid ... */

    pthread_t threads[t - 1];
    struct threadParams params[t];

    // Assign each thread its own parameters.
    for (int i = 0; i < t; i++) {
        params[i].input = input;
        params[i].diagonalSumsOutput = output;
        params[i].gridDimension = input->n;
        params[i].startRow = i;
        params[i].s = s;
        params[i].threadNumber = t;
    }

    // Create worker threads.
    for (int i = 1; i < t; i++) {
        pthread_create(&threads[i - 1], NULL,
                       threadDiagonalSums, &params[i]);
    }

    // Main thread also performs computations.
    threadDiagonalSums(&params[0]);

    // Wait for all worker threads to finish.
    for (int i = 0; i < t - 1; i++) {
        pthread_join(threads[i], NULL);
    }

    /* ... */
}`}

            command={command}
            output={terminalOutput}
          />

          <p>
            The resulting output displays the original
            grid and the values retained after searching
            for diagonal sums equal to 54. Positions
            not retained in the output are represented
            by zeros.
          </p>
        </section>
      </Reveal>
    </>
  );
}
