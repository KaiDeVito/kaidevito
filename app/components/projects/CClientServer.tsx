
import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";
import { CTerminal } from "../terminals/CTerminal";

const imageRoot = "/projects/C Client Server";

function ClientServerFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption: string;
}) {
  return (
    <figure className="client-server-figure">
      <ImageDisplay
        src={`${imageRoot}/${file}`}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}

const addressSource = `#include <arpa/inet.h>
#include <netinet/in.h>

/* ... */

struct sockaddr_in serverAddress = {
    .sin_family = AF_INET,
    .sin_port = htons(serverPort),
    .sin_addr.s_addr = serverIP
};

/* ... */`;

export function CClientServer() {
  return (
    <>
      {/* ===================================
          C SERVER CLIENT
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>C Server Client</h2>

          <p>
            I used C's socket API to implement TCP
            communication for a client to be tested
            against an instructor-provided server
            program. This capability allows the client
            to establish a connection using the target's
            IPv4 address and port number to send a
            message as a string.
          </p>

          <p>
            The client and server programs follow
            complementary sequences of system calls
            to establish a TCP connection and
            exchange data.
          </p>
        </section>
      </Reveal>

      {/* ===================================
          TCP COMMUNICATION
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>TCP Communication Process</h2>

          <p>
            First, both programs create their own
            socket descriptors by calling{" "}
            <code>socket()</code> to create
            communication endpoints.
          </p>

          <p>
            From the server's end, after declaring
            its IPv4 address and port number, it
            associates them with its socket using{" "}
            <code>bind()</code> and waits for
            incoming connection requests using{" "}
            <code>listen()</code>.
          </p>

          <p>
            The rest of the process is relatively
            simple: when the client calls{" "}
            <code>connect()</code> to request a
            connection, the server can call{" "}
            <code>accept()</code> to accept a
            pending connection.
          </p>

          <p>
            With an established connection, the
            client can use <code>send()</code> to
            transmit data through the TCP byte
            stream, while the server uses{" "}
            <code>recv()</code> to read the
            transmitted bytes.
          </p>

          <p>
            Both programs can close their respective
            socket descriptors using{" "}
            <code>close()</code> when communication
            is complete.
          </p>

          <ClientServerFigure
            name="Client Server Communication Flow"
            file="Client Server Communication Flow.png"
            caption="TCP connection establishment and data exchange using socket(), bind(), listen(), connect(), accept(), send(), recv(), and close()."
          />
        </section>
      </Reveal>

      {/* ===================================
          IPV4 ADDRESS STRUCTURE
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>IPv4 Server Address Configuration</h2>

          <p>
            The client structures the server address
            under IPv4 using the{" "}
            <code>sockaddr_in</code> structure:
          </p>

          <CTerminal
            source={addressSource}
            command="gcc client.c -o client"
            output="Example source excerpt: IPv4 server address configuration."
          />

          <p>
            In this example, <code>htons()</code>{" "}
            converts the port number into network
            byte order, while <code>serverIP</code>{" "}
            represents the server's IPv4 address
            converted into its binary representation
            using <code>inet_addr()</code>.
          </p>

          <p>
            The <code>sin_family</code> field
            specifies the IPv4 address family,{" "}
            <code>sin_port</code> stores the
            destination port number, and{" "}
            <code>sin_addr.s_addr</code> contains
            the destination IPv4 address.
          </p>
        </section>
      </Reveal>

      {/* ===================================
          ASSIGNMENT CONSTRAINTS
          =================================== */}

      <Reveal>
        <section className="showcase-section">
          <h2>Input Validation and Constraints</h2>

          <p>
            With additional assignment constraints
            such as the message size and the supplied
            port number (60000 to 65535), the client
            ensures that application-level input
            is translated into the network addressing
            information required by the operating
            system.
          </p>
        </section>
      </Reveal>
    </>
  );
}
