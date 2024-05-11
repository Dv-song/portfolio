import React from "react";
import Image from "next/image";
import partifulbanner from "../../../../public/partifulbanner.png";
import flow1 from "../../../../public/Flow 1.png";
import flow2 from "../../../../public/Flow 2.png";
// import flow3 from "../../../../public/Flow 3.jpg";
import ver1Land from "../../../../public/ver1 landing.png";
import ver1prof from "../../../../public/ver2 prof.png";
import ver1host from "../../../../public/ver2 Events_host.png";
import ver2land from "../../../../public/ver2 landing.png";
import ver2pe from "../../../../public/ver2 pe.png";

import basic1 from "../../../../public/basic-hifi.png";
import basic2 from "../../../../public/basic-hifi-1.png";
import basic3 from "../../../../public/basic-hifi-2.png";

import feed1 from "../../../../public/Feed-HiFi/Ver2.png";
import feed2 from "../../../../public/Feed-HiFi/Ver2Past.png";
import feed3 from "../../../../public/Feed-HiFi/Ver2_expandedPast.png";

import map1 from "../../../../public/map-design.png";
import map2 from "../../../../public/map-design-past.png";

import partifulDesignGuide from "../../../../public/partifuldesignguide.png";

const page = () => {
  return (
    <>
      <section
        className="relative flex flex-col flex-grow max-container padding-container"
        id="Hander_banner"
      >
        <a href="/work#work">
          <button className="absolute mt-16 left-20 p-4 flex text-white items-center gap-2 z-10 hover:bg-[#f3f3f3]/[0.5] px-4 py-1 rounded-[500px]">
            <span>←</span> BACK{" "}
          </button>
        </a>
        <Image src={partifulbanner} alt="home background image" />
      </section>

      {/* project intro information section */}
      <section
        id="partiful"
        className="relative flex flex-col flex-grow max-container padding-container py-2 px-20 max-w-[894px] mx-auto"
      >
        <h3 className="text-[48px] font-semibold">Partiful: Past Events</h3>
        <h4 className="text-lg link_gray font-medium -mt-2">
          Optimizing Accessibility and Navigation for Partiful’s Past Events
          Feature.
        </h4>
        <p className="">Timeline: April 5, 2024 - April 25, 2024</p>
        <p className="my-8">
          During this project sprint, we collaborated with designers from
          Partiful to discuss user pain points, develop wireframes, and iterate
          on selected designs in an effort to optimize and address the current
          challenges faced by Partiful users. The structure of the project was
          set up to emulate a common situation faced by industry designers. I
          want to thank Ally and Grace from the Partiful team for providing
          guidance throughout the design sprint.
        </p>

        <hr />

        <div className="flex flex-row">
          {/* Core Team Section */}
          <div className="mt-8 mr-24">
            <h5 className="text-xl font-semibold mb-3 max-w-[157px]">Team</h5>
            <ul className="list-none">
              <li className="flex flex-col">
                {" "}
                <p>Dave Song</p>{" "}
              </li>
              <li className="flex flex-col">
                {" "}
                <p>Ivery Chen</p>{" "}
              </li>
              <li className="flex flex-col">
                {" "}
                <p>Sohum Sanu</p>{" "}
              </li>
              <li className="flex flex-col">
                {" "}
                <p>viviana Wei</p>{" "}
              </li>
            </ul>
          </div>

          {/* Top Skills Section */}
          <div className="mt-8">
            <h5 className="text-xl font-semibold mb-3">Top Skills</h5>
            <ul className="list-none">
              <li>UX Research</li>
              <li>Wire-framing</li>
              <li>Prototyping</li>
              <li>Iterative Design</li>
            </ul>
          </div>
        </div>
        <hr className="my-14" />
        <h5 className="text-xl font-semibold mb-3 max-w-[157px]">
          Requirements
        </h5>
        <p className="mb-4">
          For the design sprint, we completed the following.{" "}
        </p>
        <ol className="list-none">
          <li className="my-2">
            1. Identifying and understanding a brief/problem to work on
          </li>
          <li className="my-2">2. Sketching ideas and divergent ideation</li>
          <li className="my-2">
            3. Participating in a peer critique and revising the prototype based
            on feedback
          </li>
          <li className="my-2">4. Creating or refining a style guide</li>
          <li className="my-2">
            5. Creating a final, clickable, high-fidelity prototype
          </li>
          <li className="my-2">
            6. Presenting your clickable prototype to your client and receiving
            feedback
          </li>
          <li className="my-2">
            7. Revising your prototype based on the last round of client
            feedback
          </li>
        </ol>

        {/* part 1 problem statememt */}
        <h3 className="mt-20 text-[32px]">Part 1: Problem</h3>
        <hr className="mb-10" />
        <p>
          First, our team made sure to clarify the key objectives and goals for
          this project.
        </p>

        <h4 className="text-[24px] my-10">Client</h4>
        <p>
          Our client was{" "}
          <a href="https://partiful.com/events" className="underline">
            Partiful
          </a>
          . <br />
          Partiful is a website and app that allows users to create delightful
          event pages for birthdays, hangouts, and everything in between. Hosts
          can invite friends and friends-of-friends when they don't have a phone
          number or socials. Event pages build hype around the party, allowing
          guests and hosts to interact with each other. The company focuses on
          simplifying the cultivation of real-world friendships.
        </p>

        <h4 className="text-[24px] my-10">Feature Request</h4>
        <p>
          <strong>Problem Statement:</strong> How might we make it easier for
          hosts and guests to navigate to their past events?{" "}
        </p>
        <div className="mt-11">
          <strong>Bullseye Customer Description:</strong> <br />
          <ol className="list-disc ml-6">
            <li>Gen Z + Millennials</li>
            <li>The primary party guest + host in their social groups</li>
            <li>Example event: Greek events, campus club events, birthdays</li>
            <li>
              Hyper-social and always wanting to meet and connect with new
              friends
            </li>
          </ol>
        </div>
        <div className="mt-11">
          <strong>Customer Motivations:</strong> <br />
          <ol className="list-disc ml-6">
            <li>
              Deepening connections with existing and new friends made at recent
              eventss
            </li>
            <li>Curious to learn more about people that they met at events</li>
            <li>Wants to look back at photos or memories from past events</li>
          </ol>
        </div>

        <div className="mt-11">
          <strong>Customer Pain Points:</strong> <br />
          <ol className="list-disc ml-6">
            <li>
              As a host, it is difficult to navigate back to a past event to
              reminisce or utilize helpful Partiful features like Text Blast
            </li>
            <li>
              As a guest, it is difficult to navigate back to a past event to
              reminisce, ask for photos, or view already posted photos
            </li>
            <li>
              People want to ask for photos from the event and hosts don&spos;t
              want this to be a heavy lift
            </li>
            <li>
              It’s difficult to find the people you recently partied with to
              either look them up on another platform or ask friends about them
            </li>
          </ol>
        </div>

        <div className="mt-11">
          <strong>Success Metrics:</strong> <br />
          <ol className="list-disc ml-6">
            <li>More users navigating to past events</li>
            <li>
              More activity (comments, comment replies, photos) on past events
            </li>
            <li>Users connecting with one another from past events</li>
          </ol>
        </div>

        <h4 className="text-[24px] my-10">Questions We Asked & Answers</h4>
        <p>
          We had some questions about how our design should fit into the broader
          goals of Partiful as a service, particularly in terms of promoting
          social interaction between users on the app and offering users the
          ability to upload and view photos taken at an event. Particularly, we
          wanted to know if we should be thinking about the bigger picture and
          designing for more connections between users through our design for
          past events. The founders reiterated to us that their main goal was
          for us to improve the visibility of past events, but emphasized that
          we should explore a wide range of solutions and creative ways to solve
          this problem.
        </p>

        <h4 className="text-[24px] my-10">Refined Project Brief</h4>
        <p>
          The first round of discussion with the founders cleared up a lot of
          questions we had. In particular, the founder’s assertion that it was
          very difficult for the average user to navigate to past events as well
          as the greater goal of improving the app’s learnability was a great
          starting point for our design. From here, we began brainstorming our
          initial sketches (2 for each member) and exploring various ways to
          improve the visibility of past events (both creative and
          straight-forward solutions.)
        </p>
        <h4 className="text-[24px] my-10">Ideation: Sketching</h4>
        <p>
          Based on the user specifications and client priorities, several
          versions of sketches were developed from each team member.
        </p>

        <Image src={flow1} alt="Flow image" className="rounded" />
        <Image src={flow2} alt="Flow image2" className="rounded" />
        {/* <Image src={flow3} alt="Flow image3" className="rounded" /> */}

        {/* part 2: Wireframing */}
        <h3 className="mt-20 text-[32px]">Part 2: Wireframing</h3>
        <hr className="mb-10" />
        <h4 className="text-[24px] my-10">
          About Initial Wireframe Design Decisions
        </h4>
        <p>
          Initially, past events are not seen at first sight. There are five
          filters, Open Invite, Upcoming, Hosting, Attended and Past Events. To
          solve this, we redesigned the events landing page by separating the
          initial 5 buttons into two sections, Upcoming and Past Events. We
          added a search bar at the top to help users easily find any event. For
          the Upcoming section, we removed the add event button as there is
          already an add event button in the nav bar. We designed with in mind
          different scenarios. If a user has 0 upcoming events, the space would
          be filled up by Open Invites, making the page full. If a user has many
          upcoming events, users can still swipe horizontally and after their
          upcoming events they’ll find open invite events.
        </p>
        <br />
        <p>
          Underneath that is a list of mutuals. with fire emojis and a number to
          indicate the number of shared events between the users.
        </p>
        <br />
        <p>
          Upcoming events can be scrolled horizontally, and Past events can be
          scrolled vertically. The two scrolling directions are justified by the
          fact that usually users have fewer upcoming events but many past
          events. Past events cards are displayed and can be filtered by Host,
          Attend, and can be sorted by factors like 1 week, 1 month, 1 years,
          etc. This section is designed for infinite scrolling, we believe that
          this is the best way of using the iphone vertical space and allowing
          users to view past events easily, in an instagram-like way.
        </p>
        {/* Wireframe Display */}
        <section className="flex flex-row justify-between mt-10">
          <div className="max-w-[200px]">
            <Image src={ver1Land} alt="version 1 wireframe" />
            <p className="app_gray text-sm"> Ver1: Events Landing Page</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={ver1prof} alt="version 1 profilepage" />
            <p className="app_gray text-sm"> Ver1: Profile Page</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={ver1host} alt="version 1 host view" />
            <p className="app_gray text-sm"> Ver1: Event Page Host View</p>
          </div>
        </section>
        <section className="flex flex-row mx-auto mt-10">
          <div className="max-w-[200px] mr-[50px]">
            <Image src={ver2land} alt="version 1 landing" />
            <p className="app_gray text-sm"> Ver2: Events Landing Page </p>
          </div>
          <div className="max-w-[200px]">
            <Image src={ver2pe} alt="version 1 profilepage" />
            <p className="app_gray text-sm"> Ver2: Past Events Page</p>
          </div>
        </section>

        {/* part 3: Startup Checkin In */}
        <h3 className="mt-20 text-[32px]">Part 3: Startup Check In</h3>
        <hr className="mb-10" />
        <p>
          We recorded a 5 min presentation of your wireframe using Loom for
          feedback. Here's the{" "}
          <a
            className="underline"
            href="https://www.loom.com/share/a8c180c0e07640bc9c9ade73cc454ff1?sid=b6ff2665-707b-40fe-bbd8-2b31acbf861d"
          >
            link
          </a>{" "}
          to our loom.
        </p>
        <h4 className="text-[24px] my-10"> Critique & Freedback</h4>
        <p>
          Our success metrics are 1. More users navigating to past events, 2.
          More activities, 3. More Users connecting with one another from past
          events. In the current Event page, past events are not visible on the
          first view, making it harder for users to find and spend time on the
          page. Our design displays past events on first sight. Our design
          incorporates functionality that provides users with concrete reasons
          to navigate back to past events, such as the ability to clone past
          events, and ways to make mutuals more meaningful by highlighting the
          number of shared events between users. We created pages for the home
          page as well as the event page. Users can click onto an event and be
          taken to the event page. We designed for both Host view and Guest
          view. For the host view, an edit button is now collapsed on the top
          right corner for intuitive editing. We included a ‘cloning’ button
          after conducting a user interview with a Partiful host, who mentioned
          that their pain point is that it is frustrating to add the same
          invitees from a previous event. An idea arose which is to duplicate an
          existing party template. This also incentivizes users to return to
          past events. We moved Text Blast to next to the Guest list, an
          intuitive place to text invitees.
        </p>

        {/* part 4: Wireframe Updates */}
        <h3 className="mt-20 text-[32px]">Part 4: Wireframe Updates</h3>
        <hr className="mb-10" />
        <h4 className="text-[24px] my-10"> Changes and Rationale</h4>
        <p>
          In our previous wire frames, we included ideas about remaking the
          event page itself, profile page, mutual contacts page. The feedback
          clearly explained that our scope is solely to focus on past events in
          the homepage. Therefore, we had to only work on redesigning homepages
          going forward. We also realized that their main goal with this project
          is to be creative and design unique ideas for displaying past events.
          We wanted to work on discoverability. This means that a user can
          easily see all the actions they can do from the get go, therefore,
          past events should be easily navigable for the user.
        </p>
        <br />
        <p>
          To solve the problems, we redesigned the events landing page by
          separating the initial 5 buttons into two sections, Upcoming and Past
          Events. We added a search bar at the top to help users easily find any
          event. For the Upcoming section, we removed the add event button as
          there is already an add event button in the nav bar. We designed with
          in mind different scenarios.
        </p>

        {/* part 5: Hi-Fi Prototyping */}
        <h3 className="mt-20 text-[32px]">Part 5: Hi-Fi Prototyping</h3>
        <hr className="mb-10" />
        <p>
          Here is the{" "}
          <a
            href="https://www.figma.com/design/SMauVPWF602N5hPJN2X7n6/Partiful%3A-Past-Events?node-id=1-2&t=KZBevtKzWHMp4jaJ-0"
            className="blue_accent underline"
          >
            link
          </a>{" "}
          to our Figma page with our Hi-Fi Prototypes.
        </p>
        <h4 className="text-[24px] my-10"> Explanation of Design Choices</h4>
        <p>
          Our mid check-in with Partiful was to focus only on the main events
          page and think of other ways to display the information. Based on that
          feedback, we came up with three alternatives for the main page.
        </p>

        <br />
        <p>
          The first design is similar to the lo-fi that we presented last week.
          We have upcoming, mutual, and past events as three sections. We moved
          past events to the front page so it’s shown at first sight. In the
          case that there are upcoming events, Upcoming can be scrolled
          horizontally and past events can be scrolled vertically with infinite
          scrolling. The base case is covered so that if there are no upcoming
          events, then this slot will be replaced by an open invite event
          indicated by the dotted container. In the case of there are no
          upcoming events or open invite events, this space will be filled with
          an add event button.
        </p>
        <br />
        <p>
          The second sign is inspired by social media feeds, because we know
          that Partiful intends on becoming more of a social media platform. For
          each host, past events and upcoming, we have notifications. If a user
          uploads an image then a notification would pop up for past events. If
          a party guest RSVPs then a host would see a notification for that
          page. You can scroll down and look at all of the notifications and
          also press show less to collapse them. The rationale behind is that it
          prompts users to revisit a past event to look at updates.
        </p>
        <br />
        <p>
          And then lastly our third design, map, is inspired by snap maps. The
          idea is that when you open the app you will see upcoming events and
          exactly where they are located. Next to each event, location, time and
          attend status are also shown. Similarly, if the user navigates into
          the past events tab, they can also keep track of where they have been.
          We wanted to implement past events like a heat map so users can also
          see where the party super hosts are and where the hottest activities
          are located nearby.
        </p>
        {/* Hifi Display basic */}
        <section className="flex flex-row justify-between mt-10">
          <div className="max-w-[200px]">
            <Image src={basic1} alt="version 1 wireframe" />
            <p className="app_gray text-sm"> Basic Hi-Fi Main Page 1</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={basic2} alt="version 1 profilepage" />
            <p className="app_gray text-sm"> Basic Hi-Fi Main Page 2</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={basic3} alt="version 1 host view" />
            <p className="app_gray text-sm"> Basic Hi-Fi Main Page 3</p>
          </div>
        </section>
        {/* Hifi Display feed */}
        <section className="flex flex-row justify-between mt-10">
          <div className="max-w-[200px]">
            <Image src={feed1} alt="version 1 wireframe" />
            <p className="app_gray text-sm"> Feed Hi-Fi Hosting Page</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={feed2} alt="version 1 profilepage" />
            <p className="app_gray text-sm"> Feed Hi-Fi Past Events</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={feed3} alt="version 1 host view" />
            <p className="app_gray text-sm"> Feed Hi-Fi Past Events expanded</p>
          </div>
        </section>
        {/* Map Hi-Fi Display */}
        <section className="flex flex-row mx-auto mt-10">
          <div className="max-w-[200px] mr-[50px]">
            <Image src={map1} alt="version 1 landing" />
            <p className="app_gray text-sm"> Map Hi-Fi Upcoming</p>
          </div>
          <div className="max-w-[200px]">
            <Image src={map2} alt="version 1 profilepage" />
            <p className="app_gray text-sm"> Map Hi-Fi Past Events</p>
          </div>
        </section>
        <h4 className="text-[24px] my-10">
          {" "}
          Explanation of Style Guide Choices
        </h4>
        <p>
          The team received a style guide from Partiful which included a DropBox
          folder with fonts and Figma mockups of their homepage, settings,
          profile, and event page customization. Partiful designed their style
          guide with their ethos in mind “fun,” “creative” and “exciting” for
          the user. This is demonstrated by their font choices of Syne and TWK
          Lausanne Pan Family which evoke a sense of professionalism coupled
          with elation. Partiful also designed their color scheme around light
          blue, purple, and pink. The light blue and pink are high energy colors
          which drive a sense of enthusiasm when using the app. Purple as a
          tertiary color suggests mystery and a feeling of wonder. The Partiful
          style guide was focused more on the fonts and actual design assets of
          their IOS app. We created a new style guide which highlights the
          fonts, colors, and a few design elements (buttons, filters, and event
          labels). All three versions of the high-fidelity design adhere to the
          WCAG AA accessibility guidelines. To ensure optimal contrast between
          text and backgrounds, we primarily used white and light gray for our
          text colors. We also made use of shadow effects and grouped UI cards
          to optimize page organization. Additionally, following the existing
          design system from Partiful, we incorporated emojis and symbols in
          addition to information to enhance the accessibility and readability
          of each component. Most of the interaction designs followed standard
          mobile interaction gestures, such as horizontal and vertical scrolling
          and pressing on an item card.
        </p>
        <Image
          src={partifulDesignGuide}
          alt="partiful design guide image"
          className="rounded mt-10"
        />
        <p className="app_gray text-sm">
          {" "}
          Style Guide for Partiful Past Events
        </p>

        {/* part 5: Hi-Fi Prototyping */}
        <h3 className="mt-20 text-[32px]">Part 6: Final Feedback</h3>
        <hr className="mb-10" />
        <p>
          <strong>Basic:</strong> The founders thought we handled this version
          well to split the 5 filters into three categories, which makes more
          intuitive sense. They prompted us to consider if we want to expose all
          guest lists from the top level for an upcoming event, as then it would
          eliminate the need for users to click onto an event. It could be cool
          for Right Now events to have all the information displayed, but have
          other upcoming events be smaller cards without all the information
          displayed. They liked having mutuals displayed on the main page, as it
          encourages interactions between mutuals (including sending emojis and
          chatting).
        </p>
        <p className="mt-4">
          <strong>Feed:</strong> The founders view the feed as a separate page
          in addition to the main page, but a little too cluttered as the
          landing page itself. It would be interesting to explore an activities
          feed. They encouraged us to take this concept and play on the
          hierarchy of information. They also prompted us to think about other
          ways to display these notifications - do we need timestamps for each
          card? What if each event could be ‘pinched’ to expand notifications?
          They wanted us to explore other gestures for the iOS app. For example,
          users can tap an event card and underneath there are a bunch of user
          avatars stacked next to each other, which can be clicked on to expand
          to see notifications. They do believe that this feed design would
          incentivise people to click on event cards.
        </p>
        <p className="mt-4">
          <strong>Map:</strong> This proposal was received with enthusiasm, as
          Grace, one of the designers, had previously pitched a similar idea.
          They would be interested in seeing how we can combine past events and
          upcoming events into one map, especially how we would visualize past
          events as a heat map. They really enjoy the current visualization of
          events, as it reminds them of a pulsing animation. Perhaps if an event
          is upcoming it can pulse more than other events.
        </p>

        {/* part: Conclusion */}
        <h3 className="mt-20 text-[32px]">Conclusion</h3>
        <hr className="mb-10" />
        <p>
          In conclusion, this project was a great experience in learning how to
          work with a team towards a final goal. We really enjoyed getting to
          work with Partiful and brainstorming various ideas for their Past
          Events page, especially because many of us were already familiar with
          the app, and getting direct feedback from the founders was a great
          opportunity for us to experience what it may be like working in a real
          world design team. As a team, working through the steps of sketching,
          lo-fi wireframes, hi-fi prototyping, then receiving feedback was
          invaluable to the development of our design skills and ability to work
          with others.
        </p>
      </section>
    </>
  );
};

export default page;
