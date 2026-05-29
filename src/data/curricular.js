// =============================================================
// Curricular key learning experiences
// Source: annotated-Leadership_20Philosophy_20Statement_20draft_20.pdf
// Edits: added a SECOND competency to most experiences per
// Francesca's feedback (need 21 of 60 competencies total),
// added "what I still need to work on" to each reflection
// =============================================================

export const curricularExperiences = [
  {
    id: "lead100",
    code: "LEAD 100",
    title: "Learning Leadership",
    overview: `This course sets the foundations in leadership theories and frameworks, helping students translate aspects of their academic life into leadership practice. It was my first formal exposure to leadership as a body of knowledge with concepts, not just instincts.`,
    competencies: [
      {
        name: "Vision",
        story: `Learning about leadership theories helped me understand how to be a structured leader. I chose vision because LEAD 100 expanded my understanding of leadership and how I can apply and identify it in different aspects of my life. This course created my vision for leadership. Before taking it, I understood fundamentally what leadership was, but I was ignorant of the actual functions and concepts at play. Learning how these ideas can be applied helped me start noticing moments of leadership happening in my everyday life.`,
        growth: `Cognition. I went from a vague sense of leadership to being able to name what I was looking at.`,
        learned: `That a vision doesn't have to be grand. Mine is small and ordinary, but it gives me a frame I can actually use.`,
        workOn: `I want to make my vision more specific. Right now it's mostly a lens for noticing. I want it to also become a roadmap I can hand to other people.`,
      },
      {
        name: "Analysis",
        story: `LEAD 100 was structured around taking real situations and breaking them down into their parts: where the power was, who was being followed, what the implicit dichotomy was. I demonstrated analysis when I built my personal leadership model, which required me to take two different leadership theories and reconcile them into one combined framework. That meant identifying which parts of each theory contradicted the other and deciding which to keep.`,
        growth: `Proficiency. I had analyzed things before, but I hadn't analyzed leadership before.`,
        learned: `Analysis is what turns a feeling into something you can defend. Naming the framework you're operating in makes you accountable to it.`,
        workOn: `I tend to analyze in the abstract. I want to get better at doing it in real time, in the middle of a situation, instead of three days afterward.`,
      },
    ],
    artifact: {
      label: "Personal Leadership Model",
      caption: `My personal leadership model from LEAD 100. It combines two leadership theories and the tools of power into one diagram, showing how I think about the relationship between leaders, followers, and the flow of influence.`,
      type: "diagram",
    },
  },

  {
    id: "pubpol403",
    code: "PUBPOL 403",
    title: "Leadership in Action",
    overview: `This course offers students the opportunity to apply and practice leadership techniques in a simulated environment, exploring different approaches to leadership. It was the first course where I felt the word "leadership" become unhooked from the word "authority."`,
    competencies: [
      {
        name: "Personal Contribution",
        story: `PUBPOL 403 taught me how small individual actions can create lasting leadership impact even without authority or power. After the course I began to genuinely change myself. I started trying to do small useful things every day, offering help even when it wasn't asked for. It made me happy not just to be trying to be a better leader, but to see the impact those small actions had on the people around me.`,
        growth: `Motivation. I stopped waiting to be in the right role to act.`,
        learned: `Contribution compounds. The smallest version of the right thing, done consistently, is more powerful than the largest version done once.`,
        workOn: `I want to keep contributing even when I'm tired or frustrated. The version of me that contributes when things are going well is not the version that needs the most work.`,
      },
      {
        name: "Empathy",
        story: `One of the things PUBPOL 403 forced me to do was sit with the perspectives of people I disagreed with in the simulated scenarios. I had to argue their positions in good faith before I could critique them. That practice changed how I show up in real disagreements. I now try to articulate the other person's position back to them before I respond, and I've noticed how much that lowers the temperature of the conversation.`,
        growth: `Significance. I went from treating empathy as a soft skill to treating it as a precondition for being heard.`,
        learned: `Empathy is not the same as agreement. You can fully understand someone's position and still hold yours. Doing the first makes the second more credible.`,
        workOn: `I want to extend empathy to people whose behavior I find genuinely frustrating, not just people whose perspectives I find merely different. That is a much harder muscle.`,
      },
    ],
    artifact: {
      label: "PUBPOL 403 Handout",
      caption: `A handout from PUBPOL 403 with the standards that frame leadership as a set of behaviors anyone can adopt, not a position. This was my first real exposure in college to what leadership actually means.`,
      type: "principles",
    },
  },

  {
    id: "mgmt450",
    code: "MGMT 450",
    title: "Women in Leadership",
    overview: `This course examines the evolution of leadership and the complexities women face in balancing family, career, community, and social contexts. It is the course I'm taking right now, and the one that has most directly challenged the parts of my leadership philosophy that I'd taken for granted.`,
    competencies: [
      {
        name: "Inclusion",
        story: `Women in Leadership completely changed my perspective on equity, not just in leadership but in everyday experiences. The course teaches the injustices and inequalities women face daily, and that's taught me to be more careful and aware as a person and as a leader. The amount of difference in lived experience was startling to me, and it made me realize that inclusion is something I needed to actively work on. More than just being inclusive in different settings, it meant being able to actually navigate a situation while staying aware of my own privilege and ignorance as a man.`,
        growth: `Significance. Inclusion moved from being a value I agreed with to a value I felt responsible for.`,
        learned: `Inclusion is not something you announce. It's something other people decide whether they felt, and you don't get to grade yourself on it.`,
        workOn: `I need to get better at the part that comes after the realization. Knowing I have privilege isn't useful if I don't use it to make space for someone else.`,
      },
      {
        name: "Listening",
        story: `Most of the assigned reading in this course has been women writing about experiences I haven't had. "How Remarkable Women Lead" was the first book in college where my job as the reader was to listen rather than to argue. Class discussions have been similar. I've made a deliberate practice of waiting longer before I speak, especially in this class, and noticing when the impulse to respond is actually an impulse to defend.`,
        growth: `Motivation. I went from listening as a courtesy to listening as a discipline.`,
        learned: `Listening is uncomfortable when the content is about you. That discomfort is the signal you're actually doing it.`,
        workOn: `I still catch myself rehearsing what I'll say next while someone is talking. I want to get better at staying with what they're saying.`,
      },
    ],
    artifact: {
      label: "How Remarkable Women Lead",
      caption: `The book we're required to read in MGMT 450. It has opened and challenged many of my perspectives, showing personal and raw experiences from successful women throughout their careers.`,
      type: "book",
    },
  },

  {
    id: "cse481",
    code: "CSE 481",
    title: "Human-AI Interaction (Capstone)",
    overview: `This capstone explores how humans interact with AI and challenges students to give, receive, and implement feedback in a quarter-long project. My team built Security Net, a Chrome extension that summarizes residential leases and flags predatory clauses for renters.`,
    competencies: [
      {
        name: "Advocating for a Point of View",
        story: `I chose this competency because of the meaningful work I did on Security Net. We built a Chrome extension that helps people find and evaluate leases to identify whether they are predatory. The idea was simple, but the usability testing and research process helped me realize how crucial it is to build with intention. At one point we recognized that people who struggle with English would have a harder time understanding leases because of the legal jargon. We wanted to advocate for them as users, and we built a translation feature into the extension.`,
        growth: `Performance. Advocating moved from something I argued for in meetings to something I actually shipped into the product.`,
        learned: `Advocacy in a technical project shows up in the spec, not in the standup. If the feature doesn't make it into the build, the advocacy didn't happen.`,
        workOn: `I want to advocate earlier in the design process, when the cost of changing course is still low, rather than at the end when it requires rework.`,
      },
      {
        name: "Collaboration",
        story: `The Security Net team had four people with very different relationships to the codebase. I was the strongest technically, which meant I had to be careful not to centralize decisions. I made a deliberate effort to walk teammates through the parts of the system they were less comfortable with, rather than just doing those parts myself because it would be faster. That slowed us down at first and sped us up by the end.`,
        growth: `Proficiency. I had collaborated before, but I hadn't collaborated as someone who had to actively resist becoming a bottleneck.`,
        learned: `The fastest path for me is often the slowest path for the team. Choosing the team's pace over my own is a leadership choice.`,
        workOn: `I want to get better at delegating the work I'm best at, not just the work I'm willing to give up.`,
      },
    ],
    artifact: {
      label: "Security Net Final Demo",
      caption: `A screenshot of Security Net in active use, showing the user which lease clauses are harmful, alarming, or standard. The translation feature is what I'm most proud of from this project.`,
      type: "screenshot",
    },
  },

  {
    id: "cse510",
    code: "CSE 510",
    title: "Advanced Topics in Human-Computer Interaction",
    overview: `This course explores advanced applications of research in HCI, combining readings, active discussion, and reflection. Students use their accumulated experience to work on a quarter-long, self-defined group research project. I'm taking it this quarter with Professor James Fogarty.`,
    competencies: [
      {
        name: "Research",
        story: `I chose research because it is by far the most applicable competency for CSE 510. The course teaches us new perspectives by reading and discussing research from the HCI community. Authors of the research come in and discuss their approach, and hearing that professional guidance has been an amazing experience. We also conduct our own research advised by James Fogarty, and the feedback we receive is extensive and sophisticated. Our project, the Pocket Contrarian, is investigating whether AI-assisted feedback on logical reasoning produces measurable improvement in argumentation skill.`,
        growth: `Cognition. I started the quarter thinking research was about finding answers. I now think it's about designing the conditions under which a question can be answered honestly.`,
        learned: `Good research design front-loads almost all the work. By the time you're collecting data, the hard thinking should already be done.`,
        workOn: `I want to get more comfortable sitting with negative or inconclusive results. The instinct to make the data tell a clean story is strong, and the discipline to let it not is something I'm still building.`,
      },
      {
        name: "Critical Thinking",
        story: `A large part of CSE 510 is reading HCI papers and discussing them critically in class. I had to learn to evaluate a paper not just on whether its conclusion was interesting, but on whether the methodology actually supported the conclusion. Several times this quarter I've changed my mind about a paper between the first read and the discussion, because someone in the room pointed out something I'd accepted without examining.`,
        growth: `Proficiency. I came in able to summarize a paper. I'm leaving able to interrogate one.`,
        learned: `An idea you can't argue against is an idea you don't fully understand. Critical thinking is mostly the practice of arguing against ideas you agree with.`,
        workOn: `I want to push back more in class. I usually do my best critical thinking in writing afterward, and that doesn't help the conversation in the moment.`,
      },
    ],
    artifact: {
      label: "Pocket Contrarian Research Proposal",
      caption: `A screenshot from our initial research proposal, showing the idea, concept, and methodology. The full proposal goes into depth on study methods, applying concepts from the research we've read this quarter.`,
      type: "abstract",
    },
  },

  {
    id: "com220",
    code: "COM 220",
    title: "Introduction to Public Speaking",
    overview: `This course helps students improve their public speaking ability and focuses on the practice of giving and receiving feedback. It planted the habits that made everything I do now in front of a room possible.`,
    competencies: [
      {
        name: "Self-Development",
        story: `Before COM 220, I had a very challenging time with public speaking. The course helped me get comfortable presenting to others. Self-development is the most relevant competency here because the course didn't cure my anxiety. It planted the seeds that grew into good speaking habits and, more importantly, confidence. Raising my hand and saying something used to be scary because talking to a group about your opinion makes you vulnerable, but COM 220 slowly helped me become someone who could speak my mind. That foundation showed up later when I pitched CareLens to a room of T-Mobile executives at DubHacks and we won Best Tech in the T-Mobile track.`,
        growth: `Efficacy. I now trust that I can speak when it matters.`,
        learned: `Confidence isn't the absence of fear. It's the willingness to speak anyway, often enough that the fear loses authority.`,
        workOn: `I want to get better at speaking unprepared. I'm comfortable now when I've rehearsed. I'm still uncomfortable when I haven't.`,
      },
    ],
    artifact: {
      label: "DubHacks 2025 Interview",
      caption: `A photo from DubHacks 2025 where I was interviewed after winning Best Tech in the T-Mobile track. The win came from pitching my product to a room of T-Mobile executives by myself, which would have been unthinkable to me before COM 220.`,
      type: "video",
    },
  },
];
