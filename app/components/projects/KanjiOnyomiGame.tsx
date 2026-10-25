import { Reveal } from "../Reveal";
import { ImageDisplay } from "../ImageDisplay";
import { VideoViewer } from "../VideoViewer";
import { JavaTerminal } from "../terminals/JavaTerminal";
import { asset } from "../../lib/site";

const mediaRoot = "/projects/Kanji Onyomi Game";

function KanjiFigure({
  name,
  file,
  caption,
}: {
  name: string;
  file: string;
  caption?: string;
}) {
  return (
    <figure className="kanji-figure">
      <ImageDisplay
        src={asset(`${mediaRoot}/${file}`)}
        alt={name}
        caption={caption}
      />
    </figure>
  );
}

export function KanjiOnyomiGame() {
  return (
    <>
      <Reveal>
        <section className="showcase-section">
          <h2>Japanese Kanji Game</h2>

          <p>
            I familiarized myself with Maven to produce a game for
            studying Japanese, quizzing the kanji characters’
            onyomi readings to expand my vocabulary.
          </p>

          <p>
            For those unfamiliar, Japanese has three writing scripts:
            hiragana (ひらがな), katakana (カタカナ), and kanji (漢字).
            Memorizing thousands of characters one by one is not as
            essential as acquiring them in popular written media;
            however, oftentimes a learner may confuse kanji readings
            due to Japanese’s small collection of sounds.
          </p>

          <p>
            The kanji can be written together to create a word.
            Each kanji may have three types of readings:
            onyomi (音読み) for Chinese-derived words,
            kunyomi (訓読み) for indigenous-derived words,
            and nanori (名のり) for family or personal names.
            My program only quizzes onyomi, which are typical in
            compound, technical, or scientific words; they are
            written in katakana.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="showcase-section">
          <h2>Example</h2>

          <p>
            A single kanji may appear in several words and may be
            read differently depending on the context.
          </p>

          <div className="prose">
            <p><strong>買</strong></p>
            <p>買う “kau”, to buy — <strong>kunyomi</strong></p>
            <p>買い物 “kaimono”, shopping — <strong>kunyomi</strong></p>
            <p>買収 “baishuu”, acquisition (economics) — <strong>onyomi</strong></p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="showcase-section">
          <h2>Linked List Design</h2>

          <p>
            I devised a generic linked list of <code>KanjiNode</code>s
            containing a kanji and its onyomi. Many kanji would have
            two onyomi readings, however some may have up to four.
          </p>

          <JavaTerminal
            source={`/**
 * The definitely definitive singly linked list of kanji sorted by onyomi.
 *
 * A {@code KanjiNode} stores an onyomi and a resizable {@code From1dto2d}
 * array of kanji characters.
 * Onyomi is a type of reading of kanji derived from Chinese pronunciation,
 * and are often used in compound words.
 * Japanese learners will encounter onyomi in カタカナ (katakana).
 */
public class OnyomiList {
    private KanjiNode root = null;

    public OnyomiList() {
        insertKanji('買', 'バイ'); // onyomi: "bai"
    } // OnyomiList

    /* Additional linked list methods */
} // OnyomiList`}
            command="mvn exec:java"
            output={`Game initialized successfully.
Loaded OnyomiList root node.
Example entry inserted: 買 -> バイ`}
          />

          <KanjiFigure
            name="Kanji Linked List UML Diagram"
            file="Kanji Linked List UML Diagram.png"
            caption="UML diagram showing the linked-list structure used to organize kanji by onyomi."
          />
        </section>
      </Reveal>

      <Reveal>
        <section className="showcase-section">
          <h2>Quiz Logic</h2>

          <p>
            The game grabs a random kanji for the learner to try to
            type in a correct answer. Correctly answered kanji are
            placed in a queue until 60 more kanji are answered
            correctly — then they can be randomly selected again.
          </p>

          <p>
            For kanji with multiple readings, if they are answered
            correctly, then the quiz provides all of the kanji’s
            onyomi readings.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="showcase-section">
          <h2>Demonstration</h2>

          <p>
            The following video is a demo of the quiz game.
            正解 (seikai) means “correct”; 不正解 (fuseikai)
            means “incorrect.”
          </p>

          <VideoViewer
            src={asset(`${mediaRoot}/Onyomi Game Showcase.mp4`)}
            title="Japanese Kanji Onyomi Game Showcase"
          />
        </section>
      </Reveal>
    </>
  );
}