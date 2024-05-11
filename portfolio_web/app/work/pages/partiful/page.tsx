import React from "react";
import Image from "next/image";
import partifulbanner from "../../../../public/partifulbanner.png";
import flow1 from "../../../../public/Flow 1.png";
import flow2 from "../../../../public/Flow 2.png";
import flow3 from "../../../../public/Flow 3.jpg";

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
        <Image src={flow3} alt="Flow image3" className="rounded" />

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
      </section>
    </>
  );
};

export default page;
