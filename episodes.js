const episodes = [
  // =====================
  // SEASON 1
  // =====================
  {
    id: 1,
    title: "The Vanishing of Will Byers",
    season: 1,
    episode: 1,
    runtime: "49min",
    image: "seasonone/s1ep1.png",
    description: "The Vanishing of Will Byers sets the story in motion when Will disappears after encountering a mysterious creature near Hawkins Lab. As Joyce and Hopper search desperately, a frightened girl with telekinetic powers escapes the lab and is hunted by government agents. Will’s disappearance sparks a chain of supernatural events that fracture friendships, expose secrets, and quietly transform the ordinary town of Hawkins forever, while fear and uncertainty spread through the community.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 2,
    title: "The Weirdo on Maple Street",
    season: 1,
    episode: 2,
    runtime: "56min",
    image: "seasonone/s1ep2.png",
    description: "The Weirdo on Maple Street follows Mike as he secretly shelters Eleven in his home after she warns that dangerous people are searching for her. Joyce receives disturbing signs suggesting Will may still be alive, while the boys realize Eleven might have seen Will the night he vanished. Meanwhile, Barb disappears at a party at Steve’s house, proving the threat around Hawkins is escalating and no one feels safe anymore.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 3,
    title: "Holly, Jolly",
    season: 1,
    episode: 3,
    runtime: "52min",
    image: "seasonone/s1ep3.png",
    description: "Holly, Jolly shows Joyce communicating directly with Will through Christmas lights as Hopper begins suspecting a government cover-up at Hawkins Lab. Flashbacks reveal Eleven’s traumatic past experiments and the danger she escaped. The episode ends with Will’s body being pulled from the quarry, a devastating moment that shatters hope and leaves his family and friends in profound grief and forces the town to confront a terrifying new reality.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 4,
    title: "The Body",
    season: 1,
    episode: 4,
    runtime: "51min",
    image: "seasonone/s1ep4.png",
    description: "The Body challenges the discovery of Will’s corpse as Joyce refuses to accept that he is dead and Hopper uncovers evidence proving the body is fake. Eleven locates Will’s voice through a radio frequency, reinforcing that he is alive. Hopper’s investigation pushes him closer to exposing Hawkins Lab’s deception and the dangerous secrets it is hiding, before authorities tighten control and suspicion spreads across Hawkins with mounting urgency.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 5,
    title: "The Flea and the Acrobat",
    season: 1,
    episode: 5,
    runtime: "53min",
    image: "seasonone/s1ep5.png",
    description: "The Flea and the Acrobat deepens the mystery as Hopper breaks into Hawkins Lab and discovers a gate to another dimension before being drugged and released. The boys theorize about the Upside Down but fracture when Eleven panics and vanishes. Meanwhile, Nancy accidentally enters the Upside Down while searching for Barb, bringing the danger frighteningly close and setting the stage for a risky confrontation ahead with unknown consequences.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 6,
    title: "The Monster",
    season: 1,
    episode: 6,
    runtime: "47min",
    image: "seasonone/s1ep6.png",
    description: "The Monster follows Nancy after her narrow escape from the Upside Down as she decides to fight back against the creature. Eleven reunites with Mike and Dustin after saving them from bullies using her powers. Hopper and Joyce uncover the truth that Eleven is the product of secret experiments at Hawkins Lab, deepening the stakes and clarifying the threat posed by the lab to everyone involved, including the children.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 7,
    title: "The Bathtub",
    season: 1,
    episode: 7,
    runtime: "42min",
    image: "seasonone/s1ep7.png",
    description: "The Bathtub centers on the group building a makeshift sensory-deprivation tank so Eleven can locate Will. Through the experiment, Eleven confirms Will is alive but trapped in the Upside Down, while Barb is revealed to be dead. Hopper and Joyce head toward Hawkins Lab, determined to break in and attempt a dangerous rescue as time runs out and the risks grow severe for everyone involved on both sides.",
    airDate: "2016-07-15",
    score: 1000
  },
  {
    id: 8,
    title: "The Upside Down",
    season: 1,
    episode: 8,
    runtime: "55min",
    image: "seasonone/s1ep8.png",
    description: "The Upside Down concludes the season as Hopper and Joyce enter the Upside Down and successfully rescue Will. Eleven sacrifices herself to destroy the Demogorgon and save her friends. One month later, Will appears to recover, but a brief vision of the Upside Down reveals that the supernatural threat has not truly ended, hinting at lasting consequences and darker challenges ahead for Hawkins and its residents moving forward.",
    airDate: "2016-07-15",
    score: 1000
  },

  // =====================
  // SEASON 2
  // =====================
  {
    id: 9,
    title: "MADMAX",
    season: 2,
    episode: 1,
    runtime: "48min",
    image: "seasontwo/s2ep1.png",
    description: "MADMAX picks up nearly a year after Will’s return as Hawkins struggles to move forward. Will begins suffering disturbing visions of a massive shadow creature later known as the Mind Flayer, prompting frequent doctor visits with no clear answers. The group meets Max, a skilled new arcade player whose arrival disrupts their dynamic. Bob Newby enters Joyce’s life as her optimistic new boyfriend, while it is revealed that Eleven is living in hiding with Hopper for her protection.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 10,
    title: "Trick or Treat, Freak",
    season: 2,
    episode: 2,
    runtime: "56min",
    image: "seasontwo/s2ep2.png",
    description: "Trick or Treat, Freak follows the group on Halloween night as Will’s visions grow more intense and frighteningly real. Eleven secretly watches Mike from a distance, torn between isolation and her longing to return home. Hopper investigates rotting pumpkin fields around Hawkins and uncovers evidence that a dangerous force is spreading beneath the town. As tensions rise, it becomes clear that Hawkins is once again under threat from the Upside Down.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 11,
    title: "The Pollywog",
    season: 2,
    episode: 3,
    runtime: "51min",
    image: "seasontwo/s2ep3.png",
    description: "The Pollywog reveals that Dustin’s strange pet is rapidly growing and becoming increasingly aggressive, strengthening suspicions of a connection to the Upside Down as the group searches for it after it escapes. Bob encourages Will to confront his fears head-on, believing it will help him overcome his trauma. Meanwhile, Joyce discovers the image of a massive shadow creature—the Mind Flayer—hidden within Will’s drawings. By the end of the episode, Will becomes fully infected by the Mind Flayer.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 12,
    title: "Will the Wise",
    season: 2,
    episode: 4,
    runtime: "46min",
    image: "seasontwo/s2ep4.png",
    description: "Will the Wise shows Will becoming increasingly overtaken by the Mind Flayer, allowing it to see and gather information through him as his condition worsens. Meanwhile, Eleven ventures beyond the cabin and discovers the truth about her mother, learning more about her past and the experiments at Hawkins Lab. By the end of the episode, Hopper uncovers an extensive network of tunnels spreading beneath Hawkins, revealing how deeply the Upside Down has infiltrated the town.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 13,
    title: "Dig Dug",
    season: 2,
    episode: 5,
    runtime: "58min",
    image: "seasontwo/s2ep5.png",
    description: "Dig Dug follows multiple storylines as the danger beneath Hawkins escalates. Dustin struggles with Dart, realizing the creature’s connection to the Upside Down. Eleven visits her mother and learns the truth about Hawkins Lab and the experiments that destroyed her life. Bob deciphers Will’s drawings, revealing a tunnel system beneath town. Joyce, Mike, Will, and Bob rescue Hopper, while scientists burn the tunnels, worsening Will’s condition and raising the stakes.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 14,
    title: "The Spy",
    season: 2,
    episode: 6,
    runtime: "52min",
    image: "seasontwo/s2ep6.png",
    description: "The Spy confirms that Will has become the Mind Flayer’s spy, forcing the group to sedate him in order to limit the creature’s access to their plans. Meanwhile, Steve, Dustin, Lucas, and Max attempt to lure Dart out using food at a makeshift base outside of Hawkins, only to discover that Dart is not alone when multiple Demodogs appear. As the group realizes the scale of the threat, the Demodogs launch a coordinated attack on Hawkins Lab.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 15,
    title: "The Lost Sister",
    season: 2,
    episode: 7,
    runtime: "46min",
    image: "seasontwo/s2ep7.png",
    description: "The Lost Sister follows Eleven as she travels to Chicago and meets Kali, another former Hawkins Lab subject with similar abilities. Through Kali’s group, Eleven confronts her anger, trauma, and desire for revenge while learning to better control her powers. The episode centers on Eleven’s emotional growth and internal conflict, exploring her search for identity and forcing her to choose between vengeance and returning home to protect those she loves.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 16,
    title: "The Mind Flayer",
    season: 2,
    episode: 8,
    runtime: "48min",
    image: "seasontwo/s2ep8.png",
    description: "The Mind Flayer depicts the creature launching a full-scale assault on Hawkins Lab after being severed from Will. Demodogs swarm the facility, trapping survivors inside as chaos erupts. Bob is killed while helping Joyce and Hopper escape, leaving the group devastated. Eleven returns to Hawkins at the height of the crisis and reunites with her friends, shifting the momentum as the battle against the Upside Down reaches its most dangerous point yet.",
    airDate: "2017-10-27",
    score: 1000
  },
  {
    id: 17,
    title: "The Gate",
    season: 2,
    episode: 9,
    runtime: "1hr 2min",
    image: "seasontwo/s2ep9.png",
    description: "The Gate concludes the season as the group carries out a desperate plan to close the Upside Down portal beneath Hawkins Lab. Eleven seals the gate, cutting off the Mind Flayer and stopping the Demodogs. In the aftermath, the town attempts to heal, culminating in the Snow Ball dance. However, a lingering final moment reminds viewers that the Upside Down still exists, and the threat has not completely vanished.",
    airDate: "2017-10-27",
    score: 1000
  },

  // =====================
  // SEASON 3
  // =====================
  {
    id: 18,
    title: "Suzie, Do You Copy?",
    season: 3,
    episode: 1,
    runtime: "51min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep1.png",
    description: "Suzie, Do You Copy? opens the summer in Hawkins as the kids enjoy a brief sense of normalcy while relationships begin to change. Dustin attempts to contact his girlfriend Suzie using a powerful radio antenna, accidentally intercepting a Russian transmission. Meanwhile, Joyce becomes concerned over malfunctioning magnets, and Billy experiences a disturbing encounter that begins altering his behavior.",
    score: 1000
  },
  {
    id: 19,
    title: "The Mall Rats",
    season: 3,
    episode: 2,
    runtime: "50min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep2.png",
    description: "The Mall Rats follows Nancy and Jonathan as they investigate a strange incident involving a malfunctioning elevator and a missing lifeguard, uncovering signs of something unnatural. Dustin enlists Steve and Robin to help decode the Russian transmission he intercepted, leading them to suspect a hidden operation beneath Starcourt Mall. Meanwhile, Billy’s behavior becomes increasingly erratic as the influence of the Upside Down tightens its grip.",
    score: 1000
  },
  {
    id: 20,
    title: "The Case of the Missing Lifeguard",
    season: 3,
    episode: 3,
    runtime: "50min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep3.png",
    description: "The Case of the Missing Lifeguard reveals that Billy has been possessed by a creature connected to the Upside Down after abducting Heather, the missing lifeguard. Eleven secretly uses her powers to spy on Billy and witnesses disturbing visions that confirm the threat is real. The episode establishes that a new version of the Mind Flayer is actively operating in Hawkins.",
    score: 1000
  },
  {
    id: 21,
    title: "The Sauna Test",
    season: 3,
    episode: 4,
    runtime: "53min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep4.png",
    description: "The Sauna Test centers on the group’s attempt to determine whether Billy is possessed by trapping him inside a sauna. Under extreme heat, the creature reacts violently, confirming that Billy is under the Mind Flayer’s control. The episode marks the first direct confrontation with the threat and shows how dangerous it has become.",
    score: 1000
  },
  {
    id: 22,
    title: "The Flayed",
    season: 3,
    episode: 5,
    runtime: "52min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep5.png",
    description: "The Flayed expands the threat as the Mind Flayer tightens control over Hawkins residents. Steve, Robin, Dustin, and Erica infiltrate the Russian base beneath Starcourt Mall, meeting Alexei and uncovering the operation’s purpose. Meanwhile, Eleven confronts Billy and enters his memories, while Nancy and Jonathan are attacked by possessed hospital staff. The separate storylines collide, revealing the scope of the invasion and pushing every character toward a shared, dangerous confrontation.",
    score: 1000
  },
  {
    id: 23,
    title: "E Pluribus Unum",
    season: 3,
    episode: 6,
    runtime: "1hr",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep6.png",
    description: "E Pluribus Unum brings multiple storylines into focus as Steve and Robin are captured and interrogated by the Russians inside the base beneath Starcourt Mall. Meanwhile, Eleven and the rest of the group enter Billy’s mind, where the Mind Flayer speaks directly to Eleven through him, revealing its awareness and growing threat. The episode ends by showing a large group of townspeople being flayed, making clear that the Mind Flayer is building an army.",
    score: 1000
  },
  {
    id: 24,
    title: "The Bite",
    season: 3,
    episode: 7,
    runtime: "55min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep7.png",
    description: "The Bite escalates the danger as Robin, Steve, Dustin, and Erica escape the Russian base and evade capture. Eleven and the group are attacked by the Mind Flayer at Hopper’s cabin, where Eleven is bitten and badly injured. Joyce, Hopper, Murray, and Alexei attend the Fourth of July carnival, but Alexei is killed. The episode ends with a daring rescue at Starcourt Mall, reuniting the groups and setting up the final showdown.",
    score: 1000
  },
  {
    id: 25,
    title: "The Battle of Starcourt",
    season: 3,
    episode: 8,
    runtime: "1hr 18min",
    airDate: "2019-07-04",
    image: "seasonthree/s3ep8.png",
    description: "The Battle of Starcourt brings the season to its climax as Eleven loses her powers and the Mind Flayer attacks Starcourt Mall. As Nancy, Jonathan, Will, Lucas, Mike, Max, and Eleven are targeted, Hopper, Joyce, and Murray infiltrate the Russian base to shut down the gate machine. With help from Suzie, reached through Dustin’s song, the code is obtained. Billy sacrifices himself to save Eleven, Hopper falls, and Joyce leaves Hawkins with Will and Eleven.",
    score: 1000
  },

  // =====================
  // SEASON 4
  // =====================
  {
    id: 26,
    title: "The Hellfire Club",
    season: 4,
    episode: 1,
    runtime: "1hr 16min",
    image: "seasonfour/s4ep1.png",
    description: "The Hellfire Club opens the season with a shocking murder at Hawkins High that signals the return of supernatural danger. Eddie Munson becomes the prime suspect after Chrissy’s death, forcing the group to uncover a new threat lurking behind the killings. Meanwhile, Eleven struggles with bullying and life without her powers, setting the emotional and narrative foundation for the season.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 27,
    title: "Vecna's Curse",
    season: 4,
    episode: 2,
    runtime: "1hr 15min",
    image: "seasonfour/s4ep2.png",
    description: "Vecna's Curse follows the group as they investigate the pattern behind Chrissy’s murder while hiding Eddie from the authorities. Through researching past cases, they begin to suspect a powerful entity connected to Hawkins’ history. The episode establishes the rules of the threat and sets the stage for who might be targeted next.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 28,
    title: "The Monster and the Superhero",
    season: 4,
    episode: 3,
    runtime: "1hr 3min",
    image: "seasonfour/s4ep3.png",
    description: "The Monster and the Superhero marks the moment when Max begins experiencing disturbing visions tied to her grief over Billy’s death, unknowingly drawing Vecna’s attention. As Hawkins turns increasingly hostile toward Eddie, the danger escalates both socially and supernaturally. The episode signals that Vecna is actively choosing his next victim.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 29,
    title: "Dear Billy",
    season: 4,
    episode: 4,
    runtime: "1hr 17min",
    image: "seasonfour/s4ep4.png",
    description: "Dear Billy centers on Max as she becomes Vecna’s next target, forcing her to confront her grief over Billy’s death. With help from her friends, Max uses music and memories to break free from Vecna’s control in a tense, emotional escape, revealing both Vecna’s power and the importance of connection and hope. The episode marks a turning point in the fight against Vecna in Stranger Things.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 30,
    title: "The Nina Project",
    season: 4,
    episode: 5,
    runtime: "1hr 14min",
    image: "seasonfour/s4ep5.png",
    description: "The Nina Project focuses on Eleven as she agrees to undergo an experimental program designed to restore her powers. By reliving suppressed memories from her childhood, Eleven begins to recover her abilities and uncover the truth about her past. The episode explores the psychological cost of power while pushing Eleven closer to rejoining the fight.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 31,
    title: "The Dive",
    season: 4,
    episode: 6,
    runtime: "1hr 13min",
    image: "seasonfour/s4ep6.png",
    description: "The Dive follows the Hawkins group as they investigate Lover’s Lake after suspecting a connection to the recent supernatural killings. Steve volunteers to dive into the lake to confirm the presence of a gate, successfully locating it beneath the water. At the very end of the episode, Steve is unexpectedly pulled into the Upside Down, leaving the rest of the group behind and setting up the rescue attempt that follows.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 32,
    title: "The Massacre at Hawkins Lab",
    season: 4,
    episode: 7,
    runtime: "1hr 38min",
    image: "seasonfour/s4ep7.png",
    description: "The Massacre at Hawkins Lab reveals Vecna’s origin through Eleven’s recovered memories, uncovering how Henry Creel became Subject 001. The episode shows how Hawkins Lab’s experiments and Dr. Brenner’s manipulation transformed Henry into Vecna, reframing the season’s events as the result of a long-buried tragedy. This revelation fundamentally changes the group’s understanding of both Vecna and Eleven’s past.",
    airDate: "2022-05-27",
    score: 1000
  },
  {
    id: 33,
    title: "Papa",
    season: 4,
    episode: 8,
    runtime: "1hr 25min",
    image: "seasonfour/s4ep8.png",
    description: "Papa centers on Eleven as she completes the final stages of her memory training at the Nina Project and fully regains her powers. When the facility comes under attack, chaos erupts as everyone attempts to escape. The episode ends with Eleven choosing to leave Brenner behind as she escapes with her powers fully restored, positioning her to re-enter the conflict against Vecna on her own terms.",
    airDate: "2022-07-01",
    score: 1000
  },
  {
    id: 34,
    title: "The Piggyback",
    season: 4,
    episode: 9,
    runtime: "2hr 30min",
    image: "seasonfour/s4ep9.png",
    description: "The Piggyback is the season-four finale where the characters execute a risky, multi-location plan to defeat Vecna by attacking him simultaneously in the Upside Down, Hawkins, and the real world. Eleven “piggybacks” into Max’s mind to confront Vecna while the others battle monsters and chaos spreads through Hawkins. The plan partially succeeds, but Vecna survives, Max is gravely injured, and the Upside Down begins bleeding into the real world—setting up the final conflict of Stranger Things.",
    airDate: "2022-07-01",
    score: 1000
  },

  // =====================
  // SEASON 5
  // =====================
  {
  id: 35,
  title: "The Crawl",
  season: 5,
  episode: 1,
  runtime: "1hr 8min",
  image: "seasonfive/s5ep1.png",
  description: "The Crawl follows Will as he hides in the Upside Down in 1983, where Vecna infects him through a living tentacle, deepening their psychic connection. Nineteen months after the Rifts incident, Hawkins is quarantined by the military as Dr. Kay searches for Eleven. While the group coordinates secret crawls into the Upside Down, a Demogorgon attacks a convoy, forcing Hopper into hiding and opening a gate inside the Wheeler home.",
  airDate: "2025-11-26",
  score: 1000
  },
  {
    id: 36,
    title: "The Vanishing of Holly Wheeler",
    season: 5,
    episode: 2,
    runtime: "54min",
    image: "seasonfive/s5ep2.png",
    description: "The Vanishing of Holly Wheeler sees a Demogorgon attack the Wheeler house, critically injuring Karen and Ted before abducting Holly into the Upside Down. Eleven follows the creature and reunites with Hopper as they search for her. Will’s visions reveal Holly’s imaginary friend, Mr. Whatsit, is actually Henry Creel. Realizing Will sees events from Henry’s perspective, the group believes they can anticipate Vecna’s next targets.",
    airDate: "2025-11-26",
    score: 1000
  },
  {
    id: 37,
    title: "The Turnbow Trap",
    season: 5,
    episode: 3,
    runtime: "1hr 6min",
    image: "seasonfive/s5ep3.png",
    description: "The Turnbow Trap centers on the group’s plan to use school bully Derek Turnbow as bait to capture a Demogorgon and locate Holly. Hopper and Eleven learn Dr. Kay is holding Henry at a military base, while Murray and Erica help arm the group. The plan collapses when Derek awakens early, and Will senses the Demogorgon approaching. Meanwhile, Holly awakens inside Henry’s childhood home and encounters Max.",
    airDate: "2025-11-26",
    score: 1000
  },
  {
    id: 38,
    title: "Sorcerer",
    season: 5,
    episode: 4,
    runtime: "1hr 23min",
    image: "seasonfive/s5ep4.png",
    description: "Sorcerer reveals that the prisoner held at the military base is Kali, Eleven’s adoptive sister. Max explains to Holly that they are trapped within Henry’s memories, known as Camazotz. As the military detains children believed to be targets, Vecna and multiple Demogorgons attack the base, abducting victims including Derek. Will unlocks latent psychic powers, destroying the creatures and saving his friends as Henry escapes with his vessels.",
    airDate: "2025-11-26",
    score: 1000
  },
  {
    id: 39,
    title: "Shock Jock",
    season: 5,
    episode: 5,
    runtime: "1hr 8min",
    image: "seasonfive/s5ep5.png",
    description: "Shock Jock follows Holly and the abducted children as they awaken inside Camazotz under Henry’s influence. While most believe Henry saved them, Holly and Derek resist. Will reconnects to the hive mind using the radio tower’s power, breaking Henry’s leg and freeing Max before collapsing. Kali reveals Dr. Kay replicated Brenner’s experiments, while Dustin uncovers flawed theories about weakening Vecna, realizing too late that disaster is unfolding.",
    airDate: "2025-12-25",
    score: 1000
  },
  {
    id: 40,
    title: "Escape From Camazotz",
    season: 5,
    episode: 6,
    runtime: "1hr 15min",
    image: "seasonfive/s5ep6.png",
    description: "Escape From Camazotz begins as a detonated sphere causes a military building to melt, trapping Nancy and Jonathan, who reconcile as they face death. Dustin explains the Upside Down is a wormhole to a realm called the Abyss. Henry uses Will to hunt Max, sending Demodogs to the hospital. Eleven frees Will, and with help from Lucas and Karen, Max and Holly escape Camazotz through memories of their strength.",
    airDate: "2025-12-25",
    score: 1000
  },
  {
  id: 41,
  title: "The Bridge",
  season: 5,
  episode: 7,
  runtime: "1hr 6min",
  image: "seasonfive/s5ep7.png",
  description: "The Bridge sees Max awaken safely while Holly remains trapped in the Abyss. Reunited, the group learns Henry plans to merge dimensions using twelve possessed children. Hopper and Steve propose a final assault that will require Eleven and Kali to sacrifice themselves to end the experiments forever. Will comes out to his friends as they prepare for the final confrontation, while Henry tightens his control and initiates the last stage of his plan.",
  airDate: "2025-12-25",
  score: 1000
  },
  {
  id: 42,
  title: "The Rightside Up",
  season: 5,
  episode: 8,
  runtime: "2hr 8min",
  image: "seasonfive/s5ep8.png",
  description: "The Rightside Up serves as the staging ground for the group’s final reunion before they descend into the Abyss to confront Henry. As the barrier between dimensions thins, Eleven and Kali realize that severing the Hive Mind’s connection to the twelve possessed children will require the ultimate sacrifice. With the team united, they launch a high-stakes assault into the void. Together, they must destroy Henry forever before he completes his dark dimensional merger.",
  airDate: "2025-12-31",
  score: 1000
  },
];
