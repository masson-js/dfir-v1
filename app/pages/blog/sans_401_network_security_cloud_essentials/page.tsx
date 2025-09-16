import Header from "@/app/Components/Header";

export default function Sans_401() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="w-full lg:w-3/5 max-w-screen-xl mx-auto p-4 sm:p-8 text-gray-700 mt-14 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] overflow-x-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-300">
          Blog
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 mt-4">
          SANS 401 Network Security and Cloud Essentials - notes
        </h2>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 mt-4">
          Network Attacks against Routers
        </h2>
        <p className="text-sm  text-gray-700 mb-8 mt-8">
          Sampling of possible router attacks:
        </p>
        <ul className="list-disc text-sm  text-gray-700 mb-8 ml-8 mt-8 space-y-2">
          <li>
            <strong>DoS</strong> - Denial of Service
          </li>
          <li>
            <strong>DDoS</strong> - Distributed Denial of Service
          </li>
          <li>
            <strong>Packet Sniffing</strong>
          </li>
          <li>
            <strong>Packet Missrouting</strong>{" "}
          </li>
          <li>
            <strong>RTP</strong> - Routing Table Poising
          </li>
        </ul>
        <p className="text-sm sm:text-sm text-gray-700 mb-8 mt-8">
          <strong>DoS</strong> - service of the device is being impacted
          (denied). Example: Router is offline on 10 min. patching time, the
          organizaton suffers a loss ot money.
        </p>
        <p className="text-sm sm:text-sm text-gray-700 mb-8 mt-8">
          {" "}
          <strong>DDoS</strong> - attacks are essentially the same as DoS,
          albeit with one significant different - launch attack from many
          locations, simultaneously. You can't defense through the
          implementation of an ACL (access control list){" "}
        </p>
        <p className="text-sm sm:text-sm text-gray-700 mb-8 mt-8">
          {" "}
          <strong>Packet Sniffing</strong> - refests to the capture (and
          analysis) of the traffic of a network ( the network's communication){" "}
        </p>
        <p className="text-sm sm:text-sm text-gray-700 mb-8 mt-8">
          <strong>Packet Missrouting</strong> and{" "}
          <strong>Routing Table Poising</strong> - with packet missrouting, a
          router's configuration is manipulated such that traffic is no longer
          routed prperly; trafic might be routed to non-existent network
          locations, or looping. RTP - the adversary convinces a router to
          update it's routing table, resulting in traffic redirection.{" "}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 mt-4">
          Network Attacks against Switches
        </h2>
        <p className="text-sm  text-gray-700 mb-8 mt-8">
          Sampling of possible switch attacks:
        </p>
        <ul className="list-disc text-sm  text-gray-700 mb-8 ml-8 mt-8 space-y-2">
          <li>
            <strong>CDP</strong> Information Disclosure
          </li>
          <li>
            <strong>MAC Flooding</strong>
          </li>
          <li>
            <strong>DHCP</strong> Manipulation
          </li>
          <li>
            <strong>STP</strong> Manipulation
          </li>
          <li>
            <strong>VLAN</strong> - Hopping
          </li>
        </ul>
        <p className="text-sm sm:text-sm text-gray-700 mb-8 mt-8">
          <strong>CDP</strong> Information Disclosure - CISCO Discovery Protocol
          - Lack of encryption and authentication enables data interception,
          man-in-the-middle attacks, or DoS via spoofed packets.Open ifo about
          OS, Ports and other in Packets via Switches
        </p>
      </div>
    </div>
  );
}
