// =============================================================
// Co-curricular key learning experiences
// Source: annotated-Co-curricular_20key_20learning_20experiences_20draft.pdf
// Edits: added SECOND competencies to most experiences to reach
// the 21 of 60 competencies required, added "what I still need
// to work on" to each reflection
// =============================================================

export const coCurricularExperiences = [
  {
    id: "lead499",
    label: "LEAD 499 Leadership Practice",
    title: "Contract Software Engineer",
    overview: `I work at a stealth startup building AI-powered systems for writing narratives and cinema. I'm a Contract Software Engineer, and during Winter Quarter I used the role as my LEAD 499 leadership practice. I had four SMART goals: leading team meetings, mentoring teammates on tools, building a new workflow to reduce manual overhead, and creating video demos.`,
    competencies: [
      {
        name: "Initiative",
        story: `I demonstrated initiative when I noticed our team was losing time to a process that was repetitive and being done by hand, and I decided to fix it without being asked. I scoped a tool, built and documented it, then led a meeting to walk the team through implementation.`,
        growth: `Motivation. I started going for it instead of waiting for permission to act on things I could see needed attention.`,
        learned: `Initiative is not really about being bold. It's about trusting that your read on a problem is worth acting on.`,
        workOn: `I want to get better at taking initiative on things that aren't fun. Building a tool is exciting. Writing the documentation that lets someone else maintain it is less exciting, and that's where my initiative tends to wane.`,
      },
      {
        name: "Innovation",
        story: `Before building the tool, I spent time understanding the upstream reason the manual process existed in the first place. The obvious fix would have been to automate the existing workflow. What I actually built changed the workflow itself, removing two of the steps entirely instead of speeding them up. That distinction — between automating a process and questioning whether the process should exist — was the innovation.`,
        growth: `Cognition. I learned to look at the problem the workflow was solving, not the workflow itself.`,
        learned: `The biggest gains usually come from removing steps, not optimizing them. Asking why the step exists is often more valuable than asking how to do it faster.`,
        workOn: `I want to apply that same instinct to the work I haven't questioned yet. Most of what I do every day is a process I've inherited, and I haven't audited it the way I audited that one.`,
      },
    ],
    artifact: {
      label: "LEAD 499 Learning Agreement (Goal 2)",
      caption: `A screenshot of my LEAD 499 Learning Agreement, showing the second SMART goal. This document captured the goals that structured my Winter Quarter leadership practice and helped me work on leadership in a professional environment.`,
      type: "document",
    },
  },

  {
    id: "tedx",
    label: "RSO",
    title: "TEDxUofW Web Development Team",
    overview: `TEDxUofW is UW's student-run TEDx chapter, which produces an annual speaker event. I joined the web development team in October, attended weekly meetings, helped build the main page of the chapter's website, and volunteered on-site at the end-of-year speaker event.`,
    competencies: [
      {
        name: "Verbal Communication",
        story: `Most of my role was technical, but every weekly meeting required me to talk through what I'd built and what I needed from the design team or other members. At one point I realized that a Figma element being used was a poor decision and was not going to work technically. I raised the concern with the team's director and explained the situation. That started a civil conversation between the two teams and helped us overcome the issue without making the design team feel overruled.`,
        growth: `Proficiency. I learned to deliver technical pushback as a conversation, not an announcement.`,
        learned: `Lead with the constraint, not the conclusion. It resolves the tension without invalidating the other person.`,
        workOn: `I want to keep practicing this with people I don't already have a good relationship with. It's easier to communicate carefully with someone who already trusts you. The real test is the first conversation.`,
      },
      {
        name: "Influencing Others",
        story: `When I flagged the Figma element, I had no formal authority to override the design team. The only thing I could do was influence. I made a point of bringing the problem to the director with a proposed alternative already in hand, rather than just a complaint, and I framed it around the shared goal of shipping a page that worked rather than around who was right. The design team changed course, but it was their decision, not my directive. That distinction is the whole point of influence.`,
        growth: `Proficiency. I learned to move people without leverage.`,
        learned: `Influence without authority depends entirely on whether people trust your intent. The Figma conversation only worked because I'd already shown up for ten weeks of meetings and built that trust first.`,
        workOn: `I want to get better at influencing in the moment, in a live meeting, rather than only in prepared one-on-one conversations where I've had time to plan my framing.`,
      },
    ],
    artifact: {
      label: "TEDxUofW Main Page",
      caption: `The TEDxUofW main page I developed. This is the page most visitors see, and it's the part I contributed most to. It's also a reminder that consistency was the most valuable thing I brought to the team.`,
      type: "website",
    },
  },

  {
    id: "church",
    label: "Volunteer Work",
    title: "Home Church Kitchen and Youth Service",
    overview: `Each year during Catholic holidays, I go back to my home church to volunteer. The work ranges from kitchen duty and dishwashing to setup and breakdown, organizing youth events, and teaching younger kids how to serve as altar servers.`,
    competencies: [
      {
        name: "Social Responsibility",
        story: `I picked social responsibility because the experience at first felt like a chore. Then I realized that a community does not run by itself. Someone has to wash the dishes, set up the tables, and teach the next generation. One Easter, the kitchen was completely overwhelmed, and I stayed after to help wash dishes for what felt like three hours while everyone else was going home. The grandmas thanked me, but nobody else was going to. That kind of felt like the point. I developed a real sense of significance there. The people doing the invisible work are the ones holding communities together.`,
        growth: `Significance. I came in seeing the work as something I had to do. I left seeing it as something I get to do.`,
        learned: `Responsibility scales with the smallness of the act, not the largeness of it. The dishes don't wash themselves.`,
        workOn: `I want to be the one teaching the younger volunteers without being asked to. Right now I mostly show up when the older volunteers ask me to. I'd like to be the one organizing the schedule next year.`,
      },
      {
        name: "Mentoring",
        story: `Part of my role each year has been teaching the younger kids how to serve as altar servers — when to ring the bells, where to stand, how to hold the candle without burning anyone. That meant being patient with mistakes I made when I was their age. I tried to teach them the way I would have wanted to be taught: corrections in private, encouragement in public, and never making them feel stupid for not knowing something they had no way of knowing.`,
        growth: `Performance. I went from being able to do the task to being able to transfer it.`,
        learned: `You don't really know a thing until you have to teach it to someone who doesn't already know it. Their questions are usually better than your understanding.`,
        workOn: `I want to keep in touch with the kids I taught. Mentoring is not really a one-time event, and I've been treating it like one.`,
      },
    ],
    artifact: {
      label: "Home Church",
      caption: `A picture of the church I grew up in and return to every year to volunteer. Showing up consistently and giving back to the community that raised me is what makes this experience meaningful.`,
      type: "photo",
    },
  },

  {
    id: "bosnia",
    label: "Travel",
    title: "Bosnia Mission Trip (Medjugorje, World Youth Festival)",
    overview: `The summer of my freshman year of college, I traveled to Medjugorje, Bosnia with a church group to attend the World Youth Festival — a gathering of Catholics for prayer, reflection, and praying for those in need.`,
    competencies: [
      {
        name: "Personal Values",
        story: `This trip was a pivotal turning point in my relationship with religion. I realized I don't identify with the Catholic Church the way I was raised to. It felt like the first time I had really separated what I believed from what I was born into. At one of the larger prayer services, I noticed that many of the people around me were praying not for the benefit of others but for themselves, and that bled into how they treated people the rest of the day. They were selfish and rude. Instead of forcing myself to sit with that dissonance, I started understanding my values as something I had to actively examine rather than just inherit.`,
        growth: `Cognition. I went from holding values to interrogating them.`,
        learned: `Inherited values feel like beliefs but behave like reflexes. You only find out which is which by putting them in a situation where they cost you something.`,
        workOn: `I want to do this same examination with values I haven't questioned yet. It's easy to interrogate the values you've grown skeptical of. The harder work is interrogating the ones you're still confident in.`,
      },
    ],
    artifact: {
      label: "World Youth Festival",
      caption: `A photo from the World Youth Festival. The trip was a religious pilgrimage, but it was also where I first felt able to separate what I had been taught to believe from what I actually felt.`,
      type: "photo",
    },
  },

  {
    id: "volleyball",
    label: "Sports",
    title: "UW Intramural Volleyball",
    overview: `I played UW intramural volleyball in the competitive men's league every year of college except my second year. First year, we lost in the first round. Third year, we made the finals and lost. This year, my fourth and final year, my team won the championship.`,
    competencies: [
      {
        name: "Positive Attitude",
        story: `My positive attitude was really tested in my third year after we lost in the finals. It would have been easy to come back cynical, expecting to lose again, but instead I came back wanting to play my role better and trust the rest of the team more. In one match this year we were down points, and I kept jumping for every ball, trying to be a constant distraction at the net. Even when I was off the court, I kept cheering teammates on. The dimension I developed most was performance. I got better at choosing my attitude instead of just having one.`,
        growth: `Performance. Attitude became a choice I made on purpose rather than a mood I happened to be in.`,
        learned: `On a team, your attitude is a teammate's resource. You're either adding to the room or taking from it.`,
        workOn: `I want to keep that attitude in the lower-stakes moments. It's easy to be relentlessly positive in the finals. It's harder during a Tuesday practice when you're tired.`,
      },
      {
        name: "Group Development",
        story: `My third-year team was talented but inconsistent. After losing in the finals, a few of us had honest conversations about what had broken down and what we wanted to try differently. I wasn't the captain, but I helped push the team toward a more deliberate practice routine and clearer role assignments. By this year, those conversations had compounded into a team that knew what each person was supposed to do and trusted them to do it. Winning the championship felt less like a surprise and more like the natural conclusion of a group that had finally figured itself out.`,
        growth: `Cognition. I went from seeing the team as a collection of players to seeing it as a system.`,
        learned: `Group development happens between games, not during them. The conversation in the parking lot after the loss matters more than the conversation in the huddle during the next game.`,
        workOn: `I want to be more proactive about initiating those conversations earlier in the season, not just after a loss. Group development shouldn't be reactive.`,
      },
    ],
    artifact: {
      label: "Intramural Champions",
      caption: `A team photo taken after we won the intramural championship this year. It represents four years of trying, playing my role well, and practicing.`,
      type: "photo",
    },
  },

  {
    id: "family",
    label: "Family Role",
    title: "Son and Helper to My Mom",
    overview: `I'm an only child raised by a single mom who runs her own restaurant. I worked there during summers and holidays, went grocery shopping with her every weekend so she didn't have to carry heavy ingredients alone, and helped unload during the week. Even now, every time I'm home, I still help her with the restaurant whenever she needs it.`,
    competencies: [
      {
        name: "Productive Relationships",
        story: `The relationship I have with my mom is built on me showing up, even when I didn't want to. Helping at the restaurant, going grocery shopping every weekend, and unloading during the week were never optional to me, because supporting my mom is part of who I am as her son. That sense of obligation isn't something we sat down and worked out. It was just the nature of how we operated together. Dedication and discipline are part of how the relationship has been maintained over such a long period of time.`,
        growth: `Significance. Showing up consistently is what made the relationship what it is.`,
        learned: `A productive relationship isn't built on the big gestures. It's built on the unglamorous, repeated act of being there.`,
        workOn: `I want to get better at telling her how I feel, not just showing up. The showing up is automatic now. The verbal part is still hard.`,
      },
      {
        name: "Follow-Through",
        story: `Helping at the restaurant taught me follow-through in a way no school assignment could. If I said I'd be there to unload at six, the truck was there at six whether I felt like it or not. There's no extension, no late submission. Over years, that turned into a habit. When I commit to something now — at work, in a club, with friends — I treat the commitment as already done. It feels strange to me when other people don't operate that way.`,
        growth: `Performance. Follow-through became identity-level rather than effort-level.`,
        learned: `The cost of breaking a small commitment is much higher than it looks. It doesn't break the small thing. It breaks the trust that lets you commit to bigger things later.`,
        workOn: `I want to get better at saying no upfront when I know I can't follow through, instead of saying yes and pushing myself to make it work. Strong follow-through can mask a weakness in honest scoping.`,
      },
    ],
    artifact: {
      label: "Young's Cafe",
      caption: `My mom's newest restaurant. She landed the contract for the location and designed the menu herself. She worked incredibly hard to get to this point, and it's somewhere I can go and help out whenever she needs.`,
      type: "photo",
    },
  },
];
